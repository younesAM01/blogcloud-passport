const express=require('express')
function isAuthenticated (req,res,next){
  if(req.isAuthenticated()) return next();
  res.send('Please login to access the requested resource!');
}

module.exports = isAuthenticated;