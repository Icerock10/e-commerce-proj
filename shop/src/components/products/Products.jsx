import React, { useRef, useEffect, useState } from "react";
import "./Products.scss";
import { products } from "../../helpers/products";

function Products() {
	const containerRef = useRef(null);
	const [startX, setStartX] = useState(0);
	const [offsetX, setOffsetX] = useState(0);
	const [isDragging, setIsDragging] = useState(false);
	const [px, setPx] = useState(0);
	const step = Math.floor(products.length / 3);
	const maxDistance = offsetX + px;

	useEffect(() => {
	  const handleMouseMove = (event) => {
		 if (!isDragging) return;
		 const x = event.clientX;
		 const distance = x - startX;
		 setOffsetX(distance * 2);
	  };
 
	  const handleMouseUp = () => {
		 const elemWidth = containerRef.current.children[0].offsetWidth;
		 const containerWidth = containerRef.current.offsetWidth;
		 const totalElemWidth = elemWidth * products.length;
		 let remainingSpace = containerWidth - totalElemWidth;

		 if (maxDistance > 18) {
			setIsDragging(false);
			setOffsetX(0);
			setPx(0);
			return;
		 }
		 if (maxDistance < remainingSpace) {
			setIsDragging(false);
			setOffsetX(0);
			setPx(remainingSpace - 150); //gaps
			return;
		 }
 
		 setIsDragging(false);
		 setPx((prev) => prev + offsetX);
		 setOffsetX(0);
	  };
 
	  document.addEventListener("mousemove", handleMouseMove);
	  document.addEventListener("mouseup", handleMouseUp);
 
	  return () => {
		 document.removeEventListener("mousemove", handleMouseMove);
		 document.removeEventListener("mouseup", handleMouseUp);
	  };
	}, [isDragging, startX, offsetX, px]);
 
	const handleMouseDown = (event) => {
	  event.preventDefault();
	  setStartX(event.clientX);
	  setIsDragging(true);
	};

	const handleNext = (index) => {
		const itemsPerScroll = (containerRef.current.children[0].offsetWidth + 15) * step;
		setPx(index * -itemsPerScroll)
	  }

  const css = {
    transform: `translate3d(${px + offsetX}px, 0px, 0px)`,
  };
  
  
  return (
    <div className="container container__products">
      <h1 style={{ textAlign: "center" }} className="fashion_taital">
        Man &amp; Woman Fashion
      </h1>
      <div
        className="card__container"
        ref={containerRef}
        onMouseDown={handleMouseDown}
      >
        {products.map((item) => {
          return (
            <div className="elem" key={item.id} style={css}>
              <h4>{item.heading}</h4>
              <p>
                Price <span>{item.price}</span>
              </p>
              <img src={item.image} alt="img" />
              <div className="card__footer">
                <span>Buy Now</span>
                <span>See More</span>
              </div>
            </div>
          );
        })}
      </div>
		{Array(products.length / 3).fill('()').map((item, index) => {
			return <div onClick={() => handleNext(index)} key={index} style={{cursor: "pointer"}}>{item}</div>
		})}
    </div>
  );
}

export default Products;









// import React, { useRef, useEffect, useState } from "react";
// import "./Products.scss";
// import { products } from "../../helpers/products";

// function Products() {
// 	const containerRef = useRef(null);
// 	const [startX, setStartX] = useState(0);
// 	const [offsetX, setOffsetX] = useState(0);
// 	const [isDragging, setIsDragging] = useState(false);
// 	const step = Math.floor(products.length / 3);
// 	const [px, setPx] = useState(0);
 
// 	useEffect(() => {
// 	  const handleMouseMove = (event) => {
// 		 if (!isDragging) return;
// 		 const x = event.clientX;
// 		 const distance = x - startX;
// 		 setOffsetX(distance * 2);
// 	  };
 
// 	  const handleMouseUp = () => {
// 		 const elemWidth = containerRef.current.lastChild.offsetWidth;
// 		 const containerWidth = containerRef.current.offsetWidth;
// 		 const totalElemWidth = elemWidth * products.length;
// 		 let remainingSpace = containerWidth - totalElemWidth;
// 		 const maxDistance = containerRef.current.lastChild.style.transform.slice(
// 			12,
// 			-13
// 		 );
// 		 if (maxDistance > 18) {
// 			setIsDragging(false);
// 			setOffsetX(0);
// 			setPx(0);
// 			return;
// 		 }
// 		 if (maxDistance < remainingSpace) {
// 			setIsDragging(false);
// 			setOffsetX(0);
// 			setPx(remainingSpace - 150); //gaps
// 			return;
// 		 }
 
// 		 setIsDragging(false);
// 		 setPx((prev) => prev + offsetX);
// 		 setOffsetX(0);
// 	  };
 
// 	  document.addEventListener("mousemove", handleMouseMove);
// 	  document.addEventListener("mouseup", handleMouseUp);
 
// 	  return () => {
// 		 document.removeEventListener("mousemove", handleMouseMove);
// 		 document.removeEventListener("mouseup", handleMouseUp);
// 	  };
// 	}, [isDragging, startX, offsetX, px]);
 
// 	const handleMouseDown = (event) => {
// 	  event.preventDefault();
// 	  setStartX(event.clientX);
// 	  setIsDragging(true);
// 	};

//   const css = {
//     transform: `translate3d(${px + offsetX}px, 0px, 0px)`,
//   };
  
//   const handleNext = (index) => {
// 	const itemsPerScroll = (containerRef.current.lastChild.offsetWidth + 15) * step;
// 	setPx(index * -itemsPerScroll)
//   }

//   return (
//     <div className="container container__products">
//       <h1 style={{ textAlign: "center" }} className="fashion_taital">
//         Man &amp; Woman Fashion
//       </h1>
//       <div
//         className="card__container"
//         ref={containerRef}
//         onMouseDown={handleMouseDown}
//       >
//         {products.map((item) => {
//           return (
//             <div className="elem" key={item.id} style={css}>
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
// 		{Array(products.length / 3).fill('()').map((item, index) => {
// 			return <div onClick={() => handleNext(index)} key={index} style={{cursor: "pointer"}}>{item}</div>
// 		})}
//     </div>
//   );
// }

// export default Products;
