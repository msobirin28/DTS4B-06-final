import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import thenewsapi from "../apis/thenewsapi";
import HotTopics from "../components/HotTopics";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Home = () => {
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const fetchedTopics = await thenewsapi.get("news/top", { params: { limit: 5 } });
        setTopics(fetchedTopics.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopics();
  }, []);

  const handleClick = (uuid) => {
    navigate("/detailnews/" + uuid);
  };

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
          Hot Topics
        </Typography>
        {topics.map((topics) => (
          <HotTopics topics={topics} handleClick={handleClick} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
