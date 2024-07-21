import { useState } from 'react';
import Nav from '~/components/ui/nav';
import JobListing from '~/components/ui/jobListing';
import Footer from '~/components/ui/footer';

import React from 'react'

export default function _index() {
  return (
    <>
      <Nav/>
      <JobListing/>
      <Footer/>
    </>
    
  )
}
