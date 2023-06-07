import Head from 'next/head';
import React from 'react'
import { Navbar } from '../UI';

interface Props {
    children : React.ReactNode | '';
}


const Layout:React.FC<Props> = ({children}) => {
  return (
    <>
        <Head>

        </Head>
        <nav>
            <Navbar/>
        </nav>
        <main style={{padding:'20px 50px'}}>
            { children }
        </main>
    </>
  )
}

export default Layout;