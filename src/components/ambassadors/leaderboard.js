import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useLeaderboardData } from "../../hooks/useQuery";

const columns = [
  { field: "id", headerName: "S.no", width: 70 }, // fixed size for serial number
  { field: "promoCode", headerName: "Promo Code", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "collegeName", headerName: "College Name", flex: 1 },
  {
    field: "score",
    headerName: "Score",
    width: 100, // fixed width for score for better visual appeal
    sortComparator: (v1, v2, row1, row2) => row2.score - row1.score,
  },
];
const Leaderboard = ({ data }) => {
  return (
    <Box
      sx={{
        overflow: {
          md: "unset",
          xs: "scroll",
        },
      }}
    >
      <Box
        sx={{
          width: {
            md: "100%",
            xs: "1000px",
          },
        }}
      >
        <DataGrid
          hideFooter
          rows={data}
          columns={columns}
          pageSize={5}
          sortingOrder={["desc", "asc"]}
        />
      </Box>
    </Box>
  );
};

export default Leaderboard;
