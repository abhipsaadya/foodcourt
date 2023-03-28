import React from 'react'
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Banner from '../image/banner.jpg';
import "../style/foodstyle.css";



const Home = () => {
  return (
    <Layout>
       <div className="home" style={{backgroundimage: `url(${Banner})`}}>
       
        <div className="header">
          <h1>Food Website</h1>
          <p>Best food in India</p>
          <Link to="/menu">
          <button className="btn">Order now</button>
          </Link>
        
          
        </div>
       </div>
    </Layout>
  )
}

export default Home