import {
  ChangeEvent,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Redux/hook";
import { Fetchgenres } from "../Redux/Reducers/Genres";
import { fetchGenres } from "./utitly";

const Select = () => {
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();
  const [genres, setGenres] = useState<[]>([]);
  const [genresnum, setGenresnum] = useState<any>();

  const handelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenresnum(e.target.value);
    Navigate(`/Genres/${genresnum}`);
  };

  useEffect(() => {
    fetchGenres(setGenres);
    dispatch(Fetchgenres(genresnum));
  }, [genresnum]);

  return (
    <select
      onChange={handelChange}
      className="w-60 ml-[50px] rounded-md drop-shadow-md bg-gray-300 
    hover:bg-gray-200  outline text-black p-2 text-[1rem]"
    >
      {genres.map((item: any) => (
        <option value={item.id} key={item.id} className="font-bold">
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
