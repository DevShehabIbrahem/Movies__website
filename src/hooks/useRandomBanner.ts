import { useEffect, useState } from "react";
import baseURL from "../API/baseURL";
import Request from "../API/Requests ";

const useRandomBanner = () => {
  const [banner, setBanner] = useState<any>([]);
  useEffect(() => {
    async function RandomBanner() {
      const { data } = await baseURL.get(`${Request.origienals}`);
      setBanner(
        data?.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }

    RandomBanner();
  }, []);
  return { banner };
};

export default useRandomBanner;
