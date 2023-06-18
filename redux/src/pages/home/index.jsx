import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useLocalStorage } from "../../hooks/localStorage";
import { useNavigate } from "react-router-dom";
import PostForm from "../../component/PostForm";
import Feed from "../../component/Feed";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { posts } = useSelector((state) => state.postSlice);
  const [credential] = useLocalStorage("credential");
  const navigate = useNavigate();

  const checkLogin = () => {
    if (!credential) {
      navigate("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  }, [credential]);

  return (
    <div>
      <div style={{ maxWidth: 1000, margin: "auto" }}>
        <Grid container spacing={1}>
          <Grid item md={3} lg={3}>
            <PostForm />
          </Grid>
          <Grid item md={3} lg={3}>
            <h1>{posts}</h1>
          </Grid>
          <Grid item md={6} lg={6} style={{ padding: 0 }}>
            <Feed />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HomePage;
