import Link from "next/link";
import { useRouter } from "next/router";
import { SettingsNavbarItem } from "./SettingsNavbarItem";
import { SettingsNavbarContainer } from "./styles";

export const SettingsNavbar: React.FC = () => {
  const router = useRouter();

  return (
    <SettingsNavbarContainer>
      <Link href="/settings/update-data-form" passHref>
        <a>
          <SettingsNavbarItem active={router.route === '/settings/update-data-form'}>
          Personal info
          </SettingsNavbarItem>
        </a>
      </Link>
      <Link href="/settings/update-password" passHref>
        <a>
          <SettingsNavbarItem active={router.route === '/settings/update-password'}>
          Change password
          </SettingsNavbarItem>
        </a>
      </Link>
    </SettingsNavbarContainer>
  )
}
