import { getFirestore } from "./config"

export  const pedirProductos = (category, res) => {
    const db = getFirestore();
    const productos = category
                        ?                        
                            db.collection('productos').where('categ', '==', category)
                           
                        : 
                            db.collection('productos')                    
        productos.get()
            .then((response) => {
                const items = response.docs.map((doc) => {
                    return {id: doc.id, ...doc.data()}
                })
                res(items);
            })    
}

export  const pedirProducto = (itemId, res) => {
    const db = getFirestore();
    const productos = db.collection('productos')
    const item = productos.doc(itemId)
    item.get()
        .then((doc) => {
            res({id: doc.id, ...doc.data()})
        })
}