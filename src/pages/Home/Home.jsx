import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import PageHelmet from '../../components/shared/PageHelmet';
import TestimonialWidget from '../../widgets/TestimonialWidget/TestimonialWidget';
import HomeFaq from './HomeFaq/HomeFaq';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeProjects from './HomeProjects/HomeProjects';
import HomeSecondServices from './HomeSecondServices/HomeSecondServices';
import HomeServices from './HomeServices/HomeServices';

const Home = ({language}) => {
   return (
      <>
         <PageHelmet pageTitle="Home" />

         <HomeHeader />
         <HomeHeroSection language={language}/>
         <HomeServices language={language}/>
         <HomeSecondServices language={language}/>
         <TestimonialWidget />
         <HomeProjects />
         <HomeFaq />
         <CommonCtaArea />
         <HomeFooter />
      </>
   );
};

export default Home;