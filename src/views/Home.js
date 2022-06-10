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

  const [browse, setBrowse] = useState([
    {
      itemId: "b6255eed-cb16-42e6-a530-5c72ae653666",
      title: "Dried Peach",
      auctionNumber: "001",
      currentBid: 82.8,
      minimumBid: 44.3,
      image: "https://picsum.photos/200?random=1",
      bidExpiry: "2023-03-17 13:37:37",
    },
    {
      itemId: "aa1118e9-e8b5-48f8-9401-617f3abd898b",
      title: "Sproutsmustard Cress",
      auctionNumber: "002",
      currentBid: 34.1,
      minimumBid: 50.0,
      image: "https://picsum.photos/200?random=2",
      bidExpiry: "2022-06-23 23:15:43",
    },
    {
      itemId: "e8706e73-ae2d-44da-b9c6-0f1dee6024a7",
      title: "Cheese - Swiss Sliced",
      auctionNumber: "003",
      currentBid: 82.0,
      minimumBid: 46.0,
      image: "https://picsum.photos/200?random=3",
      bidExpiry: "2023-05-17 13:08:05",
    },
    {
      itemId: "2895df66-5129-4369-a78a-03b9ec1947be",
      title: "Wine - Red, Gamay Noir",
      auctionNumber: "004",
      currentBid: 47.2,
      minimumBid: 88.9,
      image: "https://picsum.photos/200?random=4",
      bidExpiry: "2022-07-21 10:10:15",
    },
    {
      itemId: "89faccde-d383-4f3e-914d-93097b6e0549",
      title: "Flour Dark Rye",
      auctionNumber: "005",
      currentBid: 20.7,
      minimumBid: 59.5,
      image: "https://picsum.photos/200?random=5",
      bidExpiry: "2022-10-17 07:14:02",
    },
    {
      itemId: "6fc26d2e-d0d7-4ce7-8086-066395ba6405",
      title: "Icecream Bar - Del Monte",
      auctionNumber: "006",
      currentBid: 43.9,
      minimumBid: 90.8,
      image: "https://picsum.photos/200?random=6",
      bidExpiry: "2023-03-25 07:25:31",
    },
    {
      itemId: "bc74fbd6-b1b3-4b22-aad4-d102c07ffc7a",
      title: "Pork - Loin, Bone - In",
      auctionNumber: "007",
      currentBid: 88.2,
      minimumBid: 99.2,
      image: "https://picsum.photos/200?random=7",
      bidExpiry: "2022-07-06 07:20:34",
    },
    {
      itemId: "57d5e20b-99c8-4d2b-9d02-e97fba73ab03",
      title: "Syrup - Monin, Swiss Choclate",
      auctionNumber: "008",
      currentBid: 1.3,
      minimumBid: 71.4,
      image: "https://picsum.photos/200?random=8",
      bidExpiry: "2023-11-12 15:44:09",
    },
    {
      itemId: "cd041446-b55f-4f3f-ad3f-5d41a8b8cfa5",
      title: "Chutney Sauce - Mango",
      auctionNumber: "009",
      currentBid: 70.0,
      minimumBid: 9.7,
      image: "https://picsum.photos/200?random=9",
      bidExpiry: "2023-11-19 14:46:33",
    },
    {
      itemId: "bcb5c390-60c8-42ad-9e6c-34fbc076bfee",
      title: "Honey - Comb",
      auctionNumber: "010",
      currentBid: 59.4,
      minimumBid: 28.4,
      image: "https://picsum.photos/200?random=10",
      bidExpiry: "2023-07-02 19:45:35",
    },
    {
      itemId: "fbc6360c-dd97-4855-bfbd-ee56a59f837a",
      title: "Lid - 3oz Med Rec",
      auctionNumber: "011",
      currentBid: 89.2,
      minimumBid: 37.9,
      image: "https://picsum.photos/200?random=11",
      bidExpiry: "2022-09-15 02:45:49",
    },
    {
      itemId: "9a6911e9-50b8-4631-b62e-aa11c3ea0854",
      title: "French Kiss Vanilla",
      auctionNumber: "012",
      currentBid: 50.3,
      minimumBid: 13.5,
      image: "https://picsum.photos/200?random=12",
      bidExpiry: "2023-09-20 22:11:48",
    },
    {
      itemId: "1b6e68e8-f77d-4121-95fa-b953bd473894",
      title: "Sambuca Cream",
      auctionNumber: "013",
      currentBid: 87.7,
      minimumBid: 68.0,
      image: "https://picsum.photos/200?random=13",
      bidExpiry: "2023-11-08 15:57:40",
    },
    {
      itemId: "cb79efc8-91fa-40de-bb25-3c7aa7ba7bf8",
      title: "Pork - Tenderloin, Fresh",
      auctionNumber: "014",
      currentBid: 77.7,
      minimumBid: 6.6,
      image: "https://picsum.photos/200?random=14",
      bidExpiry: "2023-01-31 12:27:12",
    },
    {
      itemId: "a3984f53-71a5-40a4-ae3b-546bf2dcfc26",
      title: "Scallops - 20/30",
      auctionNumber: "015",
      currentBid: 84.4,
      minimumBid: 21.0,
      image: "https://picsum.photos/200?random=15",
      bidExpiry: "2023-12-06 01:35:06",
    },
    {
      itemId: "191d5266-4d3d-4775-abe9-c9d039f2c97d",
      title: "Oil - Olive",
      auctionNumber: "016",
      currentBid: 17.4,
      minimumBid: 95.7,
      image: "https://picsum.photos/200?random=16",
      bidExpiry: "2023-11-27 08:18:53",
    },
    {
      itemId: "ba2916a5-f335-4212-b008-3c71b4690780",
      title: "Gatorade - Cool Blue Raspberry",
      auctionNumber: "017",
      currentBid: 20.7,
      minimumBid: 55.8,
      image: "https://picsum.photos/200?random=17",
      bidExpiry: "2022-09-23 13:24:00",
    },
    {
      itemId: "73da1ab9-3303-499d-9647-b50ecb448997",
      title: "Cinnamon Rolls",
      auctionNumber: "018",
      currentBid: 11.2,
      minimumBid: 10.2,
      image: "https://picsum.photos/200?random=18",
      bidExpiry: "2023-01-27 20:42:34",
    },
    {
      itemId: "bf8fb5ad-3b74-4a04-a3fa-a5d129cea361",
      title: "Saskatoon Berries - Frozen",
      auctionNumber: "019",
      currentBid: 90.0,
      minimumBid: 68.8,
      image: "https://picsum.photos/200?random=19",
      bidExpiry: "2023-03-16 03:21:18",
    },
    {
      itemId: "69d23799-1122-4492-b583-12cfa6a3f0f0",
      title: "Sauce Bbq Smokey",
      auctionNumber: "020",
      currentBid: 48.3,
      minimumBid: 97.3,
      image: "https://picsum.photos/200?random=20",
      bidExpiry: "2023-04-05 09:44:23",
    },
    {
      itemId: "44d30406-5291-4539-8833-d26af917c645",
      title: "Wine - Magnotta - Cab Sauv",
      auctionNumber: "021",
      currentBid: 68.5,
      minimumBid: 72.7,
      image: "https://picsum.photos/200?random=21",
      bidExpiry: "2022-08-27 06:32:05",
    },
    {
      itemId: "bebb05ff-8b00-4e52-ab13-bc7b8c36ae86",
      title: "Onions - Dried, Chopped",
      auctionNumber: "022",
      currentBid: 43.6,
      minimumBid: 25.0,
      image: "https://picsum.photos/200?random=22",
      bidExpiry: "2022-10-18 06:00:25",
    },
    {
      itemId: "af189383-0e56-4b78-922e-400a17e71178",
      title: "Quiche Assorted",
      auctionNumber: "023",
      currentBid: 26.6,
      minimumBid: 20.0,
      image: "https://picsum.photos/200?random=23",
      bidExpiry: "2022-06-28 20:15:51",
    },
    {
      itemId: "4b52bda6-2560-42bc-b170-df780d25a4f0",
      title: "Veal - Inside",
      auctionNumber: "024",
      currentBid: 78.4,
      minimumBid: 55.8,
      image: "https://picsum.photos/200?random=24",
      bidExpiry: "2023-12-11 04:37:15",
    },
    {
      itemId: "82f50a3f-0cb3-42be-81c9-4affcd201c8b",
      title: "Rice - Sushi",
      auctionNumber: "025",
      currentBid: 39.4,
      minimumBid: 83.9,
      image: "https://picsum.photos/200?random=25",
      bidExpiry: "2023-07-24 23:48:03",
    },
    {
      itemId: "cdaab688-6de7-4b36-8999-e12e5a4f8961",
      title: "Wine - Zonnebloem Pinotage",
      auctionNumber: "026",
      currentBid: 66.7,
      minimumBid: 75.2,
      image: "https://picsum.photos/200?random=26",
      bidExpiry: "2023-07-02 07:54:57",
    },
    {
      itemId: "171ba0f9-f524-493a-98c4-fbab600ab293",
      title: "Flower - Carnations",
      auctionNumber: "027",
      currentBid: 15.3,
      minimumBid: 15.3,
      image: "https://picsum.photos/200?random=27",
      bidExpiry: "2023-09-21 11:01:03",
    },
    {
      itemId: "4e1b236d-351b-4a29-8679-aa3a98e1bce7",
      title: "Sugar - Invert",
      auctionNumber: "028",
      currentBid: 28.1,
      minimumBid: 19.2,
      image: "https://picsum.photos/200?random=28",
      bidExpiry: "2023-03-28 07:47:07",
    },
    {
      itemId: "0d6a91f6-0677-47fe-b97d-f3b3d184ee46",
      title: "Bread - Bagels, Plain",
      auctionNumber: "029",
      currentBid: 18.2,
      minimumBid: 66.1,
      image: "https://picsum.photos/200?random=29",
      bidExpiry: "2023-06-03 01:09:17",
    },
    {
      itemId: "5d119de7-85a4-4441-a351-fe53d54693c1",
      title: "Sauce - Alfredo",
      auctionNumber: "030",
      currentBid: 44.1,
      minimumBid: 16.3,
      image: "https://picsum.photos/200?random=30",
      bidExpiry: "2022-10-20 05:07:04",
    },
    {
      itemId: "00d72936-d511-4370-ace2-2f2d4a889fe9",
      title: "Milk - Buttermilk",
      auctionNumber: "031",
      currentBid: 44.4,
      minimumBid: 11.9,
      image: "https://picsum.photos/200?random=31",
      bidExpiry: "2023-07-08 15:50:47",
    },
    {
      itemId: "5591143f-774d-4bd8-8e60-f2100cb23ed1",
      title: "Bread - English Muffin",
      auctionNumber: "032",
      currentBid: 21.1,
      minimumBid: 23.0,
      image: "https://picsum.photos/200?random=32",
      bidExpiry: "2022-10-05 12:13:42",
    },
    {
      itemId: "1316b0c4-9eae-4bae-b934-cc3be97345be",
      title: "Food Colouring - Green",
      auctionNumber: "033",
      currentBid: 17.3,
      minimumBid: 56.8,
      image: "https://picsum.photos/200?random=33",
      bidExpiry: "2023-12-01 20:55:06",
    },
    {
      itemId: "b74b3e88-8f1d-433a-b8c5-d17887a2c24f",
      title: "Durian Fruit",
      auctionNumber: "034",
      currentBid: 19.7,
      minimumBid: 3.3,
      image: "https://picsum.photos/200?random=34",
      bidExpiry: "2023-09-06 15:43:27",
    },
    {
      itemId: "03698336-55ef-4339-aeea-93add65b56b5",
      title: "Bagel - 12 Grain Preslice",
      auctionNumber: "035",
      currentBid: 59.8,
      minimumBid: 57.0,
      image: "https://picsum.photos/200?random=35",
      bidExpiry: "2022-12-20 08:29:40",
    },
    {
      itemId: "f259565e-8b99-4854-8b62-0daffc26eed8",
      title: "Salsify, Organic",
      auctionNumber: "036",
      currentBid: 45.1,
      minimumBid: 90.5,
      image: "https://picsum.photos/200?random=36",
      bidExpiry: "2023-01-29 11:03:33",
    },
    {
      itemId: "378cc323-1b04-4c5d-b4df-77861d14e796",
      title: "Monkfish Fresh - Skin Off",
      auctionNumber: "037",
      currentBid: 34.6,
      minimumBid: 59.9,
      image: "https://picsum.photos/200?random=37",
      bidExpiry: "2023-04-03 06:18:19",
    },
    {
      itemId: "889d916b-6f6f-411d-8ff1-855ddd063fd6",
      title: "Steampan Lid",
      auctionNumber: "038",
      currentBid: 2.5,
      minimumBid: 39.9,
      image: "https://picsum.photos/200?random=38",
      bidExpiry: "2022-09-07 12:26:01",
    },
    {
      itemId: "b0866b31-3e6b-40b7-9bfa-a402396678a8",
      title: "Carroway Seed",
      auctionNumber: "039",
      currentBid: 58.2,
      minimumBid: 60.9,
      image: "https://picsum.photos/200?random=39",
      bidExpiry: "2023-05-21 12:50:15",
    },
    {
      itemId: "3316d057-13a0-4667-9c9c-78051ff09e69",
      title: "Beef - Tenderloin - Aa",
      auctionNumber: "040",
      currentBid: 24.2,
      minimumBid: 37.8,
      image: "https://picsum.photos/200?random=40",
      bidExpiry: "2023-06-10 20:20:15",
    },
    {
      itemId: "afe5e50b-dac6-4fb3-bc6b-070f081fd51a",
      title: "Tray - 12in Rnd Blk",
      auctionNumber: "041",
      currentBid: 64.4,
      minimumBid: 8.1,
      image: "https://picsum.photos/200?random=41",
      bidExpiry: "2023-07-09 02:57:21",
    },
    {
      itemId: "45d42d12-4be2-4fc1-a3d9-95b0a1b143a4",
      title: "Cookies - Englishbay Wht",
      auctionNumber: "042",
      currentBid: 75.1,
      minimumBid: 9.9,
      image: "https://picsum.photos/200?random=42",
      bidExpiry: "2023-12-11 20:14:14",
    },
    {
      itemId: "6f8b994d-cd1f-470e-be92-eeab7378a7c6",
      title: "Muffin Batt - Choc Chk",
      auctionNumber: "043",
      currentBid: 25.1,
      minimumBid: 77.4,
      image: "https://picsum.photos/200?random=43",
      bidExpiry: "2023-03-17 04:53:09",
    },
    {
      itemId: "40e23cc4-6fe4-4df9-928b-7c1d0409d110",
      title: "Lettuce - Spring Mix",
      auctionNumber: "044",
      currentBid: 76.5,
      minimumBid: 53.3,
      image: "https://picsum.photos/200?random=44",
      bidExpiry: "2022-11-01 05:07:59",
    },
    {
      itemId: "814c627c-110e-4183-8759-cd1b88c41193",
      title: "Mushroom - Enoki, Dry",
      auctionNumber: "045",
      currentBid: 33.4,
      minimumBid: 52.4,
      image: "https://picsum.photos/200?random=45",
      bidExpiry: "2023-06-03 00:49:22",
    },
    {
      itemId: "1a956265-1bfd-4bc3-8c6f-37d01ef5f58f",
      title: "Cleaner - Lime Away",
      auctionNumber: "046",
      currentBid: 79.6,
      minimumBid: 97.2,
      image: "https://picsum.photos/200?random=46",
      bidExpiry: "2022-11-09 14:12:40",
    },
    {
      itemId: "919f4932-dd71-4e3d-b9f4-385b9b4c5eca",
      title: "Halibut - Steaks",
      auctionNumber: "047",
      currentBid: 18.5,
      minimumBid: 57.0,
      image: "https://picsum.photos/200?random=47",
      bidExpiry: "2022-09-20 10:31:16",
    },
    {
      itemId: "a3b6907a-4ca2-42ab-9832-4ac471d164a5",
      title: "Water - Evian 355 Ml",
      auctionNumber: "048",
      currentBid: 43.2,
      minimumBid: 81.4,
      image: "https://picsum.photos/200?random=48",
      bidExpiry: "2022-12-11 08:08:40",
    },
    {
      itemId: "b887a26d-0ed9-4f41-90fb-ff6e74adabf3",
      title: "Cafe Royale",
      auctionNumber: "049",
      currentBid: 9.8,
      minimumBid: 65.4,
      image: "https://picsum.photos/200?random=49",
      bidExpiry: "2023-09-17 02:12:44",
    },
    {
      itemId: "cb1c6bf9-f4d7-47f3-81a0-61660b988b53",
      title: "Cream - 10%",
      auctionNumber: "050",
      currentBid: 4.3,
      minimumBid: 48.3,
      image: "https://picsum.photos/200?random=50",
      bidExpiry: "2022-09-20 07:06:53",
    },
    {
      itemId: "225b4bea-5876-48e0-a30a-dd12a157cfb8",
      title: "Veal - Kidney",
      auctionNumber: "051",
      currentBid: 61.0,
      minimumBid: 33.5,
      image: "https://picsum.photos/200?random=51",
      bidExpiry: "2022-09-20 01:16:45",
    },
    {
      itemId: "7ffb673b-c5d2-46f9-b4f3-4cc42a5bb6b3",
      title: "Iced Tea Concentrate",
      auctionNumber: "052",
      currentBid: 52.6,
      minimumBid: 5.8,
      image: "https://picsum.photos/200?random=52",
      bidExpiry: "2023-04-29 17:00:47",
    },
    {
      itemId: "b1a84fd0-5c9c-414e-a493-1e9670e578e0",
      title: "Lamb - Shoulder, Boneless",
      auctionNumber: "053",
      currentBid: 97.2,
      minimumBid: 58.7,
      image: "https://picsum.photos/200?random=53",
      bidExpiry: "2023-08-25 00:31:43",
    },
    {
      itemId: "8ba7090a-8d44-4886-ad56-960f8dbcc5cc",
      title: "Doilies - 7, Paper",
      auctionNumber: "054",
      currentBid: 67.3,
      minimumBid: 27.2,
      image: "https://picsum.photos/200?random=54",
      bidExpiry: "2023-10-20 14:17:01",
    },
    {
      itemId: "3f1d45bb-fbc5-4743-a242-5a38bc24b48d",
      title: "Quail - Whole, Boneless",
      auctionNumber: "055",
      currentBid: 69.2,
      minimumBid: 4.5,
      image: "https://picsum.photos/200?random=55",
      bidExpiry: "2023-12-12 08:05:39",
    },
    {
      itemId: "fc4ba1c9-1c6b-4bc0-9b44-6c1d822aad54",
      title: "Tea - Herbal - 6 Asst",
      auctionNumber: "056",
      currentBid: 10.6,
      minimumBid: 63.0,
      image: "https://picsum.photos/200?random=56",
      bidExpiry: "2023-08-04 11:48:26",
    },
    {
      itemId: "4b42f310-a145-4f47-bf1d-1f2a282fd5fe",
      title: "Ketchup - Tomato",
      auctionNumber: "057",
      currentBid: 84.1,
      minimumBid: 10.3,
      image: "https://picsum.photos/200?random=57",
      bidExpiry: "2022-09-21 00:03:13",
    },
    {
      itemId: "25a7e94b-5f46-4405-ac26-8dbd90cd8114",
      title: "Veal - Bones",
      auctionNumber: "058",
      currentBid: 51.3,
      minimumBid: 46.8,
      image: "https://picsum.photos/200?random=58",
      bidExpiry: "2022-08-19 14:12:01",
    },
    {
      itemId: "7b779425-3b1f-4f02-bb56-47e5aa894375",
      title: "Artichokes - Knobless, White",
      auctionNumber: "059",
      currentBid: 61.9,
      minimumBid: 60.7,
      image: "https://picsum.photos/200?random=59",
      bidExpiry: "2023-12-02 15:09:25",
    },
    {
      itemId: "b5cbbe4b-1aef-4843-a93f-e303e3ee6e89",
      title: "Grand Marnier",
      auctionNumber: "060",
      currentBid: 22.7,
      minimumBid: 28.4,
      image: "https://picsum.photos/200?random=60",
      bidExpiry: "2023-11-07 00:37:35",
    },
    {
      itemId: "454798fc-2f3a-4316-8d43-b986a50f2d2c",
      title: "Chicken Giblets",
      auctionNumber: "061",
      currentBid: 68.1,
      minimumBid: 2.6,
      image: "https://picsum.photos/200?random=61",
      bidExpiry: "2024-01-03 14:24:38",
    },
    {
      itemId: "ade99397-115d-4e6a-a912-0aef0a33af91",
      title: "Rice Wine - Aji Mirin",
      auctionNumber: "062",
      currentBid: 6.9,
      minimumBid: 33.6,
      image: "https://picsum.photos/200?random=62",
      bidExpiry: "2023-06-24 04:49:59",
    },
    {
      itemId: "53393acb-e45b-4121-94da-d3209daf842c",
      title: "Soup - Base Broth Chix",
      auctionNumber: "063",
      currentBid: 66.0,
      minimumBid: 55.5,
      image: "https://picsum.photos/200?random=63",
      bidExpiry: "2023-03-24 13:01:04",
    },
    {
      itemId: "9184cebe-2af6-4960-b430-afb36c923580",
      title: "Glove - Cutting",
      auctionNumber: "064",
      currentBid: 23.4,
      minimumBid: 55.8,
      image: "https://picsum.photos/200?random=64",
      bidExpiry: "2023-05-09 07:23:30",
    },
    {
      itemId: "9e29af92-26c1-4c07-882e-c60a037e4858",
      title: "Egg Patty Fried",
      auctionNumber: "065",
      currentBid: 68.6,
      minimumBid: 92.5,
      image: "https://picsum.photos/200?random=65",
      bidExpiry: "2023-09-30 22:38:56",
    },
    {
      itemId: "2bca4d17-eec8-4e93-8a64-250a22f60e33",
      title: "Yogurt - Plain",
      auctionNumber: "066",
      currentBid: 29.5,
      minimumBid: 83.9,
      image: "https://picsum.photos/200?random=66",
      bidExpiry: "2022-08-15 18:30:01",
    },
    {
      itemId: "658e2676-d0dd-490c-b714-b3a9d6de82c2",
      title: "Cheese - Goat With Herbs",
      auctionNumber: "067",
      currentBid: 79.1,
      minimumBid: 92.2,
      image: "https://picsum.photos/200?random=67",
      bidExpiry: "2023-05-29 06:13:12",
    },
    {
      itemId: "68ca865e-d715-4a89-83bc-b1c2c8adb791",
      title: "Tuna - Fresh",
      auctionNumber: "068",
      currentBid: 84.4,
      minimumBid: 91.9,
      image: "https://picsum.photos/200?random=68",
      bidExpiry: "2023-07-27 19:16:00",
    },
    {
      itemId: "a7f40365-0996-4297-82e0-5653aba64ba6",
      title: "Vodka - Hot, Lnferno",
      auctionNumber: "069",
      currentBid: 17.1,
      minimumBid: 10.7,
      image: "https://picsum.photos/200?random=69",
      bidExpiry: "2023-11-11 08:44:22",
    },
    {
      itemId: "6ce29af0-0e13-4aa0-baf2-a5141e76f9ff",
      title: "Muffin Carrot - Individual",
      auctionNumber: "070",
      currentBid: 83.9,
      minimumBid: 60.8,
      image: "https://picsum.photos/200?random=70",
      bidExpiry: "2023-02-25 23:38:18",
    },
    {
      itemId: "f2b43043-ef4e-4be5-9141-29ef16f928ee",
      title: "Radish",
      auctionNumber: "071",
      currentBid: 54.0,
      minimumBid: 71.8,
      image: "https://picsum.photos/200?random=71",
      bidExpiry: "2023-03-02 10:24:31",
    },
    {
      itemId: "ff103d10-d9ce-41ee-bea9-54a9680b6364",
      title: "Cucumber - English",
      auctionNumber: "072",
      currentBid: 74.9,
      minimumBid: 63.7,
      image: "https://picsum.photos/200?random=72",
      bidExpiry: "2024-01-17 17:19:09",
    },
    {
      itemId: "0c32e7b7-0dce-416f-a323-e3951cba563c",
      title: "Lid - Translucent, 3.5 And 6 Oz",
      auctionNumber: "073",
      currentBid: 53.6,
      minimumBid: 21.5,
      image: "https://picsum.photos/200?random=73",
      bidExpiry: "2023-08-12 16:26:37",
    },
    {
      itemId: "3c5dbbe8-b01a-46c3-9f47-181aa7e8904a",
      title: "Wine - Touraine Azay - Le - Rideau",
      auctionNumber: "074",
      currentBid: 46.2,
      minimumBid: 4.3,
      image: "https://picsum.photos/200?random=74",
      bidExpiry: "2023-01-16 09:50:32",
    },
    {
      itemId: "874f9d6d-bc21-4674-a519-b79ac940d946",
      title: "Lidsoupcont Rp12dn",
      auctionNumber: "075",
      currentBid: 84.1,
      minimumBid: 9.5,
      image: "https://picsum.photos/200?random=75",
      bidExpiry: "2022-10-02 23:48:49",
    },
    {
      itemId: "16e1a1fe-137b-40bf-af72-323ade052549",
      title: "Food Colouring - Orange",
      auctionNumber: "076",
      currentBid: 34.0,
      minimumBid: 56.7,
      image: "https://picsum.photos/200?random=76",
      bidExpiry: "2023-01-15 13:54:48",
    },
    {
      itemId: "bd0bc323-6850-436c-903e-0f10d7d00cc6",
      title: "Wine - Mas Chicet Rose, Vintage",
      auctionNumber: "077",
      currentBid: 12.7,
      minimumBid: 64.9,
      image: "https://picsum.photos/200?random=77",
      bidExpiry: "2023-12-12 20:41:40",
    },
    {
      itemId: "2f8c49f7-b5a0-469c-961f-5ed853a79f8b",
      title: "Juice - Orangina",
      auctionNumber: "078",
      currentBid: 87.7,
      minimumBid: 72.4,
      image: "https://picsum.photos/200?random=78",
      bidExpiry: "2024-01-06 11:38:24",
    },
    {
      itemId: "4d7f2874-f1fc-4ec9-833f-e9335c603591",
      title: "Soup - Campbells - Chicken Noodle",
      auctionNumber: "079",
      currentBid: 59.9,
      minimumBid: 2.0,
      image: "https://picsum.photos/200?random=79",
      bidExpiry: "2023-11-21 04:54:51",
    },
    {
      itemId: "27074ce8-1106-45fd-ae2f-b8dc48123f0a",
      title: "Wine - Prosecco Valdobienne",
      auctionNumber: "080",
      currentBid: 13.0,
      minimumBid: 81.9,
      image: "https://picsum.photos/200?random=80",
      bidExpiry: "2023-09-14 22:28:58",
    },
    {
      itemId: "98ce9d4d-32b1-4e95-b0a6-1b1e68c0c0db",
      title: "Crawfish",
      auctionNumber: "081",
      currentBid: 11.1,
      minimumBid: 31.4,
      image: "https://picsum.photos/200?random=81",
      bidExpiry: "2022-10-10 20:05:07",
    },
    {
      itemId: "ba9f3a5d-35ba-4d30-9996-5655c8c3c661",
      title: "Bread - Roll, Whole Wheat",
      auctionNumber: "082",
      currentBid: 3.7,
      minimumBid: 87.3,
      image: "https://picsum.photos/200?random=82",
      bidExpiry: "2023-03-30 07:33:57",
    },
    {
      itemId: "dd57fbd0-16bb-4607-892f-892006b55532",
      title: "Cheese - Parmigiano Reggiano",
      auctionNumber: "083",
      currentBid: 62.0,
      minimumBid: 15.8,
      image: "https://picsum.photos/200?random=83",
      bidExpiry: "2023-05-28 09:15:38",
    },
    {
      itemId: "2f8d17a3-73cc-419e-879c-edf19d22c9f7",
      title: "Veal - Osso Bucco",
      auctionNumber: "084",
      currentBid: 49.9,
      minimumBid: 92.3,
      image: "https://picsum.photos/200?random=84",
      bidExpiry: "2023-07-18 00:26:29",
    },
    {
      itemId: "db34fac0-4b68-4890-94b0-87c4338a0350",
      title: "Lobster - Baby, Boiled",
      auctionNumber: "085",
      currentBid: 57.4,
      minimumBid: 43.5,
      image: "https://picsum.photos/200?random=85",
      bidExpiry: "2022-09-05 22:15:27",
    },
    {
      itemId: "7f0f0ff9-6fed-4a01-9f5a-e972b5e4d695",
      title: "Foil - 4oz Custard Cup",
      auctionNumber: "086",
      currentBid: 14.8,
      minimumBid: 2.6,
      image: "https://picsum.photos/200?random=86",
      bidExpiry: "2023-05-27 12:39:29",
    },
    {
      itemId: "56d2e840-6793-4ef2-b1cb-6e7ce97535ed",
      title: "Wooden Mop Handle",
      auctionNumber: "087",
      currentBid: 82.0,
      minimumBid: 94.3,
      image: "https://picsum.photos/200?random=87",
      bidExpiry: "2022-11-04 20:45:55",
    },
    {
      itemId: "1a646697-5235-4027-bb3c-5b429a976b3b",
      title: "Wine - Trimbach Pinot Blanc",
      auctionNumber: "088",
      currentBid: 77.6,
      minimumBid: 65.4,
      image: "https://picsum.photos/200?random=88",
      bidExpiry: "2023-07-19 15:01:50",
    },
    {
      itemId: "b6e872fa-345b-4371-b8e7-19caada2b65a",
      title: "Star Fruit",
      auctionNumber: "089",
      currentBid: 95.6,
      minimumBid: 51.8,
      image: "https://picsum.photos/200?random=89",
      bidExpiry: "2023-06-23 10:04:28",
    },
    {
      itemId: "f2f12517-5e27-4bb0-bfa6-2ca15e19e0b8",
      title: "Beef - Eye Of Round",
      auctionNumber: "090",
      currentBid: 25.0,
      minimumBid: 26.9,
      image: "https://picsum.photos/200?random=90",
      bidExpiry: "2023-12-29 20:34:35",
    },
    {
      itemId: "88f7beb5-cf15-443e-b70b-836bda5bf6c3",
      title: "Muffin Puck Ww Carrot",
      auctionNumber: "091",
      currentBid: 26.7,
      minimumBid: 75.0,
      image: "https://picsum.photos/200?random=91",
      bidExpiry: "2022-11-25 23:58:55",
    },
    {
      itemId: "c94f9be9-5787-4bed-b1fe-7afb03f22f0b",
      title: "Calypso - Strawberry Lemonade",
      auctionNumber: "092",
      currentBid: 74.6,
      minimumBid: 63.5,
      image: "https://picsum.photos/200?random=92",
      bidExpiry: "2023-06-08 15:55:02",
    },
    {
      itemId: "bacdfaed-dbd3-4509-aacc-73455bc0d795",
      title: "Bread - Malt",
      auctionNumber: "093",
      currentBid: 28.6,
      minimumBid: 20.9,
      image: "https://picsum.photos/200?random=93",
      bidExpiry: "2022-12-27 23:03:34",
    },
    {
      itemId: "f8872c0b-b8ca-48d1-8fcc-c7f51ec129a9",
      title: "Cleaner - Bleach",
      auctionNumber: "094",
      currentBid: 59.2,
      minimumBid: 30.6,
      image: "https://picsum.photos/200?random=94",
      bidExpiry: "2022-11-01 00:46:55",
    },
    {
      itemId: "7d59541f-c005-426e-8b94-69ed7a4ad698",
      title: "Fish - Atlantic Salmon, Cold",
      auctionNumber: "095",
      currentBid: 49.9,
      minimumBid: 78.8,
      image: "https://picsum.photos/200?random=95",
      bidExpiry: "2023-10-30 18:13:54",
    },
    {
      itemId: "1a31a549-db21-47d4-b7e9-5181ad67f561",
      title: "Clam - Cherrystone",
      auctionNumber: "096",
      currentBid: 86.4,
      minimumBid: 93.7,
      image: "https://picsum.photos/200?random=96",
      bidExpiry: "2023-11-24 22:59:54",
    },
    {
      itemId: "b6ea07b4-53ae-4a75-afdf-84cab1fd079e",
      title: "Laundry - Bag Cloth",
      auctionNumber: "097",
      currentBid: 9.1,
      minimumBid: 15.0,
      image: "https://picsum.photos/200?random=97",
      bidExpiry: "2022-09-08 13:27:54",
    },
    {
      itemId: "d0966c4b-f976-4201-8ae8-97082347446c",
      title: "Island Oasis - Sweet And Sour Mix",
      auctionNumber: "098",
      currentBid: 64.0,
      minimumBid: 44.0,
      image: "https://picsum.photos/200?random=98",
      bidExpiry: "2022-10-09 20:29:10",
    },
    {
      itemId: "5c34697a-c340-487a-950c-f30e26c144fc",
      title: "Glycerine",
      auctionNumber: "099",
      currentBid: 55.6,
      minimumBid: 46.3,
      image: "https://picsum.photos/200?random=99",
      bidExpiry: "2023-05-22 20:32:06",
    },
    {
      itemId: "0f346de5-f589-40e1-997e-d3e8b4296695",
      title: "Ginger - Ground",
      auctionNumber: "100",
      currentBid: 97.1,
      minimumBid: 73.6,
      image: "https://picsum.photos/200?random=100",
      bidExpiry: "2023-06-09 12:30:30",
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
                        <ProductCard type="browse" product={product} />
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
