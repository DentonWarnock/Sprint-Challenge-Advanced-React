Why would you use class component over function components (removing hooks from the question)?

Class components have access to a components lifecycle through methods like compoentDidMount, componentDidUpdate. Also, I would use them if that was the convention of the team working on a project.

Name three lifecycle methods and their purposes.

compoentDidMount - called when component first renders and is commonly used for fetching API data or actions that will take some time, componentDidUpdate - called when there are new updates to the DOM and is commonly used to invoke setState(), and compontWillUnmount - called when the component is removed from the DOM and is used for clean up of things like event listeners.

What is the purpose of a custom hook?

allow you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again. You can build a reusable custom hook for handling controlled inputs, managing event listeners, watching for key presses, and more.

Why is it important to test our apps?

Discover bugs quicker and before code reaches production, allows us to trust the code, makes us think about edge cases, acts as documentation for the code, and most importantly it will save time and money in the long run. 
