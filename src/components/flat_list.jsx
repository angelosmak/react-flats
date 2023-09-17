import React from "react";
import Flat from './flat';
import flats from "../../data/flats"

const FlatList = () => {
  return (
    <div className="flat-list">
      {flats.map(({ name, price, imageUrl, priceCurrency, lat, lng }) => {
        return <Flat name={name} imageUrl={imageUrl} price={price} priceCurrency={priceCurrency} lat={lat} lng={lng} key={name} />;
      })}
    </div>
  );
};

export default FlatList;
