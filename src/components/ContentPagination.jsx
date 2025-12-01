import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const ContentPagination = ({ page, setPage, total_pages }) => {

  const handleChange = (event, value) => {
    setPage(value)
  };

  //console.log(page)

  return (
    <Stack spacing={2}>
      <Pagination count={total_pages > 500 ? 500 : total_pages} onChange={handleChange} />
    </Stack>
  );
};
