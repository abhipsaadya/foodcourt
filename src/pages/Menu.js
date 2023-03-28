import React, { useState } from "react";
import { MenuList } from "../data/Data";
import Layout from '../components/layout/Layout';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";

const Menu = () => {

  const [menu,setMenu]=useState(MenuList);

  const filteritems=(curitems)=>{
    const updateitem=MenuList.filter((cur,ind)=>{
      return cur.category == curitems;

    })
    setMenu(updateitem)

  }
  return (
    <Layout>
      <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        <h1>Our Menu</h1>
      </Box>
     <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center",justifyContent:"space-evenly",mt:5,mb:5}}>
    
      <button onClick={()=>filteritems("breakfast")}>Breakfast</button>
      <button onClick={()=>filteritems("Main course")}>Main Course</button>
      <button onClick={()=>filteritems("fastfood")}>Fastfood</button>
      <button onClick={()=>filteritems("desert")}>Desert</button>
      <button onClick={()=>setMenu(MenuList)}>All</button>
     
     </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menu.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m:1}}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h3" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="h5" gutterBottom component={"div"}>
                <CurrencyRupeeIcon/>{menu.price}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;