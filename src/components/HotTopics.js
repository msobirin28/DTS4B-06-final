import { Box, Typography, Card, CardHeader, CardMedia, CardContent } from "@mui/material";

const HotTopics = ({ topics }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CardHeader>
        <Typography variant="h3">Hot Topics</Typography>
      </CardHeader>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia component="img" sx={{ width: 870, height: 400 }} image={`${topics.image_url}`} alt="News Image" />
        <CardContent>
          <Typography variant="body1">{topics.description}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HotTopics;
