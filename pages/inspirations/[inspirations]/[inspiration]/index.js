import { useRouter } from 'next/router'
import json from '../../../../json/inspiration.json'
import NavBar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlaneDeparture,faClock,faMoneyBill,faSun} from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'
const Inspiration = () => {
  const router = useRouter()
  const { inspirations,inspiration } = router.query
  let data
  if(inspiration){
    data = json[inspirations][inspiration]
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
                alt="abudhabi"
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

export default Inspiration