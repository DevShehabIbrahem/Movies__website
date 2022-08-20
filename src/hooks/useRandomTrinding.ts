import { useEffect, useState } from "react";
import baseURL from "../API/baseURL";
import Request from "../API/Requests ";

const useRandomTrinding = (url: string) => {
  const [trinding, setTrinding] = useState<any>([]);
  console.log(trinding);

  console.log(trinding);

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
