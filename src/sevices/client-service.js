import { db } from '../firebase-config';
import { collection, getDocs, getDoc, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';

const clientsCollectionRef = collection(db, 'clients');

class ClientDataServices {

    addClients = (newClient) => {
        return addDoc(clientsCollectionRef, newClient)
    }

    updateClient = (id, updatedclient) => {
        const clientDoc = doc(db, 'clients', id)
        return updateDoc(clientDoc, updatedclient)
    }

    deleteClient = (id) => {
        const clientDoc = doc(db, 'clients', id)
        return deleteDoc(clientDoc)
    }

    getAllClients = () => {
        return getDocs(clientsCollectionRef)
    }

    getClient = (id) => {
        const clientDoc = doc(db, 'clients', id)
        return getDoc(clientDoc)
    }

}

export default new ClientDataServices()
