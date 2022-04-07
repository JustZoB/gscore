import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, ContentContainer } from "./styles";

interface DashboardLayoutProps {
  children: React.ReactNode,
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  );
}
