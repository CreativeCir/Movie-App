import React, { useState } from 'react';

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      posterURL,
      rating: Number(rating)
    };
    onAddMovie(newMovie);
    // Reset form
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <div className="add-movie">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
          required
        />
        <input
          type="number"
          min="0"
          max="10"
          placeholder="Rating (0-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;