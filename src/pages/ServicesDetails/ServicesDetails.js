import React from 'react';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import ServicesDetailsHeader from './ServicesDetailsHeader/ServicesDetailsHeader';

const ServicesDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Services Details Page" />

         <HomeHeader />
         <ServicesDetailsHeader />
         <ServicesDetailsArea />
         <Footer />
      </>
   );
};

export default ServicesDetails;