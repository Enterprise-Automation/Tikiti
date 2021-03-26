import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from './components/navbar'

import { useRef, useEffect } from 'react'
export default function Home() {

  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play()
    }, 100)
  }, []);

  return (
    <>
      <NavBar />
      <div className="video-background-container">
        <video className="bg-vid" ref={videoRef} playing={true} autoplay loop muted width="100%">
          <source src="/videos/beachreverse.mp4" type="video/mp4" />
        </video>
        <div className="content-container">
          <div className="button">BOOK NOW</div>
        </div>
      </div>
      <div class="text-container">
        <div class="column">
          <div class="head-row sm-2 lg-2">
            Breathtaking destinations
         </div>
          <div class="paragraph">
            From the melting pot of diverse experiences waiting to be discovered in Australia,  New Zealand &amp; the  Pacific Islands and the temples and tigers of Asia, to Americas's glittering cites and wide open spaces,  the pristine beaches and sparkling lagoons of the Indian Ocean and the sand dunes and skyscrapers of  Arabia, let us tailor-make the perfect holiday.
          </div>
        </div>
      </div>
    </>
  )
}
