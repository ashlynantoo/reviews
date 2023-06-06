import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button
          className="prev-btn"
          onClick={() => {
            const newIndex = index - 1;
            index === 0 ? setIndex(people.length - 1) : setIndex(newIndex);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            const newIndex = index + 1;
            index === people.length - 1 ? setIndex(0) : setIndex(newIndex);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          let randomNum = Math.floor(Math.random() * people.length);
          randomNum === index
            ? randomNum === people.length - 1
              ? setIndex(0)
              : setIndex(randomNum + 1)
            : setIndex(randomNum);
        }}
      >
        Random Review
      </button>
    </article>
  );
};

export default Review;
