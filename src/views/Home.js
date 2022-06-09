import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./../scss/Home.scss";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div className="__Home">
      <Navbar />
      <div className="background">
        <div className="balls r1"></div>
        <div className="balls r2"></div>
        <div className="balls r3"></div>
      </div>
      <div className="landing row">
        <div className="col-lg-6 col-sm-12 col-setting">
          <div className="content">
            <span className="mainheading">
              Largest auction marketplace for any listing...
            </span>
            <span className="subheading">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </span>
            <Link to="/" className="Button-Custom-1 fill w-full">
              <span className="content">
                <span className="type">WANT TO BECOME A DEALER ?</span>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-setting">
          <div className="wrapper">
            <div className="one i1">
              <img src="homepage1.png" alt="homepage1" />
              <span className="discount">
                <b>30</b>% <span className="fs-short">OFF</span>
              </span>
            </div>
            <div className="one i2">
              <img src="homepage2.png" alt="homepage2" />
              <span className="discount">
                <b>30</b>% <span className="fs-short">OFF</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productWrapper">
        <div className="hotSelling">
          <span className="mainHeading">
            Hot selling <span className="orange">products</span>
          </span>
          <span className="subHeading">
            Discover, collect, and sell extraordinary products
          </span>
          <br />
          <div className="slider my-5">
            <Swiper
              slidesPerView={4}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProductCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="bidGallery">
          <span className="mainHeading">
            Bid Gallery <span className="orange">Location</span>
          </span>
          <span className="subHeading">
            Discover, collect, and sell extraordinary products
          </span>
          <br />
          <div className="products my-5">
            <div className="row w-100 d-flex">
              {[
                [...Array(15).keys()].map((a, c) => {
                  return (
                    <div className="col-lg-3 col-sm-12 col-md-4 my-3">
                      <ProductCard />
                    </div>
                  );
                }),
              ]}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
