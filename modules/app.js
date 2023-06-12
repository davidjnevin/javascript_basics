// global name space / hard to navigate

import { random, people } from './utils/data.js';
import showPeople from "./utils/showPeople.js"
import getElement from "./utils/getElement.js"

const container = getElement('.container');
const btn = getElement('.btn');

btn.addEventListener('click', () => {
	container.innerHTML = showPeople(people);
});
