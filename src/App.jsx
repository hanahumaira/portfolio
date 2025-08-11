import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarCanvas, SocialLinks } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="relative w-full min-h-screen">
            <StarCanvas />
            <Hero />
          </div>
        </div>
        <About />
        {/* <Experience /> */}
        <Works />
        <Tech />
        <SocialLinks />
        {/* <Feedbacks /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
