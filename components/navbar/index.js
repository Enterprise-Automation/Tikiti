import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import destinations from '../../json/destinations.json'
import inspirationData from  '../../json/inspiration.json'


function Navbar() {
    console.log(inspirationData.Inspiration)
    const [mobileNav, setMobileNav] = useState(false)
    const [selectedMenuItem, setSelectedMenuItemState] = useState(null)

    const setSelectedMenuItem = (n) => {
        if(selectedMenuItem == n){
            return setSelectedMenuItemState(null)
        } 
        setSelectedMenuItemState(n)
    }


    const toggleMobileNav = () => {
        setMobileNav(!mobileNav)
    }

    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="container-fluid max-width">
                <Link href="/">
                    <div className="navbar-brand">
                        <Image

                            src="/images/brand/Tikiti_Logo_Peach.png"
                            alt="Logo"
                            width={200}
                            height={50}
                        />
                    </div>
                    

                </Link>
                <button onClick={toggleMobileNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${mobileNav ? "" : "collapse "}navbar-collapse`} id="navbarSupportedContent">
                    <ul style={{ backgroundColor: "white", marginTop: "-5px", marginLeft: "-20px" }} className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <Link href="/"> */}
                                 <a onClick={() => setSelectedMenuItem("inspiration")} className="nav-link active" href="#">INSPIRATION</a> 
                            {/* </Link> */}
                        </li>
                        <li className="nav-item">
                            
                                <a onClick={() => setSelectedMenuItem("destinations")} className="nav-link " href="#">DESTINATIONS</a>
                            
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a onClick={() => setSelectedMenuItem("honeymoon")} className="nav-link " href="#">HONEYMOON FUND</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a onClick={() => setSelectedMenuItem("contact")} className="nav-link " href="#">CONTACT</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/" >
                                
                                <a  className="nav-link cta">
                                 BOOK NOW
                                 </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
        {selectedMenuItem == "inspiration" && 
            <div className="nav-menu-container">
                <div className="container max-width">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="region-title">Inspirations</div>
                            <div className="region-names" >
                                {Object.keys(inspirationData).map(Inspiration => 
                                    Object.keys(inspirationData[Inspiration]).map(ins => 
                                       <Link key={ins}  href={`/inspirations/${Inspiration}/${ins}`}  className="region-name">{ins}</Link> 
                                        )
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        {selectedMenuItem == "destinations" && 
            <div className="nav-menu-container">
                <div className="container max-width">
                    <div className="row">
                    {Object.keys(destinations).map(region => {
                        return(<div key={region} className="col-sm-2">
                            <div className="region-title">{region}</div>
                            <div className="region-names"onClick={() => setSelectedMenuItem(null)}>
                            {Object.keys(destinations[region]).map(location => 
                                    <Link key={location} href={`/destination/${region}/${location}`} className="region-name">{location}</Link>
                            )}
                            </div>
                        </div>)
                          
                        })}
                        {/* <div className="col-sm-2">
                            <div className="region-title">Africa</div>
                            <div className="region-names">
                                <Link href="#" className="region-name">Kenya</Link>
                                <Link href="#" className="region-name">Nambibia</Link>
                                <Link href="#" className="region-name">South Africa</Link>
                                <Link href="#" className="region-name">Tanzania</Link>
                                <Link href="#" className="region-name">Zanzibar</Link>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="region-title">Arabia</div>
                            <div className="region-names">
                                <Link href="#" className="region-name">Oman</Link>
                                
                                <Link  href={`/destination/${destinationInfo.Arabia}/${destinationInfo.Arabia.Abu_Dhabi}`} className="region-name">Abu Dhabi</Link>
                                <Link href="#" className="region-name">Dubai</Link>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="region-title">Caribbean &amp; Mexico</div>
                            <div className="region-names">
                                <Link href="#" className="region-name">Antigua</Link>
                                <Link href="#" className="region-name">Bahamas</Link>
                                <Link href="#" className="region-name">Barbados</Link>
                                <Link href="#" className="region-name">Cuba</Link>
                                <Link href="#" className="region-name">St Lucia</Link>
                                <Link href="#" className="region-name">Grenada</Link>
                                <Link href="#" className="region-name">The Grenadines</Link>
                                <Link href="#" className="region-name">Jamaica</Link>
                                <Link href="#" className="region-name">Turks &amp; caicos</Link>
                                <Link href="#" className="region-name">Mexico</Link>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="region-title">Europe</div>
                            <div className="region-names">
                                <Link href="#" className="region-name">Croatia</Link>
                                <Link href="#" className="region-name">France</Link>
                                <Link href="#" className="region-name">Italy</Link>
                                <Link href="#" className="region-name">Greece</Link>
                                <Link href="#" className="region-name">Portugal</Link>
                                <Link href="#" className="region-name">Spain</Link>
                                <Link href="#" className="region-name">Turkey</Link>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="region-title">USA</div>
                            <div className="region-names">
                                <Link href="#" className="region-name">Arizona</Link>
                                <Link href="#" className="region-name">City Collection</Link>
                                <Link href="#" className="region-name">California</Link>
                                <Link href="#" className="region-name">Florida</Link>
                                <Link href="#" className="region-name">Hawaii</Link>
                                <Link href="#" className="region-name">Las Vegas Nevada</Link>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="region-title">Asia</div>
                            <div className="region-names">
                                <Link href="#" className="region-name">Cambodia</Link>
                                <Link href="#" className="region-name">Indonesia</Link>
                                <Link href="#" className="region-name">Malaysa</Link>
                                <Link href="#" className="region-name">singapore</Link>
                                <Link href="#" className="region-name">Thailand</Link>
                                <Link href="#" className="region-name">Vietnam</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        }

{selectedMenuItem == "honeymoon" && 
            <div className="nav-menu-container">
                <div className="container max-width">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="region-title">Honeymoon Fund</div>
                            <div className="region-names">
                          
                             <Link href="#" className="region-name">Couple Login</Link>
                             <Link href="#" className="region-name">Guest Login</Link>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

{selectedMenuItem == "contact" && 
            <div className="nav-menu-container">
                <div className="container max-width">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="region-title">Contact</div>
                            <div className="region-names">    
                             <Link href="#" className="region-name">Book A Video Appointment</Link>
                             <Link href="#" className="region-name">Call</Link>
                             <Link href="#" className="region-name">Whatsapp</Link>
                             <Link href="#" className="region-name">Email</Link>
                             <Link href="#" className="region-name">Socials</Link>                   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>)
}

export default Navbar
