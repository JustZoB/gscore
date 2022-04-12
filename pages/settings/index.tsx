import { H2 } from "../../components/Titles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SettingsContainer, FormsContainer } from "./styles";
import { UpdateDataForm } from "./UpdateDataForm";
import { UpdatePassword } from "./UpdatePassword";

export default function Settings() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);

  return (
    <SettingsContainer>
      <H2 textAlign="left" marginBottom={48}>Settings</H2>
      <FormsContainer>
        <UpdateDataForm />
        <UpdatePassword />
      </FormsContainer>
    </SettingsContainer>
  )
}
