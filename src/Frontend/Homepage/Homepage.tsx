import { Card, SectionTitle } from "../shared";
import { PageContainer } from "../shared/PageContainer/PageContainer";
import { Titlebar } from "../shared/Titlebar/Titlebar";

export const Homepage = () => {
  return (
    <PageContainer>
      <Titlebar>Homepage</Titlebar>
      <Card>
        <SectionTitle>Hello World!</SectionTitle>
      </Card>
    </PageContainer>
  );
};
