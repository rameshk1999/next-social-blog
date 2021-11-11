import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import instance from "../../../config";
import Layout from "../Layout";
import PostCard from "./PostCard";
import CategoryCard from "./CategoryCard";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();
  const [categories, setCategories] = useState();
  useEffect(() => {
    setLoading(true);
    instance
      .get("api/posts/getall")
      .then((res) => {
        setPosts(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });

    instance.get("api/categories/getall").then((res) => {
      setCategories(res.data.data);
      setLoading(false);
    });
  }, []);
  console.log(categories);
  return (
    <div>
      <Layout>
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            // justifyContent="center"
            // alignItems="center"
          >
            <Grid item md={8}>
              {loading && (
                <div>
                  <Card sx={{ maxWidth: 445, m: 2 }}>
                    <CardHeader
                      avatar={
                        loading ? (
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <Avatar
                            alt="Ted talk"
                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                          />
                        )
                      }
                      action={
                        loading ? null : (
                          <IconButton aria-label="settings"></IconButton>
                        )
                      }
                      title={
                        loading ? (
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                          />
                        ) : (
                          "Ted"
                        )
                      }
                      subheader={
                        loading ? (
                          <Skeleton animation="wave" height={10} width="40%" />
                        ) : (
                          "5 hours ago"
                        )
                      }
                    />
                    {loading ? (
                      <Skeleton
                        sx={{ height: 190 }}
                        animation="wave"
                        variant="rectangular"
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                        alt="Nicola Sturgeon on a TED talk stage"
                      />
                    )}
                  </Card>
                  <Card sx={{ maxWidth: 445, m: 2 }}>
                    <CardHeader
                      avatar={
                        loading ? (
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <Avatar
                            alt="Ted talk"
                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                          />
                        )
                      }
                      action={
                        loading ? null : (
                          <IconButton aria-label="settings"></IconButton>
                        )
                      }
                      title={
                        loading ? (
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                          />
                        ) : (
                          "Ted"
                        )
                      }
                      subheader={
                        loading ? (
                          <Skeleton animation="wave" height={10} width="40%" />
                        ) : (
                          "5 hours ago"
                        )
                      }
                    />
                    {loading ? (
                      <Skeleton
                        sx={{ height: 190 }}
                        animation="wave"
                        variant="rectangular"
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                        alt="Nicola Sturgeon on a TED talk stage"
                      />
                    )}
                  </Card>
                  <Card sx={{ maxWidth: 345, m: 2 }}>
                    <CardHeader
                      avatar={
                        loading ? (
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <Avatar
                            alt="Ted talk"
                            src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                          />
                        )
                      }
                      action={
                        loading ? null : (
                          <IconButton aria-label="settings"></IconButton>
                        )
                      }
                      title={
                        loading ? (
                          <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                          />
                        ) : (
                          "Ted"
                        )
                      }
                      subheader={
                        loading ? (
                          <Skeleton animation="wave" height={10} width="40%" />
                        ) : (
                          "5 hours ago"
                        )
                      }
                    />
                    {loading ? (
                      <Skeleton
                        sx={{ height: 190 }}
                        animation="wave"
                        variant="rectangular"
                      />
                    ) : (
                      <CardMedia
                        component="img"
                        height="140"
                        image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                        alt="Nicola Sturgeon on a TED talk stage"
                      />
                    )}
                  </Card>
                </div>
              )}
              {posts &&
                posts.length &&
                posts.map((post) => (
                  <Grid item key={post._id}>
                    <PostCard post={post} key={post._id} />
                  </Grid>
                ))}
            </Grid>

            <Grid item md={4}>
              <Box m={3}>
                {loading && (
                  <Skeleton
                    animation="wave"
                    height={100}
                    width="80%"
                    style={{ marginBottom: 6 }}
                  />
                )}
                {categories && categories.length && (
                  <div>
                    <Typography variant="h6">Categoriess</Typography>
                    <Stack direction="row" spacing={2}>
                      {categories.map((category) => (
                        <CategoryCard key={category._id} category={category} />
                      ))}
                    </Stack>
                  </div>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </div>
  );
};

export default HomePage;
