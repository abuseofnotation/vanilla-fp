import {VolumeControl} from './volume-control.js'
import {span,div, button} from './helpers.js'

export const UserEdit = ({userInfo, setUserInfo}) => 
  div({},[
    span({text:userInfo.name}),
    VolumeControl({
       volume: userInfo.credits, 
       setVolume: (volume) => setUserInfo({...userInfo, credits: volume})
    })
  ])
