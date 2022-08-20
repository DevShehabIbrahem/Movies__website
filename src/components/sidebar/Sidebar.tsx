import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hook";
import { Fetchgenres, selectStatus } from "../../Redux/Reducers/Genres";
import { SearchMovies, SearchState } from "../../Redux/Reducers/SearchSlice";
import { useTypedSelector } from "../../Redux/store";

type Props = {};

const Sidebar = (props: Props) => {
  const [genres, setGenres] = useState<[]>([]);
  const [term, setTerm] = useState<string>("");

  const state = useTypedSelector(selectStatus);
  const dispatch = useAppDispatch();
  const Navigate = useNavigate();
  const [genresnum, setGenresnum] = useState<any>();

  const handleSearch = () => {
    dispatch(SearchMovies(term));
    if (term) Navigate("/search");
  };
  const handelChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGenresnum(e.target.value);
    Navigate(`/Genres/${genresnum}`);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=e99375d6ca88c9406621028a59f9ddfe&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    dispatch(Fetchgenres(genresnum));
  }, [genresnum]);
  return (
    <div className=" hidden  lg:flex lg:w-[20%] h-[30rem] border-l-2 border-[#ccc]">
      <div className="px-[2rem]">
        <div className="flex flex-col items-center justify-center">
          <button onClick={handleSearch}>search</button>
          <input
            type="text"
            onChange={(e) => setTerm(e.target.value)}
            value={term}
          />

          <select onChange={handelChange}>
            {genres.map((item: any) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <h3 className="text-left">Trending</h3>
          <div>
            <div>film1</div>
            <div>film2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
