/* eslint-env node*/
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
    // eslint-disable-next-line
    render() {
        return (
            <Html data-theme="light" lang="en-us">
                <Head>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <title>
                        Laptops for Families
                    </title>
                    <meta name="description" content=""/>
                    <meta name="keywords" content=""/>
                    <meta name="author" content=""/>
                    <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet"/>
                </Head>
                <body style={{"font-family": 'Source Sans Pro'}}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
