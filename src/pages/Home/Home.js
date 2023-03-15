import React from "react";
import Banner from "../../components/Banner/Banner";
import BuildExperience from '../../components/BuildExperience/BuildExperience';
import DesignBrand from "../../components/DesignBrand/DesignBrand";
import CreateStories from "../../components/CreateStories/CreateStories";
import FooterBanner from "../../components/FooterBanner/FooterBanner";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <BuildExperience/>
        <DesignBrand/>
        <CreateStories/>
        <FooterBanner/>
        <Footer/>
    </div>
  );
};

export default Home;
