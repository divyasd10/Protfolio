
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeImage from "../assets/home.jpg"; // Adjust the path as needed


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          color: "#333333",
          textAlign: "center",
          padding: "20px",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Poppins, sans-serif", color: "#222222" }}>
            Hello, I'm <span style={{ color: "red" }}>Divya</span>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              marginTop: 2,
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "Poppins, sans-serif",
              color: "#222222",
              justifyContent: "center",
            }}
          >
            I'm
            <span style={{ color: "red", paddingRight: "7px" }}>
              <Typewriter words={["React Developer", "Frontend Developer"]} loop cursor cursorStyle="|" typeSpeed={130} deleteSpeed={50} />
            </span>
          </Typography>

          <Typography
            sx={{
              marginTop: 3,
              fontSize: "16px",
              fontWeight: "400",
              maxWidth: "600px",
              fontFamily: "Poppins, sans-serif",
              color: "#444444",
              mx: "auto",
            }}
          >
            A passionate Frontend and React developer with experience in building user-friendly web applications. Always eager to learn and explore new technologies to create stunning and responsive designs.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, marginTop: 4, justifyContent: "center" }}>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "red",
                    color: "dark gray",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    fontFamily: "Poppins, sans-serif",
                    transition: "0.3s",
                    "&:hover": { backgroundColor: "red", transform: "scale(1.1)" },
                  }}
                >
                  More About Me
                </Button>
              </motion.div>
            </Link>

            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }}>
              <Button
                variant="contained"
                component="a"
                href="/Divya.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: "white",
                  borderColor: "red",
                  color: "red",
                  padding: "10px 20px",
                  borderRadius: "10px",
                  fontFamily: "Poppins, sans-serif",
                  transition: "0.3s",
                  "&:hover": { color: "red", transform: "scale(1.1)" },
                }}
              >
                View My Resume
              </Button>
            </motion.div>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
          }}
        >
          <motion.img
            src={homeImage}
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            style={{ width: "500px", height: "auto" }}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Home;
