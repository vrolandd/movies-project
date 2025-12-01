import React, { useEffect, useState } from "react";
import { getGenres } from "../utils.js";
import { Stack } from "@mui/material";
import { SingleChip } from "./SingleChip.jsx";

export const Genres = ({ type, selectedGenres, setSelectedGenres }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setData(await getGenres({ queryKey: ["genres", type] }));
    }
    fetchData();
  }, [selectedGenres]);

  //console.log(data)

  //data && console.log(data.genres);

  //console.log(selectedGenres);

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center">
      {data &&
        data.genres.map((obj) => (
          <SingleChip
            key={obj.id}
            {...obj}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        ))}
    </Stack>
  );
};
