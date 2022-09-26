import React from 'react';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import TeamDetailsArea from './TeamDetailsArea/TeamDetailsArea';

const TeamDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Team Details" />

         <HomeHeader/>
         <CommonPageHeader title="Team Details" subtitle="Team Details" />
         <TeamDetailsArea/>
         <CommonCtaArea/>
         <Footer/>
      </>
   );
};

export default TeamDetails;