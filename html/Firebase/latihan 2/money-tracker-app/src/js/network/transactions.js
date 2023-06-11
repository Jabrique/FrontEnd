import { auth, db } from '../utils/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
  setDoc
} from 'firebase/firestore';
 
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
    const transactionRef = doc(db, 'transactions', id);
    const docSnapshot = await getDoc(transactionRef);
    return docSnapshot.data();
  },
 
  async store({ name, date, amount, type, description, evidence }) {
    const data = { name, date, amount, type, description, evidence };
    const transactionsRef = collection(db, 'users', auth.currentUser.uid, 'transactions');
    return await addDoc(transactionsRef, data);

  },
 
  async update({ id, name, date, amount, type, description, evidence }) {
    const transactionRef = doc(db, 'transactions', id);
    const data = { name, date, amount, type, description, evidence };

    if (!data.evidence) delete data.evidence;
    
    return await updateDoc(transactionRef, data);
  },
  async destroy(id) {
    const transactionRef = doc(db, 'transactions', id);
    return await deleteDoc(transactionRef);
  },
};
 
export default Transactions;