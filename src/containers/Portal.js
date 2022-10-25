import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import TabCategory from "../components/TabCategory";

const Portal = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: 5,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Categories
        </Typography>
        <TabCategory />
      </Box>
    </Box>
  );
};

export default Portal;
