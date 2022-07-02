import { db } from '../firebase-config';
import { collection, getDocs, getDoc, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
const phonesCollectionRef = collection(db, 'phones');
class PhoneDataSerices {
    addPhones = (newPhone) => {
        return addDoc(phonesCollectionRef, newPhone)
    }
    updatePhone = (id, updatedPhone) => {
        const phoneDoc = doc(db, 'phones', id)
        return updateDoc(phoneDoc, updatedPhone)
    }
    deletePhone = (id) => {
        const phoneDoc = doc(db, 'phones', id)
        return deleteDoc(phoneDoc)
    }
    getAllPhones = () => {
        return getDocs(phonesCollectionRef)
    }
    getPhone = (id) => {
        const phoneDoc = doc(db, 'phones', id)
        return getDoc(phoneDoc)
    }
}
export default new PhoneDataSerices()