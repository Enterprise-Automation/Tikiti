import { useRouter } from 'next/router'
import json from '../../../../json/destinations.json'
import NavBar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlaneDeparture,faClock,faDollarSign,faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-solid-svg-icons'

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
    
    <div className="banner" style={{backgroundImage:"url(/images/testerbanner.png)"}} >
    </div>
    <div className="container-contain">
      <div className="destination-names">
        <div className="destination-name">{data?.name}</div>
        <div className="destination-slogan">{data?.slogan}</div>
     </div>


     <div style={{paddingTop:"100px", marginBottom:"100px"}} class="container">
     <div style={{paddingBottom:"50px"}} class="row">
    <div className="col-sm">
      <div className="container ">
  <div className="row gap">
    <div className="col-sm-3 icon">
    <FontAwesomeIcon size="2x" icon={faPlaneDeparture} />
    </div>
    <div className="col-sm-9">
      <div className="row info-answer">{data?.flight_time}</div>
      <div className="row info-answer">{data?.flight_information}</div>
    </div>
  </div>
  <div className="row gap">
    <div className="col-sm-3 icon">
    <FontAwesomeIcon size="2x" icon={faClock} />
    </div>
    <div className="col-sm-9">
      <div className="row info-answer">{data?.time_difference}</div>
    </div>
  </div>
  <div className="row gap">
    <div className="col-sm-3 icon">
    <FontAwesomeIcon size="2x" icon={faDollarSign} />
    </div>
    <div className="col-sm-9">
      <div className="row info-answer">{data?.currency}</div>
    </div>
  </div>
  <div className="row gap">
    <div className="col-sm-3 icon">
    <FontAwesomeIcon size="2x" icon={faPlusCircle} />
    </div>
    <div className="col-sm-9">
      <div className="row info-answer">{data?.combine_with.map(places => {
        return(
          <div style={{margin:"10px"}}>{places}</div>
        )
        
      })}</div>
    </div>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="destination-images">
              <img
                src={data?.image1}
                alt="abudhabi"
                width={600}
                height={400}
              />
            </div>
    </div>
  </div>
  <div className="row">
   
    <div className="col-sm">
      <div style={{ padding:"10px"}} className="destination-info">{data?.description}</div>
    </div>
  </div>
</div>
                     
    </div>

    <Footer/>
  </>
  )
}

export default Destination