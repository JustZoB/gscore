import { useDispatch, useSelector } from "react-redux";
import { closeBurgerMenu } from "../../store/burgerMenu/reducers";
import { RootState } from "../../store/store";
import { BurgerMenu } from "../BurgerMenu";
import { BurgerMenuOverlay } from "../BurgerMenu/BurgerMenuOverlay";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, ContentContainer } from "./styles";

interface DashboardLayoutProps {
  children: React.ReactNode,
};

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const authorization = useSelector((state: RootState) => state.authorizationSlice);

  return (
    <Container>
      {authorization.user &&
        <>
          <BurgerMenu />
          <BurgerMenuOverlay onClick={() => dispatch(closeBurgerMenu())}/>
        </>
      }
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  );
}
