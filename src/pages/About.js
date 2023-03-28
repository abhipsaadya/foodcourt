import { Box } from "@mui/system";
import React from "react";
import Layout from "../components/layout/Layout";
import { Typography } from "@mui/material";
import "../style/aboutstyle.css";


const About = () => {
  return (
    <Layout>
      <Box className="about">
        <Typography variant="h4" sx={{textAlign: 'center',marginTop:15,fontWeight: 'bold'}}>Welcome to my Resturant.</Typography>
        <p className="p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          suscipit voluptas nulla rerum vel cupiditate ab quia minus quo
          perferendis ex tempore dolores repudiandae vitae odio veritatis sint
          eveniet, obcaecati fugit iste pariatur itaque nemo. Omnis dicta, et
          deleniti aut vel officiis dolorem expedita error laudantium ad
          blanditiis harum iure nam molestias nisi porro minima a sequi
          distinctio ipsam eos accusantium unde numquam! Qui quibusdam ad dolor
          aperiam cum odit, asperiores harum, id, natus debitis doloribus dicta
          culpa commodi laborum eum et optio quia possimus! Soluta natus,
          doloribus, nihil dolorem beatae veritatis enim quae deserunt ipsum
          aliquam nam eos veniam?
        </p>
        <br />
        <p className="p2" >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
          aliquid, commodi ab cum fugit optio repellat exercitationem,
          aspernatur earum tempore quibusdam quae animi eius laudantium magnam
          corporis rerum neque tenetur, sapiente debitis culpa labore voluptate
          architecto? Vel excepturi officiis expedita totam, quasi quidem
          facilis ipsa, laboriosam labore voluptate molestiae. Ipsam eos libero
          deserunt earum eveniet quod eaque quibusdam error ex est nihil
          molestias accusantium voluptatum at maxime fugiat perferendis rerum,
          dolore laudantium atque quae porro nisi aspernatur exercitationem! Qui
          a odit itaque recusandae ratione facere dicta, odio fugiat. Atque
          tempora alias, nulla a voluptatum reiciendis magnam eos odio
          accusantium voluptatem?
        </p>
      </Box>
    </Layout>
  );
};

export default About;
