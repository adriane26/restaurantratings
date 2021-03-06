var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
  business_id: String,
  no_count: {type: Number, default: 0},
  yes_count: {type: Number, default: 0}
});

var Vote = mongoose.model('Vote', voteSchema);

// make this available to our other files
module.exports = Vote;