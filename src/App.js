import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

const basename = process.env.NODE_ENV === 'production' ? "/personal-portfolio" : "";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet /> {/* This will render the Home or Experience components */}
      <Footer />
    </div>
  );
}

// Home page content
const Home = () => (
  <>
    <Banner />
    <Projects />
    <Skills />
    <Contact />
  </>
);

// Define the routes for your app
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,  // Main layout (NavBar and Footer)
    children: [
      {
        index: true,  // Renders Home by default on "/"
        element: <Home />
      },
      {
        path: 'experience',  // Renders Experience on "/experience"
        element: <Experience />
      }
    ]
  }
],
{ basename }
);

export default App;
