var initModels = function(mongoose, callback) {
  var Schema = mongoose.Schema;

  var User = new Schema({
      username     : String
    , passwordhash : String
  });

  mongoose.model('User', User);

  callback();
};

module.exports.initModels = initModels;