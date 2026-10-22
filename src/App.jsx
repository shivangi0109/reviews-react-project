import { useState } from "react";
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import data from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  return (
    <main>
      <div className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <div className="quote-icon">
            <FaQuoteRight />
          </div>
        </div>
        <h2 className="author">{name}</h2>
        <h3 className="job">{job}</h3>
        <p className="info">{text}</p>
        <FaAngleLeft
          onClick={() => setIndex((index - 1 + data.length) % data.length)}
          className="prev-btn"
        />
        <FaAngleRight
          onClick={() => setIndex((index + 1) % data.length)}
          className="next-btn"
        />
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            style={{ marginTop: "1rem" }}
            onClick={() => setIndex(Math.floor(Math.random() * data.length))}
          >
            Surprise Me
          </button>
        </div>
      </div>
    </main>
  );
};
export default App;
