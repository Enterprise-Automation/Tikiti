import { useRouter } from 'next/router'
import json from '../../../../json/destinations.json'
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
    
    <div className="banner" style={{backgroundImage:"url(/images/testerbanner.png)"}} >
    <div className="container-contain">
      <div>
      hey
      </div>
    
    </div>
                     
</div>
  </>
  )
}

export default Destination