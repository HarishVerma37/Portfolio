
import Navbar from './NavbarComponent/Navbar';
import Hero from './HeroComponents/Hero';
import About from './About/About';
import ContactTab from './ContactComponent/ContactTab';
import ProjectTab from './Projects/ProjectTab';
import Title from './Title';


import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Folio from './SkillsComonent/Folio';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <br /><br /><br /><br />
          <Hero />
        
        </div>
      ),
    },
    {
      path: "/About",
      element: (
        <div>
          <Navbar />
          <br />
          <About />
        </div>
      ),
    },
    {
      path: "/contactMe",
      element: (
        <div>
          <Navbar />
          <ContactTab />
        </div>
      ),
    },
    {
      path: "/Projects",
      element: (
        <div>
          <Navbar />
          <ProjectTab />
        </div>
      ),
    },

    {
      path:"/Skills",
      element:(
        <div>
             <Navbar />
        
             <Title Title="Skills"/>
            <Folio />
        </div>
      )
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
