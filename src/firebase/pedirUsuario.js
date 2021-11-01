import { getFirestore } from './config'

export  const pedirUsuario = (mail, res) => {
    const db = getFirestore();
    const usuario = db.collection('usuarios').where('email', '==', mail).limit(1);
    usuario.get()
        .then((response) => {
            const usua = response.docs.map((doc) => {
                return {...doc.data()}
            })
            res(usua);
        })  
}
