import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./../scss/BidGallery.scss";
import ProductCard from "../components/ProductCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function BidGallery() {
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
    {
      itemId: "e230fcdd-e788-42b8-8628-e7e85f7b2031",
      title: "Cake Sheet Combo Party Pack",
      auctionNumber: "005",
      currentBid: 77.0,
      minimumBid: 2.5,
      image: "https://picsum.photos/200?random=5",
      bidExpiry: "2022-07-21 19:21:48",
      isFavorite: false,
    },
    {
      itemId: "69f5c216-df09-4bdd-a8a3-87c17f6324f3",
      title: "Chicken - Base, Ultimate",
      auctionNumber: "006",
      currentBid: 78.6,
      minimumBid: 17.2,
      image: "https://picsum.photos/200?random=6",
      bidExpiry: "2022-07-03 15:17:04",
      isFavorite: false,
    },
    {
      itemId: "55c7ec2d-dd68-4e9d-93b1-f69a68f03625",
      title: "Vinegar - Rice",
      auctionNumber: "007",
      currentBid: 61.7,
      minimumBid: 22.8,
      image: "https://picsum.photos/200?random=7",
      bidExpiry: "2022-08-02 03:36:55",
      isFavorite: true,
    },
    {
      itemId: "e17469a4-a56a-4c67-8f1e-1ce01677ee1d",
      title: "Cookies - Amaretto",
      auctionNumber: "008",
      currentBid: 93.3,
      minimumBid: 67.4,
      image: "https://picsum.photos/200?random=8",
      bidExpiry: "2022-06-27 23:03:10",
      isFavorite: false,
    },
    {
      itemId: "879bdacf-109d-4745-9550-6899b4b38b06",
      title: "Lotus Leaves",
      auctionNumber: "009",
      currentBid: 99.2,
      minimumBid: 31.2,
      image: "https://picsum.photos/200?random=9",
      bidExpiry: "2022-08-02 18:16:24",
      isFavorite: true,
    },
    {
      itemId: "2d086042-ed3c-4c4c-9cb0-e820a1444d68",
      title: "Lighter - Bbq",
      auctionNumber: "010",
      currentBid: 3.6,
      minimumBid: 26.1,
      image: "https://picsum.photos/200?random=10",
      bidExpiry: "2022-07-17 19:33:19",
      isFavorite: true,
    },
    {
      itemId: "68f21fd2-cf06-44ef-ba1b-7025652a2b64",
      title: "Pear - Prickly",
      auctionNumber: "011",
      currentBid: 48.0,
      minimumBid: 17.7,
      image: "https://picsum.photos/200?random=11",
      bidExpiry: "2022-07-24 10:38:02",
      isFavorite: true,
    },
    {
      itemId: "4d3f1f67-c7d7-45b0-ab99-138ff82b3729",
      title: "Hot Chocolate - Individual",
      auctionNumber: "012",
      currentBid: 7.8,
      minimumBid: 36.5,
      image: "https://picsum.photos/200?random=12",
      bidExpiry: "2022-07-31 18:00:40",
      isFavorite: true,
    },
    {
      itemId: "148539cd-21da-4ff4-b3ba-812ad04775f7",
      title: "Scotch - Queen Anne",
      auctionNumber: "013",
      currentBid: 25.8,
      minimumBid: 10.3,
      image: "https://picsum.photos/200?random=13",
      bidExpiry: "2022-06-30 19:56:06",
      isFavorite: false,
    },
    {
      itemId: "1398506d-0e25-4b08-ba0a-ae48b130f4c1",
      title: "The Pop Shoppe - Cream Soda",
      auctionNumber: "014",
      currentBid: 67.4,
      minimumBid: 79.4,
      image: "https://picsum.photos/200?random=14",
      bidExpiry: "2022-08-05 20:31:32",
      isFavorite: false,
    },
    {
      itemId: "1262437c-5a29-4654-8e34-0b585180a221",
      title: "Lettuce - Mini Greens, Whole",
      auctionNumber: "015",
      currentBid: 18.8,
      minimumBid: 6.5,
      image: "https://picsum.photos/200?random=15",
      bidExpiry: "2022-07-28 04:44:54",
      isFavorite: true,
    },
    {
      itemId: "da49a42f-ab2e-4f31-bcfa-41cb9377d835",
      title: "Lobster - Live",
      auctionNumber: "016",
      currentBid: 61.4,
      minimumBid: 62.3,
      image: "https://picsum.photos/200?random=16",
      bidExpiry: "2022-08-27 04:49:36",
      isFavorite: false,
    },
    {
      itemId: "0547362e-f466-4c47-be17-84411cba4ade",
      title: "Seaweed Green Sheets",
      auctionNumber: "017",
      currentBid: 22.0,
      minimumBid: 88.4,
      image: "https://picsum.photos/200?random=17",
      bidExpiry: "2022-06-20 19:14:05",
      isFavorite: true,
    },
    {
      itemId: "d7401b58-9ac8-4da7-bdb8-ad064b1d49e2",
      title: "Stock - Veal, Brown",
      auctionNumber: "018",
      currentBid: 68.1,
      minimumBid: 10.8,
      image: "https://picsum.photos/200?random=18",
      bidExpiry: "2022-08-29 01:29:46",
      isFavorite: true,
    },
    {
      itemId: "2f8fbf9e-4ca0-4dc5-ac31-044f9b6b5f9d",
      title: "V8 Splash Strawberry Kiwi",
      auctionNumber: "019",
      currentBid: 77.0,
      minimumBid: 77.2,
      image: "https://picsum.photos/200?random=19",
      bidExpiry: "2022-06-26 19:20:53",
      isFavorite: true,
    },
    {
      itemId: "2f808c44-1426-43eb-882e-1665a263ee20",
      title: "Coffee Decaf Colombian",
      auctionNumber: "020",
      currentBid: 56.5,
      minimumBid: 78.2,
      image: "https://picsum.photos/200?random=20",
      bidExpiry: "2022-07-30 07:04:19",
      isFavorite: true,
    },
  ]);
  return (
    <div className="__BidGallery">
      <Navbar />
      <div className="landing">
        <span className="mainHeading mt-5 d-block">Product Gallery</span>
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
            <div className="select">
              <img src="icons/filter.png" alt="filter" />
              <select className="form-select">
                <option>Filter</option>
              </select>
            </div>
            <div className="select">
              <img src="icons/newest.png" alt="new" />
              <select className="form-select">
                <option>Newest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="productWrapper">
        <div className="bidGallery">
          <div className="products my-5">
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
          <div className="py-5 w-100 buttonWrapper">
            <Link to="/" className="Button-Custom-1 fill w-full">
              <span className="content">
                <span className="type">SHOW MORE</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
