import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Authorization() {
  const authorization = useSelector((state: RootState) => state.authorizationSlice);
  const router = useRouter();

  useEffect(() => {
    authorization.user
    ? router.push('/authorization/checkout')
    : router.push('/authorization/sign-up')
  }, [authorization, router])
}
