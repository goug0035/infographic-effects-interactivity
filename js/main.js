var $coke = $('.coke');
var $pino = $('.pino');
var $wine = $('.wine');
var $liq = $('.liq');
var $pint = $('.pint');
var $marga = $('.marga');
var $body = $('body');
var $drinks = $('.drinks');

$drinks.waypoint(function () {
  $coke.addClass('see');
}, {offset: '90%'});

$drinks.waypoint(function () {
  $pino.addClass('see');
}, {offset: '80%'});

$drinks.waypoint(function () {
  $wine.addClass('see');
}, {offset: '70%'});

$drinks.waypoint(function () {
  $liq.addClass('see');
}, {offset: '60%'});

$drinks.waypoint(function () {
  $pint.addClass('see');
}, {offset: '50%'});

$drinks.waypoint(function () {
  $marga.addClass('see');
}, {offset: '40%'});

$body.on('click', function () {
  $('.muffin').toggleClass('move');
});
