import React from "react";

function useSwiper() {
  return <div>useSwiper</div>;
}

export default useSwiper;

// import "./styles.css";
// import React, { useRef, useEffect, useState } from "react";
// import { products } from "./products";

// // const elemWidth = containerRef.current.firstChild.offsetWidth;
// // const totalElemWidth = elemWidth * products.length;
// // const remainingSpace = containerWidth - totalElemWidth;
// // const minimalDistance = containerRef.current.firstChild.style.transform.slice(12, -13);

// export default function App() {
//   const containerRef = useRef(null);
//   const [startX, setStartX] = useState(0);
//   const [offsetX, setOffsetX] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const step = Math.floor(products.length / 3);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [px, setPx] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       if (!isDragging) return;
//       const x = event.clientX;
//       const distance = x - startX;
//       setOffsetX(distance * 2);
//     };
//     const handleMouseUp = () => {
//       const elemWidth = containerRef.current.lastChild.offsetWidth;
//       const containerWidth = containerRef.current.offsetWidth;
//       const totalElemWidth = elemWidth * products.length;
//       let remainingSpace = containerWidth - totalElemWidth;

//       const minimalDistance = containerRef.current.firstChild.style.transform.slice(
//         12,
//         -13
//       );
//       const maxDistance = containerRef.current.lastChild.style.transform.slice(
//         12,
//         -13
//       );
//       console.log(remainingSpace);
//       if (minimalDistance > 18) {
//         setIsDragging(false);
//         setOffsetX(0);
//         setPx(0);
//         return;
//       }
//       if (maxDistance < remainingSpace) {
//         setIsDragging(false);
//         setOffsetX(0);
//         setPx(remainingSpace - 140);
//         return;
//       }
//       setIsDragging(false);
//       console.log(offsetX, "offset");
//       setPx((prev) => prev + offsetX);
//       setOffsetX(0);
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseUp);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDragging, startX, offsetX, px]);

//   const handleMouseDown = (event) => {
//     event.preventDefault();
//     setStartX(event.clientX);
//     setIsDragging(true);
//   };

//   const css = {
//     transform: `translate3d(${px + offsetX}px, 0px, 0px)`
//   };

//   return (
//     <div>
//       <div
//         className="card__container"
//         ref={containerRef}
//         onMouseDown={handleMouseDown}
//       >
//         {products.map((item) => {
//           return (
//             <div className="elem" style={css} key={item.id}>
//               <h4>{item.heading}</h4>
//               <p>
//                 Price <span>{item.price}</span>
//               </p>
//               <img src={item.image} alt="img" />
//               <div className="card__footer">
//                 <span>Buy Now</span>
//                 <span>See More</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="btn__group"></div>
//     </div>
//   );
// }

// // const handleNextClick = () => {
// //   if (isDragging) {
// //     console.log("worked");
// //   }
// //   if (currentPage < step) {
// //     setCurrentPage(currentPage + 1);
// //     setPx((prev) => (prev += -1050));
// //   } else {
// //     setCurrentPage(0);
// //     setPx(0);
// //   }
// // };

// // const handlePrevClick = () => {
// //   if (currentPage === 0) {
// //     setCurrentPage(step);
// //     setPx(step * -1050);
// //     return;
// //   }
// //   setCurrentPage(currentPage - 1);
// //   setPx((prev) => (prev += 1050));
// // };
