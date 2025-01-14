import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './screens/Main';
import Footer from './components/Footer'


function App() {
  return (
<div className="h-full w-full border-blue-500">
  <Nav/>
  <Main />
  <Footer />
</div>
  );
}

export default App;
