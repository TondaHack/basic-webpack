import Person from './Person';

export default class Programmer extends Person {
  constructor(name, surename, programmingLanguage = 'Java') {
    super(name, surename);

    this.language = programmingLanguage;
  }

  getAgeSentence() {
    return this.age ?
      ` and his age is ${this.privateAge}` :
      '.';
  }

  getProgrammerInfo() {
    return `Programmer name is ${this.getUserName()}. 
      His main programming language is ${this.language}${this.getAgeSentence()}`;
  }
}
