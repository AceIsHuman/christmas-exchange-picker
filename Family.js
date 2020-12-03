const { v4: uuidv4 } = require('uuid');
const { Person } = require('./Person');

class Family {
  constructor() {
    this.id = uuidv4();
    this.parents = [];
    this.children = [];
  }

  addParent(name) {
    this.parents.push(new Person(this.id, name, true));
  }

  addParents(names) {
    for (let name of names) {
      this.addParent(name);
    }
  }

  addChild(name, adult = false) {
    this.children.push(new Person(this.id, name, adult));
  }

  addChildren(children) {
    for (let child of children) {
      this.addChild(child.name, child.adult);
    }
  }
}

exports.Family = Family;
