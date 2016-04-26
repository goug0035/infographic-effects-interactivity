var $coke = $('.coke');
var $pino = $('.pino');
var $wine = $('.wine');
var $liq = $('.liq');
var $pint = $('.pint');
var $marga = $('.marga');
var $body = $('body');

$coke.waypoint(function () {
  $coke.addClass('see');
}, {offset: '50%'});

$pino.waypoint(function () {
  $pino.addClass('see');
}, {offset: '50%'});

$wine.waypoint(function () {
  $wine.addClass('see');
}, {offset: '50%'});

$liq.waypoint(function () {
  $liq.addClass('see');
}, {offset: '50%'});

$pint.waypoint(function () {
  $pint.addClass('see');
}, {offset: '50%'});

$marga.waypoint(function () {
  $marga.addClass('see');
}, {offset: '50%'});

$body.on('click', function () {
  $('.muffin').toggleClass('move');
});
