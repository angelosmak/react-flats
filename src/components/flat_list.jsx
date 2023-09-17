import React from "react";
import Flat from './flat';
import flats from "../../data/flats"

const FlatList = () => {
  return (
    <div className="flat-list">
      {flats.map(({ name, price, imageUrl, priceCurrency }) => {
        return <Flat name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} key={name} />;
      })}
    </div>
  );
};

export default FlatList;
