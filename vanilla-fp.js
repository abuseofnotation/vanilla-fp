export const renderComponent = (component, state = {}, params) => {
  console.log('Rendering with state', state)
  document.getElementById("vanilla-fp")
    .replaceChildren(component({
      state, 
      setState: (state) => renderComponent(component, state, params),
      ...params
    }))
}

