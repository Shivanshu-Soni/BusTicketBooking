import React from 'react';
import './styles.css';

function Carousel({ loggedin }) {
  return (
    <header>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ filter: "brightness(100%)" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="9000">
            <img
              src={require("../Img/2.jpg")}
              className="d-block w-100"
              style={{ height: "800px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <div className="header" style={{ height: '60vh', width: '100%' }}>
                <div className="main">
                  <div className="textbody">
                    <h1><span>Welcome to RED</span>BUS<span>!</span></h1>
                    <p>Explore Maharashtra with us!</p>
                    <div className="options">
                      {loggedin === true ? (
                        <a href="/findbuses" className="btn1">
                          Book Tickets!
                        </a>
                      ) : (
                        <a href="/login" className="btn1">
                          Book Tickets!
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="6000">
            <img
              src={require("../Img/2.jpg")}
              className="d-block w-100"
              style={{ height: "800px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block" >
              {/* <div className="header"style={{ height: '60vh', width: '100%' }} > */}
              <div className="header" style={{ height: '60vh', width: '100%', textAlign:'left' }}>
 

                <div className="main">
                  <div className="textbody">
                    <h1><span>Welcome to RED</span>BUS<span>!</span></h1>
                    <p>Explore Maharashtra with us!</p>
                    <div className="options">
                      {loggedin === true ? (
                        <a href="/findbuses" className="btn1">
                          Book Tickets!
                        </a>
                      ) : (
                        <a href="/login" className="btn1">
                          Book Tickets!
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img
              src={require("../Img/3.jpg")}
              className="d-block w-100"
              style={{ height: "800px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block" >
              <div className="header"style={{ height: '25vh', width: '100%' }} >
                <div className="main">
                  <div className="textbody">
                    <h1><span>Welcome to RED</span>BUS<span>!</span></h1>
                    <p>Explore Maharashtra with us!</p>
                    <div className="options">
                      {loggedin === true ? (
                        <a href="/findbuses" className="btn1">
                          Book Tickets!
                        </a>
                      ) : (
                        <a href="/login" className="btn1">
                          Book Tickets!
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  );
}

export default Carousel;
