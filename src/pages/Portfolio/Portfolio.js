import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import PortfolioArea from './PortfolioArea/PortfolioArea';

const Portfolio = () => {
   return (
      <>
         <PageHelmet pageTitle="Portfolio Page" />

         <HomeHeader/>
         <CommonPageHeader title="Our Portfolio" subtitle="Portfolio" />
         <PortfolioArea/>
         <Footer/>
      </>
   );
};

export default Portfolio;