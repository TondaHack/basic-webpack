export function createElement(element, text) {
  const el = document.createElement(element);
  el.innerHTML = text;

  return el;
}

export function renderElements(...children) {
  children.forEach(item => document.body.appendChild(item));
}
