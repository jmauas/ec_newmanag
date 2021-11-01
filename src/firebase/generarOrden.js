import firebase from 'firebase'
import { getFirestore } from './config'
import Swal from 'sweetalert2'


export const generarOrden = (datos, carrito, total, cantTotal) => {

    return new Promise(async  (resolve, reject) => {
         // generar el objeto orden
        const orden = {
            buyer: datos,
            items: carrito.map((el) => ({id: el.id, precio: el.precio, cantidad: el.cantidad, nombre: el.nombre, sku: el.sku})),
            total: total,
            cantTotal: cantTotal,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        // batch de atualizacion
        const db = getFirestore();

        const itemsAActualizar = db.collection("productos")
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map((el) => el.id))
        
        const query = await itemsAActualizar.get();

        const batch = db.batch();

        const sinStock = [];

        query.docs.forEach((doc) => {
            const itemEnCarrito = carrito.find(item => item.id === doc.id)
            if (doc.data().stock >= itemEnCarrito.cantidad) {
                batch.update(doc.ref, {stock: doc.data().stock - itemEnCarrito.cantidad})
            } else {
                sinStock.push({...doc.data(), id: doc.id})
            }
        })
        if (sinStock.length===0) {
            const orders  = db.collection('orders');
            orders.add(orden)
                .then(( res ) => {
                    batch.commit();
                    resolve(res.id);
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Se Produjo Un Error',
                        text: `${err}`
                    })
                })
        } else {
            reject(sinStock);
        }
    });
}