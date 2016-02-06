var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
  business_id: String,
  no_count: {type: Number, default: 0},
  yes_count: {type: Number, default: 0}
  // created_at: Date,
  // updated_at: Date
});


// Let's craft how our JSON object should look!
// http://mongoosejs.com/docs/api.html#document_Document-toObject
/// gets called when object is returned in a request. structures return data. mostly for a get request
// VoteSchema.set('toJSON', {
//     transform: function(doc, ret, options) {
//         var returnJson = {
//             id: ret._id,
//             business_id: ret.business_id,
//             yes_count: ret.yes_count,
//             no_count: ret.no_count

//         };
//         return returnJson;
//     }
// });


var Vote = mongoose.model('Vote', voteSchema);

// make this available to our other files
module.exports = Vote;