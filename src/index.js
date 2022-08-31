import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


// getting the index.html and rendering with the App
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />)