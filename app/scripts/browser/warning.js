/**
 * This file is supposed to show user a page describing why they can't use the application in old browsers.
 */
(function (global) {

  'use strict';

  var doc = global.document,

    html = [];

  html.push('<div class="browser">');
  html.push('<h1>Your browser is not supported.</h1>');
  html.push('<p>Please update to a more recent one.</p>');

  html.push('<div>');
  html.push('<a href="http://www.google.com/chrome">Google Chrome</a>');
  html.push('<a href="http://www.firefox.com/">Mozilla Firefox</a>');
  html.push('<a href="http://www.apple.com/safari/">Safari</a>');
  html.push('<a href="http://www.opera.com/">Opera</a>');
  html.push('<a href="http://windows.microsoft.com/ie">Internet Explorer</a>');
  html.push('</div>');

  global.onload = function () {
    doc.body.innerHTML = html.join('');
  };

}(this));