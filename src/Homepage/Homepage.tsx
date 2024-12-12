import { Card, Title } from "../shared";
import { PageContainer } from "../shared/PageContainer/PageContainer";
import { Titlebar } from "../shared/Titlebar/Titlebar";

export const Homepage = () => {
  return (
    <PageContainer>
      <Titlebar>Homepage</Titlebar>
      <Card>
        <Title>Hello World!</Title>
      </Card>
    </PageContainer>
  );
};
