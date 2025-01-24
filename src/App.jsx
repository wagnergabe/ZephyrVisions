import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './screens/Main';
import Drones from './screens/Drones' 
import Footer from './components/Footer'


function App() {
  return (
    <>
{/* <div className="h-full w-full border-blue-500">
  <Nav/>
  <Main/>
  <Footer />
</div> */}
<Nav/>
<Routes>
  <Route path='/' element={<Main />}></Route>
  <Route path='/drones' element={<Drones/>}></Route>
 </Routes>
 <Footer/>
</>
  );
}

export default App;
