import { useRouter } from 'next/router'
import json from '../../../../json/destinations.json'
import NavBar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlaneDeparture,faClock,faMoneyBill,faSun} from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
const Destination = () => {
  const router = useRouter()
  const { region, destination } = router.query
  let data
    if(region){
     data = json[region][destination]
    }
  return (
    <>
    <NavBar/>
    
    <div className="banner" style={{backgroundImage: `url(${data?.banner_image})`}}>
      <div className="banner-text-container">
        <div className="banner-slogan">{data?.slogan}</div>
        <div className="banner-title">{data?.name}</div>
      </div>
    </div>

    <div className="container-contain"> 
      <div className="row travel-details-container">
        <div className="col-md-3">
          <div className="travel-detail">
            <div className="ttle">Flight Time</div>
            <div className="value">{data?.flight_time}</div>
            <div className="icon"><FontAwesomeIcon size="2x" icon={faPlaneDeparture} /></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="travel-detail">
            <div className="title">Time Zone</div>
            <div className="value">{data?.time_difference}</div>
            <div className="icon"><FontAwesomeIcon size="2x" icon={faClock} /></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="travel-detail">
            <div className="title">Currency</div>
            <div className="value">{data?.currency}</div>
            <div className="icon"><FontAwesomeIcon size="2x" icon={faMoneyBill} /></div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="travel-detail">
            <div className="title">Temperature</div>
            <div className="value">{data?.temperature}</div>
            <div className="icon"><FontAwesomeIcon size="2x" icon={faSun} /></div>
          </div>
        </div>
    </div>

     <div style={{paddingTop:"50px", marginBottom:"100px"}} className="container">
     <div style={{paddingBottom:"50px"}} className="row">
  
     <div className="col-sm">
   
   <div className="row">
     <div style={{ padding:"10px"}} className="destination-info">{data?.description}</div>
   </div>
 </div>
<div className="col-sm">
    <div className="destination-images">
              {data?.image1 && <Image
                src={data?.image1}
                alt="destination image"
                width={600}
                height={400}
              />}
            </div>
    </div>
  </div>
</div>
                     
    </div>

    <Footer/>
  </>
  )
}

export default Destination