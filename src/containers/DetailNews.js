import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import thenewsapi from "../apis/thenewsapi";
import HotTopics from "../components/HotTopics";
import LatestNews from "../components/LatestNews";

const HomeNews = () => {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  let date_1 = new Date(detail.published_at);
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
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedMovies = await thenewsapi.get("news/uuid/" + params.uuid);
        setDetail(fetchedMovies.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "left" }}>
        Hot Topics
      </Typography>
      <Box>
        <Card sx={{ maxWidth: "100%" }}>
          <CardMedia
            component="img"
            image={`${detail.image_url}`}
            alt={`${detail.title}`}
            sx={{
              height: 400,
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "left" }}>
              {detail.title}
            </Typography>
            <Box
              sx={{
                maxWidth: 400,
                display: "flex",
              }}
            >
              <Typography variant="body2" sx={{ marginRight: 2, width: "auto" }}>
                {days(date_1, date_2)}
              </Typography>
              <Typography variant="body2">{detail.source}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "left", marginTop: 5, marginBottom: 5 }}>
              {detail.description}
            </Typography>
            <Button variant="outlined" href={`${detail.url}`} target="_blank">
              Read More
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default HomeNews;
