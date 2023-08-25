import MainLayout from "../../layouts/MainLayout";
import Container from "../../ui/atoms/Container";
import { ContainerMode } from "../../ui/atoms/Container/type";
import EngineerSurveyDescription from "../../ui/organisms/EngineerSurveyDescription";
import EngineerSurveyKinds from "../../ui/organisms/EngineerSurveyKinds";
import EngineerSurveyPurpose from "../../ui/organisms/EngineerSurveyPurpose";

const MainPage = () => {
  return (
    <MainLayout>
      <Container mode={ContainerMode.CONTAINER}>
        <EngineerSurveyPurpose />
        <EngineerSurveyKinds />
        <EngineerSurveyDescription />
      </Container>
    </MainLayout>
  );
};

export default MainPage;
