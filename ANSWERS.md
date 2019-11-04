- [ ] Why would you use class component over function components (removing hooks from the question)?
    Personally I would not because functional components can do everything class components can do.
	Benefits to class components include the following: 
    1. constructor+super allow for inheritance of props without drilling 
    2. prototype + require +typeOf allow for class components to be very specific in the parameter requirements for both specific or general portions of the component. 
    3. The biggest advantage is control over the lifecycle of the component.

- [ ] Name three lifecycle methods and their purposes.
    1. componentDidMount: loads initial data  your component will have access to.
    2. componentDidUpdate: watches for changes in the data coded here and allows for screen re-rendering based on the pattern of updating the JSX
    3. componenWillUnmount: this is the death of the component as it terminates its code from running therefore unmounting it and removing it from the screen. This is also used for cleaning up any after effects.

- [ ] What is the purpose of a custom hook?
    1. To keep your code dry
    2. design a dynamic hook applicable to all versions of its intended target,  for example varied forms with fewer or more input fields for collecting data.
    3. add functionality to your traditional hook so that one hook updates multiple things at once in an abstracted way to keep the rest of the code base clean.
- [ ] Why is it important to test our apps?
    Testing is good for the following reasons:
    - Surfaces bugs faster.
    - Reduces the risk of regressions.
    - Allows us to trust the code.
    - Makes us think about the edge cases.
    - Acts as a safety net when making changes or refactoring code.
    - Acts as documentation for the code.
    - Encourages us to write code with more strict guidelines for testability purposes.