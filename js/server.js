const express = require('express');
const mysql = require('mysql');

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'mysql1234@',
    database: 'movies_db'
  },
  console.log(`Connected to the movies_db database.`)
);

app.get('/api/movies', (req, res) => {
    const sql = 'SELECT * FROM movies';
    db.query(sql, (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    });
  });

// app.post('/api/add-movie', (req, res) => {
//     const { name } = req.body;
//     const sql = 'INSERT INTO movies (name) VALUES (?)';
//     db.query(sql, [name], (err, result) => {
//       if (err) {
//         throw err;
//       }
//       res.send('Movie added successfully');
//     });
//   });

//   app.delete('/api/movie/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = 'DELETE FROM movies WHERE id = ?';
//     db.query(sql, [id], (err, result) => {
//       if (err) {
//         throw err;
//       }
//       res.send('Movie deleted successfully');
//     });
//   });

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });