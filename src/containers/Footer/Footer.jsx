import React from 'react'
import { Layout } from '../../layout/Layout'
import classes from './footer.module.scss'
import { Row, Col } from 'antd/lib/grid'
import logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <Layout>
          <Row className={classes.email_block}>
            <Col>
              <h2 className={classes.title}>You have the power to define your future.</h2>
              <div className={classes.input_box}>
                <input type="text" placeholder='Email Address' />
                <button type='button' className={classes.btn}>Submit</button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className={classes.logo_box}>
                <img src={logo} alt="" />
              </div>
            </Col>
          </Row>
          <Row style={{ paddingTop: '60px' }}>
            <Col className={classes.menu_group} xs={12} sm={12} md={7} lg={7} xl={6} span={6}>
              <ul>
                <li>Learning Platform</li>
                <li><a href=""> Home</a></li>
                <li><a href=""> Courses</a></li>
                <li><a href=""> Free Workshops</a></li>
                <li><a href=""> Blog</a></li>
                <li><a href=""> About</a></li>
                <li><a href=""> Contact</a></li>
              </ul>
            </Col>
            <Col className={classes.menu_group} xs={12} sm={12} md={7} lg={7} xl={6} span={6}>
              <ul>
                <li>Template</li>
                <li><a href=""> Instructions</a></li>
                <li><a href=""> Style Guide</a></li>
                <li><a href=""> Licenses</a></li>
                <li><a href=""> Changelog</a></li>
              </ul>
            </Col>
            <Col className={classes.follow_group} xs={24} sm={12} md={10} lg={10} xl={12} span={12}>
              <h4 className={classes.follow}>Follow skillz</h4>
              <div className={classes.icon_block}>
                <div className={classes.icon_box}>
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5151 6.01807C20.1454 6.01807 18.8816 5.56432 17.8668 4.79885C16.7029 3.92135 15.8666 2.63416 15.5713 1.15057C15.4982 0.784004 15.4588 0.405723 15.4551 0.0180664H11.5424V10.7093L11.5377 16.5654C11.5377 18.131 10.5182 19.4585 9.1049 19.9254C8.69477 20.0609 8.2518 20.1251 7.79055 20.0998C7.2018 20.0674 6.65008 19.8898 6.17055 19.6029C5.15008 18.9926 4.45821 17.8854 4.43946 16.6188C4.40993 14.6393 6.01024 13.0254 7.98837 13.0254C8.37883 13.0254 8.75383 13.0891 9.1049 13.2049V10.2827V9.23229C8.73462 9.17744 8.35774 9.14885 7.97665 9.14885C5.81149 9.14885 3.78649 10.0488 2.33899 11.6702C1.24493 12.8956 0.588678 14.4588 0.487428 16.098C0.354768 18.2515 1.14274 20.2985 2.67086 21.8088C2.8954 22.0305 3.13118 22.2363 3.37774 22.4262C4.6879 23.4345 6.28962 23.981 7.97665 23.981C8.35774 23.981 8.73462 23.9529 9.1049 23.898C10.6809 23.6646 12.1349 22.9432 13.2824 21.8088C14.6924 20.4152 15.4715 18.5651 15.4799 16.5959L15.4598 7.85088C16.1324 8.36979 16.8679 8.79916 17.6573 9.13244C18.8849 9.65041 20.1866 9.91291 21.5263 9.91244V7.07135V6.01713C21.5273 6.01807 21.516 6.01807 21.5151 6.01807Z" fill="black" />
                  </svg>
                </div>
                <div className={classes.icon_box}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C8.74 0 8.333 0.015 7.053 0.072C5.775 0.132 4.905 0.333 4.14 0.63C3.351 0.936 2.681 1.347 2.014 2.014C1.347 2.681 0.935 3.35 0.63 4.14C0.333 4.905 0.131 5.775 0.072 7.053C0.012 8.333 0 8.74 0 12C0 15.26 0.015 15.6671 0.072 16.9471C0.132 18.224 0.333 19.0951 0.63 19.86C0.936 20.648 1.347 21.3191 2.014 21.986C2.681 22.652 3.35 23.0651 4.14 23.37C4.906 23.666 5.776 23.8689 7.053 23.928C8.333 23.988 8.74 24 12 24C15.26 24 15.6671 23.9849 16.9471 23.928C18.224 23.868 19.0951 23.666 19.86 23.37C20.648 23.064 21.3191 22.652 21.986 21.986C22.652 21.3191 23.0651 20.6511 23.37 19.86C23.666 19.0951 23.8689 18.224 23.928 16.9471C23.988 15.6671 24 15.26 24 12C24 8.74 23.9849 8.333 23.928 7.053C23.868 5.776 23.666 4.904 23.37 4.14C23.064 3.351 22.652 2.681 21.986 2.014C21.3191 1.347 20.6511 0.935 19.86 0.63C19.0951 0.333 18.224 0.131 16.9471 0.072C15.6671 0.012 15.26 0 12 0ZM12 2.16C15.2031 2.16 15.5851 2.176 16.85 2.231C18.02 2.286 18.6549 2.48 19.0769 2.646C19.6389 2.863 20.0369 3.123 20.4589 3.542C20.878 3.962 21.138 4.361 21.3549 4.923C21.5189 5.345 21.7149 5.98 21.768 7.15C21.8249 8.416 21.838 8.796 21.838 12C21.838 15.204 21.8229 15.5851 21.764 16.85C21.7029 18.02 21.508 18.6549 21.3431 19.0769C21.1191 19.6389 20.864 20.0369 20.444 20.4589C20.0251 20.878 19.62 21.138 19.064 21.3549C18.644 21.5189 17.9991 21.7149 16.8291 21.768C15.5551 21.8249 15.18 21.838 11.97 21.838C8.759 21.838 8.384 21.8229 7.111 21.764C5.94 21.7029 5.295 21.508 4.875 21.3431C4.306 21.1191 3.915 20.864 3.496 20.444C3.075 20.0251 2.806 19.62 2.596 19.064C2.431 18.644 2.237 17.9991 2.176 16.8291C2.131 15.5691 2.115 15.18 2.115 11.985C2.115 8.789 2.131 8.399 2.176 7.124C2.237 5.954 2.431 5.31 2.596 4.89C2.806 4.32 3.075 3.93 3.496 3.509C3.915 3.09 4.306 2.82 4.875 2.611C5.295 2.445 5.926 2.25 7.096 2.19C8.371 2.145 8.746 2.13 11.955 2.13L12 2.16ZM12 5.838C8.595 5.838 5.838 8.598 5.838 12C5.838 15.4049 8.598 18.162 12 18.162C15.4049 18.162 18.162 15.402 18.162 12C18.162 8.595 15.402 5.838 12 5.838ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16ZM19.846 5.595C19.846 6.39 19.2 7.035 18.406 7.035C17.6111 7.035 16.966 6.389 16.966 5.595C16.966 4.801 17.612 4.156 18.406 4.156C19.1991 4.155 19.846 4.801 19.846 5.595Z" fill="#1C1C33" />
                  </svg>
                </div>
                <div className={classes.icon_box}>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.4965 3.20522C23.3574 2.70698 23.0921 2.25305 22.7264 1.88727C22.3606 1.52151 21.9067 1.25628 21.4085 1.11722C19.5384 0.616225 12.0124 0.616225 12.0124 0.616225C12.0124 0.616225 4.50545 0.606225 2.61644 1.11722C2.1182 1.25628 1.66426 1.52151 1.29849 1.88727C0.932721 2.25305 0.667492 2.70698 0.528441 3.20522C0.173963 5.11974 -0.000797883 7.06319 0.00644158 9.01019C0.000570699 10.9499 0.175324 12.886 0.528441 14.7932C0.667492 15.2914 0.932721 15.7455 1.29849 16.1113C1.66426 16.477 2.1182 16.7421 2.61644 16.8812C4.48444 17.3833 12.0124 17.3833 12.0124 17.3833C12.0124 17.3833 19.5184 17.3833 21.4085 16.8812C21.9067 16.7421 22.3606 16.477 22.7264 16.1113C23.0921 15.7455 23.3574 15.2914 23.4965 14.7932C23.8422 12.8853 24.0096 10.9493 23.9965 9.01019C24.011 7.06389 23.8435 5.12044 23.4965 3.20522ZM9.61044 12.6012V5.40823L15.8744 9.01019L9.61044 12.6012Z" fill="#1C1C33" />
                  </svg>
                </div>
                <div className={classes.icon_box}>
                  <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7136 24V11.9986H11.0266L11.4656 7.86284H7.7136L7.7193 5.79286C7.7193 4.71419 7.8218 4.13622 9.371 4.13622H11.4421V0H8.1288C4.1488 0 2.74803 2.00628 2.74803 5.38022V7.86331H0.267212V11.9991H2.74803V24H7.7136Z" fill="#1C1C33" />
                  </svg>
                </div>
                <div className={classes.icon_box}>
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.9539 2.56909C23.069 2.95809 22.124 3.22309 21.129 3.34409C22.143 2.73309 22.923 1.77009 23.292 0.621094C22.341 1.17609 21.287 1.58009 20.165 1.80509C19.269 0.846094 17.992 0.246094 16.5739 0.246094C13.857 0.246094 11.6539 2.44909 11.6539 5.16309C11.6539 5.55309 11.699 5.92809 11.781 6.28709C7.69099 6.09409 4.066 4.13009 1.64 1.16109C1.21299 1.88309 0.974 2.72209 0.974 3.63609C0.974 5.34609 1.844 6.8491 3.162 7.73209C2.35499 7.70609 1.596 7.48409 0.934 7.11609V7.17709C0.934 9.56212 2.62699 11.5511 4.88 12.0041C4.46699 12.1151 4.03099 12.1751 3.584 12.1751C3.27 12.1751 2.96899 12.145 2.668 12.089C3.29899 14.0421 5.11299 15.4661 7.272 15.5061C5.592 16.825 3.46299 17.6111 1.17 17.6111C0.78 17.6111 0.391 17.5881 0 17.5441C2.18899 18.9381 4.768 19.753 7.55699 19.753C16.611 19.753 21.556 12.257 21.556 5.76709C21.556 5.55809 21.556 5.34709 21.541 5.13709C22.5019 4.44809 23.341 3.5771 24.001 2.5891L23.9539 2.56909Z" fill="#1C1C33" />
                  </svg>
                </div>
              </div>
            </Col>
          </Row>
        </Layout>
      </div>
      <div className={classes.poweredBy_block}>
        <Layout>
          <Row>
            <Col>
              <div className={classes.poweredBy}>
                <p>© Skillz Template</p>
                <p>Powered by Webflow</p>
              </div>
            </Col>
          </Row>
        </Layout>
      </div>
    </>
  )
}
