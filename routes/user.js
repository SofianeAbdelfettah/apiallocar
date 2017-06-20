var models = require('../sequelize/models/'); // loads index.js
var User = models.Nom; // the model keyed by its name

module.exports = {
  //Get a list of all authors using model.findAll()
  index(req, res) {
    User.findAll().then(function(users) {
        res.status(200).json(users);
      })
      .catch(function(error) {
        res.status(500).json(error);
      });
  },
  add(req, res) {
    User.findAll({
      where: {
        name: req.body.name
      }
    }).then(function(users) {
      if (users.length === 0) {
        User.create({name:req.body.name})
          .then(function(newUser) {
            return res.status(200).json(newUser);
          })
          .catch(function(error) {
            return res.status(500).json(error);
          });
      } else return res.send("user already exist")

    }).catch(function(error) {
      return res.json(error);
    });

  },
  one(req, res) {
    User.findAll({
      where: {
        name: req.params.name
      }
    }).then(function(users) {
      if (users.length === 0) {
        return res.send('no user found');
      }
      return res.json(users);
    }).catch(function(error) {
      res.json(error);
    });


  }
}
