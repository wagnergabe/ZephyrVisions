import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Drones from './screens/Drones';


export const router = createBrowserRouter([
    { path: '/', element: <App />},
    { path: '/drones', element: <Drones />}
])
