var express = require('express');
var dbConnection = require('./../dao/db').dbConnection;
var personModel = require('./../dao/db').Person;
var router = express.Router();

router.get('/', function(req, res, next) {
  personModel.all().then(function(persons) {
      res.send(persons);
  });
});

router.get('/:id', (req, res, next) => {
  personModel.findById(req.params.id).then((person) => {
    res.send(person);
  });
});

router.post('/', function(req, res) {
  console.log(JSON.stringify(req.body));
  personModel.create({forename: req.body.forename, surname: req.body.surname, dateOfBirth: req.body.dateOfBirth})
  .then(function(person) {
    console.log('person added');
    res.status(200).send();
  });
});

module.exports = router;
