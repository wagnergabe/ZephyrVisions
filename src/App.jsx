import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav'
import landingPage from './assets/landing_page_zephyr.jpg'

function App() {
  return (
<div className="p-10 xl:p-24">
  <Nav/>
  <img className = "w-full h-full"src={landingPage}/>
  </div>
  );
}

export default App;
