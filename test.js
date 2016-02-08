// Source: https://github.com/mbostock/d3/blob/bf0f88b6bc67faff0a95b89f4d911fd2cfc08fdd/test/locale/locale-test.js
// with minor modifications where ambiguity was present (ie. numeric months/date, hour/min/sec)

var test = require('tape')
var da_dk = require('.')

var l = function () {
  return new Date(...Array.from(arguments))
}

test('number', function (assert) {
  var f = da_dk.numberFormat(',.2f')
  assert.equal(f(12345.67), '12.345,67')
  assert.end()
})

test('currency', function (assert) {
  var f = da_dk.numberFormat('$,.2f')
  assert.equal(f(12345.67), '12.345,67 kr')
  assert.end()
})

test('currency with SI-prefix notation and currency suffix', function (assert) {
  var f = da_dk.numberFormat('$,.4s')
  assert.equal(f(12345.67), '12,35k kr')
  assert.end()
})

test('date/time', function (assert) {
  var f = da_dk.timeFormat('%c')
  assert.equal(f(l(1990, 0, 1)), 'man 01 jan 1990 00:00:00')
  assert.end()
})

test('date', function (assert) {
  var f = da_dk.timeFormat('%x')
  assert.equal(f(l(1990, 1, 1)), '01-02-1990')
  assert.end()
})

test('time', function (assert) {
  var f = da_dk.timeFormat('%X')
  assert.equal(f(l(1990, 0, 1, 2, 3, 4)), '02:03:04')
  assert.end()
})

test('weekday', function (assert) {
  var f = da_dk.timeFormat('%A')
  assert.equal(f(l(1990, 0, 1)), 'mandag')
  assert.equal(f(l(1990, 0, 2)), 'tirsdag')
  assert.equal(f(l(1990, 0, 3)), 'onsdag')
  assert.equal(f(l(1990, 0, 4)), 'torsdag')
  assert.equal(f(l(1990, 0, 5)), 'fredag')
  assert.equal(f(l(1990, 0, 6)), 'lørdag')
  assert.equal(f(l(1990, 0, 7)), 'søndag')
  assert.end()
})

test('abbreviated weekday', function (assert) {
  var f = da_dk.timeFormat('%a')
  assert.equal(f(l(1990, 0, 1)), 'man')
  assert.equal(f(l(1990, 0, 2)), 'tir')
  assert.equal(f(l(1990, 0, 3)), 'ons')
  assert.equal(f(l(1990, 0, 4)), 'tor')
  assert.equal(f(l(1990, 0, 5)), 'fre')
  assert.equal(f(l(1990, 0, 6)), 'lør')
  assert.equal(f(l(1990, 0, 7)), 'søn')
  assert.end()
})

test('month', function (assert) {
  var f = da_dk.timeFormat('%B')
  assert.equal(f(l(1990, 0, 1)), 'januar')
  assert.equal(f(l(1990, 1, 1)), 'februar')
  assert.equal(f(l(1990, 2, 1)), 'marts')
  assert.equal(f(l(1990, 3, 1)), 'april')
  assert.equal(f(l(1990, 4, 1)), 'maj')
  assert.equal(f(l(1990, 5, 1)), 'juni')
  assert.equal(f(l(1990, 6, 1)), 'juli')
  assert.equal(f(l(1990, 7, 1)), 'august')
  assert.equal(f(l(1990, 8, 1)), 'september')
  assert.equal(f(l(1990, 9, 1)), 'oktober')
  assert.equal(f(l(1990, 10, 1)), 'november')
  assert.equal(f(l(1990, 11, 1)), 'december')
  assert.end()
})

test('abbreviated month', function (assert) {
  var f = da_dk.timeFormat('%b')
  assert.equal(f(l(1990, 0, 1)), 'jan')
  assert.equal(f(l(1990, 1, 1)), 'feb')
  assert.equal(f(l(1990, 2, 1)), 'mar')
  assert.equal(f(l(1990, 3, 1)), 'apr')
  assert.equal(f(l(1990, 4, 1)), 'maj')
  assert.equal(f(l(1990, 5, 1)), 'jun')
  assert.equal(f(l(1990, 6, 1)), 'jul')
  assert.equal(f(l(1990, 7, 1)), 'aug')
  assert.equal(f(l(1990, 8, 1)), 'sep')
  assert.equal(f(l(1990, 9, 1)), 'okt')
  assert.equal(f(l(1990, 10, 1)), 'nov')
  assert.equal(f(l(1990, 11, 1)), 'dec')
  assert.end()
})

test('periods', function (assert) {
  var f = da_dk.timeFormat('%p')
  assert.equal(f(l(1990, 0, 1, 0)), '')
  assert.equal(f(l(1990, 0, 1, 13)), '')
  assert.end()
})

test('parses locale date and time', function (assert) {
  var p = da_dk.timeFormat('%c').parse
  assert.deepEqual(p('man 01 jan 1990 00:00:00'), l(1990, 0, 1))
  assert.end()
})

test('parses locale date', function (assert) {
  var p = da_dk.timeFormat('%x').parse
  assert.deepEqual(p('03-04-1990'), l(1990, 3, 3))
  assert.end()
})
