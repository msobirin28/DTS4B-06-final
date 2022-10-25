import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import thenewsapi from "../apis/thenewsapi";

const HomeNews = () => {
  const [detail, setDetail] = useState([]);
  const params = useParams();
  let date_1 = new Date(detail.published_at);
  let date_2 = new Date();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
  }, [params.uuid]);

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
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              color: "white",
            }}
          >
            <CardMedia
              component="img"
              image={`${detail.image_url}`}
              alt={`${detail.title}`}
              sx={{
                height: 400,
              }}
            />
            <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              onClick={handleMenu}
              sx={{
                mr: 1,
                ml: 2,
                position: "absolute",
                top: 8,
                right: 16,
              }}
            >
              <MoreVertIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>Simpan Favorite</MenuItem>
            </Menu>
          </Box>

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
              {detail.snippet ? detail.snippet : detail.description}
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
