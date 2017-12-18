import Person from './Person';
import Programmer from './Programmer';
import { createElement, renderElements } from './libs';

const pageDocument = window.document;
const personInstance = new Person('John', 'Doe');
const h1 = createElement(pageDocument, 'h1', personInstance.getUserName());

const programmerInstance = new Programmer('Will', 'Black', 'Javascript');
programmerInstance.age = 33;

const h2 = createElement(pageDocument, 'h2', programmerInstance.name);
const h3 = createElement(pageDocument, 'h3', programmerInstance.getProgrammerInfo());

renderElements(pageDocument, h1, h2, h3);
