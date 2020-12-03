class Person {
  constructor(familyId, name, adult = false) {
    this.familyId = familyId;
    this.name = name;
    this.adult = adult;
    this.hasBeenSelected = false;
  }
}

exports.Person = Person;