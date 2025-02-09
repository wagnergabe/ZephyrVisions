import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './screens/Main';
import Drones from './screens/Drones';
import Contact from './screens/Contact';
import About from './screens/About';
import Gallery from './screens/Gallery'
import Footer from './components/Footer';
import Services from './screens/Services'



function App() {
  return (
    <>
<Nav/>
<Routes>
  <Route path='/' element={<Main />}></Route>
  <Route path='/drones' element={<Drones/>}></Route>
  <Route path='/about' element={<About />}> </Route>
  <Route path='/contact' element={<Contact />}></Route>
  <Route path='/gallery' element={<Gallery />}></Route>
  <Route path='/services' element={<Services />}></Route>
  

 </Routes>
 <Footer/>
</>
  );
}

export default App;
