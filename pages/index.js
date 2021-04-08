import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'

import { useRef, useEffect } from 'react'
export default function Home() {

  // const videoRef = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     videoRef.current.play()
  //   }, 100)
  // }, []);

  return (
    <>
      <NavBar />
      <div className="video-background-container">
        {/* <video className="bg-vid" ref={videoRef}  autoPlay loop muted width="100%">
          <source src="/videos/beachreverse.mp4" type="video/mp4" />
        </video> */}
        <div className="content-container">
        <div className="head-row sm-2 lg-2">
            You Pack We Plan
         </div>
          <div className="button">BOOK NOW</div>
        </div>
      </div>
   <div style={{textAlign:"center"}}>
      <div className="text-container">
        <div className="column-para">
          <div className="head-row sm-2 lg-2">
            A Little Inspiration
         </div>
          <div className="paragraph">
            From the melting pot of diverse experiences waiting to be discovered in Australia,  New Zealand &amp; the  Pacific Islands and the temples and tigers of Asia, to Americas's glittering cites and wide open spaces,  the pristine beaches and sparkling lagoons of the Indian Ocean and the sand dunes and skyscrapers of  Arabia, let us tailor-make the perfect holiday.
          </div>
        </div>
      </div>

      <div className="container type-images">
        <div className="row">
          <div className="col-lg images-container">
            <div className="inspiration-title" >Honeymoons</div>
            <div className="images">
              <Image
                src="/images/homeinspirations/honeymoon.png"
                alt="Honeymoons"
                width={600}
                height={400}
              />
            </div>
            
          </div>
          <div className="col-lg images-container">
            <div className="inspiration-title" >Luxury Getaways</div>
            <div className="images">
              <Image
                src="/"
                alt="Luxury Getaways"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg images-container">
            <div className="inspiration-title">Adventure Escapes</div>
            <div className="images">
              <Image
                src="/images/homeinspirations/adventureescapes.jpg"
                alt="Adventure Escapes"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="col-lg images-container">
            <div className="inspiration-title" >Romantic Holidays</div>
            <div className="images">
              <Image
                src="/"
                alt="Romantic Holidays"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg images-container">
            <div className="inspiration-title">Family Holidays</div>
            <div className="images">
              <Image
                src="/"
                alt="Family Holidays"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="col-lg images-container">
            <div className="inspiration-title" >Luxury Hen Holidays</div>
            <div className="images">
              <Image
                src="/images/homeinspirations/luxuryhenholiday.png"
                alt="Luxury Hen Holidays"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg images-container">
            <div className="inspiration-title">Luxury Stag Holidays</div>
            <div className="images">
              <Image
                src="/images/homeinspirations/luxurystagholiday.png"
                alt="Luxury Stag Holidays"
                width={600}
                height={400}
              />
            </div>
          </div>
          <div className="col-lg images-container">
            <div className="inspiration-title" >Vibrant Nightlife</div>
            <div className="images">
              <Image
                src="/"
                alt="Beach"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer/>


    </>
  )
}
