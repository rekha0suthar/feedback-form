import React from 'react';

const Form = ({ setRating, handleSubmit, rating, review, setReview }) => {
  const handleRating = (idx) => {
    setRating(idx + 1);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="rating">
        {[...Array(10)].map((_, index) => (
          <button
            key={index + 1}
            type="button"
            className={rating === index + 1 ? 'selected' : 'rating-btn'}
            onClick={() => handleRating(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="input-box">
        <input
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your review here..."
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
