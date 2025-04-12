import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { motion } from "framer-motion";
import vote from '../assets/vote.jpg';
import Todo from '../assets/Todo.jpeg';
import Echo from '../assets/echo.jpeg';
import MIni from '../assets/Mini project.jpeg';

const projects = [
  {
    title: "Smart Voting System",
    description: "Smart Voting System is a secure and transparent digital voting platform designed to streamline the election process. Developed using web technologies and powered by Python and MySQL on the backend, it ensures data integrity, voter authentication, and real-time result tracking.",
    image: vote,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python", "MySQL"],
    // github: "https://github.com/your-username/smart-voting-system",
  },
  {
    title: "Echo UI Cone",
    description: "Echo UI Cone is a responsive and intuitive user interface prototype for an AI-powered chatbot. Designed using HTML, CSS, and Bootstrap, it focuses on clean layout, accessibility, and a smooth user experience across devices.",
    image: Echo,
    technologies: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/divyasd10/Echo-UI-cone-",
  },
  {
    title: "To-Do List App",
    description: "To-Do List App is a modern task management tool built with React and Material UI, offering a clean interface for organizing daily tasks. It uses JSON Server to handle task data, enabling CRUD operations and a realistic user experience.",
    image: Todo,
    technologies: ["React.js","Material UI","Json Server"],
    github: "https://github.com/divyasd10/TodoList",
  },
  {
    title: "EcoGlow – Eco-Friendly E-commerce Platform",
    description:"EcoGlow is a sleek, eco-conscious e-commerce platform for browsing and buying sustainable products. Built with React and Material UI, it offers a smooth user experience and uses JSON Server to simulate backend operations like product and cart management",
    image: MIni,
    technologies: ["React.js", "Material UI", "Json Server"],
    github: "https://github.com/divyasd10/E-commerce-Website",
  }
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
            <Grid item xs={12} sm={6} md={6} key={index} sx={{ display: "flex" }}>
              <motion.div whileHover={{ scale: 1.05 }} style={{ width: "100%" }}>
                <Card sx={{ display: "flex", flexDirection: "column", height: "100%", maxWidth: 400, textAlign: "center", transition: "0.3s", margin: "0 auto" }}>
                  {project.image && (
                    <CardMedia component="img" height="220" image={project.image} alt={project.title} />
                  )}
                  <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: "Poppins, sans-serif", color: "#222222" }}>
                      {project.title}
                    </Typography>
                    {project.technologies.length > 0 && (
                      <Typography variant="body2" sx={{ fontFamily: "Poppins, sans-serif", color: "#666666", marginBottom: 2 }}>
                        <strong>Technologies Used:</strong> {project.technologies.join(", ")}
                      </Typography>
                    )}
                    <Typography sx={{ fontFamily: "Poppins, sans-serif", color: "#444444", lineHeight: 1.6, textAlign: "justify", maxWidth: "90%", margin: "0 auto", marginBottom: 2 }}>
                      {project.description}
                    </Typography>
                    {project.github && (
                      <Button
                        variant="contained"
                        size="small"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          alignSelf: "center",
                          backgroundColor: "#24292e",
                          "&:hover": { backgroundColor: "#444" },
                          fontFamily: "Poppins, sans-serif",
                          textTransform: "none",
                          marginTop: "10px"
                        }}
                      >
                        View on GitHub
                      </Button>
                    )}
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
