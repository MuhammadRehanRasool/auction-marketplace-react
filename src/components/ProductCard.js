import React from "react";
import "./../scss/ProductCard.scss";


export default function ProductCard() {
  return (
    <div className="__ProductCard">
      <div className="card">
        <img src="products/1.png" className="card-img-top" alt="1.png" />
        <div className="card-body">
          <div className="row1">
            <span className="title">Headphones</span>
            <span className="number">Auc# 001</span>
          </div>
          <div className="row2 my-4">
            <div className="bid justify-content-start">
              <span className="label">Current bid</span>
              <span className="value">$99.9</span>
            </div>
            <div className="bid justify-content-end">
              <span className="label">Minimum bid</span>
              <span className="value">$9.9</span>
            </div>
          </div>
          <div className="border-top button" role="button">
            QUICK BID
          </div>
        </div>
      </div>
    </div>
  );
}
