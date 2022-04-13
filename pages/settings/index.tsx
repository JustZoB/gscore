import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Settings() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const router = useRouter();

  useEffect(() => {
    authorization.user
    ? router.push('/settings/update-data-form')
    : router.push('/')
  }, [authorization, router])
}
