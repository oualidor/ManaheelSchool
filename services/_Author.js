import _Model from './_Model';

class Author extends _Model {
  constructor(collectionName) {
    super(collectionName)
  }

}

const _Author = new Author('Authors')

export default _Author;
