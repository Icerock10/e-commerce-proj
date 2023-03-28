import React, { useRef, useEffect, useState } from "react";
import "./Products.scss";
import { products } from "../.././helpers/products";

function Products() {
  const [isDragging, setisDragging] = useState<boolean>(false);
  const [px, setPx] = useState<number>(0);
  let containerRef = useRef<HTMLDivElement>(null);

  const dragging = (e: any): void => {
    if (!isDragging) return;
    if (containerRef && containerRef.current) {
      containerRef.current.scrollLeft -= e.movementX;
    }
  };
  const dragStop = (): void => {
    setisDragging(false);
  };

  // containerWidth = 1140;
  // elemWidth = 350;

  const css = {
    transform: `translate3d(${px}px, 0px, 0px)`,
  };

  return (
    <div className="container container__products">
      <h1 style={{ textAlign: "center" }} className="fashion_taital">
        Man &amp; Woman Fashion
      </h1>
      <div
        className="card__container"
        ref={containerRef}
        onMouseMove={dragging}
        onMouseDown={() => setisDragging(!isDragging)}
        onMouseUp={dragStop}
        style={{
          cursor: `${isDragging ? "grabbing" : ""}`,
        }}
        onDragStart={() => false}
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
    </div>
  );
}

export default Products;
