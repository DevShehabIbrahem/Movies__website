import { useEffect, useState } from "react";
import baseURL from "../API/baseURL";
import Request from "../API/Requests ";

const useRandomBanner = () => {
  const [banner, setBanner] = useState<any>([]);
  useEffect(() => {
    async function RandomBanner() {
      const res = await baseURL.get(`${Request.origienals}`);
      setBanner(
        res?.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
    }

    RandomBanner();
  }, []);
  return { banner };
};

export default useRandomBanner;
