var $header = $('header');
var $h1 = $('h1');
var $main = $('main');
var $firstP = $('main p:first-child');
var $h2 = $('h2');
var $list = $('main li');
var $images = $('img');
var $firstItemList = $('ul li:first-child');
var $lastItemList = $('ul li:last-child');
var $dl = $('dl');
var $dt = $('dt');

$h1.removeClass('big-heading');
$h1.addClass('logo');
$header.addClass('masthead');

$main.addClass('wrapper');

$firstP.addClass('intro');

$h2.addClass('slug-head');

$list.addClass('slug-list');

$images.addClass('slug-img');

$firstItemList.addClass('slug-list-first');

$lastItemList.addClass('slug-list-last');

$dl.addClass('classification');

$dt.removeClass('big-label');

$lastItemList.show();
