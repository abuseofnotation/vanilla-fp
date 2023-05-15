import {renderComponent, div, button} from './vanilla-fp.js'
import {UserEdit} from './user-edit.js'
const mockFetch = (url) => Promise.resolve({
  users: [{name: "John", credits:0}, {name:"Jane", credits: 2}]}[url])


function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}

  // An app is just another component - a function that 
  // receives params, like 'state' and 'setState' and renders
  // some other components.
  //
  // This app fetches a list of users (the function fetch as
  // all effectful functions is provided by the framework for
  // the purpose of being able to overwrite it if needed.
const app = ({state, setState, fetch}) => {
  const setUserInfo = (i) => (userInfo) => 
    setState({
      ...state, 
      users: replaceAt(state.users, i, userInfo)
    })

  if (state.users) {
  return div({}, 
    state.users.map((userInfo, i) => 
      UserEdit({
        userInfo, 
        setUserInfo: setUserInfo(i)
      })))
  } else {
    fetch('users').then((users) => setState({...state, users}))
    return div({text: 'Loading'})
  }
}

renderComponent(app, {}, {fetch: mockFetch})
