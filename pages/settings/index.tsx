import { H2 } from "../../components/Titles";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SettingsContainer, FormsContainer } from "./styles";
import { UpdateDataForm } from "./UpdateDataForm";
import { UpdatePassword } from "./UpdatePassword";
import Link from 'next/link'

export default function Settings() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);

  return (
    <SettingsContainer>
      <H2 textAlign="left" marginBottom={48}>Settings</H2>
      {authorization.user ?
        <>
        {authorization.user.token &&
          <FormsContainer>
            <UpdateDataForm />
            <UpdatePassword />
          </FormsContainer>
        }
        </>
      :
      <Link href="/authorization">Please login</Link>
    }
      
    </SettingsContainer>
  )
}
