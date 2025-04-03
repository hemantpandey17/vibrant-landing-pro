
// Use require-like syntax instead of ES imports for compatibility
const React = window.React;
const ReactDOM = window.ReactDOM;
const App = window.App;

const createRoot = ReactDOM.createRoot;

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(React.createElement(App));
