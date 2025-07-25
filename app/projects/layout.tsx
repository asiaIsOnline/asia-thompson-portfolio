import Footer from '@/components/navigation/Footer'
import Navbar from '@/components/navigation/Navbar'
import React from 'react'


const ProjectLayout = ({children,}: {children: React.ReactNode}) => {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default ProjectLayout