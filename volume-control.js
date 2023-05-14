import {div, button, span} from './helpers.js'
export const VolumeControl = ({volume = 0, setVolume}) => 
  div({className:"container"}, [
    button({text: "+", onClick: () => setVolume(volume +1)}),
    span({className: "currentVolume", text: volume}),
    button({text: "-", onClick: () => setVolume(volume -1)}),
  ])  
