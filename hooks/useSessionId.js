import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const SESSION_ID_KEY = "hotbutterfly-sessionid";

export default function useSessionId() {
  const key = SESSION_ID_KEY;
  const getDefault = () => {
    const value = uuidv4();
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  };
  const [sessionId, setSessionId] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      const initial = saved !== null ? JSON.parse(saved) : getDefault();
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(sessionId));
  }, [sessionId, key]);

  return [sessionId, setSessionId];
}
