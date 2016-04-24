var $coke = $('.coke');
var $pino = $('.pino');
var $wine = $('.wine');
var $liq = $('.liq');
var $pint = $('.pint');
var $marga = $('.marga');
var $body = $('body');

$coke.waypoint(function () {
  $coke.addClass('shake');
}, { offset: '30%' });

$pino.waypoint(function () {
  $pino.addClass('shake');
}, { offset: '30%' });

$wine.waypoint(function () {
  $wine.addClass('shake');
}, { offset: '30%' });

$liq.waypoint(function () {
  $liq.addClass('shake');
}, { offset: '30%' });

$pint.waypoint(function () {
  $pint.addClass('shake');
}, { offset: '30%' });

$marga.waypoint(function () {
  $marga.addClass('shake');
}, { offset: '30%' });

$body.on('click', '.btn', function () {
  $('.muffin').toggleClass('move');
});
