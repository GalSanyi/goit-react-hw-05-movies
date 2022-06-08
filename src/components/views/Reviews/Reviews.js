import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';
export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    API.fetchReviewsMovie(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);
  return (
    <div>
      {reviews > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              {review.content ? review.content : <h3>don't content</h3>}
            </li>
          ))}
        </ul>
      ) : (
        <h3>Don't content</h3>
      )}
    </div>
  );
}
