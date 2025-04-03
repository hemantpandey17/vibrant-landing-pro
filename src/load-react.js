
// Load React and ReactDOM globally
document.write('<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"></script>');
document.write('<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"></script>');

// After libraries are loaded, load the app
window.onload = function() {
  // We need to make sure App.js is loaded
  const script = document.createElement('script');
  script.src = '/dist/bundle.js';
  script.type = 'text/javascript';
  document.body.appendChild(script);
}
