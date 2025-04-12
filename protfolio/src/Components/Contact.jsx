import React from "react";
import { TextField, Button, Container, Typography, Box, Grid, Link, IconButton } from "@mui/material";
import { LinkedIn, GitHub, Instagram, Phone, Email, LocationOn } from "@mui/icons-material";
import { motion } from "framer-motion";
import contactImage from "../assets/contact.jpg";

const Contact = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 16 }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Box sx={{ p: 6, borderRadius: 2 }}>
          <Typography variant="h4" align="center" fontFamily="Times New Roman" fontSize="30px" fontWeight="bold" color="red" gutterBottom sx={{ mb: 4 }}>
            Contact
          </Typography>
          <Grid container spacing={10} alignItems="center">
            <Grid item xs={12} md={5}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Box
                  component="img"
                  src={contactImage}
                  alt="Contact"
                  sx={{ width: "100%", borderRadius: 2 }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={7}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Box component="form" display="flex" flexDirection="column" gap={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Email" type="email" variant="outlined" fullWidth required />
                    </Grid>
                  </Grid>
                  <TextField label="Subject" variant="outlined" fullWidth />
                  <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
                  <Button type="submit" variant="contained" sx={{ backgroundColor: "red", color: "white" }} fullWidth>
                    Send Message
                  </Button>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="center" gap={3} mt={8}>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton component={Link} href="https://www.linkedin.com/in/divyaselvan" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton component={Link} href="https://github.com/divyasd10" target="_blank" color="inherit">
                <GitHub />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton component={Link} href="mailto:divyas10012004@gmail.com" target="_blank" color="inherit">
                <Email />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton component={Link} href="tel:+918148179584" target="_blank" color="inherit">
                <Phone />
              </IconButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <IconButton component={Link} href="https://www.instagram.com/d_v_a.x?igsh=MWt2eHFhcTFwMmFlbg==" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;
