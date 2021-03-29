import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
    const [collapse, setCollapse] = useState(false)
    const toggleNav = () => {
        setCollapse(!collapse)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
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
                <button onClick={toggleNav} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${collapse ? "" : "collapse "}navbar-collapse`} id="navbarSupportedContent">
                    <ul style={{ backgroundColor: "white", marginTop: "-5px", marginLeft: "-20px" }} className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" href="#">HONEYMOONS</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link " href="#">LUXURY GETAWAYS</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link " href="#">HENS &amp; STAGS</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link " href="#">BEACH BREAKS</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
