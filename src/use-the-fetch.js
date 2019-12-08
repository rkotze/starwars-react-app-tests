import { useState, useEffect } from "react";
import { getStarWars } from "./base-fetch";
export function useTheFetch(path) {
  const [result, setResult] = useState({ loading: true, data: null });
  async function fetchData() {
    const data = await getStarWars(path);
    setResult({ loading: false, data });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return result;
}
