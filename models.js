var initModels = function(mongoose, callback) {
  var Schema = mongoose.Schema;

  var User = new Schema({
      username     : { type: String, index: { unique: true } }
    , passwordhash : String
    , wins         : Number
    , losses       : Number
    , rocks        : Number
    , papers       : Number
    , scissors     : Number
  });
  
  var Game = new Schema({
      gameID       : { type: Number, index: { unique: true } }
    , player1      : String
    , player2      : String
    , status       : String
  });

  mongoose.model('User', User);
  mongoose.model('Game', Game);

  callback();
};

module.exports.initModels = initModels;
