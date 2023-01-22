import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import NavItem from '../components/NavItem'

type Props = {
  children: ReactNode
}

const Layout = ({children}: Props) => (

  <>

    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/> 
      <link rel="preconnect" href="https://fonts.gstatic.com" /> 
      <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" rel="stylesheet"/>
    </Head>

    
    
    
    <div className='pageContainer'>
  
      <Image
      src="/bear-background.jpg"

      className='backgroundImage'
      layout='fill'
      ></Image>
     

      <header className='titleContainer'> 
        <div className='navItemContainer'>


          <div className='circleBearContainer'>

            <Image
            src = "/black-circle-bear.jpg"
            layout='fill'
            />

          </div>

        

        <Link
        href={"/"}
        >
        <h1
        className='bearTitle'
        >
          bearshirtbearshirt
        </h1>

        </Link>
      
        </div>

        <div className='navItemContainer'>

          <NavItem
          link='/clothing'
          title = 'clothing'
          />
          
          <NavItem
          link = '/about'
          title = 'about'
          />
          <NavItem
          link = '/look-book'
          title = 'look book'
          />
         
        </div>

       </header>

       {children}
    </div>
    
    </>
  
  
)

export default Layout

/**
 * <>
    {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@thorwebdev" />
      <meta name="twitter:title" content="TypeScript Next.js Stripe Example" />
      <meta
        name="twitter:description"
        content="Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node."
      />
      <meta
        name="twitter:image"
        content="https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png"
      />
    </Head> 
    <div className="container">
      <header>
        <div className="header-content">
          <Link href="/">
            <a className="logo">
              <img src="/bearbear.jpg" />
            </a>
          </Link>
          <h1>
            <span className="light">Stripe Sample</span>
            <br />
            Next.js, TypeScript, and Stripe 🔒💸
          </h1>
        </div>
      </header>
      {children}
    </div>
    {/* <div className="banner">
      <span>
        This is a{' '}
        <a
          href="https://github.com/stripe-samples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stripe Sample
        </a>
        .{' View code on '}
        <a
          href="https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </span>
    </div>
 */
