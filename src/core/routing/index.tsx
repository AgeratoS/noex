import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Projects from "../../components/pages/Projects";
import MainPage from "../../components/pages/Main";
import ProjectPage from "../../components/pages/Project";
import AboutUs from "../../components/pages/AboutUs";
import Services from "../../components/pages/Services";
import Service from "../../components/pages/Service";
import Articles from "../../components/pages/Articles";
import Article from "../../components/pages/Article";
import Vacancies from "../../components/pages/Vacancies";
import Vacancy from "../../components/pages/Vacancy";
import Contacts from "../../components/pages/Contacts";
import Prices from "../../components/pages/Prices";

const AnimatedRouting = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="projects" Component={Projects} />
        <Route path="projects/:id" Component={ProjectPage} />
        <Route path="about" Component={AboutUs} />
        <Route path="prices" Component={Prices} />
        <Route path="services" Component={Services} />
        <Route path="services/:id" Component={Service} />
        <Route path="articles" Component={Articles} />
        <Route path="articles/:id" Component={Article} />
        <Route path="vacancies" Component={Vacancies} />
        <Route path="vacancies/:id" Component={Vacancy} />
        <Route path="contacts" Component={Contacts} />
        <Route path="/" Component={MainPage} index />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRouting;
