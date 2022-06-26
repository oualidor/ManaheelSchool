import _Model from './_Model';
import { collection, getDocs } from 'firebase/firestore/lite';
import db from '../apis/FireStore';

class Post extends _Model {
  constructor(collectionName) {
    super(collectionName)
  }
}

const _Post = new Post('Post')

export default _Post;
