import { Box, Divider, Pagination, Stack, Typography } from "@mui/material";

const ServiceSortPagination = ({ setPage, count, page }) => {
  const handleChange = (e, p) => {
    setPage(p);
  };
  return (
    <Box
      style={{
        backgroundColor: "#181818",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        fontSize: "10px",
        marginTop: "85px",
      }}
    >
      <Stack spacing={2} sx={{ marginTop: "-50px" }}>
        <Pagination
          page={page}
          onChange={handleChange}
          sx={{ button: { color: "#fff" } }}
          count={count}
          color="primary"
          size="small"
        />
      </Stack>
    </Box>
  );
};

export default ServiceSortPagination;
