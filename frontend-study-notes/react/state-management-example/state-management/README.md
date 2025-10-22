# React State

- State is a component's **memory** - it lets a component remember values between renders
- It holds data that can change over time (i.e. user input, clicks, counters)
- When state changes, React re-renders the component to update what's shown on screen
- State is local to the component that defines it, but can be shared with child componentes via **props**

## useState Hook

- Used to declare and manage state inside a functional component
- Returns an **array with 2 elements**:
    - **Current state value** (initial value)
    - State **updater function** (used to request React to update the state)
- Each call to useState creates an independent piece of state
