import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./screens/Main";
import Drones from "./screens/Drones";
import Contact from "./screens/Contact";
import About from "./screens/About";
import Gallery from "./screens/Gallery";
import Photography from "./screens/Photography";
import Services from "./screens/Services";
import Construction from "./screens/Construction";
import Videography from "./screens/Videography";
import Infared from "./screens/Infared";
import Roof from "./screens/Roof";
import Event from "./screens/Event";
import Mapping from "./screens/Mapping";
import Certs from "./screens/Certs";
import Policy from "./screens/PrivacyPolicy";
import ClientPortal from "./screens/ClientPortal";
import Login from "./screens/Login";
import ClientDashboard from "./screens/ClientDashboard";
import AdminDashboard from "./screens/AdminDashboard";
import AddClient from "./screens/AddClient";
import CreateProject from "./screens/CreateProject";
import AdminProjectDetails from "./screens/AdminProjectDetails";
import EditProject from "./screens/EditProject";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/drones" element={<Drones />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/real-estate" element={<Photography />} />
        <Route path="/services/construction" element={<Construction />} />
        <Route path="/services/videography" element={<Videography />} />
        <Route path="/services/infared" element={<Infared />} />
        <Route path="/services/inspections" element={<Roof />} />
        <Route path="/services/events" element={<Event />} />
        <Route path="/services/mapping" element={<Mapping />} />
        <Route path="/certs" element={<Certs />} />
        <Route path="/privacy" element={<Policy />} />
        <Route path="/client-portal" element={<ClientPortal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/clients/new" element={<AddClient />} />
        <Route path="/admin/projects/new" element={<CreateProject />} />
        <Route path="/admin/projects/:projectId" element={<AdminProjectDetails />} />
        <Route path="/admin/projects/:projectId/edit" element={<EditProject />} />   

      </Routes>

      <Footer />
    </>
  );
}

export default App;