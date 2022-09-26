import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import BlogFooter from '../Blogs/BlogFooter/BlogFooter';
import HomeHeader from '../Home/HomeHeader/HomeHeader';
import BlogDetailsArea from './BlogDetailsArea/BlogDetailsArea';

const BlogDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="Blog Details Page" />

         <HomeHeader/>
         <CommonPageHeader title="Blog Details" subtitle="Blog Details" />
         <BlogDetailsArea/>
         <BlogFooter/>
      </>
   );
};

export default BlogDetails;