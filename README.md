This repo serves as a demo of a minimal way of building component-based purely-functional UIs, without using any external frameworks.

vanilla-fp
---

A vanilla-fp component is a pure-ish function. 

It typically receives these two parameters:
- The state of the component.
- A function for altering that state.

It returns a *UI component* (in the current implementation it uses just a plain DOM node, but it can be easily be extended to use some virtual DOM framework.

The difference from the typical approach is that the parent component is in charge of keeping the states of its children, instead of utilizing some external global functions and frameworks. 

Why?
---

Using component-based design allows you to organize your stuff better by promoting hierarchy in your code (in most cases you have to have a global variable in your program, but in this way you at least have *just one* global variable). However, it is rarely utilized to the fullest, because of the lack of a standard way of *managing state* when developing components.

Usually we either use some mechanism provided by the framework that we use, like "useState" for React, but this complicates things a lot.

Another option is to use an external state management module, like Redux. Redux was/is actually great, the only issue with it (besides being a bit rudimentary) is that *it only handles state*, so a component would have to come in two parts - state handler and template - that you have to assemble every time. In other words, - Redux is not *composable* e.g. there is no standard way of embedding one Redux app into another.

Such a way should support creating a component that has its own template, and its own set of messages that it sends and receive and should provide an easy way to write handlers for these messages. 

Here I show that this can be achieved just by passing some simple even-handling functions from parent component to the children.


In this repo
---

- A proof-of-concept functional component-based framework, (vanilla-fp.js) 
- A few custom components (user-edit.js, volume-control.js)
- A demo app that utilizes them (app.js)
