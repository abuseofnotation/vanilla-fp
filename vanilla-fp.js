  // A helper for creating html elements functionally
export const createElement =
  (type) =>
  ({ className, text, onClick, disabled, ...props }, children) => {
    //For HTML
    const div = document.createElement(type);
    // For SVG
    //const el = document.createElementNS("http://www.w3.org/2000/svg", type)
    if (className) {
      div.classList.add(className);
    }
    if (text) {
      let textNode = document.createTextNode(text);
      el.appendChild(textNode);
    }
    if (children) {
      el.replaceChildren(...children.filter((c) => c !== undefined));
    }
    if (onClick) {
      el.addEventListener("click", onClick);
    }
    if (disabled) {
      el.setAttribute("disabled", true);
    }
    Object.keys(props).forEach((propName) => {
      el.setAttribute(propName, props[propName]);
    });
    return el;
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

