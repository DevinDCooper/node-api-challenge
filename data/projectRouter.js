const express = require("express");
const Project = require('./helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    Project.get()
      .then(project => {
        res.status(200).json(project);
      })
      .catch(error => {
        res.status(500).json({
          message: "Error retrieving the project"
        });
      });
  });
  

  router.post('/', (req, res) => {
    Project.insert(req.body)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error adding the project',
            });
        });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    Project.update(req.params.id, changes)
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'The project could not be found' });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error updating the project',
            });
        });
});


router.delete('/:id', (req, res) => {
    Project.remove(req.params.id)
        .then(project => {
            if (project > 0) {
                res.status(200).json({ message: 'The project has been deleted' });
            } else {
                res.status(404).json({ message: 'The project could not be found' });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error removing the action',
            });
        });
});


router.get('/:id', (req, res) => {
    Project.getProjectActions(req.params.id)
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'project not found' });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Error retrieving the project',
            });
        });
});
module.exports = router;