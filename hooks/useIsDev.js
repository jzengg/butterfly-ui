import { useRouter } from "next/router";

export default function isDev(url) {
  const router = useRouter();
  const debug = router.query.js_debug;
  if (debug === "1") {
    return true;
  }
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("hotbutterfly-isdev");
    return value === "true";
  }
  return false;
}
