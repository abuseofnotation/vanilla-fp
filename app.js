import {renderComponent} from './vanilla-fp.js'
import {div, button} from './helpers.js'
import {UserEdit} from './user-edit.js'
const mockFetch = (url) => Promise.resolve({
  users: [{name: "John", credits:0}, {name:"Jane", credits: 2}]}[url])


function replaceAt(array, index, value) {
  const ret = array.slice(0);
  ret[index] = value;
  return ret;
}

const app = ({state, setState, fetch}) => {
  const setUserInfo = (i) => (userInfo) => setState({...state, users: replaceAt(state.users, i, userInfo)})

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
