/**
 *
 */

var models = require('../../../models');


var post = function (req, res) {
  var exception = new models.NgException(req.body);
  console.log(exception);

  // TODO(sina): log this to disk once our FE logging is setup
  //             don't use console.log, to ensure it goes to a separate logger, e.g. the setup via
  //             https://github.com/EFForg/pushserver/blob/master/routes/errors/log_error.js
  return res;
};


module.exports.post = post;