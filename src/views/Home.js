import React, { useState } from "react";
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
  // eslint-disable-next-line
  const [hotSelling, setHotSelling] = useState([
    {
      itemId: "73074d40-1f5a-443e-85a9-879236bad634",
      title: "Coriander - Ground",
      auctionNumber: "001",
      currentBid: 30.7,
      minimumBid: 91.0,
      image: "https://picsum.photos/200?random=1",
    },
    {
      itemId: "4a324c82-57b6-4f72-96be-bdadf6b903a9",
      title: "Beets",
      auctionNumber: "002",
      currentBid: 49.9,
      minimumBid: 70.4,
      image: "https://picsum.photos/200?random=2",
    },
    {
      itemId: "4b1095e5-4a38-4dea-a2a0-b13d74f282ad",
      title: "Split Peas - Yellow, Dry",
      auctionNumber: "003",
      currentBid: 12.4,
      minimumBid: 53.9,
      image: "https://picsum.photos/200?random=3",
    },
    {
      itemId: "c41c0afc-8406-4d3c-b08a-64e5fae6b287",
      title: "Beef - Tender Tips",
      auctionNumber: "004",
      currentBid: 81.3,
      minimumBid: 83.4,
      image: "https://picsum.photos/200?random=4",
    },
    {
      itemId: "080472d8-2998-41cd-90f3-cb12482264cc",
      title: "Bread Base - Gold Formel",
      auctionNumber: "005",
      currentBid: 53.5,
      minimumBid: 92.3,
      image: "https://picsum.photos/200?random=5",
    },
    {
      itemId: "c6caa069-8836-4561-94c5-7f7a82e4a2b3",
      title: "Tart - Lemon",
      auctionNumber: "006",
      currentBid: 80.9,
      minimumBid: 7.8,
      image: "https://picsum.photos/200?random=6",
    },
    {
      itemId: "fe57e078-89ee-4d3f-86b7-811115ae4eb4",
      title: "Oil - Shortening,liqud, Fry",
      auctionNumber: "007",
      currentBid: 72.1,
      minimumBid: 62.2,
      image: "https://picsum.photos/200?random=7",
    },
    {
      itemId: "9a716f5d-7beb-4730-a94b-d4151aab2d9b",
      title: "Olives - Black, Pitted",
      auctionNumber: "008",
      currentBid: 8.7,
      minimumBid: 48.2,
      image: "https://picsum.photos/200?random=8",
    },
    {
      itemId: "fda3adc1-506d-4325-9442-af660c122de4",
      title: "Muffin Mix - Banana Nut",
      auctionNumber: "009",
      currentBid: 11.3,
      minimumBid: 18.9,
      image: "https://picsum.photos/200?random=9",
    },
    {
      itemId: "78b650b9-4d12-48e6-b5da-fa2199680e3f",
      title: "Juice - Tomato, 48 Oz",
      auctionNumber: "010",
      currentBid: 3.1,
      minimumBid: 29.3,
      image: "https://picsum.photos/200?random=10",
    },
  ]);

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
            {hotSelling.length > 0 ? (
              <Swiper
                slidesPerView={4}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {hotSelling.map((product, index) => {
                  return (
                    <SwiperSlide key={product.itemId}>
                      <ProductCard type="hot" product={product} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              "No products available right now."
            )}
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
          <div className="py-3 w-100 buttonWrapper">
            <Link to="/" className="Button-Custom-1 fill w-full">
              <span className="content">
                <span className="type">BROWSE ALL Collection</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
