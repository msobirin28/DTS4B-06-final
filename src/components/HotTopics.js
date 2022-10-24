import { Box, Typography, Card, CardHeader, CardMedia, CardContent } from "@mui/material";

const HotTopics = ({ topics }) => {
  let date_1 = new Date(topics.published_at);
  let date_2 = new Date();

  const days = (date_1, date_2) => {
    let difference = date_2.getTime() - date_1.getTime();
    console.log(difference);
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    if (TotalDays > 0) {
      return TotalDays + " Days Ago";
    } else {
      let TotalDays = Math.ceil(difference / 3600000);
      return TotalDays + " Hours Ago";
    }
  };
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          position: "relative",
          textAlign: "center",
          color: "white",
          maxWidth: 870,
          maxHeight: 400,
        }}
      >
        <CardMedia component="img" sx={{ width: 870, height: 400 }} image={`${topics.image_url}`} alt="News Image" />
        <Box sx={{ position: "absolute", bottom: 8, left: 16, width: 400 }}>
          <Typography variant="h6" sx={{ textAlign: "left" }}>
            {topics.title}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
            }}
          >
            <Typography variant="body3" sx={{ marginRight: 2 }}>
              {days(date_1, date_2)}
            </Typography>
            <Typography variant="body3">{topics.source}</Typography>
          </Box>
        </Box>
      </Box>

      <Box>
        <CardContent>
          <Typography variant="body1" sx={{ textAlign: "left" }}>
            {topics.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default HotTopics;
