import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/navbar/NavBar';
import Home from './pages/Home'; // Import the Home component
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';

import Gallery from './pages/Gallery';
import Collections from './pages/gallerypages/Collections';
import Fabrics from './pages/gallerypages/Fabrics'

import GarmentViewer from './pages/GarmentViewer';
import Workshops from './pages/Workshops';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import BookConsultation from './pages/BookConsultation';
import Footer from './components/footer/Footer';

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/services" element={<Services />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/gallerypages/collections" element={<Collections />} />
					<Route path="/gallerypages/fabrics" element={<Fabrics />} />
					<Route path="/garment-viewer" element={<GarmentViewer />} />
					<Route path="/workshops" element={<Workshops />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/book-consultation" element={<BookConsultation />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
