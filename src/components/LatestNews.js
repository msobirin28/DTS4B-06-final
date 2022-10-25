import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

const LatestNews = ({ news, handleClick }) => {
  let date_1 = new Date(news.published_at);
  let date_2 = new Date();
  const source = news.source.substring(0, news.source.indexOf(".")).replaceAll("-", "");

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
    <Card sx={{ maxWidth: 270, marginTop: 4 }}>
      <CardActionArea onClick={() => handleClick(news.uuid)}>
        <CardMedia component="img" width="270" height="176" image={`${news.image_url}`} alt={`${news.title}`} />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography gutterBottom variant="h6" component="div">
            {news.title}
          </Typography>
          <Box
            sx={{
              maxWidth: 400,
              display: "flex",
            }}
          >
            <Typography variant="body2" sx={{ marginRight: 2, width: "auto" }} color="text.secondary">
              {days(date_1, date_2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {source}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LatestNews;
