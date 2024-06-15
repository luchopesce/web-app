import React from 'react';
import { Helmet } from 'react-helmet-async';
import PostContainer from '../components/Posts/PostContainer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title> Post </title>
      </Helmet>

      <PostContainer />
    </>
  );
}
export default HomePage;
