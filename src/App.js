import Form from './components/Form';
import Navbar from './components/Navbar';
import ReviewsList from './components/ReviewsList';
import { useState, useEffect } from 'react';

function App() {
  const [rating, setRating] = useState(null); // To store the selected rating
  const [review, setReview] = useState(''); // To store the review input
  const [feedbackList, setFeedbackList] = useState([
    {
      id: '1',
      rating: 2,
      review: 'Did not like it',
    },
    {
      id: '2',
      rating: 5,
      review: 'It was so so',
    },
    {
      id: '3',
      rating: 8,
      review: 'It was quite interesting',
    },
  ]); // To store all feedback submissions
  const [avgRating, setAvgRating] = useState(0);
  const [nextId, setNextId] = useState(4);

  useEffect(() => {
    handleAvgRating(feedbackList);
  }, [feedbackList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating !== null && review) {
      const newFeedback = { rating, review, id: nextId };

      // Update feedback list and calculate average rating
      setFeedbackList((prevFeedbackList) => {
        const updatedFeedbackList = [...prevFeedbackList, newFeedback];
        handleAvgRating(updatedFeedbackList);
        return updatedFeedbackList;
      });
      setNextId(nextId + 1);

      // Clear form fields
      setRating(null);
      setReview('');
    } else {
      alert('Please provide a rating and a review.'); // Validation
    }
  };

  const handleAvgRating = (feedbackList) => {
    if (feedbackList.length === 0) {
      setAvgRating(0); // No feedback, average rating is 0
      return;
    }

    const totalRating = feedbackList.reduce(
      (acc, curr) => acc + curr.rating,
      0
    );
    const avg = totalRating / feedbackList.length;
    setAvgRating(avg);
  };

  const handleDelete = (id) => {
    const updatedList = feedbackList.filter((feedback) => feedback.id !== id);
    setFeedbackList(updatedList);
    handleAvgRating(updatedList);
  };

  return (
    <div className="app">
      <Navbar />

      <div className="FeedbackForm">
        <Form
          setRating={setRating}
          handleSubmit={handleSubmit}
          review={review}
          rating={rating}
          setReview={setReview}
        />
        <div className="count">
          <p>{feedbackList.length} Reviews</p>
          <p>Average Rating: {avgRating.toFixed(1)}</p>{' '}
          {/* Rounded to one decimal place */}
        </div>

        <ReviewsList feedbackList={feedbackList} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
