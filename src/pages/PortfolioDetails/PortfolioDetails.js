import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import PortfolioDetailsArea from './PortfolioDetailsArea/PortfolioDetailsArea';

const PortfolioDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Portfolio Details Page" />

         <HomeHeader/>
         <CommonPageHeader title="Portfolio Details" subtitle="Portfolio Details" />
         <PortfolioDetailsArea/>
         <Footer/>
      </>
   );
};

export default PortfolioDetails;