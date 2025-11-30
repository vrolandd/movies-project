import React, { useEffect } from "react";
import { PageLayout } from "../components/PageLayout.jsx";
import { Grid } from "@mui/material";
import { getData } from "../utils.js";
import { MyCard } from "../components/MyCard.jsx";
import { MySpinner } from "../components/MySpinner.jsx";
import { useState } from "react";

export const Movies = (props) => {
  const [page, setPage] = React.useState(1);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //console.log(page);

  useEffect(() => { 
    async function fetchData() {
      setLoading(true)
      setData(await getData({queryKey:['movies','movie',page,selectedGenres]}))
      setLoading(false)
    }
    fetchData()
  }, [page, selectedGenres])

  return (
    <PageLayout
      title="Movies"
      page={page}
      setPage={setPage}
      type="movie"
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      data={data}
    >
      {isLoading ? (
        <MySpinner />
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {data && data.results?.map((obj) => <MyCard key={obj.id} {...obj} />)}
        </Grid>
      )}
    </PageLayout>
  );
};
