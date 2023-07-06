import { createBrowserRouter } from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/projects",
    element: <Projects />,
  },

  {
    path: "/projects/:id",
    element: <ProjectPage />,
  },

  {
    path: "/about",
    element: <AboutUs />,
  },

  {
    path: "/services",
    element: <Services />,
  },

  {
    path: "/services/:id",
    element: <Service />,
  },

  {
    path: "/articles",
    element: <Articles />,
  },

  {
    path: "/articles/:id",
    element: <Article />,
  },

  {
    path: "/vacancies",
    element: <Vacancies />,
  },

  {
    path: "/vacancies/:id",
    element: <Vacancy />,
  },

  {
    path: "/contacts",
    element: <Contacts />,
  },

  {
    path: "/",
    element: <MainPage />,
  },
]);

export default router;
