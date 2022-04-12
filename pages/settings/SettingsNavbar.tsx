import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { SettingsNavbarItem } from "./SettingsNavbarItem";
import { SettingsNavbarContainer } from "./styles";
import { setSettingsNav } from "../../store/authorization/reducers";

export const SettingsNavbar: React.FC = () => {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const dispatch = useDispatch();
  
  const navigateToPersonalInfo: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (authorization.settingsNav !== 'personalInfo') {
      dispatch(setSettingsNav('personalInfo'))
    }
  }
  const navigateToChangePassword: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (authorization.settingsNav !== 'changePassword') {
      dispatch(setSettingsNav('changePassword'))
    }
  }

  return (
    <SettingsNavbarContainer>
      <SettingsNavbarItem
        onClick={navigateToPersonalInfo}
        active={authorization.settingsNav === 'personalInfo'}
      >
        Personal info
      </SettingsNavbarItem>
      <SettingsNavbarItem
        onClick={navigateToChangePassword}
        active={authorization.settingsNav === 'changePassword'}
      >
        Change password
      </SettingsNavbarItem>
    </SettingsNavbarContainer>
  )
}
