import { About } from "./About";
import { Achievement } from "./Acheivements";
import "./App.css";
import { Contact } from "./Contact";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Project } from "./Projects";
import { Service } from "./Services";
import { Technology } from "./Tecnology";
export const Home = () => {
  return (
    <>
      <div className="homepage">
        <Header />
        <Hero />
      </div>
      <Achievement />
      <About />
      <Features />
      <Service />
      <Project />
      <Technology />
      <Contact />
      <Footer />
    </>
  );
};
