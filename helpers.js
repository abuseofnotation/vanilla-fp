const createElement = (type) => ({className, text, onClick}, children) => {
  const div = document.createElement(type)
  div.classList.add(className);
  let textNode = document.createTextNode(text);
  div.appendChild(textNode);
  if (children) {
    div.replaceChildren(...children)
  }
  if (onClick) {
    div.addEventListener('click', onClick)
  }
  return div
}

export const div = createElement('div')
export const button = createElement('button')
export const span = createElement('span')
