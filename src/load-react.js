
// Load React and ReactDOM globally
document.write('<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>');
document.write('<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>');

// After libraries are loaded, load the app
window.onload = function() {
  const script = document.createElement('script');
  script.src = '/src/App.js';
  script.type = 'text/javascript';
  document.body.appendChild(script);
}
