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
    },
    // ===== LEVEL 1 — JavaScript Essentials for React =====
    {
        id: 21,
        title: 'ES6 Modules (import/export)',
        shortDescription: 'Organize code into reusable modules with import and export.',
        fullExplanation: 'ES6 modules let you split code into separate files, each exporting values that others can import. Use "export default" for a single main export, or named exports with "export const/function". On the import side, use "import X from" for defaults and "import { X }" for named exports. This keeps your codebase organized and avoids global scope pollution.',
        exampleCode: `// Simulating ES6 module concepts\n\n// Named exports (in a real file: math.js)\nconst add = (a, b) => a + b;\nconst multiply = (a, b) => a * b;\n\n// Default export (in a real file: greet.js)\nconst greet = (name) => \`Hello, \${name}!\`;\n\nfunction App() {\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>📦 ES6 Modules Demo</p>\n      <p style={{color:'#06b6d4'}}>add(3, 5) = {add(3, 5)}</p>\n      <p style={{color:'#10b981'}}>multiply(4, 7) = {multiply(4, 7)}</p>\n      <p style={{color:'#f59e0b'}}>{greet('React Dev')}</p>\n      <pre style={{color:'#888',fontSize:'12px',marginTop:'8px'}}>{"// math.js\\nexport const add = (a,b) => a+b;\\n// App.jsx\\nimport { add } from './math';"}</pre>\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 22,
        title: 'Arrow Functions',
        shortDescription: 'Write concise functions with => syntax and lexical this binding.',
        fullExplanation: 'Arrow functions provide a shorter syntax for writing functions: (params) => expression. They automatically return the expression if there are no curly braces. Most importantly, arrow functions don\'t have their own "this" — they inherit it from the enclosing scope. This makes them ideal for callbacks, event handlers, and React components.',
        exampleCode: `function ArrowDemo() {\n  // Traditional vs Arrow\n  const double = (n) => n * 2;\n  const greet = name => \`Hi, \${name}!\`;\n  const getObj = () => ({ key: 'value' });\n\n  const nums = [1, 2, 3, 4, 5];\n  const doubled = nums.map(n => n * 2);\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>🏹 Arrow Functions</p>\n      <p style={{color:'#06b6d4'}}>double(7) = {double(7)}</p>\n      <p style={{color:'#10b981'}}>{greet('Coder')}</p>\n      <p style={{color:'#f59e0b'}}>Doubled: [{doubled.join(', ')}]</p>\n      <p style={{color:'#888',fontSize:'12px'}}>getObj() = {JSON.stringify(getObj())}</p>\n    </div>\n  );\n}\n\nrender(<ArrowDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 23,
        title: 'Destructuring (Objects & Arrays)',
        shortDescription: 'Extract values from objects and arrays into named variables.',
        fullExplanation: 'Destructuring lets you unpack values from arrays or properties from objects into distinct variables. With objects you use { key } and with arrays you use [first, second]. You can set default values, rename variables, and nest destructuring. In React, you destructure props all the time: ({ name, age }) instead of (props).',
        exampleCode: `function DestructDemo() {\n  // Object destructuring\n  const user = { name: 'Alice', age: 25, role: 'Dev' };\n  const { name, age, role } = user;\n\n  // Array destructuring\n  const colors = ['🔴', '🟢', '🔵'];\n  const [red, green, blue] = colors;\n\n  // With defaults & rename\n  const { score: points = 100 } = { score: 42 };\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>📦 Destructuring</p>\n      <p style={{color:'#06b6d4'}}>User: {name}, {age}, {role}</p>\n      <p style={{color:'#10b981'}}>Colors: {red} {green} {blue}</p>\n      <p style={{color:'#f59e0b'}}>Points (renamed): {points}</p>\n    </div>\n  );\n}\n\nrender(<DestructDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 24,
        title: 'Spread Operator',
        shortDescription: 'Copy and merge arrays and objects using the ... spread syntax.',
        fullExplanation: 'The spread operator (...) expands an iterable (array, object) into individual elements. For arrays, it copies or merges: [...arr1, ...arr2]. For objects, it shallow-copies or merges: { ...obj1, ...obj2 }. In React, spread is essential for immutable state updates — you never mutate state directly, you create new copies with the changed values.',
        exampleCode: `function SpreadDemo() {\n  const arr1 = [1, 2, 3];\n  const arr2 = [4, 5, 6];\n  const merged = [...arr1, ...arr2];\n\n  const base = { theme: 'dark', lang: 'en' };\n  const updated = { ...base, lang: 'fr', fontSize: 16 };\n\n  // React-style state update\n  const [user, setUser] = React.useState({ name: 'Ali', score: 0 });\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>✨ Spread Operator</p>\n      <p style={{color:'#06b6d4'}}>Merged: [{merged.join(', ')}]</p>\n      <p style={{color:'#10b981'}}>Updated: {JSON.stringify(updated)}</p>\n      <p style={{color:'#f59e0b'}}>User: {JSON.stringify(user)}</p>\n      <button onClick={() => setUser(u => ({...u, score: u.score + 10}))} style={{padding:'6px 14px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer'}}>+10 Score</button>\n    </div>\n  );\n}\n\nrender(<SpreadDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 25,
        title: 'Rest Parameters',
        shortDescription: 'Collect remaining arguments into an array using ...rest syntax.',
        fullExplanation: 'Rest parameters use the same ... syntax as spread but in reverse — they collect multiple elements into a single array or object. In functions, ...args gathers all remaining arguments. In destructuring, ...rest collects leftover properties. This is key for writing flexible functions and extracting specific props while forwarding the rest.',
        exampleCode: `function RestDemo() {\n  // Rest in functions\n  const sum = (...nums) => nums.reduce((a, b) => a + b, 0);\n\n  // Rest in destructuring\n  const { name, ...details } = { name: 'Bob', age: 30, role: 'Dev' };\n\n  // Rest in arrays\n  const [first, ...remaining] = [10, 20, 30, 40];\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>📥 Rest Parameters</p>\n      <p style={{color:'#06b6d4'}}>sum(1,2,3,4) = {sum(1, 2, 3, 4)}</p>\n      <p style={{color:'#10b981'}}>name: {name} | rest: {JSON.stringify(details)}</p>\n      <p style={{color:'#f59e0b'}}>first: {first} | remaining: [{remaining.join(', ')}]</p>\n    </div>\n  );\n}\n\nrender(<RestDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 26,
        title: 'Template Literals',
        shortDescription: 'Build dynamic strings with backtick syntax and ${} expressions.',
        fullExplanation: 'Template literals use backticks (`) instead of quotes and allow embedded expressions via ${expression}. They support multi-line strings, expression evaluation, and even tagged templates. In React, they are commonly used for dynamic class names, inline styles, and constructing strings with variables.',
        exampleCode: `function TemplateDemo() {\n  const user = 'React Dev';\n  const score = 42;\n  const rating = score > 30 ? 'Great' : 'Good';\n\n  const multiLine = \`Line 1\nLine 2\nLine 3\`;\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>💬 Template Literals</p>\n      <p style={{color:'#06b6d4'}}>{\`Hello, \${user}! Score: \${score}\`}</p>\n      <p style={{color:'#10b981'}}>{\`Rating: \${rating} (\${score}/50)\`}</p>\n      <p style={{color:'#f59e0b'}}>{\`Math: \${2 + 2} and \${score * 2}\`}</p>\n      <pre style={{color:'#888',fontSize:'12px'}}>{multiLine}</pre>\n    </div>\n  );\n}\n\nrender(<TemplateDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 27,
        title: 'Array.map()',
        shortDescription: 'Transform every element of an array into something new.',
        fullExplanation: 'Array.map() creates a new array by applying a function to each element. It never mutates the original array. In React, map() is THE method for rendering lists — you transform an array of data into an array of JSX elements. Always return a value from the callback.',
        exampleCode: `function MapDemo() {\n  const prices = [10, 25, 50, 75];\n  const withTax = prices.map(p => (p * 1.18).toFixed(2));\n\n  const users = ['Alice', 'Bob', 'Charlie'];\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>🗺️ Array.map()</p>\n      <p style={{color:'#888'}}>Prices: [{prices.join(', ')}]</p>\n      <p style={{color:'#06b6d4'}}>With 18% tax: [{withTax.join(', ')}]</p>\n      <div style={{marginTop:'8px'}}>\n        {users.map((u, i) => (\n          <p key={i} style={{color:'#10b981',margin:'2px 0'}}>{i+1}. {u}</p>\n        ))}\n      </div>\n    </div>\n  );\n}\n\nrender(<MapDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 28,
        title: 'Array.filter()',
        shortDescription: 'Create a new array with only elements that pass a test.',
        fullExplanation: 'Array.filter() returns a new array containing only elements for which the callback returns true. It does not mutate the original array. In React, filter() is commonly used for search functionality, category filtering, and conditionally showing items in a list.',
        exampleCode: `function FilterDemo() {\n  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n  const evens = nums.filter(n => n % 2 === 0);\n  const big = nums.filter(n => n > 5);\n\n  const [minVal, setMinVal] = React.useState(3);\n  const filtered = nums.filter(n => n >= minVal);\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>🔍 Array.filter()</p>\n      <p style={{color:'#06b6d4'}}>Evens: [{evens.join(', ')}]</p>\n      <p style={{color:'#10b981'}}>Greater than 5: [{big.join(', ')}]</p>\n      <div style={{marginTop:'8px'}}>\n        <input type="range" min="1" max="10" value={minVal} onChange={e => setMinVal(+e.target.value)} style={{width:'100%'}} />\n        <p style={{color:'#f59e0b'}}>Min {minVal}: [{filtered.join(', ')}]</p>\n      </div>\n    </div>\n  );\n}\n\nrender(<FilterDemo />);`,
        xpReward: 10,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 29,
        title: 'Array.reduce()',
        shortDescription: 'Reduce an array to a single value by accumulating results.',
        fullExplanation: 'Array.reduce() iterates over an array, accumulating a result by applying a callback (accumulator, currentValue) => newAccumulator. The second argument is the initial value of the accumulator. It can compute sums, build objects, flatten arrays, or any aggregation. It is the most powerful array method.',
        exampleCode: `function ReduceDemo() {\n  const nums = [10, 20, 30, 40];\n  const total = nums.reduce((sum, n) => sum + n, 0);\n\n  const words = ['React', 'is', 'awesome'];\n  const sentence = words.reduce((s, w) => s + ' ' + w);\n\n  const items = ['apple','banana','apple','cherry','banana','apple'];\n  const counts = items.reduce((acc, item) => {\n    acc[item] = (acc[item] || 0) + 1;\n    return acc;\n  }, {});\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>🧮 Array.reduce()</p>\n      <p style={{color:'#06b6d4'}}>Sum: {total}</p>\n      <p style={{color:'#10b981'}}>Sentence: "{sentence}"</p>\n      <p style={{color:'#f59e0b'}}>Counts: {JSON.stringify(counts)}</p>\n    </div>\n  );\n}\n\nrender(<ReduceDemo />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 30,
        title: 'Promises',
        shortDescription: 'Handle asynchronous operations with Promise objects.',
        fullExplanation: 'A Promise represents a value that may be available now, later, or never. It has three states: pending, fulfilled, rejected. You create one with new Promise((resolve, reject) => ...) and consume it with .then() and .catch(). Promises are the foundation for async data fetching, timers, and any non-blocking operation in JavaScript.',
        exampleCode: `function PromiseDemo() {\n  const [result, setResult] = React.useState('Click to start');\n  const [loading, setLoading] = React.useState(false);\n\n  const fetchData = () => {\n    setLoading(true);\n    const promise = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        Math.random() > 0.3\n          ? resolve('✅ Data loaded!')\n          : reject('❌ Network error!');\n      }, 1500);\n    });\n\n    promise\n      .then(data => setResult(data))\n      .catch(err => setResult(err))\n      .finally(() => setLoading(false));\n  };\n\n  return (\n    <div style={{textAlign:'center'}}>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>🤝 Promises</p>\n      <p style={{color:'#06b6d4'}}>{loading ? '⏳ Loading...' : result}</p>\n      <button onClick={fetchData} disabled={loading} style={{padding:'8px 16px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer',marginTop:'8px'}}>Fetch Data</button>\n    </div>\n  );\n}\n\nrender(<PromiseDemo />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 31,
        title: 'async/await',
        shortDescription: 'Write asynchronous code that reads like synchronous code.',
        fullExplanation: 'async/await is syntactic sugar over Promises. An async function always returns a Promise. Inside it, "await" pauses execution until the Promise resolves, giving you the value directly. Use try/catch for error handling. This makes asynchronous code much cleaner and easier to reason about than chaining .then() calls.',
        exampleCode: `function AsyncDemo() {\n  const [msg, setMsg] = React.useState('Ready');\n  const [loading, setLoading] = React.useState(false);\n\n  // Simulate an async API call\n  const fakeApi = () => new Promise(resolve =>\n    setTimeout(() => resolve({ name: 'React', version: '18.3' }), 1200)\n  );\n\n  const loadData = async () => {\n    setLoading(true);\n    try {\n      const data = await fakeApi();\n      setMsg(\`Loaded: \${data.name} v\${data.version}\`);\n    } catch (err) {\n      setMsg('Error: ' + err.message);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  return (\n    <div style={{textAlign:'center'}}>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>⏳ async / await</p>\n      <p style={{color:'#06b6d4'}}>{loading ? '⏳ Awaiting...' : msg}</p>\n      <button onClick={loadData} disabled={loading} style={{padding:'8px 16px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>Load Async</button>\n    </div>\n  );\n}\n\nrender(<AsyncDemo />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 32,
        title: 'Closures',
        shortDescription: 'Understand how functions remember their outer scope variables.',
        fullExplanation: 'A closure is a function that remembers and accesses variables from its outer scope even after the outer function has returned. In React, closures are everywhere — event handlers close over state/props, useEffect callbacks close over dependencies, and stale closures are a common bug source. Understanding closures is key to mastering hooks.',
        exampleCode: `function ClosureDemo() {\n  const [count, setCount] = React.useState(0);\n\n  // This creates a closure — the callback\n  // "remembers" the current count value\n  const makeAdder = (x) => (y) => x + y;\n  const add5 = makeAdder(5);\n  const add10 = makeAdder(10);\n\n  // Counter factory using closures\n  const createGreeting = (prefix) => {\n    return (name) => \`\${prefix}, \${name}!\`;\n  };\n  const hello = createGreeting('Hello');\n  const bye = createGreeting('Goodbye');\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>🔒 Closures</p>\n      <p style={{color:'#06b6d4'}}>add5(3) = {add5(3)} | add10(3) = {add10(3)}</p>\n      <p style={{color:'#10b981'}}>{hello('Alice')} | {bye('Bob')}</p>\n      <p style={{color:'#f59e0b'}}>Count in closure: {count}</p>\n      <button onClick={() => setCount(c => c + 1)} style={{padding:'6px 14px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer'}}>Increment</button>\n    </div>\n  );\n}\n\nrender(<ClosureDemo />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    {
        id: 33,
        title: 'Immutability Principles',
        shortDescription: 'Never mutate data directly — always create new copies.',
        fullExplanation: 'Immutability means never modifying existing data structures. Instead of changing an object or array in place, you create a new one with the desired changes. React depends on immutability to detect state changes — if you mutate state directly, React won\'t know to re-render. Use spread operator, map, filter, and Object.assign to create new copies.',
        exampleCode: `function ImmutableDemo() {\n  const [items, setItems] = React.useState(['Apple', 'Banana']);\n  const [input, setInput] = React.useState('');\n\n  // ✅ Immutable add (creates new array)\n  const addItem = () => {\n    if (!input) return;\n    setItems(prev => [...prev, input]);\n    setInput('');\n  };\n\n  // ✅ Immutable remove (filter creates new array)\n  const removeItem = (idx) => {\n    setItems(prev => prev.filter((_, i) => i !== idx));\n  };\n\n  return (\n    <div>\n      <p style={{color:'#7c3aed',fontWeight:'bold'}}>🧊 Immutability</p>\n      <div style={{display:'flex',gap:'8px',marginBottom:'8px'}}>\n        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add fruit" style={{flex:1,padding:'6px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff'}} />\n        <button onClick={addItem} style={{padding:'6px 12px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>Add</button>\n      </div>\n      {items.map((item, i) => (\n        <p key={i} style={{color:'#06b6d4',margin:'2px 0',cursor:'pointer'}} onClick={() => removeItem(i)}>🍎 {item} <span style={{color:'#ef4444',fontSize:'12px'}}>(click to remove)</span></p>\n      ))}\n    </div>\n  );\n}\n\nrender(<ImmutableDemo />);`,
        xpReward: 15,
        levelRequired: 0,
        difficulty: 'Beginner'
    },
    // ===== LEVEL 2 — React Core Fundamentals =====
    {
        id: 34,
        title: 'What is React?',
        shortDescription: 'Understand what React is, why it exists, and its core philosophy.',
        fullExplanation: 'React is a JavaScript library for building user interfaces, created by Facebook. Its core idea is that UI is a function of state: UI = f(state). Instead of manually updating the DOM, you describe what the UI should look like for a given state, and React figures out the minimal changes needed. React is component-based, declarative, and uses a virtual DOM for performance.',
        exampleCode: `function WhatIsReact() {\n  const [count, setCount] = React.useState(0);\n\n  // React's philosophy: UI = f(state)\n  // You describe WHAT to render, React handles HOW\n  return (\n    <div style={{textAlign:'center',padding:'16px',background:'#1a1a2e',borderRadius:'12px',border:'1px solid #333'}}>\n      <h3 style={{color:'#7c3aed',margin:'0 0 8px'}}>⚛️ React = UI as a function of state</h3>\n      <p style={{color:'#06b6d4',fontSize:'32px',margin:'8px 0'}}>Count: {count}</p>\n      <p style={{color:'#888',fontSize:'13px'}}>State changes → React re-renders → DOM updates</p>\n      <button onClick={() => setCount(c => c + 1)} style={{padding:'8px 20px',borderRadius:'8px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer',fontSize:'16px',marginTop:'8px'}}>Change State</button>\n    </div>\n  );\n}\n\nrender(<WhatIsReact />);`,
        xpReward: 10,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 35,
        title: 'Virtual DOM',
        shortDescription: 'Learn how React uses a virtual DOM for efficient UI updates.',
        fullExplanation: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM. When state changes, React creates a new virtual DOM tree, compares it with the previous one (diffing), and calculates the minimal set of changes needed (reconciliation). Only those changes are applied to the real DOM. This makes React fast — direct DOM manipulation is expensive, but JavaScript object comparison is cheap.',
        exampleCode: `function VDOMDemo() {\n  const [items, setItems] = React.useState(['Item A', 'Item B', 'Item C']);\n  const [renders, setRenders] = React.useState(0);\n\n  const addItem = () => {\n    setItems(prev => [...prev, \`Item \${String.fromCharCode(65 + prev.length)}\`]);\n    setRenders(r => r + 1);\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🌳 Virtual DOM</h3>\n      <p style={{color:'#888',fontSize:'13px'}}>React only updates the NEW item, not the whole list!</p>\n      <p style={{color:'#f59e0b',fontSize:'13px'}}>Re-renders: {renders}</p>\n      <ul style={{listStyle:'none',padding:0}}>\n        {items.map((item, i) => (\n          <li key={i} style={{color:'#06b6d4',padding:'4px 0'}}>✦ {item}</li>\n        ))}\n      </ul>\n      <button onClick={addItem} style={{padding:'6px 14px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>+ Add Item (triggers diff)</button>\n    </div>\n  );\n}\n\nrender(<VDOMDemo />);`,
        xpReward: 10,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 36,
        title: 'JSX Syntax Deep Dive',
        shortDescription: 'Master JSX rules: expressions, attributes, self-closing tags, and more.',
        fullExplanation: 'JSX is a syntax extension that lets you write HTML-like code in JavaScript. Key rules: use className instead of class, htmlFor instead of for, camelCase attributes (onClick, tabIndex), self-close tags without children (<img />), wrap adjacent elements in a parent or fragment, and embed JS expressions with {}. JSX compiles to React.createElement() calls.',
        exampleCode: `function JSXRules() {\n  const isLoggedIn = true;\n  const styles = { color: '#06b6d4', fontWeight: 'bold' };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>📝 JSX Rules</h3>\n      {/* className, not class */}\n      <p style={styles}>✅ Use className, not class</p>\n      {/* camelCase attributes */}\n      <p style={{color:'#10b981'}}>✅ onClick, onChange (camelCase)</p>\n      {/* Expressions in curly braces */}\n      <p style={{color:'#f59e0b'}}>✅ 2 + 2 = {2 + 2}</p>\n      {/* Conditional with ternary */}\n      <p style={{color: isLoggedIn ? '#10b981' : '#ef4444'}}>\n        {isLoggedIn ? '✅ Logged In' : '❌ Logged Out'}\n      </p>\n      {/* Self-closing tags */}\n      <hr style={{border:'1px solid #333',margin:'8px 0'}} />\n      <p style={{color:'#888',fontSize:'12px'}}>JSX compiles to React.createElement()</p>\n    </div>\n  );\n}\n\nrender(<JSXRules />);`,
        xpReward: 10,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 37,
        title: 'Rendering Elements',
        shortDescription: 'Understand how React elements get rendered to the DOM.',
        fullExplanation: 'React elements are the smallest building blocks — plain objects describing what to show. React DOM takes care of updating the real DOM to match. Elements are immutable: once created, you can\'t change their children or attributes. To update the UI, you create a new element (which React does automatically when state changes). React only updates what is necessary.',
        exampleCode: `function RenderDemo() {\n  const [time, setTime] = React.useState(new Date());\n\n  React.useEffect(() => {\n    const id = setInterval(() => setTime(new Date()), 1000);\n    return () => clearInterval(id);\n  }, []);\n\n  // Each tick creates a NEW element tree\n  // React only updates the text that changed!\n  return (\n    <div style={{textAlign:'center'}}>\n      <h3 style={{color:'#7c3aed'}}>🎯 Rendering Elements</h3>\n      <p style={{color:'#888',fontSize:'13px'}}>This element re-renders every second</p>\n      <p style={{color:'#06b6d4',fontSize:'24px',fontFamily:'monospace'}}>\n        {time.toLocaleTimeString()}\n      </p>\n      <p style={{color:'#10b981',fontSize:'13px'}}>Only the time text updates — not the whole DOM!</p>\n      <p style={{color:'#888',fontSize:'12px'}}>Elements are immutable snapshots of UI</p>\n    </div>\n  );\n}\n\nrender(<RenderDemo />);`,
        xpReward: 10,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 38,
        title: 'Functional Components',
        shortDescription: 'Build UI with plain JavaScript functions that return JSX.',
        fullExplanation: 'Functional components are JavaScript functions that accept props and return JSX. They are the modern standard in React (over class components). They\'re simpler, easier to test, and can use hooks for state and side effects. A component name must start with a capital letter so React can distinguish it from HTML tags.',
        exampleCode: `// Simple functional component\nfunction Badge({ label, color }) {\n  return (\n    <span style={{\n      display:'inline-block', padding:'4px 12px',\n      borderRadius:'12px', background:color,\n      color:'#fff', fontSize:'13px', fontWeight:'bold',\n      margin:'2px'\n    }}>{label}</span>\n  );\n}\n\n// Arrow function component\nconst Title = ({ text }) => (\n  <h3 style={{color:'#7c3aed',margin:'0 0 8px'}}>{text}</h3>\n);\n\nfunction App() {\n  return (\n    <div>\n      <Title text="🧩 Functional Components" />\n      <p style={{color:'#888',marginBottom:'8px'}}>Just functions that return JSX!</p>\n      <Badge label="React" color="#7c3aed" />\n      <Badge label="Fast" color="#10b981" />\n      <Badge label="Modern" color="#06b6d4" />\n      <Badge label="Hooks" color="#f59e0b" />\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 10,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 39,
        title: 'Props In Depth',
        shortDescription: 'Master the complete props system: defaults, types, and patterns.',
        fullExplanation: 'Props are the inputs to your components — passed as attributes in JSX. You can pass any JavaScript value: strings, numbers, booleans, objects, arrays, functions, and even other components. Use default parameter values for fallbacks. Props are read-only (never modify them). Boolean props can be passed as just the attribute name without a value.',
        exampleCode: `function UserCard({ name, role = 'Member', level = 1, online, onGreet }) {\n  return (\n    <div style={{padding:'12px',background:'#1a1a2e',borderRadius:'8px',border:'1px solid #333',marginBottom:'8px'}}>\n      <p style={{color:'#fff',margin:'0 0 4px',fontWeight:'bold'}}>\n        {online ? '🟢' : '🔴'} {name}\n      </p>\n      <p style={{color:'#888',margin:'0',fontSize:'13px'}}>{role} • Lv.{level}</p>\n      <button onClick={() => onGreet(name)} style={{marginTop:'6px',padding:'4px 10px',borderRadius:'4px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer',fontSize:'12px'}}>👋 Greet</button>\n    </div>\n  );\n}\n\nfunction App() {\n  const [msg, setMsg] = React.useState('');\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>📦 Props In Depth</h3>\n      <UserCard name="Alice" role="Admin" level={5} online onGreet={n => setMsg(\`Hi \${n}!\`)} />\n      <UserCard name="Bob" level={2} onGreet={n => setMsg(\`Hey \${n}!\`)} />\n      {msg && <p style={{color:'#10b981'}}>{msg}</p>}\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 40,
        title: 'Children Prop',
        shortDescription: 'Pass nested JSX content to components as children.',
        fullExplanation: 'The special "children" prop contains whatever you nest between a component\'s opening and closing tags. This is the foundation of composition in React — you can create wrapper/container components that don\'t know their content ahead of time. Children can be text, elements, components, or even functions (render props pattern).',
        exampleCode: `function Panel({ title, children, color = '#7c3aed' }) {\n  return (\n    <div style={{border:\`2px solid \${color}\`,borderRadius:'12px',overflow:'hidden',marginBottom:'8px'}}>\n      <div style={{background:color,padding:'8px 12px'}}>\n        <strong style={{color:'#fff'}}>{title}</strong>\n      </div>\n      <div style={{padding:'12px'}}>{children}</div>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed',marginBottom:'8px'}}>👶 Children Prop</h3>\n      <Panel title="⚡ Info">\n        <p style={{color:'#06b6d4',margin:0}}>I'm the children content!</p>\n      </Panel>\n      <Panel title="📋 List" color="#10b981">\n        <ul style={{margin:0,paddingLeft:'20px',color:'#ccc'}}>\n          <li>Item A</li>\n          <li>Item B</li>\n        </ul>\n      </Panel>\n      <Panel title="🎯 Nested" color="#f59e0b">\n        <Panel title="I'm nested!" color="#ef4444">\n          <p style={{color:'#ccc',margin:0}}>Components in components!</p>\n        </Panel>\n      </Panel>\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 41,
        title: 'Lists & Rendering Patterns',
        shortDescription: 'Render dynamic lists from arrays of data with proper patterns.',
        fullExplanation: 'Rendering lists is one of the most common tasks in React. Map over your data array and return JSX for each item. You can filter before mapping, sort the array, or chain methods. For empty states, check the array length. For nested lists, use nested maps. Always ensure each item has a unique key for efficient re-rendering.',
        exampleCode: `function ListPatterns() {\n  const [filter, setFilter] = React.useState('');\n  const products = [\n    { id: 1, name: 'React Book', price: 29, hot: true },\n    { id: 2, name: 'JS Guide', price: 19, hot: false },\n    { id: 3, name: 'CSS Manual', price: 15, hot: true },\n    { id: 4, name: 'Node Handbook', price: 35, hot: false },\n  ];\n\n  const filtered = products.filter(p =>\n    p.name.toLowerCase().includes(filter.toLowerCase())\n  );\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>📃 List Patterns</h3>\n      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter..." style={{width:'100%',padding:'6px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff',marginBottom:'8px'}} />\n      {filtered.length === 0\n        ? <p style={{color:'#888'}}>No results found.</p>\n        : filtered.map(p => (\n          <div key={p.id} style={{display:'flex',justifyContent:'space-between',padding:'6px 0',borderBottom:'1px solid #222'}}>\n            <span style={{color:'#06b6d4'}}>{p.hot ? '🔥' : '  '} {p.name}</span>\n            <span style={{color:'#f59e0b'}}>{'$'}{p.price}</span>\n          </div>\n        ))}\n    </div>\n  );\n}\n\nrender(<ListPatterns />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 42,
        title: 'Keys in Lists',
        shortDescription: 'Use unique keys to help React track list items efficiently.',
        fullExplanation: 'Keys tell React which items in a list have changed, been added, or removed. They should be stable, unique identifiers — like database IDs. Never use array index as key if the list can be reordered or filtered (it causes bugs and poor performance). Keys are not passed as props to the component — they are used internally by React\'s reconciliation algorithm.',
        exampleCode: `function KeysDemo() {\n  const [items, setItems] = React.useState([\n    { id: 'a1', text: 'Learn React' },\n    { id: 'b2', text: 'Build Apps' },\n    { id: 'c3', text: 'Ship Products' },\n  ]);\n\n  const addTop = () => setItems(prev => [\n    { id: Date.now().toString(), text: \`New Task \${prev.length + 1}\` },\n    ...prev\n  ]);\n\n  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🔑 Keys in Lists</h3>\n      <button onClick={addTop} style={{padding:'6px 12px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer',marginBottom:'8px'}}>+ Add to Top</button>\n      {items.map(item => (\n        <div key={item.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px',background:'#1a1a2e',borderRadius:'6px',margin:'4px 0'}}>\n          <span style={{color:'#06b6d4'}}>🔑 {item.id}: {item.text}</span>\n          <button onClick={() => remove(item.id)} style={{background:'#ef4444',color:'#fff',border:'none',borderRadius:'4px',padding:'2px 8px',cursor:'pointer'}}>✕</button>\n        </div>\n      ))}\n      <p style={{color:'#888',fontSize:'12px',marginTop:'8px'}}>✅ Using stable IDs, not array index!</p>\n    </div>\n  );\n}\n\nrender(<KeysDemo />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 43,
        title: 'Conditional Rendering Patterns',
        shortDescription: 'Master all patterns for showing/hiding UI based on conditions.',
        fullExplanation: 'React offers multiple conditional rendering patterns: ternary operator for if/else (cond ? A : B), logical AND for if-only (cond && element), early return for guard clauses, switch statements for multiple cases, and object lookup for mapping values to components. Choose the pattern that makes your code most readable.',
        exampleCode: `function ConditionalPatterns() {\n  const [status, setStatus] = React.useState('idle');\n\n  // Pattern: object lookup\n  const statusUI = {\n    idle:    <p style={{color:'#888'}}>⏸ Waiting...</p>,\n    loading: <p style={{color:'#f59e0b'}}>⏳ Loading...</p>,\n    success: <p style={{color:'#10b981'}}>✅ Success!</p>,\n    error:   <p style={{color:'#ef4444'}}>❌ Error occurred</p>,\n  };\n\n  const states = ['idle', 'loading', 'success', 'error'];\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🔀 Conditional Patterns</h3>\n      {/* Pattern: ternary */}\n      <p style={{color:'#06b6d4'}}>{status === 'idle' ? 'Not started' : \`Status: \${status}\`}</p>\n      {/* Pattern: AND */}\n      {status === 'error' && <p style={{color:'#ef4444'}}>Please retry.</p>}\n      {/* Pattern: object lookup */}\n      <div style={{padding:'8px',background:'#1a1a2e',borderRadius:'8px',margin:'8px 0'}}>{statusUI[status]}</div>\n      <div style={{display:'flex',gap:'4px',flexWrap:'wrap'}}>\n        {states.map(s => (\n          <button key={s} onClick={() => setStatus(s)} style={{padding:'4px 10px',borderRadius:'4px',background:status===s?'#7c3aed':'#333',color:'#fff',border:'none',cursor:'pointer',fontSize:'12px'}}>{s}</button>\n        ))}\n      </div>\n    </div>\n  );\n}\n\nrender(<ConditionalPatterns />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 44,
        title: 'Fragments',
        shortDescription: 'Group elements without adding extra DOM nodes using Fragments.',
        fullExplanation: 'React components must return a single root element. Fragments (<React.Fragment> or shorthand <></>) let you group multiple elements without adding an extra DOM node. This keeps your HTML clean. Use the full <React.Fragment key={}> syntax when you need to pass a key (e.g., in lists), and the shorthand <></> everywhere else.',
        exampleCode: `function TableRow({ name, score }) {\n  // Fragment avoids wrapping <td>s in an extra <div>\n  return (\n    <React.Fragment>\n      <td style={{padding:'6px 12px',color:'#06b6d4'}}>{name}</td>\n      <td style={{padding:'6px 12px',color:'#f59e0b'}}>{score}</td>\n    </React.Fragment>\n  );\n}\n\nfunction App() {\n  const data = [\n    { id: 1, name: 'Alice', score: 95 },\n    { id: 2, name: 'Bob', score: 87 },\n    { id: 3, name: 'Charlie', score: 92 },\n  ];\n\n  return (\n    <>\n      <h3 style={{color:'#7c3aed'}}>🧩 Fragments</h3>\n      <p style={{color:'#888',fontSize:'13px'}}>No extra wrapper DIVs in the DOM!</p>\n      <table style={{width:'100%',borderCollapse:'collapse'}}>\n        <thead>\n          <tr style={{borderBottom:'2px solid #333'}}>\n            <th style={{textAlign:'left',padding:'6px 12px',color:'#888'}}>Name</th>\n            <th style={{textAlign:'left',padding:'6px 12px',color:'#888'}}>Score</th>\n          </tr>\n        </thead>\n        <tbody>\n          {data.map(d => (\n            <tr key={d.id} style={{borderBottom:'1px solid #222'}}>\n              <TableRow name={d.name} score={d.score} />\n            </tr>\n          ))}\n        </tbody>\n      </table>\n    </>\n  );\n}\n\nrender(<App />);`,
        xpReward: 10,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 45,
        title: 'Composition Patterns',
        shortDescription: 'Build flexible, reusable UIs through composition over inheritance.',
        fullExplanation: 'React favors composition over inheritance. Key patterns: containment (using children prop for generic wrappers), specialization (specific components wrapping general ones with preset props), and render slots (passing components as props like header/footer). This lets you build highly reusable, flexible component libraries.',
        exampleCode: `// Containment pattern\nfunction Card({ children, variant = 'default' }) {\n  const colors = { default: '#333', primary: '#7c3aed', success: '#10b981' };\n  return (\n    <div style={{border:\`1px solid \${colors[variant]}\`,borderRadius:'8px',padding:'12px',marginBottom:'8px',background:'#1a1a2e'}}>\n      {children}\n    </div>\n  );\n}\n\n// Specialization pattern\nfunction SuccessCard({ title, message }) {\n  return (\n    <Card variant="success">\n      <p style={{color:'#10b981',fontWeight:'bold',margin:'0 0 4px'}}>✅ {title}</p>\n      <p style={{color:'#ccc',margin:0,fontSize:'13px'}}>{message}</p>\n    </Card>\n  );\n}\n\n// Render slots pattern\nfunction Layout({ header, footer, children }) {\n  return (\n    <div>\n      <div style={{borderBottom:'1px solid #333',paddingBottom:'8px',marginBottom:'8px'}}>{header}</div>\n      {children}\n      <div style={{borderTop:'1px solid #333',paddingTop:'8px',marginTop:'8px'}}>{footer}</div>\n    </div>\n  );\n}\n\nfunction App() {\n  return (\n    <Layout\n      header={<h3 style={{color:'#7c3aed',margin:0}}>🧱 Composition</h3>}\n      footer={<p style={{color:'#888',margin:0,fontSize:'12px'}}>Built with composition!</p>}\n    >\n      <SuccessCard title="Pattern 1" message="Containment via children" />\n      <SuccessCard title="Pattern 2" message="Specialization via wrapping" />\n    </Layout>\n  );\n}\n\nrender(<App />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    {
        id: 46,
        title: 'One-way Data Flow',
        shortDescription: 'Understand React\'s unidirectional data flow from parent to child.',
        fullExplanation: 'React enforces one-way (unidirectional) data flow: data flows DOWN from parent to child via props. If a child needs to communicate UP to its parent, the parent passes a callback function as a prop. This makes data flow predictable and debugging easier — you always know where data comes from and how it changes.',
        exampleCode: `function Child({ value, onIncrement, onDecrement }) {\n  return (\n    <div style={{padding:'12px',background:'#1a1a2e',borderRadius:'8px',border:'1px solid #333',marginTop:'8px'}}>\n      <p style={{color:'#888',margin:'0 0 4px',fontSize:'12px'}}>👶 Child Component</p>\n      <p style={{color:'#06b6d4',fontSize:'20px',margin:'0 0 8px'}}>Received: {value}</p>\n      <div style={{display:'flex',gap:'8px'}}>\n        <button onClick={onDecrement} style={{flex:1,padding:'6px',borderRadius:'6px',background:'#ef4444',color:'#fff',border:'none',cursor:'pointer'}}>- (calls parent)</button>\n        <button onClick={onIncrement} style={{flex:1,padding:'6px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>+ (calls parent)</button>\n      </div>\n    </div>\n  );\n}\n\nfunction Parent() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>⬇️ One-way Data Flow</h3>\n      <div style={{padding:'8px',background:'#12122a',borderRadius:'8px'}}>\n        <p style={{color:'#888',margin:'0 0 4px',fontSize:'12px'}}>👨 Parent (owns state)</p>\n        <p style={{color:'#f59e0b'}}>State: {count}</p>\n        <p style={{color:'#888',fontSize:'11px'}}>↓ passes value + callbacks as props ↓</p>\n      </div>\n      <Child value={count} onIncrement={() => setCount(c=>c+1)} onDecrement={() => setCount(c=>c-1)} />\n    </div>\n  );\n}\n\nrender(<Parent />);`,
        xpReward: 15,
        levelRequired: 1,
        difficulty: 'Beginner'
    },
    // ===== LEVEL 3 — State & Events =====
    {
        id: 47,
        title: 'useState Deep Dive',
        shortDescription: 'Master the useState hook, lazy initialization, and async updates.',
        fullExplanation: 'useState provides state to functional components. State updates are asynchronous — React batches them for performance. If your new state depends on the previous state, ALWAYS pass a callback function to the setter: `setCount(prev => prev + 1)` instead of `setCount(count + 1)`. For expensive initial states, pass a function `useState(() => expensiveComputation())` (lazy initialization).',
        exampleCode: `function CounterPro() {\n  // Lazy initialization: only runs on first render\n  const [count, setCount] = React.useState(() => {\n    console.log('Initializing state');\n    return 0;\n  });\n\n  const badUpdate = () => {\n    // These won't stack correctly because count is stale!\n    setCount(count + 1);\n    setCount(count + 1);\n  };\n\n  const goodUpdate = () => {\n    // These stack correctly!\n    setCount(prev => prev + 1);\n    setCount(prev => prev + 1);\n  };\n\n  return (\n    <div style={{textAlign:'center'}}>\n      <h3 style={{color:'#7c3aed'}}>🧮 useState Deep Dive</h3>\n      <p style={{color:'#06b6d4',fontSize:'24px',margin:'8px 0'}}>{count}</p>\n      <div style={{display:'flex',gap:'8px',justifyContent:'center'}}>\n        <button onClick={badUpdate} style={{padding:'6px 12px',borderRadius:'6px',background:'#ef4444',color:'#fff',border:'none',cursor:'pointer'}}>Bad +2 (Actually +1)</button>\n        <button onClick={goodUpdate} style={{padding:'6px 12px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>Good +2</button>\n      </div>\n    </div>\n  );\n}\n\nrender(<CounterPro />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 48,
        title: 'Updating Primitive State',
        shortDescription: 'Handle numbers, strings, and booleans in React state.',
        fullExplanation: 'Primitive types (strings, numbers, booleans) are immutable in JavaScript. To update a primitive state, you just pass the new value to the state setter. React sees the new value is different from the old one and triggers a re-render. Toggle booleans using the previous state: `setIsOpen(prev => !prev)`.',
        exampleCode: `function PrimitiveState() {\n  const [name, setName] = React.useState('React');\n  const [score, setScore] = React.useState(100);\n  const [isActive, setIsActive] = React.useState(true);\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>💎 Primitive State</h3>\n      <div style={{marginBottom:'12px'}}>\n        <input value={name} onChange={e => setName(e.target.value)} style={{padding:'6px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff',width:'100%'}} />\n        <p style={{color:'#06b6d4',margin:'4px 0'}}>String: {name}</p>\n      </div>\n      \n      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>\n        <span style={{color:'#f59e0b'}}>Number: {score}</span>\n        <button onClick={() => setScore(s => s + 10)} style={{padding:'4px 10px',borderRadius:'4px',background:'#333',color:'#fff',border:'none',cursor:'pointer'}}>+10</button>\n      </div>\n\n      <div style={{display:'flex',justifyContent:'space-between'}}>\n        <span style={{color: isActive ? '#10b981' : '#ef4444'}}>Boolean: {isActive ? 'Active' : 'Inactive'}</span>\n        <button onClick={() => setIsActive(a => !a)} style={{padding:'4px 10px',borderRadius:'4px',background:'#333',color:'#fff',border:'none',cursor:'pointer'}}>Toggle</button>\n      </div>\n    </div>\n  );\n}\n\nrender(<PrimitiveState />);`,
        xpReward: 10,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 49,
        title: 'Updating Objects in State',
        shortDescription: 'Correctly update objects in state using the spread operator.',
        fullExplanation: 'You must treat React state as strictly read-only. NEVER mutate an object directly (`state.x = 10`). React relies on object references changing to know when to re-render. To update an object in state, always create a NEW object using the spread operator `...` and override the specific properties you want to change.',
        exampleCode: `function ObjectState() {\n  const [user, setUser] = React.useState({\n    name: 'Alice',\n    role: 'Developer',\n    level: 1\n  });\n\n  const levelUp = () => {\n    // ❌ Error: user.level++\n    // ✅ Correct: create a new object\n    setUser(prevUser => ({\n      ...prevUser, // copy all existing fields\n      level: prevUser.level + 1 // override level\n    }));\n  };\n\n  const changeRole = (e) => {\n    setUser(prev => ({ ...prev, role: e.target.value }));\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>📦 Object State</h3>\n      <div style={{padding:'12px',background:'#1a1a2e',borderRadius:'8px',border:'1px solid #333'}}>\n        <p style={{color:'#06b6d4',margin:'0 0 8px',fontSize:'18px'}}>\n          🧑‍💻 {user.name} — Lv.{user.level}\n        </p>\n        <p style={{color:'#888',margin:'0 0 12px'}}>{user.role}</p>\n        \n        <div style={{display:'flex',gap:'8px'}}>\n          <button onClick={levelUp} style={{flex:1,padding:'8px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>Level Up</button>\n          <select value={user.role} onChange={changeRole} style={{flex:1,padding:'8px',borderRadius:'6px',background:'#333',color:'#fff',border:'none'}}>\n            <option>Developer</option>\n            <option>Designer</option>\n            <option>Manager</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nrender(<ObjectState />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 50,
        title: 'Updating Arrays in State',
        shortDescription: 'Modify arrays in state immutably using map, filter, and spread.',
        fullExplanation: 'Like objects, arrays in state must not be mutated (`push`, `pop`, `splice`). To ADD, use the spread operator `[...arr, newItem]`. To REMOVE, use `arr.filter()`. To UPDATE an item, use `arr.map()`. To INSERT, slice the array before and after the insertion index. Always return a NEW array reference.',
        exampleCode: `function ArrayState() {\n  const [tasks, setTasks] = React.useState([\n    { id: 1, text: 'Learn React', done: true },\n    { id: 2, text: 'Master State', done: false }\n  ]);\n\n  const addTask = () => {\n    const newTask = { id: Date.now(), text: 'New Task', done: false };\n    setTasks(prev => [...prev, newTask]); // Spread to add\n  };\n\n  const removeTask = (id) => {\n    setTasks(prev => prev.filter(t => t.id !== id)); // Filter to remove\n  };\n\n  const toggleTask = (id) => {\n    setTasks(prev => prev.map(t =>\n      t.id === id ? { ...t, done: !t.done } : t // Map to update\n    ));\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>📚 Array State</h3>\n      <button onClick={addTask} style={{padding:'6px 12px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer',marginBottom:'8px'}}>+ Add Task</button>\n      <ul style={{listStyle:'none',padding:0,margin:0}}>\n        {tasks.map(task => (\n          <li key={task.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px',background:'#1a1a2e',borderBottom:'1px solid #333'}}>\n            <span \n              onClick={() => toggleTask(task.id)}\n              style={{color: task.done ? '#888' : '#06b6d4', textDecoration: task.done ? 'line-through' : 'none', cursor:'pointer'}}\n            >\n              {task.done ? '✅' : '⬜'} {task.text}\n            </span>\n            <button onClick={() => removeTask(task.id)} style={{background:'transparent',color:'#ef4444',border:'none',cursor:'pointer'}}>✕</button>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nrender(<ArrayState />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 51,
        title: 'Event Handling',
        shortDescription: 'Attach functions to user interactions like clicks and hover.',
        fullExplanation: 'React events are named using camelCase, rather than lowercase string HTML (e.g. `onClick` vs `onclick`). You pass a function as the event handler, not a string. Do NOT call the function inline like `onClick={handleClick()}` — this will run immediately on render. Use `onClick={handleClick}` or wrap it in an arrow function if you need to pass arguments: `onClick={() => handleDelete(id)}`.',
        exampleCode: `function EventHandling() {\n  const [logs, setLogs] = React.useState([]);\n\n  // Handler receiving default event object\n  const handleSimpleClick = (e) => {\n    log(\`Clicked button at X:\${e.clientX} Y:\${e.clientY}\`);\n  };\n\n  // Handler needing custom arguments\n  const handleArgClick = (message) => {\n    log(\`Message: \${message}\`);\n  };\n\n  const log = (msg) => {\n    setLogs(prev => [msg, ...prev].slice(0, 3));\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🖱️ Event Handling</h3>\n      <div style={{display:'flex',gap:'8px',marginBottom:'12px'}}>\n        {/* Passing function reference */}\n        <button onClick={handleSimpleClick} style={{flex:1,padding:'8px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>Simple Click</button>\n        \n        {/* Inline arrow function to pass args */}\n        <button onClick={() => handleArgClick('Hello!')} style={{flex:1,padding:'8px',borderRadius:'6px',background:'#f59e0b',color:'#000',border:'none',cursor:'pointer'}}>Pass Args</button>\n      </div>\n      \n      <div style={{background:'#1a1a2e',padding:'8px',borderRadius:'8px',border:'1px solid #333',minHeight:'80px'}}>\n        <p style={{color:'#888',margin:'0 0 4px',fontSize:'12px'}}>Event Logs:</p>\n        {logs.map((l, i) => <p key={i} style={{color:'#06b6d4',margin:'2px 0',fontSize:'13px'}}>{'>'} {l}</p>)}\n      </div>\n    </div>\n  );\n}\n\nrender(<EventHandling />);`,
        xpReward: 10,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 52,
        title: 'Synthetic Events',
        shortDescription: 'Understand React\'s cross-browser wrapper for native DOM events.',
        fullExplanation: 'When you handle an event in React (e.g. `e.target`), the `e` object is a "SyntheticEvent", not a native browser event. React wraps native events to ensure they have the same properties and behavior across all browsers. The API matches the W3C spec entirely (`e.preventDefault()`, `e.stopPropagation()`). You rarely need to access the underlying native event (available via `e.nativeEvent`).',
        exampleCode: `function SyntheticEvents() {\n  const [eventData, setEventData] = React.useState(null);\n\n  const handleMouseMove = (e) => {\n    // e is a React SyntheticEvent\n    setEventData({\n      type: e.type,\n      clientX: e.clientX,\n      clientY: e.clientY,\n      targetTag: e.target.tagName,\n      isSynthetic: !!e.nativeEvent\n    });\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🌐 Synthetic Events</h3>\n      <div \n        onMouseMove={handleMouseMove}\n        style={{height:'100px',background:'linear-gradient(45deg, #1a1a2e, #7c3aed)',borderRadius:'8px',display:'flex',alignItems:'center',justifyContent:'center',cursor:'crosshair'}}\n      >\n        <span style={{color:'#fff',fontWeight:'bold'}}>Mouse over me!</span>\n      </div>\n      \n      <div style={{marginTop:'12px',color:'#06b6d4',fontSize:'13px'}}>\n        {eventData ? (\n          <pre>{JSON.stringify(eventData, null, 2)}</pre>\n        ) : (\n          <p style={{color:'#888'}}>Awaiting event...</p>\n        )}\n      </div>\n    </div>\n  );\n}\n\nrender(<SyntheticEvents />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 53,
        title: 'Controlled Components',
        shortDescription: 'Keep forms in sync with state by controlling inputs directly.',
        fullExplanation: 'In HTML, form elements like `<input>` and `<select>` maintain their own internal state. In React, we prefer "Controlled Components", where React state is the single source of truth. You bind the input\'s `value` to a state variable, and update that state inside the `onChange` event handler. This gives you instant validation, masking, and formatting abilities.',
        exampleCode: `function ControlledInput() {\n  const [text, setText] = React.useState('');\n\n  const handleChange = (e) => {\n    // Force uppercase (formatting on the fly)\n    setText(e.target.value.toUpperCase());\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🎮 Controlled Components</h3>\n      <p style={{color:'#888',fontSize:'13px'}}>React state drives the input value.</p>\n      <input \n        type="text"\n        value={text} \n        onChange={handleChange}\n        placeholder="TYPE HERE..."\n        style={{width:'100%',padding:'8px',borderRadius:'6px',background:'#1a1a2e',color:'#fff',border:'1px solid #444'}}\n      />\n      <p style={{color:'#10b981',marginTop:'8px',wordBreak:'break-all'}}>\n        State: <strong>{text || '(empty)'}</strong>\n      </p>\n      <button \n        onClick={() => setText('RESET')} \n        style={{padding:'4px 10px',borderRadius:'4px',background:'#ef4444',color:'#fff',border:'none',cursor:'pointer'}}\n      >Force State Change</button>\n    </div>\n  );\n}\n\nrender(<ControlledInput />);`,
        xpReward: 10,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 54,
        title: 'Forms in React',
        shortDescription: 'Submit forms correctly by preventing default page reloads.',
        fullExplanation: 'Handling form submissions in React involves attaching an `onSubmit` handler to the `<form>` element (not an `onClick` to the submit button). The very first line of your handler must be `e.preventDefault()`, otherwise the browser will attempt a full page reload and you will lose all your React state.',
        exampleCode: `function ReactForm() {\n  const [email, setEmail] = React.useState('');\n  const [status, setStatus] = React.useState('idle');\n\n  const handleSubmit = (e) => {\n    e.preventDefault(); // CRITICAL: Stop page reload\n    \n    if (!email.includes('@')) {\n      setStatus('Invalid email!');\n      return;\n    }\n    \n    setStatus(\`Submitting \${email}...\`);\n    setTimeout(() => {\n      setStatus('✅ Subscribed successfully!');\n      setEmail('');\n    }, 1000);\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>📝 Forms in React</h3>\n      <form onSubmit={handleSubmit} style={{display:'flex',gap:'8px',marginTop:'12px'}}>\n        <input \n          value={email}\n          onChange={(e) => setEmail(e.target.value)}\n          placeholder="Enter email"\n          style={{flex:1,padding:'8px',borderRadius:'6px',background:'#1a1a2e',color:'#fff',border:'1px solid #444'}}\n        />\n        <button type="submit" style={{padding:'8px 16px',borderRadius:'6px',background:'#10b981',color:'#fff',border:'none',cursor:'pointer'}}>\n          Subscribe\n        </button>\n      </form>\n      <p style={{color: status.includes('✅') ? '#10b981' : status.includes('Invalid') ? '#ef4444' : '#06b6d4', marginTop:'8px'}}>\n        {status !== 'idle' && status}\n      </p>\n    </div>\n  );\n}\n\nrender(<ReactForm />);`,
        xpReward: 10,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 55,
        title: 'Handling Multiple Inputs',
        shortDescription: 'Manage complex forms efficiently with dynamic state updates.',
        fullExplanation: 'When building forms with many fields, maintaining a separate state variable for each input becomes tedious. Instead, use a single state object to hold all form values. Give each `<input>` a `name` attribute that matches the state object key. In the `onChange` handler, use computed property names `[e.target.name]: e.target.value` to update the correct field dynamically.',
        exampleCode: `function ComplexForm() {\n  const [formData, setFormData] = React.useState({\n    firstName: '',\n    lastName: '',\n    city: ''\n  });\n\n  const handleChange = (e) => {\n    const { name, value } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: value // Computed property name dynamically sets key\n    }));\n  };\n\n  const inputStyle = {width:'100%',padding:'6px',borderRadius:'6px',border:'1px solid #444',background:'#1a1a2e',color:'#fff',marginBottom:'8px'};\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>📋 Multiple Inputs</h3>\n      <form>\n        <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" style={inputStyle} />\n        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" style={inputStyle} />\n        <input name="city" value={formData.city} onChange={handleChange} placeholder="City" style={inputStyle} />\n      </form>\n      \n      <div style={{background:'#12122a',padding:'8px',borderRadius:'8px',marginTop:'8px'}}>\n        <p style={{color:'#888',fontSize:'12px',margin:'0 0 4px'}}>Current State Object:</p>\n        <pre style={{color:'#06b6d4',margin:0,fontSize:'13px'}}>\n          {JSON.stringify(formData, null, 2)}\n        </pre>\n      </div>\n    </div>\n  );\n}\n\nrender(<ComplexForm />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 56,
        title: 'Prevent Default Behavior',
        shortDescription: 'Stop browsers from performing native actions on events.',
        fullExplanation: 'Browsers have default behaviors for certain events: clicking a link navigates to a new URL, submitting a form reloads the page, right-clicking opens a context menu. In React Single Page Applications (SPAs), you usually want to handle these actions in JavaScript without a page reload. Call `e.preventDefault()` inside your event handler to stop the default browser action.',
        exampleCode: `function PreventDefaultDemo() {\n  const [logs, setLogs] = React.useState([]);\n  \n  const log = msg => setLogs(p => [msg, ...p].slice(0, 3));\n\n  const handleLinkClick = (e) => {\n    e.preventDefault(); // Stops navigation\n    log('Link clicked, but navigation prevented!');\n  };\n\n  const handleContextMenu = (e) => {\n    e.preventDefault(); // Stops right-click menu\n    log('Right-clicked! Default menu blocked.');\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🛑 Prevent Default</h3>\n      <div style={{display:'flex',gap:'12px',marginBottom:'12px'}}>\n        <a href="https://react.dev" onClick={handleLinkClick} style={{color:'#06b6d4',textDecoration:'underline',cursor:'pointer'}}>\n          I am a link\n        </a>\n      </div>\n      \n      <div \n        onContextMenu={handleContextMenu}\n        style={{padding:'20px',background:'#1a1a2e',borderRadius:'8px',border:'1px dashed #7c3aed',textAlign:'center',marginBottom:'12px'}}\n      >\n        Right-click me!\n      </div>\n\n      <div style={{minHeight:'60px'}}>\n        {logs.map((l, i) => <p key={i} style={{color:'#10b981',margin:'2px 0',fontSize:'13px'}}>{l}</p>)}\n      </div>\n    </div>\n  );\n}\n\nrender(<PreventDefaultDemo />);`,
        xpReward: 10,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 57,
        title: 'Lifting State Up (Review)',
        shortDescription: 'Share state between components by moving it to their common parent.',
        fullExplanation: 'When multiple components need to reflect the same changing data, you should lift the shared state up to their closest common ancestor. The parent owns the state and passes both the state value AND a callback function down to the children as props. The children display the value and call the parent\'s function when an update occurs.',
        exampleCode: `function CounterDisplay({ val }) {\n  return <span style={{fontSize:'24px',color:'#10b981',fontWeight:'bold',margin:'0 16px'}}>{val}</span>;\n}\n\nfunction CounterButton({ increment, onAction }) {\n  return (\n    <button \n      onClick={() => onAction(increment)} \n      style={{padding:'8px 16px',borderRadius:'6px',background:'#7c3aed',color:'#fff',border:'none',cursor:'pointer'}}\n    >\n      Add {increment}\n    </button>\n  );\n}\n\n// The Parent owns the state!\nfunction App() {\n  const [total, setTotal] = React.useState(0);\n\n  const handleAdd = (amount) => setTotal(prev => prev + amount);\n\n  return (\n    <div style={{textAlign:'center'}}>\n      <h3 style={{color:'#7c3aed'}}>🏗️ Lifting State Up</h3>\n      <p style={{color:'#888',fontSize:'13px'}}>Parent manages state, children read/update it.</p>\n      <div style={{padding:'16px',background:'#1a1a2e',borderRadius:'12px',border:'1px solid #333',display:'flex',alignItems:'center',justifyContent:'center'}}>\n        <CounterButton increment={1} onAction={handleAdd} />\n        <CounterDisplay val={total} />\n        <CounterButton increment={5} onAction={handleAdd} />\n      </div>\n    </div>\n  );\n}\n\nrender(<App />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 58,
        title: 'Sharing State Between Components',
        shortDescription: 'Synchronize multiple inputs connected to the same state.',
        fullExplanation: 'A classic example of lifted state is synchronization. Imagine two inputs that need to stay in sync (like a Markdown editor and its preview). By lifting the text state to their common parent, you guarantee that independent child components always reflect identical data. When either child changes the data, the parent triggers a unified re-render.',
        exampleCode: `function InputA({ value, onChange }) {\n  return (\n    <label style={{display:'flex',flexDirection:'column',gap:'4px'}}>\n      <span style={{color:'#888',fontSize:'12px'}}>Child 1 Input</span>\n      <input value={value} onChange={e => onChange(e.target.value)} style={{padding:'6px',borderRadius:'4px',background:'#1a1a2e',color:'#06b6d4',border:'1px solid #444'}}/>\n    </label>\n  );\n}\n\nfunction InputB({ value, onChange }) {\n  return (\n    <label style={{display:'flex',flexDirection:'column',gap:'4px'}}>\n      <span style={{color:'#888',fontSize:'12px'}}>Child 2 Input</span>\n      <input value={value} onChange={e => onChange(e.target.value)} style={{padding:'6px',borderRadius:'4px',background:'#1a1a2e',color:'#f59e0b',border:'1px solid #444'}}/>\n    </label>\n  );\n}\n\nfunction SyncedApp() {\n  const [sharedText, setSharedText] = React.useState('Hello World');\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🔗 Shared State</h3>\n      <div style={{display:'flex',gap:'16px'}}>\n        <InputA value={sharedText} onChange={setSharedText} />\n        <InputB value={sharedText} onChange={setSharedText} />\n      </div>\n      <p style={{marginTop:'12px',color:'#10b981',fontSize:'14px'}}>Shared: <strong>{sharedText}</strong></p>\n    </div>\n  );\n}\n\nrender(<SyncedApp />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    },
    {
        id: 59,
        title: 'Derived State',
        shortDescription: 'Calculate values on the fly instead of storing them in state.',
        fullExplanation: 'A major anti-pattern in React is storing data in state when it can be calculated from existing state. For instance, if you have `firstName` and `lastName` in state, do NOT put `fullName` in state as well. Simply calculate it during render: `const fullName = firstName + " " + lastName`. This prevents bugs where related states get out of sync.',
        exampleCode: `function DerivedStateDemo() {\n  const [cartItems, setCartItems] = React.useState([\n    { name: 'Apple', price: 1.50, qty: 2 },\n    { name: 'Banana', price: 0.80, qty: 5 }\n  ]);\n\n  // ✅ GOOD: Derived state computed during render\n  // No need for a separate \`total\` state!\n  const totalCost = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);\n  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);\n\n  const addApple = () => {\n    setCartItems(prev => {\n      const newArr = [...prev];\n      newArr[0].qty++;\n      return newArr;\n    });\n  };\n\n  return (\n    <div>\n      <h3 style={{color:'#7c3aed'}}>🧮 Derived State</h3>\n      {cartItems.map((item, i) => (\n        <p key={i} style={{color:'#888',margin:'4px 0',fontSize:'14px'}}>\n          {item.name} x {item.qty} = <span style={{color:'#06b6d4'}}>{'$'}{(item.price * item.qty).toFixed(2)}</span>\n        </p>\n      ))}\n      <hr style={{border:'1px solid #333',margin:'8px 0'}}/>\n      <p style={{color:'#10b981',fontSize:'18px',margin:'0 0 8px'}}>Total ({totalItems} items): <strong>{'$'}{totalCost.toFixed(2)}</strong></p>\n      <button onClick={addApple} style={{padding:'6px 12px',borderRadius:'6px',background:'#f59e0b',color:'#000',border:'none',cursor:'pointer'}}>+ Add Apple</button>\n      <p style={{color:'#888',fontSize:'12px',marginTop:'8px'}}>Total automatically updates on render!</p>\n    </div>\n  );\n}\n\nrender(<DerivedStateDemo />);`,
        xpReward: 15,
        levelRequired: 2,
        difficulty: 'Intermediate'
    }
];

export default lessons;
