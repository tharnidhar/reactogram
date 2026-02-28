const lessons = [
    {
        id: 1,
        title: 'Hello World Component',
        shortDescription: 'Create your very first React component and render it to the screen.',
        fullExplanation: 'In React, everything is a component. A component is a JavaScript function that returns JSX — a syntax extension that looks like HTML. The simplest component just returns some text wrapped in a tag. React takes care of turning your JSX into real DOM elements.',
        exampleCode: `function HelloWorld() {\n  return <h1 style={{color:'#7c3aed'}}>Hello, React! 🚀</h1>;\n}\n\nrender(<HelloWorld />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 2,
        title: 'JSX Expressions',
        shortDescription: 'Embed JavaScript expressions inside JSX using curly braces.',
        fullExplanation: 'JSX lets you put any valid JavaScript expression inside curly braces {}. This includes variables, math, function calls, and ternary operators. This is how you make your UI dynamic — React will evaluate the expression and render its result.',
        exampleCode: `function JsxDemo() {\n  const name = "React Learner";\n  const year = new Date().getFullYear();\n  return (\n    <div>\n      <p style={{color:'#06b6d4'}}>Welcome, {name}!</p>\n      <p>Year: {year} | 2+2 = {2 + 2}</p>\n    </div>\n  );\n}\n\nrender(<JsxDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 3,
        title: 'Props — Passing Data',
        shortDescription: 'Pass data to child components using props.',
        fullExplanation: 'Props (short for "properties") allow parent components to pass data down to children. They work like function arguments — you define them as attributes in JSX and receive them as an object parameter in the component function. Props are read-only; a component should never modify its own props.',
        exampleCode: `function Greeting({ name, emoji }) {\n  return <h2 style={{color:'#f59e0b'}}>{emoji} Hello, {name}!</h2>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <Greeting name="Alice" emoji="👋" />\n      <Greeting name="Bob" emoji="🎉" />\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 4,
        title: 'useState Hook',
        shortDescription: 'Add interactive state to your components with useState.',
        fullExplanation: 'The useState hook lets you add state variables to functional components. It returns an array with two elements: the current state value and a function to update it. When you call the setter function, React re-renders the component with the new value. This is the foundation of interactivity in React.',
        exampleCode: `function Counter() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div style={{textAlign:'center'}}>\n      <h2 style={{color:'#7c3aed'}}>Count: {count}</h2>\n      <button\n        onClick={() => setCount(count + 1)}\n        style={{padding:'8px 20px',borderRadius:'8px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer',fontSize:'16px'}}\n      >+1</button>\n    </div>\n  );\n}\n\nrender(<Counter />);`,
        xpReward: 20,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 5,
        title: 'Handling Events',
        shortDescription: 'Respond to user interactions like clicks, typing, and more.',
        fullExplanation: 'React uses camelCase event handlers like onClick, onChange, and onSubmit. You pass a function reference (not a function call) to the handler. The event object is passed automatically. This lets you build interactive UIs that respond to every user action.',
        exampleCode: `function EventDemo() {\n  const [text, setText] = React.useState('');\n  return (\n    <div>\n      <input\n        value={text}\n        onChange={(e) => setText(e.target.value)}\n        placeholder="Type something..."\n        style={{padding:'8px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff',width:'100%'}}\n      />\n      <p style={{color:'#06b6d4',marginTop:'8px'}}>You typed: {text || '...'}</p>\n    </div>\n  );\n}\n\nrender(<EventDemo />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 6,
        title: 'Conditional Rendering',
        shortDescription: 'Render different UI based on conditions using ternaries and &&.',
        fullExplanation: 'In React, you can conditionally render elements using JavaScript expressions: ternary operators (condition ? A : B), logical AND (condition && element), or even if/else blocks before the return statement. This lets your UI adapt to different states like loading, errors, or user roles.',
        exampleCode: `function Toggle() {\n  const [on, setOn] = React.useState(false);\n  return (\n    <div style={{textAlign:'center'}}>\n      <button\n        onClick={() => setOn(!on)}\n        style={{padding:'8px 20px',borderRadius:'8px',background: on ? '#10b981' : '#ef4444',color:'#fff',border:'none',cursor:'pointer',fontSize:'16px'}}\n      >{on ? '🌞 ON' : '🌙 OFF'}</button>\n      {on && <p style={{color:'#10b981',marginTop:'12px'}}>The light is on!</p>}\n    </div>\n  );\n}\n\nrender(<Toggle />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 7,
        title: 'Rendering Lists',
        shortDescription: 'Use .map() to render arrays of data as lists of components.',
        fullExplanation: 'To render a list in React, you use the JavaScript .map() method to transform an array of data into an array of JSX elements. Each item needs a unique "key" prop so React can efficiently track which items changed, were added, or removed during re-renders.',
        exampleCode: `function FruitList() {\n  const fruits = ['🍎 Apple', '🍌 Banana', '🍇 Grape', '🍊 Orange'];\n  return (\n    <ul style={{listStyle:'none',padding:0}}>\n      {fruits.map((fruit, i) => (\n        <li key={i} style={{padding:'6px 0',color:'#f59e0b',fontSize:'18px'}}>{fruit}</li>\n      ))}\n    </ul>\n  );\n}\n\nrender(<FruitList />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 8,
        title: 'useEffect Hook',
        shortDescription: 'Run side effects like API calls, timers, and subscriptions.',
        fullExplanation: 'useEffect lets you perform side effects in function components. It runs after the component renders. You can control when it runs by passing a dependency array: empty [] means "run once on mount", [value] means "run when value changes", and no array means "run after every render". Return a cleanup function to avoid memory leaks.',
        exampleCode: `function Timer() {\n  const [seconds, setSeconds] = React.useState(0);\n\n  React.useEffect(() => {\n    const id = setInterval(() => setSeconds(s => s + 1), 1000);\n    return () => clearInterval(id);\n  }, []);\n\n  return <h2 style={{color:'#7c3aed',textAlign:'center'}}>⏱ {seconds}s elapsed</h2>;\n}\n\nrender(<Timer />);`,
        xpReward: 25,
        levelRequired: 1,
        difficulty: 'Intermediate'
    },
    {
        id: 9,
        title: 'Forms & Controlled Components',
        shortDescription: 'Build forms where React state drives every input value.',
        fullExplanation: 'A controlled component is an input whose value is driven by React state. You set the value prop to a state variable and update it via onChange. This gives you full control over form data, making validation, formatting, and conditional logic straightforward.',
        exampleCode: `function SignupForm() {\n  const [name, setName] = React.useState('');\n  const [submitted, setSubmitted] = React.useState(false);\n\n  if (submitted) return <p style={{color:'#10b981',fontSize:'18px'}}>✅ Welcome, {name}!</p>;\n\n  return (\n    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder="Your name"\n        style={{padding:'8px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff',marginRight:'8px'}}\n      />\n      <button type="submit" style={{padding:'8px 16px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer'}}>Join</button>\n    </form>\n  );\n}\n\nrender(<SignupForm />);`,
        xpReward: 20,
        levelRequired: 1,
        difficulty: 'Intermediate'
    },
    {
        id: 10,
        title: 'Component Composition',
        shortDescription: 'Build complex UIs by nesting and combining simple components.',
        fullExplanation: 'Composition is React\'s primary model for code reuse. Instead of inheritance, you build complex UIs by combining smaller, focused components. The special "children" prop lets you pass JSX as content to a wrapper component, creating flexible layouts and reusable containers.',
        exampleCode: `function Card({ children, title }) {\n  return (\n    <div style={{border:'1px solid #333',borderRadius:'12px',padding:'16px',marginBottom:'12px',background:'#1a1a2e'}}>\n      <h3 style={{color:'#7c3aed',margin:'0 0 8px'}}>{title}</h3>\n      {children}\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <Card title="🎨 Design"><p style={{color:'#ccc'}}>Make it beautiful</p></Card>\n      <Card title="⚡ Speed"><p style={{color:'#ccc'}}>Make it fast</p></Card>\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 20,
        levelRequired: 1,
        difficulty: 'Intermediate'
    },
    {
        id: 11,
        title: 'Lifting State Up',
        shortDescription: 'Share state between siblings by moving it to their common parent.',
        fullExplanation: 'When two child components need to share the same data, you "lift" the state up to their closest common parent. The parent holds the state and passes it down as props. This ensures a single source of truth and keeps your components in sync.',
        exampleCode: `function Display({ value }) {\n  return <h2 style={{color:'#06b6d4',textAlign:'center'}}>Value: {value}</h2>;\n}\n\nfunction Controls({ value, onChange }) {\n  return (\n    <div style={{display:'flex',gap:'8px',justifyContent:'center'}}>\n      <button onClick={() => onChange(value - 1)} style={{padding:'6px 16px',borderRadius:'6px',background:'#ef4444',color:'#fff',border:'none',cursor:'pointer'}}>-</button>\n      <button onClick={() => onChange(value + 1)} style={{padding:'6px 16px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>+</button>\n    </div>\n  );\n}\n\nfunction App() {\n  const [val, setVal] = React.useState(0);\n  return <div><Display value={val} /><Controls value={val} onChange={setVal} /></div>;\n}\n\nrender(<App />);`,
        xpReward: 20,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 12,
        title: 'Custom Hooks',
        shortDescription: 'Extract reusable stateful logic into custom hook functions.',
        fullExplanation: 'Custom hooks are functions that start with "use" and can call other hooks. They let you extract component logic into reusable functions. For example, you might create useLocalStorage, useFetch, or useToggle. The component using the hook gets its own independent copy of the state.',
        exampleCode: `function useToggle(initial = false) {\n  const [state, setState] = React.useState(initial);\n  const toggle = () => setState(s => !s);\n  return [state, toggle];\n}\n\nfunction App() {\n  const [dark, toggleDark] = useToggle(true);\n  const [show, toggleShow] = useToggle(false);\n  return (\n    <div style={{background: dark ? '#111' : '#eee', color: dark ? '#fff' : '#000', padding:'16px',borderRadius:'12px'}}>\n      <button onClick={toggleDark} style={{marginRight:'8px',padding:'6px 12px',borderRadius:'6px',border:'none',cursor:'pointer'}}>🌓 Theme</button>\n      <button onClick={toggleShow} style={{padding:'6px 12px',borderRadius:'6px',border:'none',cursor:'pointer'}}>👀 Toggle</button>\n      {show && <p style={{marginTop:'12px'}}>Now you see me!</p>}\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 25,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 13,
        title: 'useRef Hook',
        shortDescription: 'Access DOM elements directly and persist values across renders.',
        fullExplanation: 'useRef returns a mutable ref object whose .current property persists across renders without causing re-renders when changed. Its most common use is accessing DOM elements directly (like focusing an input), but it\'s also great for storing mutable values like interval IDs or previous state values.',
        exampleCode: `function FocusInput() {\n  const inputRef = React.useRef(null);\n  const [count, setCount] = React.useState(0);\n\n  return (\n    <div>\n      <input\n        ref={inputRef}\n        placeholder="Click the button to focus me"\n        style={{padding:'8px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff',width:'100%',marginBottom:'8px'}}\n      />\n      <button\n        onClick={() => { inputRef.current.focus(); setCount(c => c + 1); }}\n        style={{padding:'8px 16px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer'}}\n      >Focus! (clicked {count}x)</button>\n    </div>\n  );\n}\n\nrender(<FocusInput />);`,
        xpReward: 20,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 14,
        title: 'useContext — Global State',
        shortDescription: 'Share data across the component tree without prop drilling.',
        fullExplanation: 'Context provides a way to pass data through the component tree without manually passing props at every level. You create a Context, wrap a Provider around the tree, and consume it with useContext in any descendant. It\'s ideal for themes, auth state, or language settings.',
        exampleCode: `const ThemeCtx = React.createContext('dark');\n\nfunction ThemedBox() {\n  const theme = React.useContext(ThemeCtx);\n  return (\n    <div style={{padding:'16px',borderRadius:'12px',background: theme === 'dark' ? '#1a1a2e' : '#f0f0f0',color: theme === 'dark' ? '#fff' : '#000',border:'1px solid #333'}}>\n      Current theme: <strong>{theme}</strong>\n    </div>\n  );\n}\n\nfunction App() {\n  const [theme, setTheme] = React.useState('dark');\n  return (\n    <ThemeCtx.Provider value={theme}>\n      <ThemedBox />\n      <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} style={{marginTop:'8px',padding:'8px 16px',borderRadius:'6px',background:'#f59e0b',color:'#000',border:'none',cursor:'pointer'}}>Toggle Theme</button>\n    </ThemeCtx.Provider>\n  );\n}\n\nrender(<App />);`,
        xpReward: 25,
        levelRequired: 3,
        difficulty: 'Advanced'
    },
    {
        id: 15,
        title: 'useReducer Hook',
        shortDescription: 'Manage complex state logic with a reducer function.',
        fullExplanation: 'useReducer is an alternative to useState for complex state logic. It takes a reducer function (state, action) => newState and an initial state. You dispatch actions to update state, similar to Redux. It\'s perfect when state updates depend on previous state or when you have multiple related state values.',
        exampleCode: `function reducer(state, action) {\n  switch (action.type) {\n    case 'add': return { ...state, items: [...state.items, action.text], text: '' };\n    case 'setText': return { ...state, text: action.text };\n    case 'clear': return { ...state, items: [] };\n    default: return state;\n  }\n}\n\nfunction TodoApp() {\n  const [state, dispatch] = React.useReducer(reducer, { items: [], text: '' });\n  return (\n    <div>\n      <div style={{display:'flex',gap:'8px',marginBottom:'8px'}}>\n        <input value={state.text} onChange={e => dispatch({type:'setText',text:e.target.value})} placeholder="Add todo" style={{flex:1,padding:'8px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff'}} />\n        <button onClick={() => state.text && dispatch({type:'add',text:state.text})} style={{padding:'8px 12px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>Add</button>\n      </div>\n      {state.items.map((t,i) => <p key={i} style={{color:'#06b6d4',margin:'4px 0'}}>• {t}</p>)}\n      {state.items.length > 0 && <button onClick={() => dispatch({type:'clear'})} style={{marginTop:'8px',padding:'6px 12px',borderRadius:'6px',background:'#ef4444',color:'#fff',border:'none',cursor:'pointer'}}>Clear All</button>}\n    </div>\n  );\n}\n\nrender(<TodoApp />);`,
        xpReward: 30,
        levelRequired: 3,
        difficulty: 'Advanced'
    },
    {
        id: 16,
        title: 'useMemo & useCallback',
        shortDescription: 'Optimize performance by memoizing values and functions.',
        fullExplanation: 'useMemo caches the result of an expensive computation and only recalculates when dependencies change. useCallback caches a function reference so child components receiving it as a prop don\'t re-render unnecessarily. Both are performance optimizations — use them when you have measurable performance issues.',
        exampleCode: `function ExpensiveList() {\n  const [count, setCount] = React.useState(0);\n  const [filter, setFilter] = React.useState('');\n\n  const items = React.useMemo(() => {\n    const all = ['React', 'Vue', 'Angular', 'Svelte', 'Solid'];\n    return all.filter(i => i.toLowerCase().includes(filter.toLowerCase()));\n  }, [filter]);\n\n  return (\n    <div>\n      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter frameworks" style={{padding:'8px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff',width:'100%',marginBottom:'8px'}} />\n      {items.map(i => <p key={i} style={{color:'#7c3aed',margin:'4px 0'}}>⚛ {i}</p>)}\n      <button onClick={() => setCount(c=>c+1)} style={{marginTop:'8px',padding:'6px 16px',borderRadius:'6px',background:'#333',color:'#fff',border:'none',cursor:'pointer'}}>Re-render ({count})</button>\n    </div>\n  );\n}\n\nrender(<ExpensiveList />);`,
        xpReward: 25,
        levelRequired: 3,
        difficulty: 'Advanced'
    },
    {
        id: 17,
        title: 'Error Boundaries',
        shortDescription: 'Catch and handle errors gracefully in your component tree.',
        fullExplanation: 'Error boundaries catch JavaScript errors in their child component tree and display a fallback UI instead of crashing the whole app. They\'re class components that implement getDerivedStateFromError or componentDidCatch. You wrap them around parts of your app that might fail, like third-party widgets or data-dependent components.',
        exampleCode: `function BuggyComponent() {\n  const [crash, setCrash] = React.useState(false);\n  if (crash) throw new Error("Oops!");\n  return (\n    <button\n      onClick={() => setCrash(true)}\n      style={{padding:'8px 16px',borderRadius:'6px',background:'#ef4444',color:'#fff',border:'none',cursor:'pointer'}}\n    >💥 Click to crash</button>\n  );\n}\n\nfunction App() {\n  const [key, setKey] = React.useState(0);\n  return (\n    <div style={{textAlign:'center'}}>\n      <p style={{color:'#f59e0b'}}>⚠ Error boundaries require class components in real apps.</p>\n      <p style={{color:'#888'}}>This demo shows the concept — click to throw an error.</p>\n      <BuggyComponent key={key} />\n      <br/><br/>\n      <button onClick={() => setKey(k=>k+1)} style={{padding:'6px 16px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>Reset</button>\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 20,
        levelRequired: 3,
        difficulty: 'Advanced'
    },
    {
        id: 18,
        title: 'React.memo',
        shortDescription: 'Prevent unnecessary re-renders of functional components.',
        fullExplanation: 'React.memo is a higher-order component that memoizes the rendered output. If the props haven\'t changed, React skips re-rendering the component. It performs a shallow comparison of props by default, but you can provide a custom comparison function for more control.',
        exampleCode: `const ExpensiveChild = React.memo(function ExpensiveChild({ name }) {\n  console.log('Rendering:', name);\n  return <p style={{color:'#06b6d4',padding:'8px',background:'#1a1a2e',borderRadius:'8px',margin:'4px 0'}}>👤 {name}</p>;\n});\n\nfunction App() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(c => c+1)} style={{padding:'8px 16px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer',marginBottom:'12px'}}>Count: {count}</button>\n      <p style={{color:'#888',fontSize:'14px'}}>Children don't re-render when count changes:</p>\n      <ExpensiveChild name="Alice" />\n      <ExpensiveChild name="Bob" />\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 20,
        levelRequired: 3,
        difficulty: 'Advanced'
    },
    {
        id: 19,
        title: 'Portals',
        shortDescription: 'Render children into a different part of the DOM tree.',
        fullExplanation: 'Portals let you render child elements into a DOM node outside the parent component\'s hierarchy. This is essential for modals, tooltips, and dropdowns that need to visually "break out" of their parent container. Events still bubble up through the React tree, not the DOM tree.',
        exampleCode: `function Modal({ show, onClose, children }) {\n  if (!show) return null;\n  return (\n    <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:1000}}>\n      <div style={{background:'#1a1a2e',padding:'24px',borderRadius:'16px',border:'1px solid #333',maxWidth:'300px',width:'90%'}}>\n        {children}\n        <button onClick={onClose} style={{marginTop:'12px',padding:'8px 16px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer',width:'100%'}}>Close</button>\n      </div>\n    </div>\n  );\n}\n\nfunction App() {\n  const [show, setShow] = React.useState(false);\n  return (\n    <div>\n      <button onClick={() => setShow(true)} style={{padding:'8px 16px',borderRadius:'6px',background:'#f59e0b',color:'#000',border:'none',cursor:'pointer'}}>Open Modal</button>\n      <Modal show={show} onClose={() => setShow(false)}>\n        <h3 style={{color:'#7c3aed',marginTop:0}}>🚪 Portal Modal</h3>\n        <p style={{color:'#ccc'}}>This would normally use ReactDOM.createPortal!</p>\n      </Modal>\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 25,
        levelRequired: 4,
        difficulty: 'Advanced'
    },
    {
        id: 20,
        title: 'Data Fetching Pattern',
        shortDescription: 'Fetch and display external data with loading and error states.',
        fullExplanation: 'A common React pattern is fetching data in useEffect, managing loading/error/data states. You show a loading indicator while the fetch is in progress, handle errors gracefully, and render the data when it arrives. Always handle the cleanup to avoid updating state on unmounted components.',
        exampleCode: `function UserProfile() {\n  const [loading, setLoading] = React.useState(true);\n  const [user, setUser] = React.useState(null);\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => {\n      setUser({ name: 'Jane Doe', role: 'React Developer', avatar: '👩‍💻' });\n      setLoading(false);\n    }, 1500);\n    return () => clearTimeout(timer);\n  }, []);\n\n  if (loading) return <p style={{color:'#7c3aed',textAlign:'center'}}>⏳ Loading profile...</p>;\n  return (\n    <div style={{textAlign:'center',padding:'16px',background:'#1a1a2e',borderRadius:'12px',border:'1px solid #333'}}>\n      <p style={{fontSize:'48px',margin:0}}>{user.avatar}</p>\n      <h2 style={{color:'#fff',margin:'8px 0 4px'}}>{user.name}</h2>\n      <p style={{color:'#06b6d4',margin:0}}>{user.role}</p>\n    </div>\n  );\n}\n\nrender(<UserProfile />);`,
        xpReward: 30,
        levelRequired: 4,
        difficulty: 'Advanced'
    }
];

export default lessons;
