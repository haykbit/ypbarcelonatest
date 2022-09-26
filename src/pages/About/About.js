import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeAbout from '../Home/HomeAbout/HomeAbout';
import HomeBrands from '../Home/HomeBrands/HomeBrands';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import AchievementWidget from '../../widgets/AchievementWidget/AchievementWidget';
import FaqWidget from '../../widgets/FaqWidget/FaqWidget';

const About = () => {
   return (
      <>
         <PageHelmet pageTitle="About Page" />

         <HomeHeader/>
         <CommonPageHeader title="About Us" subtitle="About" />
         <HomeAbout/>
         <FaqWidget/>
         <AchievementWidget/>
         <HomeBrands/>
         <Footer/>
      </>
   );
};

export default About;