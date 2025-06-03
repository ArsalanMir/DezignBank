import './App.css'
import SignUp from "../src/Pages/login-signup/SignUp"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/login-signup/Login'
import Home from './Pages/Home'
import DashboardMain from './Pages/DashboardMain'
import DesignUploads from './Pages/DesignUploads'
import MoodUploads from './Pages/MoodUploads'
import Analytics from './Pages/Analytics'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import Vendor from './Pages/Vendor'
import VendorHome from './Component/Dashboard/VendorHome'
import VendorUpload from './Pages/VendorUpload'
import VendorProfile from './Pages/VendorProfile'





function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardMain />} />
        <Route path="/design-uploads"element={<DesignUploads />} />
        <Route path="/upload-moodboard" element={<MoodUploads />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/vendor-uploads" element={<VendorUpload />} />
        <Route path="/vendor-profile" element={<VendorProfile />} />
        
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
