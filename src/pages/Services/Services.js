import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeCapabilities from '../Home/HomeCapabilities/HomeCapabilities';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import HomeServices from '../Home/HomeServices/HomeServices';
import HomeSecondServices from '../Home/HomeSecondServices/HomeSecondServices';

const Services = ({language}) => {
   return (
      <>
         <PageHelmet pageTitle="Services" />

         <HomeHeader/>
         <CommonPageHeader title="Services" subtitle="Services" />
         <HomeServices language={language}/>
         <HomeCapabilities/>
         <HomeSecondServices language={language}/>
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default Services;