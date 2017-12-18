export default class Person {
  constructor(name = 'Not specified', surname = 'Not specified') {
    this.name = name;
    this.surename = surname;
  }

  get age() {
    return this.privateAge;
  }

  set age(age) {
    this.privateAge = age;
  }

  getUserName() {
    return `${this.name} ${this.surename}`;
  }
}
