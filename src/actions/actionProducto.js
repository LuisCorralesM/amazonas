import { typesProducto } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,getDocs, query,where,doc } from "@firebase/firestore";

//Eliminar
export const deleteProducto = (referencia) =>{
    return async(dispatch) => {

        const estCollection = collection(db,"productos");
        console.log(estCollection);
        const q = query(estCollection,where("ref","==",referencia))
       
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db,"productos",docu.id));
        })
        dispatch(deleteSincrono(referencia));
    }
}

export const deleteSincrono = (referencia) => {
    return{
        type: typesProducto.delete,
        payload: referencia
    }
}

export const registerProducto = (pro,ref,des,pre,img) => {
   return( dispatch) => {
       const newProducto = {
           pro,
           ref,
           des,
           pre,
           img
       }
       addDoc(collection(db,"productos"),newProducto)
       .then(resp => {
           dispatch(registerProductoSincrono(newProducto))
       })
       .catch(error => {
           console.log(error);
       })
   }
}

export const registerProductoSincrono = (producto) => {
    return{
        type: typesProducto.register,
        payload: producto
    }

}

//Lectura

export const listProducto = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const producto = [];
        querySnapshot.forEach((doc) => {
            producto.push({
                ...doc.data()
            })
        });
        dispatch(list(producto));
    }
}

export const list = (Productos) => {
    return {
        type: typesProducto.list,
        payload: Productos
    }
}

