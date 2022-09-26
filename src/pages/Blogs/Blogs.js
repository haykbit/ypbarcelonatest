import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import BlogFooter from './BlogFooter/BlogFooter';
import BlogsArea from './BlogsArea/BlogsArea';

const Blogs = () => {
   return (
      <>
         <PageHelmet pageTitle="Blog Page" />

         <HomeHeader/>
         <CommonPageHeader title="Our Blog" subtitle="Blog" />
         <BlogsArea/>
         <BlogFooter/>
      </>
   );
};

export default Blogs;