import React, { useState } from 'react'
import classes from './navbar.module.scss'
import { Layout } from '../../layout/Layout'
import logoImg from '../../assets/logo.png'
import { Badge } from 'antd';

export const Navbar = () => {
  let classNames = require('classnames')
  const [active, setActive] = useState(false)

  let menuClass = classNames({
    [classes.menu]: true,
    [classes.menu_active]: active
  })
  let hamClass = classNames({
    [classes.hamburger]: true,
    [classes.hamburger_active]: active
  })

  const navActive = () => {
    if (window.innerWidth < 990) setActive(!active)
  }


  return (
    <div className={classes.wrapper}>
      <Layout>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <a href="#">
              <img src={logoImg} alt='#' />
            </a>
          </div>
          <div className={menuClass}>
            <ul>
              <li><a href="#"> Courses</a></li>
              <li><a href="#"> Free Workshops</a></li>
              <li><a href="#"> Blog</a></li>
              <li><a href="#"> About</a></li>
              <li><a href="#"> Contact</a></li>
            </ul>
          </div>
          <div className={classes.korzina}>
            <Badge count={0} size='small' showZero={true}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6867 27.9999C13.2892 27.9999 13.7776 27.5115 13.7776 26.909C13.7776 26.3065 13.2892 25.8181 12.6867 25.8181C12.0842 25.8181 11.5958 26.3065 11.5958 26.909C11.5958 27.5115 12.0842 27.9999 12.6867 27.9999Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.2876 27.9999C25.8901 27.9999 26.3785 27.5115 26.3785 26.909C26.3785 26.3065 25.8901 25.8181 25.2876 25.8181C24.6851 25.8181 24.1967 26.3065 24.1967 26.909C24.1967 27.5115 24.6851 27.9999 25.2876 27.9999Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.78125 4H4.11944C6.06767 4 7.73253 5.40362 8.06187 7.32382L10.1026 19.2217C10.4319 21.1418 12.0968 22.5455 14.045 22.5455H26.3787" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.557 18.1817H25.948C26.0621 18.1818 26.1728 18.1381 26.2611 18.0582C26.3494 17.9783 26.4099 17.867 26.4323 17.7433L28.2093 7.92508C28.2237 7.84591 28.2219 7.76421 28.2042 7.68588C28.1865 7.60755 28.1533 7.53453 28.107 7.47211C28.0606 7.40968 28.0023 7.3594 27.9363 7.3249C27.8702 7.2904 27.798 7.27253 27.725 7.27258H8.58252" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Badge>
          </div>
          <div className={hamClass} onClick={navActive}>
            <span className={classes.bar} />
            <span className={classes.bar} />
            <span className={classes.bar} />
          </div>
        </div>
      </Layout >
    </div >
  )
}
