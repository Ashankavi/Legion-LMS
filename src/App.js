import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Overview from './Components/Overview';
import Listing from './Components/Lisitng/Listing';
import Package from './Components/Packages/Package';
import Playground from './Components/Playground/Playground';
import Certificate from './Components/Certificate/Certificate';
import Badge from './Components/Badge/Badge';
import User from './Components/User/User';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <Router>
      <div className="flex App">
        <Navigation />
        <div className="flex-grow content">
          <Routes>
            <Route path="/overview" element={<Overview />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/package" element={<Package />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/badge" element={<Badge />} />
            <Route path="/user" element={<User />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
