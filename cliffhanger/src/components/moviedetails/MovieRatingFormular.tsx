import React, { useState } from 'react';
import { Button } from "@mui/material";
import styles from "./MovieRating.module.css";

interface MovieRatingFormData {
  email: string;
  name: string;
  rating: number;
  comment: string;
}

function MovieRatingForm() {
  const [formData, setFormData] = useState<MovieRatingFormData>({
    email: '',
    name: '',
    rating: 0,
    comment: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false); // Zustand für den Submit-Status

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData); // Hier könntest du die Daten senden oder weiterverarbeiten
      setSubmitted(true); // Formular erfolgreich abgeschickt
      // Formularfelder zurücksetzen
      setFormData({
        email: '',
        name: '',
        rating: 0,
        comment: ''
      });
    }
    setTimeout(() => {
        setSubmitted(false);
      }, 6500); 
  };

  const validateForm = () => {
    let isValid = true;
    const errors: { [key: string]: string } = {};

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className={styles.movieRatingContainer}>
      <h4>What is your opinion on the movie?</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.subContainer}>
          <label>
            Name*
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div className={styles.subContainer}>
          <label>
            Email*
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div className={styles.subContainer}>
          <label>
            Rating
          </label>
          <select name="rating" value={formData.rating} onChange={handleInputChange}>
            <option value={0}>Select a rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <div className={styles.subContainer}>
          <label>
            Comment*
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button className={styles.submitBtn} variant="contained" type="submit">Send</Button>
        {submitted && <p style={{color:"green", marginTop:"1rem"}}>Your comment has been successfully submitted!</p>}
      </form>
    </div>
  );
}

export default MovieRatingForm;
