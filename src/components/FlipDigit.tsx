import { useEffect, useRef, useState } from "react";
import "./flip-counter.css";

// One flip card; animates whenever `digit` changes
const FlipDigit = ({ digit }: { digit: string }) => {
  const [current, setCurrent] = useState(digit);
  const [previous, setPrevious] = useState(digit);
  const [flipId, setFlipId] = useState(0);
  const latest = useRef(digit);

  useEffect(() => {
    if (digit === latest.current) return;
    setPrevious(latest.current);
    setCurrent(digit);
    setFlipId((n) => n + 1);
    latest.current = digit;
  }, [digit]);

  const flipping = flipId > 0 && previous !== current;

  return (
    <div className="flip-card" aria-hidden="true">
      {/* Static halves: new digit on top, old digit below until the leaf lands */}
      <div className="flip-half flip-top">
        <span>{current}</span>
      </div>
      <div className="flip-half flip-bottom">
        <span>{flipping ? previous : current}</span>
      </div>

      {flipping && (
        <div key={flipId}>
          <div className="flip-half flip-top flip-leaf-top">
            <span>{previous}</span>
          </div>
          <div className="flip-half flip-bottom flip-leaf-bottom">
            <span>{current}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlipDigit;
