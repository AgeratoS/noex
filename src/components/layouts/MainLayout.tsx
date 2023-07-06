import { PropsWithChildren } from "react";
import Header from "../ui/organisms/Header";
import Footer from "../ui/organisms/Footer";

const MainLayout = (props: PropsWithChildren) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default MainLayout;
