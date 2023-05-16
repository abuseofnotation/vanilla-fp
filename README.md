The no-framework framework for building component-based purely-functional UIs.

About vanilla-fp 
===

At the heart of vanilla-fp is not code but convention for how to build a component. A component is a pure-ish function that typically receives two parameters (called 'state' and 'setState', but can vary across components) which provide the component with a state and with a function for altering its state and returns a *UI component*, using the building blocks provided by the framework:

```
import {div, button, span} from './vanilla-fp.js'
export const VolumeControl = ({volume = 0, setVolume}) => 
  div({className:"container"}, [
    button({text: "+", onClick: () => setVolume(volume +1)}),
    span({className: "currentVolume", text: volume}),
    button({text: "-", onClick: () => setVolume(volume -1)}),
  ])  
```

Each vanilla-fp , a component is in charge of keeping the states of its children, instead of utilizing some external global functions and frameworks. It does so by calling it's own 'setState' function and saving the child state in the component's own state.

```
import {VolumeControl} from './volume-control.js'
import {span ,div, button} from './vanilla-fp.js'

export const UserEdit = ({userInfo, setUserInfo}) => 
  div({},[
    span({text:userInfo.name}),
    VolumeControl({
       volume: userInfo.credits, 
       setVolume: (volume) => setUserInfo({...userInfo, credits: volume})
    })
  ])
```

Why?
===

Using component-based design allows you to organize your stuff better by promoting hierarchy in your code . However, it is rarely utilized to the fullest, because of the lack of a standard way of *managing state* when developing components (in most cases you have to have a global variable in your program, but we have to at least make sure it is *just one* global variable.

Why not Redux/MobX
---

Redux is great, but *it only handles state*, so a component would have to come in two parts - state handler and template - that you have to assemble every time. Because of this, Redux is not *composable* e.g. there is no standard way of embedding one Redux app into another. There is no such thing as a Redux component.

Why not React `useState`
---

`useState` is *not* great IMO, for many reasons:

- You neither have control, nor visibility of the states of your child components. which provokes endless SO debates on "How to listen to child component events", "How to change the state of the child component" etc. Encapsulation of state is important but when you have a hierarchy, the parent has to always have access to the children's state.

- The state is scattered across the app, no way to retrieve the totallity of it, if you want, for example, to persist it.

"But I don't want to write state-handling functions by myself"
---

In vanilla-js, the state is handled by passing some simple event-handling functions from the parent component to the children, which means that you have to write the 'setState' implementation of your children every time. So what? It is just a one-liner and it can save you a ton of trouble.

In this repo
===

- `vanilla-fp.js`- a reference implementation of a proof-of-concept functional component-based framework, 
- `user-edit.js`, `volume-control.js` - example components 
- `app.js` - a demo app that utilizes them 
