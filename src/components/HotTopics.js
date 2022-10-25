import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

const HotTopics = ({ topics, handleClick }) => {
  let date_1 = new Date(topics.published_at);
  let date_2 = new Date();

  const days = (date_1, date_2) => {
    let difference = date_2.getTime() - date_1.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    if (TotalDays > 0) {
      return TotalDays + " Days Ago";
    } else {
      let TotalDays = Math.ceil(difference / 3600000);
      return TotalDays + " Hours Ago";
    }
  };
  return (
    <Card>
      <CardActionArea
        onClick={() => handleClick(topics.uuid)}
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
          <CardMedia component="img" sx={{ width: 870, height: 400 }} image={`${topics.image_url}`} alt={`${topics.title}`} />
          <Box sx={{ position: "absolute", bottom: 8, left: 16, width: 400 }}>
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              {topics.title}
            </Typography>
            <Box
              sx={{
                maxWidth: 400,
                display: "flex",
              }}
            >
              <Typography variant="body3" sx={{ marginRight: 2, width: "auto" }}>
                {days(date_1, date_2)}
              </Typography>
              <Typography variant="body3">{topics.source}</Typography>
            </Box>
          </Box>
        </Box>

        <Box>
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "left" }}>
              {topics.snippet}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default HotTopics;
