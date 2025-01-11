import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './screens/Main';


function App() {
  return (
<div className="h-full w-full border-blue-500">
  <Nav/>
  <Main />
</div>
  );
}

export default App;
