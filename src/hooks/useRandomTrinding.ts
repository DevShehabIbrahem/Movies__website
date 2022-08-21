import { useEffect, useState } from "react";
import baseURL from "../API/baseURL";

const useRandomTrinding = (url: string) => {
  const [trinding, setTrinding] = useState<any>([]);

  useEffect(() => {
    async function RandomTrinding() {
      const { data } = await baseURL.get(`${url}`);

      setTrinding(
        data?.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }

    RandomTrinding();
  }, []);
  return { trinding };
};

export default useRandomTrinding;
