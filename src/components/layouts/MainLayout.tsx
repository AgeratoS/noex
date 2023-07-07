import { PropsWithChildren } from "react";
import Header from "../ui/organisms/Header";
import Footer from "../ui/organisms/Footer";
import styled from "styled-components";

const MainLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentLayout = styled.div`
  flex: 1;
`;

const MainLayout = (props: PropsWithChildren) => {
  return (
    <MainLayoutWrapper>
      <Header />
      <ContentLayout>{props.children}</ContentLayout>
      <Footer />
    </MainLayoutWrapper>
  );
};

export default MainLayout;
