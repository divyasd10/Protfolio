import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import vote from '../assets/vote.jpg';
import Todo from '../assets/Todo.jpeg';

const projects = [
  {
    title: "Smart Voting System",
    description: "A blockchain-based voting system ensuring secure and transparent elections.",
    image: vote,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "MySQL"],
  },
  {
    title: "Echo Project",
    description: "An AI-powered chatbot that assists users with real-time queries and responses.",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/echo-free-template.jpg.avif",
    technologies: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "To-Do List App",
    description: "A simple and efficient task management application to help users organize their daily activities.",
    image: Todo,
    technologies: ["React.js", "JavaScript", "CSS", "LocalStorage"],
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Box sx={{ padding: "5%", textAlign: "center", backgroundColor: "#f9f9f9", mt: 12 }}>
        <Typography variant="h3" fontWeight="bold" sx={{ fontFamily: "Times New Roman", color: "red", marginBottom: 5 }}>
          My Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
              <motion.div whileHover={{ scale: 1.05 }} style={{ width: "100%" }}>
                <Card sx={{ display: "flex", flexDirection: "column", height: "100%", maxWidth: 345, textAlign: "center", transition: "0.3s" }}>
                  <CardMedia component="img" height="220" image={project.image} alt={project.title} />
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Poppins, sans-serif", color: "#222222" }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif", color: "#666666", marginBottom: 2 }}>
                      <strong>Technologies Used:</strong> {project.technologies.join(", ")}
                    </Typography>
                    <Typography sx={{ fontFamily: "Poppins, sans-serif", color: "#444444", lineHeight: 1.6, textAlign: "justify", maxWidth: "90%", margin: "0 auto" }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default Projects;