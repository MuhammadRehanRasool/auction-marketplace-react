import React, { useEffect, useState } from "react";
import "./../scss/ProductCard.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function ProductCard(props) {
  const [data, setData] = useState({
    itemId: "",
    title: "",
    auctionNumber: "",
    currentBid: "",
    minimumBid: "",
    image: "",
    isFavorite: false,
    discount: "",
    newPrice: "",
    oldPrice: "",
    category: "",
  });

  const [countdown, setCountdown] = useState({
    day: "",
    hour: "",
    minute: "",
    second: "",
  });

  useEffect(() => {
    let countdownLoop;
    if (props.product !== "" || props.product !== null) {
      setData(props.product);
      if (!!props.product.bidExpiry) {
        let eventTime = new Date(props.product.bidExpiry).getTime();
        let currentTime = new Date().getTime();
        let diffTime = eventTime - currentTime;
        let duration = moment.duration(diffTime, "milliseconds");
        let interval = 1000;
        countdownLoop = setInterval(function () {
          duration = moment.duration(duration - interval, "milliseconds");
          setCountdown({
            day: Math.floor(duration.asDays()),
            hour: duration.hours(),
            minute: duration.minutes(),
            second: duration.seconds(),
          });
        }, interval);
      }
    }

    return () => {
      clearInterval(countdownLoop);
    };
    // eslint-disable-next-line
  }, []);

  if (!props.product) return;

  return (
    <Link to="/product/*" className="__ProductCard">
      <div className={`card ${props.type}`}>
        <img src={data.image} className="card-img-top" alt={data.title} />
        {props.type === "auction" || props.type === "sale" ? (
          <span role={"button"} className="heart">
            <img
              src={`/icons/${data.isFavorite ? "liked" : "heart"}.png`}
              alt="heart"
            />
          </span>
        ) : null}
        {props.type === "sale" &&
        data.discount !== "" &&
        data.discount !== 0 ? (
          <span className="discount">{data.discount}%</span>
        ) : null}
        {props.type !== "sale" ? (
          <div className="card-body">
            <div className="row1">
              <Tooltip title={data.title}>
                <span className={`title`}>{data.title}</span>
              </Tooltip>
              <span className="number">Auc# {data.auctionNumber}</span>
            </div>
            <div className="row2 my-4">
              <div className="bid justify-content-start">
                <span className="label">Current bid</span>
                <span className="value">${data.currentBid}</span>
              </div>
              <div className="bid justify-content-end">
                <span className="label">Minimum bid</span>
                <span className="value">${data.minimumBid}</span>
              </div>
            </div>
            <div className="border-top button">
              <span role="button" className="bidButton">
                QUICK BID
              </span>
              {props.type === "auction" ? (
                <span className="timeLeft">
                  <b>{countdown.day}</b>d <b>{countdown.hour}</b>h{" "}
                  <b>{countdown.minute}</b>m <b>{countdown.second}</b>s
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div className="card-body">
            <div className="row1">
              <span className="title">{data.title}</span>
            </div>
            <div className="row2 my-2">
              <div className="bid justify-content-start">
                <span className="label">${data.newPrice}</span>
                {data.oldPrice !== data.newPrice ? (
                  <span className="value">
                    <s>${data.oldPrice}</s>
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="bid justify-content-end">
                <img
                  src="/icons/add.png"
                  alt="add"
                  className="add"
                  role={"button"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
