var express=require('express');
var router=express.Router();
var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
router.get('/payment',function(req,res)
{
    res.render('payment');
});