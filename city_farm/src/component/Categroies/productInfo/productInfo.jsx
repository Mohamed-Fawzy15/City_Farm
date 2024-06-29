// import React, { useState } from "react";
// import "./productInfoStyle.css";
// import NavBar from "../../NavBar/NavBar";
// import Footer from "../../Footer/Footer";
// import UpBtn from "../../UpBtn/UpBtn";
// import { useLocation, useParams } from "react-router-dom";
// // import frozen from "../data.json";
// // import jucies from "../jucies.json";
// // import beans from "../beans.json";
// // import spices from "../spices.json";
// // import pickles from "../pickles.json";
// // import snacks from "../snacks.json";

// function ProductInfo() {
//   const { id } = useParams();

//   //   const location = useLocation();
//   //   const { product } = location.state;
//   console.log(id);

//   const [mainImg, setMainImg] = useState("");
//   const [selectedImg, setSelectedImg] = useState("");

//   const handleImageClick = (imgSrc) => {
//     setMainImg(imgSrc);
//     setSelectedImg(imgSrc);
//   };

//   return (
//     <div className="productInfo-holder">
//       <NavBar />
//       <div className="productInfo-body">
//         <div className="productInfo-imgs">
//           <img src={mainImg} alt="product" className="mainImg" />
//           <div className="productInfo-subImgs">
//             {mainImg.product.map((imgSrc) => (
//               <div className="productInfo-subImgs" key={imgSrc.id}>
//                 {imgSrc.productImg.map((i) => (
//                   <img
//                     key={i.id}
//                     src={i.pic}
//                     alt="product"
//                     className={`subImg ${
//                       selectedImg === i.pic ? "selected" : ""
//                     }`}
//                     onClick={() => handleImageClick(i.pic)}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {mainImg.product.map((info) => (
//           <div key={info.id} className="productInfo-data">
//             <h1>{info.name}</h1>
//             {info.data.map((d) => (
//               <div className="productInfo-ingrdiant">
//                 <p>{d.desc}</p>
//                 <h3>Ingredients:</h3>
//                 <p>{d.Ingredients}</p>
//                 <h3>To store:</h3>
//                 <p>{d.toStore}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <UpBtn />
//       <Footer />
//     </div>
//   );
// }

// export default ProductInfo;
