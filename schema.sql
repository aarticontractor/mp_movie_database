DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  names VARCHAR(30)
);


CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_id INT,
  reviewer_name VARCHAR(255),
  review_text TEXT,
  FOREIGN KEY (movie_id) REFERENCES movies(id)
);