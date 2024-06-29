import { useState, useEffect } from "react";
import CardInfo from "../CardInfo/cardInfo";
import "./cardListStyle.css";
import frozenData from "./forzenData.json";

const CardList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Assuming data.json is being imported as 'data'
    setProduct(frozenData);
  }, []);
  return (
    <div className="cardHolder">
      <div className="catInfo">
        <h1 className="catTitle">Main Categroies</h1>
        <p className="catText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          aspernatur deserunt repellat ad expedita maxime dolorum perspiciatis,
        </p>
      </div>
      <div className="card-list">
        <CardInfo product={product} />
      </div>
    </div>
  );
};

export default CardList;
