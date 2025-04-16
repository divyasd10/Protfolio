import React from "react";
import { Box, Typography, Grid, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import divya from "../assets/div.jpg";
import resume from "../Components/Resume.pdf";

const About = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Box sx={{ backgroundColor: "#FCFCFF", paddingBottom: "5%" }}>
        <Grid container spacing={2} padding={{ xs: "12% 5%", md: "8% 4%" }} alignItems="center">
          {/* Left Section - About Info */}
          <Grid item xs={12} md={6} textAlign={{ xs: "center", md: "left"}}>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <Typography variant="h3" fontWeight="bold" color="red" gutterBottom mt="100px">
                About Me
              </Typography>
              <Typography sx={{ marginTop: 2, fontSize: "16px", color: "#444", fontWeight: "500" }}>
              Hello, I’m Divya! I’m a recent BCA graduate (2024) and a passionate Frontend Developer. I specialize in building user-friendly, responsive websites using HTML, CSS, JavaScript, and React. I’m eager to apply my skills in creating dynamic, interactive web experiences and always excited to learn new technologies to stay current in frontend development.
              I have worked on several projects during my studies, which have helped me enhance my skills and knowledge in web development. Notably, I built a personal portfolio and a mini ecommerce website using React.js. These projects allowed me to implement my knowledge of frontend technologies while focusing on creating engaging, user-friendly designs. Additionally, I completed a one-month internship. This experience has given me a solid foundation in frontend technologies, and I’m looking forward to applying my expertise to create innovative, engaging, and functional web applications.


              </Typography>
            </motion.div>
            <Grid container spacing={2} sx={{ marginTop: 3 }}>
              <Grid item>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
                  <Button
                    variant="contained"
                    href={resume}
                    target="_blank"
                    download
                    sx={{
                      backgroundColor: "red",
                      color: "dark gray",
                      padding: "10px 20px",
                      fontWeight: "bold",
                      borderRadius: "25px",
                      transition: "0.3s",
                      "&:hover": { backgroundColor: "red", transform: "scale(1.1)" },
                    }}
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.2 }}>
                  <Button
                    variant="outlined"
                    component={Link}
                    to="/contact"
                    sx={{
                      color: "red",
                      border: "2px solid red",
                      padding: "10px 20px",
                      fontWeight: "bold",
                      borderRadius: "25px",
                      transition: "0.3s",
                      "&:hover": { backgroundColor: "transparent", transform: "scale(1.1)" },
                    }}
                  >
                    Contact Me
                  </Button>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
          {/* Right Section - Image */}
          <Grid item xs={12} md={6} display="flex" justifyContent={{ xs: "center", md: "right" }}>
            <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
              <Box sx={{ width: { xs: "80%", sm: "70%", md: "320px" }, height: { xs: "250px", sm: "350px", md: "420px" }, overflow: "hidden", borderRadius: "20px", boxShadow: "0px 5px 15px rgba(0,0,0,0.2)" }}>
                <img src={divya} alt="Divya" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </Box>
            </motion.div>
          </Grid>
          {/* Skills Section */}
          <Grid item xs={12} textAlign="center">
            <Typography variant="h4" fontWeight="bold" color="red" fontFamily="Lato" gutterBottom>
              My Skills
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2 }}>
              {["HTML", "CSS", "Bootstrap", "JavaScript", "React","Material UI"].map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 + index * 0.2 }}>
                    <Card sx={{ maxWidth: 345, textAlign: "center", padding: "10px", transition: "0.3s", "&:hover": { transform: "scale(1.05)", backgroundColor: "whitesmoke", color: "red" } }}>
                      <CardContent>
                        <Typography variant="h5" fontWeight="bold">
                          {skill}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default About;
