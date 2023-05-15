import {div, button, span} from './vanilla-fp.js'
export const VolumeControl = ({volume = 0, setVolume}) => 
  span({className:"container"}, [
    button({text: "+", onClick: () => setVolume(volume +1)}),
    span({className: "currentVolume", text: volume}),
    button({text: "-", onClick: () => setVolume(volume -1)}),
  ])  
