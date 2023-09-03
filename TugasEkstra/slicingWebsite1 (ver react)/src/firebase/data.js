import { storage, db } from "./firebase.js";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import {collection, getDocs} from 'firebase/firestore'

const Data = {
    async getImage(path){
        const storageRef = ref(storage, path)
        const result = await listAll(storageRef)
        
        const promises = result.items.map(async (item)=>{
            return await getDownloadURL(item)
        })
        
        return await Promise.all(promises)
    },

    async getProducts(category, productName){
        const productsRef = collection(db, category, "1", productName)
        
        const querySnapshot = await getDocs(productsRef)
        const products = []
        querySnapshot.forEach((item)=>{
            console.log(item)
            products.push({...item.data()})
        })

        return products
    }

}

export default Data