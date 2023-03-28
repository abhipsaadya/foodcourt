import React from "react";
import Layout from "../components/layout/Layout";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          hic cupiditate cum molestiae? Repellendus, dolores!
        </p>
      </Box>
      <Box sx={{m:3,width:"600px",ml:5,"@media(max-width:600px)":{width:'300px'}}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black ",color:'white'}}align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
                  1234567890 (trollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneInTalkIcon sx={{ color: "green", pt: 1 }} />
                  987886576
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />
                  atinushelp@gmail.com 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
