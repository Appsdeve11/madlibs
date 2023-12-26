### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
its a front-end library that runs in the browser. It helps developers to create fast user interfaces for websites.   

- What is Babel?
Babel converts JavaScript into a versions that is best suitable to the browser.

- What is JSX?
JSX stands for JavaScript XML, it's primary use is to let us write HTML in react. 

- How is a Component created in React?
First, you would have to export the component than your going to define the function with the same profile and lastly you just add a mark up.

- What are some difference between state and props?
Props and state are different because props are used simply to pass on data from a parent to a child componenet while state manages data within a componet. 

- What does "downward data flow" refer to in React?
when data is passed from the parent component to their child compenent. 

- What is a controlled component?
Controlled component is when the behavior of one component is being controlled by the parent. 

- What is an uncontrolled component?
uncontrolled Component is when a component has no parent controling it's behavior. It essentially manages it's own data.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop is a identifier that React uses to update elements within a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
it's a poor choice because it's not stable. An array can be changed around throughout your code.

- Describe useEffect.  What use cases is it used for in React components?
useEffects enables side effects in your components. Like fetching data or updating timers.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
refs lets you keep information between re-renders of a compnent but it does not cause a re-render.
- When would you use a ref? When wouldn't you use one?
-text selection
-managing focus 
-animations
- What is a custom hook in React? When would you want to write one?
Custom hooks are reusable functions that we use to add special functionality to React websites.
