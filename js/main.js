var $coke = $('.coke');
var $pino = $('.pino');
var $wine = $('.wine');
var $liq = $('.liq');
var $pint = $('.pint');
var $marga = $('.marga');
var $drinks = $('.drinks');

$drinks.waypoint(function () {
  $coke.addClass('see');
}, {offset: '50%'});

$drinks.waypoint(function () {
  $pino.addClass('see');
}, {offset: '40%'});

$drinks.waypoint(function () {
  $wine.addClass('see');
}, {offset: '30%'});

$drinks.waypoint(function () {
  $liq.addClass('see');
}, {offset: '20%'});

$drinks.waypoint(function () {
  $pint.addClass('see');
}, {offset: '10%'});

$drinks.waypoint(function () {
  $marga.addClass('see');
}, {offset: '0%'});

$drinks.on('click', '.coke', function () {
  $('.muffin').removeClass('move');
});

$drinks.on('click', '.pino', function () {
  $('.dounut').removeClass('move');
});

$drinks.on('click', '.wine', function () {
  $('.cake').removeClass('move');
});

$drinks.on('click', '.liq', function () {
  $('.sausage').removeClass('move');
});

$drinks.on('click', '.pint', function () {
  $('.pizza').removeClass('move');
});

$drinks.on('click', '.marga', function () {
  $('.burger').removeClass('move');
});
