import React from 'react'
import { useEffect } from 'react'
import { GetAllMenus } from '../Apicalls/Menubar'
import { useState } from 'react'
import CommonPage from './CommonPage'

const Navbar = () => {
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
  }
  return (
    <>
   { mainpage &&<section>
  <nav className="header-nav-middle">
    <div className="main-nav  navbar-expand-xl navbar-light navbar-sticky navbar-expand-sm navbar-expand-xs">
      <div className="offcanvas offcanvas-collapse">
        <div className="offcanvas-body">
          <ul className="navbar-navs fixed-bottom">
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
   </section>}
   {/* { commanpage && <CommonPage data={}/>} */}
    </>
  )
}

export default Navbar