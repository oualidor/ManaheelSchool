import _Model from './_Model';

class Category extends _Model {
  constructor(collectionName) {
    super(collectionName)
  }

}

const _Category = new Category('Category')

export default _Category;
