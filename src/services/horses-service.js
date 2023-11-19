const Horse = require("../models/horse");

class HorsesService {
  // Save a horse
  async save(horseData) {
    const horse = new Horse(horseData);
    try {
      const savedHorse = await horse.save();
      return savedHorse;
    } catch (error) {
      throw new Error("Failed to save horse");
    }
  }

  // Get a horse by ID
  async get(horseId) {
    try {
      const horse = await Horse.findById(horseId);
      return horse;
    } catch (error) {
      throw new Error("Failed to get horse");
    }
  }

  // Get all horses
  async getAll() {
    try {
      const horses = await Horse.find();
      return horses;
    } catch (error) {
      throw new Error("Failed to get horses");
    }
  }

  // Update a horse by ID
  async update(horseId, horseData) {
    try {
      const updatedHorse = await Horse.findByIdAndUpdate(horseId, horseData, {
        new: true,
      });
      return updatedHorse;
    } catch (error) {
      throw new Error("Failed to update horse");
    }
  }

  // Delete a horse by ID
  async delete(horseId) {
    try {
      const deletedHorse = await Horse.findByIdAndDelete(horseId);
      return deletedHorse;
    } catch (error) {
      throw new Error("Failed to delete horse");
    }
  }
}

module.exports = new HorsesService();
