import { getFirestore } from './config'

export  const pedirOrdenes = (mail, res) => {
    const db = getFirestore();
    const ordenes = db.collection('orders').where('buyer.email', '==', mail);
    ordenes.get()
        .then((response) => {
            const order = response.docs.map((doc) => {
                return {...doc.data()}
            })
            res(order);
        })  
}
