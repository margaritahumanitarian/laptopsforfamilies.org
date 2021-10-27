import React from 'react';

import Head from 'next/head';
import Script from 'next/script';

export default function About() {
	return(
	<html lang="en">
	    <Head>
	      <meta charset="UTF-8" />
	      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
	      <title>
	      About Us
	      </title>
	      <meta name="description" content="" />
	      <meta name="keywords" content="" />
	      <meta name="author" content="" />
	      <link rel="stylesheet" href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" />
	      {/* <!--Replace with your tailwind.css once created--> */}
	      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
	      {/* <!-- Define your gradient here - use online tools to find a gradient matching your branding--> */}

	    </Head>
	{/* <!--Body--> */}
	<body className="leading-normal tracking-normal text-white gradient" style={{"font-family": 'Source Sans Pro'}}>
			<div>
			{/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
			<svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
				<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
					<g className="wave" fill="#f8fafc">
					<path
						d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
					></path>
					</g>
					<g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
					<g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
						<path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
						<path
						d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
						opacity="0.100000001"
						></path>
						<path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
					</g>
					</g>
				</g>
				</g>
			</svg>
			<section className="container mx-auto text-center py-6 mb-12">
				<h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
				About Us!
				</h1>
				<div className="w-full mb-4">
					<div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
				</div>
				<br></br>
				<h3 className="my-4 text-3xl leading-tight">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores facere magnam itaque quos doloremque. Dolorem ea, quisquam nesciunt obcaecati reprehenderit provident error vero placeat debitis ratione hic ex quia aliquid.
				</h3>
			</section>
			</div>
	    {/* <!--Footer--> */}
		    <footer className="bg-white">
	        <div className="container mx-auto px-8">
	          <div className="w-full flex flex-col md:flex-row py-6">
	            <div className="flex-1 mb-6 text-black">
	              <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
	                {/* <!--Icon from: http://www.potlabicons.com/ --> */}
	                <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
	                  <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
	                  <path
	                    className="plane-take-off"
	                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
	                  />
	                </svg>
	                LANDING
	              </a>
	            </div>
	            <div className="flex-1">
	              <p className="uppercase text-gray-500 md:mb-6">Links</p>
	              <ul className="list-reset mb-6">
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
	                </li>
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
	                </li>
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
	                </li>
	              </ul>
	            </div>
	            <div className="flex-1">
	              <p className="uppercase text-gray-500 md:mb-6">Legal</p>
	              <ul className="list-reset mb-6">
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="/terms" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
	                </li>
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
	                </li>
	              </ul>
	            </div>
	            <div className="flex-1">
	              <p className="uppercase text-gray-500 md:mb-6">Social</p>
	              <ul className="list-reset mb-6">
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
	                </li>
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
	                </li>
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
	                </li>
	              </ul>
	            </div>
	            <div className="flex-1">
	              <p className="uppercase text-gray-500 md:mb-6">Organization</p>
	              <ul className="list-reset mb-6">
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="https://margaritahf.wixsite.com/blog" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
	                </li>
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="/about-us" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
	                </li>
	                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
	                  <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
	                </li>
	              </ul>
	            </div>
	          </div>
	        </div>
	        <a href="https://www.freepik.com/free-photos-vectors/background" className="text-gray-500">Background vector created by freepik - www.freepik.com</a>
	      </footer>
      </body>
    </html>

	)};