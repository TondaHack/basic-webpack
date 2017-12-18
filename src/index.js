import Person from './Person';
import Programmer from './Programmer';
import { createElement, renderElements } from './libs';

const personInstance = new Person('John', 'Doe');
const h1 = createElement('h1', personInstance.getUserName());

const programmer = new Programmer('Will', 'Black', 'Javascript');
programmer.age = 33;

const h2 = createElement('h2', programmer.name);
const h3 = createElement('h3', programmer.getProgrammerInfo());

renderElements(h1, h2, h3);
