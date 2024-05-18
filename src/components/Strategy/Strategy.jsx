import "./strategy.css";
import { useState, useEffect, useRef, useMemo } from "react";

export const Strategy = () => {
  const [selectedSize, setSelectedSize] = useState("medium");

  const opttions = useMemo(
    () => ["Big Options Buys", "Merger Arbitrage", "Short Reports"],
    []
  );

  const scrollWheelRef = useRef(null);

  useEffect(() => {
    const selectedIndex = opttions.findIndex((size) => size === selectedSize);

    const scrollPosition = selectedIndex * scrollWheelRef.current.offsetWidth;

    scrollWheelRef.current.scrollLeft =
      scrollPosition - scrollWheelRef.current.offsetWidth / 2;
  }, [selectedSize, opttions]);

  return (
    <div className="wrapper">
      <h1>Strategy</h1>
      <div className="picker">
        <div className="scroll-wheel" ref={scrollWheelRef}>
          <ul>
            {opttions.map((size) => (
              <li
                key={size}
                className={size === selectedSize ? "selected" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
