import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import Head from 'next/head'
import ReactPlayer from 'react-player'

const IndexPage: NextPage = () => {
  return (


    <Layout>
      <div style={{width: "100%", height: "100%", display: "flex", justifyContent: 'center',alignItems: 'center'}}>
        <h1 style={{color: "white", fontSize: "24px", zIndex: 1, marginTop: "35vh"}}>
          Coming Soon...
        </h1>
      </div>
    </Layout>
    
  )
}

export default IndexPage


{/* // <Layout title="Bearshirt">
    //   <ul className="card-list">
    //     <li>
    //       <Link href="/donate-with-checkout">
    //         <a className="card checkout-style-background">
    //           <h2 className="bottom">Donate with Checkout</h2>
    //           <img src="/checkout-one-time-payments.svg" />
    //         </a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/donate-with-elements">
    //         <a className="card elements-style-background">
    //           <h2 className="bottom">Donate with Elements</h2>
    //           <img src="/elements-card-payment.svg" />
    //         </a>
    //       </Link>
    //     </li>
    //     <li>
    //       <Link href="/use-shopping-cart">
    //         <a className="card cart-style-background">
    //           <h2 className="bottom">Use Shopping Cart</h2>
    //           <img src="/use-shopping-cart.png" />
    //         </a>
    //       </Link>
    //     </li>
    //   </ul>
    // </Layout> */}

          {/* <ReactPlayer
                  playing

          style={{
              borderRadius: "2vw",
              overflow: "hidden",
              position: "relative"
          }}
          width="60vw"
          height="60vw"
          url={`videos/IMG_4462.mp4`}
        /> */}
