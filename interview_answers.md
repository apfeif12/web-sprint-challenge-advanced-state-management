# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Moves us away from deep prop drilling down through multiple components
2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions are custom events that can be triggered in a number of ways.
reducers take in those actions and adjust the state accordingly. 
store holds all of the state and provides it to anything inside its provider tags
3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
thunk allows us to make a function within a function, which allows us to make API calls within actions
4. What is your favorite state management system you've learned and this sprint? Please explain why!
Context api. it seems to be the most convenient as well as most straight forward. Hopefully it will become the industry standard soon.