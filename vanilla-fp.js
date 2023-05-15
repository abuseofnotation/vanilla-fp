  // A helper for creating html elements functionally
const createElement = (type) => ({style, className, text, onClick}, children) => {
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
  div.style = style
  return div
}

  // Functions for creating html elements
  // (Right now they create DOM elements directly, but they 
  // can be made to work with with some virtual DOM lib

export const div = createElement('div')
export const button = createElement('button')
export const span = createElement('span')
  
  // Function for rendering the root component calls the 
  // component function and renders the output.
  // It also provides implementations of the 'setState' 
  // function that triggers a rerender.
export const renderComponent = (component, state = {}, params) => {
  console.log('Rendering app with state', state)
  document.getElementById("vanilla-fp")
    .replaceChildren(component({
      state, 
      setState: (state) => renderComponent(component, state, params),
      fetch,
      ...params
    }))
}

