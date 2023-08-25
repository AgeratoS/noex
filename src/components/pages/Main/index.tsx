import MainLayout from "../../layouts/MainLayout";
import Container from "../../ui/atoms/Container";
import { ContainerMode } from "../../ui/atoms/Container/type";
import EngineerSurveyDescription from "../../ui/organisms/EngineerSurveyDescription";
import EngineerSurveyPurpose from "../../ui/organisms/EngineerSurveyPurpose";

const MainPage = () => {
  return (
    <MainLayout>
      <Container mode={ContainerMode.CONTAINER}>
        <EngineerSurveyPurpose />
        <EngineerSurveyDescription />
      </Container>
    </MainLayout>
  );
};

export default MainPage;
