import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../Footer/Footer';

export default function PrimaryLayout({ children }) {
  return (
    <>
      <Head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>
              Laptops for Families
          </title>
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="author" content="" />
          <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
          {/* <!--Replace with your tailwind.css once created--> */}
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
          {/* <!-- Define your gradient here - use online tools to find a gradient matching your branding--> */}
      </Head>
      <main>
          {children}
      </main>
      <Footer />
    </>
  );
}

PrimaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
