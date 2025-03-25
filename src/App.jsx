
import Navbar from './NavbarComponent/Navbar';
import Hero from './HeroComponents/Hero';
import About from './About/About';
import ContactTab from './ContactComponent/ContactTab';
import Title from './Title';

import Projects from './Projects/Projects';
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
          <Hero />
        </div>
      ),
    },

    {
      path: "/projects",
      element:
        <div>
          <Navbar />
          <Projects />
        </div>
    },

    {
      path: "/About",
      element:
        <div>
          <Navbar />
          <About />
        </div>

    },

    {
      path: "/contactMe",
      element:
        <div>
          <Navbar />
          <ContactTab />
        </div>
    },


    {
      path: "/Skills",
      element:
        <div>
          <Navbar />
          {/* <Title Title="Skills" /> */}
          <Folio />
        </div>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
