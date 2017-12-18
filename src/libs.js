export function createElement(document, element, text) {
  const el = document.createElement(element);
  el.innerHTML = text;

  return el;
}

export function renderElements(document, ...children) {
  children.forEach(item => document.body.appendChild(item));
}
