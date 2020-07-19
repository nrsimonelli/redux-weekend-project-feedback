const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const { query } = require('../modules/pool.js')

// POST feedback data into feedback DB!
router.post('/', (req, res)=> {
    console.log('POST req.body: ', req.body);
    
    let queryString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ( $1, $2, $3, $4);`;
    
    pool.query( queryString,
        [
            req.body[0], 
            req.body[1], 
            req.body[2], 
            req.body[3]

        ]).then(( result ) => {
            // success
            res.sendStatus(201);
        }).catch((err) => {
            // failure
            console.log(err);
            res.sendStatus(500)
        })
})

module.exports = router;