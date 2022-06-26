import db from '../apis/FireStore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

class _Model {
  constructor(collectionName) {
    this.collection = collectionName;
  }
  async getAll(offset, limit) {
    const _collection = collection(db, this.collection);
    const snapshot = await getDocs(_collection);
    const allDocuments = snapshot.docs.map((doc) => doc.data());
    return allDocuments
  }
}

export default _Model;
