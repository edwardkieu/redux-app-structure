import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TopNav from './../components/TopNav';
import LeftNav from './../components/LeftNav';
import Breadcrumb from './../components/Breadcrumb';
import Footer from '../components/Footer';

const MainLayout = (props) => {
  const { title, description, children } = props;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      </HelmetProvider>
      <div>
        <div id="wrapper">
          <LeftNav />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopNav />
              <div className="container-fluid">
                <Breadcrumb />
                {children}
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
      </div>
    </>
  );
};

export default MainLayout;
