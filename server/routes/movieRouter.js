const express = require('express');
const pool= require('../modules/pool');
const router = express.Router();

//set up route to send all movie info to client
router.get('/', (req, res) => {
    let queryText = `SELECT "movies"."id", "movies"."title", "movies"."poster", "movies"."description", array_agg("genres"."name") AS "movie_genres" FROM "movies"
JOIN "movie_genre" ON "movies"."id" = "movie_genre"."movie_id"
JOIN "genres" ON "movie_genre"."genre_id" = "genres"."id"
GROUP BY "movies"."id";`
pool.query(queryText).then(result => res.send(result.rows)).catch(err => {
    console.log('ERROR in get to /', err );
    res.sendStatus(500);
});
});







module.exports = router;