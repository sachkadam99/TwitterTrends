/*
Twitter API integration
*/
var Twit = require('twit'),
config = require('../config'),
T = new Twit(config);

exports.trends = function(req, res) {
  var woeid = req.params.woeid;
  T.get('trends/place', {id: woeid}, function(err, data) {
    if (typeof data === "undefined") {
      res.json({status: false});
    } else {
      res.json({trends: data, status: true});
    }
  });
};

exports.tweets = function(req, res) {
  var query = req.params.query;
  T.get('search/tweets', {q: query,count:100}, function(err, data) {
    if (typeof data === "undefined") {
      res.json({status: false});
    } else {
      res.json({trends: data, status: true});
    }
  });
};