import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">Hi, Myself Darshil Kantariya form SRM UNIVERSITY.  Click here to watch my test work:-</h1>
           <Link className=' p-6 bg-blue-600 hover:bg-blue-700 text-white xl:font-light py-2 px- rounded-full mt-4 flex items-center' href="/bajajfinserv">click</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
