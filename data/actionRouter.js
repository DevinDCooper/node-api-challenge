const express = require("express");
const Action = require('./helpers/actionModel.js');

const router = express.Router();

// router.get('/'(req,res) => {

// })

router.get('/', (req, res) => {
  Action.get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error retrieving the action"
      });
    });
});

router.post('/', (req, res) => {
    Action.insert(req.body)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error adding the post',
            });
        });
});



router.put('/:id', (req, res) => {
    const changes = req.body;
    Action.update(req.params.id, changes)
        .then(action => {
            if (action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({ message: 'The action could not be found' });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error updating the action',
            });
        });
});


router.delete('/:id', (req, res) => {
    Action.remove(req.params.id)
        .then(action => {
            if (action > 0) {
                res.status(200).json({ message: 'The action has been deleted' });
            } else {
                res.status(404).json({ message: 'The action could not be found' });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error removing the action',
            });
        });
});





module.exports = router;
