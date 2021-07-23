import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { Box, Container, Typography, Link } from "@material-ui/core";

const NotFound = () => {
  let history = useHistory();
  let location = useLocation();
  console.log(location);
  console.log(history);
  console.log(history.location.pathname);
  return (
    <main>
      <Container maxWidth="md">
        <Box
          style={{
            width: "70%",
            height: "70%",
            margin: "50px auto",
            textAlign: "center",
          }}
        >
          <Typography variant="h5">
            صفحه <strong>{location.pathname}</strong>&nbsp; یافت نشد...
          </Typography>

          <Link href="/"> بازگشت به صفحه اصلی</Link>
        </Box>
      </Container>
    </main>
  );
};

export default NotFound;
