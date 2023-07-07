import { auth, db, storage } from '../utils/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
 
const Transactions = {
  async getAll() {
    const transactionsRef = collection(db, 'users', auth.currentUser.uid, 'transactions');
    const querySnapshot = await getDocs(transactionsRef);
    const transactions = [];
    querySnapshot.forEach((item) => {
      transactions.push({
        id: item.id,
        ...item.data(),
      });
    });

    return transactions;
  },
  async getById(id) {
    const transactionRef = doc(db, 'users', auth.currentUser.uid, 'transactions', id);
    const docSnapshot = await getDoc(transactionRef);
    return docSnapshot.data();
  },
 
  async store({ name, date, amount, type, description, evidence }) {
    const data = { name, date, amount, type, description, evidence };
    const transactionsRef = collection(db, 'users', auth.currentUser.uid, 'transactions');
    return await addDoc(transactionsRef, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });

  },
 
  async update({ id, name, date, amount, type, description, evidence }) {
    const transactionRef = doc(db, 'users', auth.currentUser.uid, 'transactions', id);
    const data = { name, date, amount, type, description, evidence };

    if (!data.evidence) delete data.evidence;
    
    return await updateDoc(transactionRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
  },
  async destroy(id) {
    const transactionRef = doc(db, 'users', auth.currentUser.uid, 'transactions', id);
    return await deleteDoc(transactionRef);
  },

  async storeEvidence(file) {
    const storageRef = ref(storage, `transactions/${auth.currentUser.uid}/${file.name}`);
    return await uploadBytes(storageRef, file);
  },
  async getEvidenceURL(fileFullPath) {
    const storageRef = ref(storage, fileFullPath);
    return await getDownloadURL(storageRef);
  },
  async destroyEvidence(fileFullPath) {
    const desertRef = ref(storage, fileFullPath);
    return await deleteObject(desertRef);
  },
};
 
export default Transactions;