
const horsesService = require('../services/horses-service');

const horsesController = {
  getAllHorses: async (req, res) => {
    try {
      const horses = await horsesService.getAllHorses();
      res.json(horses);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getHorseById: async (req, res) => {
    try {
      const { id } = req.params;
      const horse = await horsesService.getHorseById(id);
      if (horse) {
        res.json(horse);
      } else {
        res.status(404).json({ error: 'Horse not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createHorse: async (req, res) => {
    try {
      const { name, age, breed } = req.body;
      const newHorse = await horsesService.createHorse(name, age, breed);
      res.status(201).json(newHorse);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateHorse: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, age, breed } = req.body;
      const updatedHorse = await horsesService.updateHorse(id, name, age, breed);
      if (updatedHorse) {
        res.json(updatedHorse);
      } else {
        res.status(404).json({ error: 'Horse not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteHorse: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedHorse = await horsesService.deleteHorse(id);
      if (deletedHorse) {
        res.json(deletedHorse);
      } else {
        res.status(404).json({ error: 'Horse not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = horsesController;
