import Navbar from "../Components/Navbar/Navbar";
import SocialIcons from "../Components/Social_icons/SocialIcons";
import Banner from "../Pages/Banner";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SocialIcons />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
