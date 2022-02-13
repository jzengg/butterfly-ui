import { useRouter } from "next/router";
import { useCallback } from "react";

export default function useGetHrefWithQuery() {
  const router = useRouter();
  return useCallback(
    (pathname) => ({
      pathname,
      query: { ...router.query },
    }),
    [router]
  );
}
