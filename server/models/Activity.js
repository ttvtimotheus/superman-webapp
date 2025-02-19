const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    enum: ['rescue', 'battle', 'public_appearance', 'other'],
    required: true
  },
  impactLevel: {
    type: Number,
    min: 1,
    max: 10,
    required: true
  }
}, {
  timestamps: true
});

// Create geospatial index for location queries
activitySchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Activity', activitySchema);
