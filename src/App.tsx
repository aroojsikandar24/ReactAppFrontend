import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import BlogDetail from './pages/BlogDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <>
      {/* Main Content */}
      <div className='p-[20px]'>
        {/* Header */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
