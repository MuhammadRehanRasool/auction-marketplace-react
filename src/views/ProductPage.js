import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./../scss/ProductPage.scss";
import PrintIcon from "@mui/icons-material/Print";
import DescriptionIcon from "@mui/icons-material/Description";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ProductPage() {
  // eslint-disable-next-line
  const [browse, setBrowse] = useState([
    {
      itemId: "a7b53ce9-ad00-45f9-825b-486cf6be22e1",
      title: "Wine - Ruffino Chianti",
      auctionNumber: "001",
      currentBid: 81.1,
      minimumBid: 93.1,
      image: "https://picsum.photos/200?random=1",
      bidExpiry: "2022-07-10 12:41:52",
      isFavorite: false,
    },
    {
      itemId: "a405328b-9589-4000-a6f8-2cb640c39e71",
      title: "Glass - Juice Clear 5oz 55005",
      auctionNumber: "002",
      currentBid: 47.7,
      minimumBid: 55.5,
      image: "https://picsum.photos/200?random=2",
      bidExpiry: "2022-07-20 23:07:36",
      isFavorite: true,
    },
    {
      itemId: "e0d24d60-c896-406c-b23c-9d44086ddcf6",
      title: "Assorted Desserts",
      auctionNumber: "003",
      currentBid: 8.9,
      minimumBid: 94.4,
      image: "https://picsum.photos/200?random=3",
      bidExpiry: "2022-06-19 19:53:10",
      isFavorite: false,
    },
    {
      itemId: "074a869d-a28f-4175-a28b-109fa69690d7",
      title: "Wine - Chateau Timberlay",
      auctionNumber: "004",
      currentBid: 80.8,
      minimumBid: 16.4,
      image: "https://picsum.photos/200?random=4",
      bidExpiry: "2022-08-28 00:01:19",
      isFavorite: true,
    },
  ]);
  return (
    <div className="__ProductPage">
      <Navbar />
      <div className="landing">
        <span className="mainHeading mt-5 d-block">
          Product Listing View <ChevronRightIcon />{" "}
          <span className="fw-light fs-4">Listings</span>
        </span>
        <span className="subHeading mt-3 d-block">
          Discover, collect, and sell extraordinary product listing
        </span>
        <div className="wrapper py-4">
          <div className="categories">
            <span className="active">All</span>
            <span>Electronic</span>
            <span>Tech</span>
            <span>Sports</span>
            <span>Fashion</span>
            <span>Cosmetics</span>
          </div>
          <div className="options">
            <div className="icon">
              <PrintIcon />
            </div>
            <div className="icon">
              <BeenhereIcon />
            </div>
          </div>
        </div>
        <div className="row productWrapper">
          <div className="col-lg-6 left">
            <div className="row mainImage py-2">
              <img
                className="img-fluid"
                src="https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg"
                alt="focus"
              />
            </div>
            <div className="row listImage py-4">
              <div className="col-3">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg"
                  alt="focus"
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg"
                  alt="focus"
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg"
                  alt="focus"
                />
              </div>
              <div className="col-3">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://machinelearningmastery.com/wp-content/uploads/2018/07/How-to-Generate-Random-Numbers-in-Python.jpg"
                  alt="focus"
                />
              </div>
            </div>
            <div className="row py-4">
              <div className="description">
                <div className="top border-bottom">
                  <DescriptionIcon />
                  <span>DESCRIPTION</span>
                </div>
                <div className="bottom">
                  Jewels Queen Hip Hop Jewelry diamond cuban link chain 100%
                  Real Solid Yellow gold of approximately 199.01 Grams weight
                  and showcase natural 26.31 carats of prong setting cut diamond
                  with FG/GH color & VS2/SI1/SI2/I1 clarity diamond. This mens
                  chains available in 10k/14k/18k gold purity and
                  yellow/rose/white gold. You'll get best price guarantee, Free
                  us Shipping, 30 Days Return, Worldwide Shipping.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 right">
            <div className="row top my-2">
              <span>
                Diamond Cuban Link Chain Real 26.31 Carats Diamond Solid Yellow
                Gold Mens Chains 12Mm
              </span>
              <div className="info my-3">
                <div className="row">
                  <div className="col-6 label">Higher Bid</div>
                  <div className="col-6 value">$11,000</div>
                </div>
                <div className="row border-top">
                  <div className="col-6 label">Minimum Bid</div>
                  <div className="col-6 value">$11,000</div>
                </div>
                <div className="row border-top">
                  <div className="col-6 label">Current Bid</div>
                  <div className="col-6 value">$11,000</div>
                </div>
                <div className="row border-top">
                  <div className="col-6 label">Time Remaining</div>
                  <span className="col-6 value timeLeft">
                    <b>{2}</b>d <b>{2}</b>h <b>{2}</b>m <b>{2}</b>s
                  </span>
                </div>
              </div>
              <div className="row button">QUICK BID $900.00</div>
              {/* <div className="row button-option mt-4">
                <button className="btn btn-light" type="button">
                  Subscribe
                </button>
                <input type="text" className="form-control" />
              </div> */}
              <span className="tagline mt-4">Share with platforms</span>
              <div className="medias mt-4">
                <a href="/#" target={"blank"}>
                  <img src="/icons/Vector.png" alt="Vector.png" />
                </a>
                <a href="/#" target={"blank"}>
                  <img src="/icons/Vector-1.png" alt="Vector-1" />
                </a>
                <a href="/#" target={"blank"}>
                  <img src="/icons/Vector-2.png" alt="Vector-2" />
                </a>
                <a href="/#" target={"blank"}>
                  <img src="/icons/Vector-3.png" alt="Vector-3" />
                </a>
                <a href="/#" target={"blank"}>
                  <img src="/icons/Vector-4.png" alt="Vector-4" />
                </a>
              </div>
            </div>
            <div className="row offers mt-4">
              <div className="tagline py-2">OFFERS</div>
              <div className="row tableHead border-top">
                <div className="col-3">Price</div>
                <div className="col-3">Maximum Bid</div>
                <div className="col-3">Expiration</div>
                <div className="col-3">From</div>
              </div>
              {[...Array(6)].map((a, b) => {
                return (
                  <div className="row tableValues border-top">
                    <div className="col-3">$17,800</div>
                    <div className="col-3 maximum">$117,800</div>
                    <div className="col-3 timeLeft">
                      <b>{2}</b>d <b>{2}</b>h <b>{2}</b>m <b>{2}</b>s
                    </div>
                    <div className="col-3 username">
                      <Link to="#?">rehan</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="suggested py-4">
          <span className="mt-5 mainheading">
            Suggested <span className="orange">Products</span>
          </span>
          <div className="row w-100 d-flex">
            {browse.length > 0
              ? browse.map((product, index) => {
                  return (
                    <div className="col-lg-3 col-sm-12 col-md-4 my-3">
                      <ProductCard type="auction" product={product} />
                    </div>
                  );
                })
              : "No products available right now."}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
