import React from 'react'
import { useEffect } from 'react'
import { GetAllMenus } from '../Apicalls/Menubar'
import { useState } from 'react'

const Homebanner = () => {
  const [menu,setmenu]=useState([]);
  const [mainpage , setMainpage]=useState(true);
  const [commanpage,setCommonpage]=useState(false);
  const [clickedData,setClickData]=useState([]);
  useEffect(()=>{
    fetchmenus()
  },[])
  const fetchmenus=async()=>{
    const response = await GetAllMenus();
    console.log(response);
    setmenu(response.data)
  } 
  const handlemenuclick = async(item)=>{
    console.log(item);
    setClickData(item)
    setMainpage(false);
    setCommonpage(true)
  }
  const handleHomeclick = async()=>{
    setMainpage(true);
    setCommonpage(false);
  }
  return (
    <>
    { mainpage && <section id="home" className="section-b-space home-section">
  <div className="container-fluid">
    <div className="home-sec">
      <div className="home-content">
        <div>
          <h2 style={{ color: "#449cc0" }}>Features  Updates</h2>
          <h1>Chatting App</h1>
          <p>
            Megabot is a template for an AI chatbot landing page with conversing
            user interface pages.
          </p>
          <a
            href="/terms-conditions"
            className="btn-solid"
            style={{ background: "#449cc0", border: "#449cc0" }}
          >
            Get Terms &amp; conditions{" "}
            <i className="iconsax" data-icon="arrow-right" />
          </a>
        </div>
      </div>
      <div className="home-img d-lg-flex d-none">
        <img
          src="/assets/images/landing/robot.png"
          className="img-fluid robot-img"
          alt="robot"
        />
        <div className="round-effect" style={{ border: "2px dashed #449cc0" }}>
          <img
            src="/assets/images/landing/round.gif"
            className="img-fluid "
            alt="robot"
          />
        </div>
      </div>
    </div>
  </div>
    </section>}
    {commanpage && <section className="ratio_40">
  <div className="container">
    <div className="blog-details">
      <div className="blog-img">
        <img
          src={clickedData.image}
          className="img-fluid w-100 bg-img"
          alt="blog"
        />
      </div>
      <div className="blog-title-box">
        <a
          data-cursor="pointer"
          className="main-title"
        >
         {clickedData.title}
        </a>
        
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-10 m-auto">
          <div className="blog-main-content">
         
            <p>
             {clickedData.description}
            </p>
        
        
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
}
    <nav className="header-nav-middle">
    <div className="main-nav  navbar-expand-xl navbar-light navbar-sticky navbar-expand-sm navbar-expand-xs">
      <div className="offcanvas offcanvas-collapse">
        <div className="offcanvas-body">
          <ul className="navbar-navs fixed-bottom">
          <li className="nav-items">
              <a className="nav-links" onClick={() => handleHomeclick()}>
                Home
              </a>
            </li>
            {menu.map((item)=>(
              <li className="nav-items">
              <a className="nav-links" onClick={() => handlemenuclick(item)}
                 dangerouslySetInnerHTML={{ __html: item.icon }}>
              </a>
            </li>
            ))}
            
            {/* <li className="nav-items">
              <a className="nav-links" href="/terms-conditions">
                Terms and Conditions
              </a>
            </li> */}
            {/* <li className="nav-items">
              <a className="nav-links" href="/contact">
                Contact Us
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    </nav>
    </>
  )
}

export default Homebanner