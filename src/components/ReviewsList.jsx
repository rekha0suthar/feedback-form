import React from 'react';

const ReviewsList = ({ feedbackList, handleDelete }) => {
  return (
    <ul className="review-list">
      {feedbackList.map((feedback, idx) => (
        <li key={idx}>
          <div>
            {' '}
            <p className="rating-number">{feedback.rating}</p>
            <p className="review">{feedback.review}</p>
          </div>
          <button onClick={() => handleDelete(feedback.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
