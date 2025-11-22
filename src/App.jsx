import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/Nav';
import Main from './screens/Main';
import Drones from './screens/Drones';
import Contact from './screens/Contact';
import About from './screens/About';
import Gallery from './screens/Gallery'
import Photography from './screens/Photography';
import Footer from './components/Footer';
import Services from './screens/Services'
import Construction from './screens/Construction';
import Videography from './screens/Videography';
import Infared from './screens/Infared';
import Roof from './screens/Roof';
import Event from './screens/Event';
import Mapping from './screens/Mapping'
import Certs from './screens/Certs'
import Policy from './screens/PrivacyPolicy';



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
  <Route path='/services/real-estate' element={<Photography />}></Route>
  <Route path='/services/construction' element={<Construction />}></Route>
  <Route path='/services/videography' element={<Videography />}></Route>
  <Route path='/services/infared' element={<Infared />}></Route>
  <Route path='/services/inspections' element={<Roof />}></Route>
  <Route path='/services/events' element={<Event />}></Route>
  <Route path='/services/mapping' element={<Mapping />}></Route>
  <Route path='/certs' element={<Certs />}></Route>
  <Route path ='/privacy' element={<Policy />}></Route>
  

 </Routes>
 <Footer/>
</>
  );
}

export default App;
