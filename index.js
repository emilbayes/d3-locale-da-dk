// Source: http://lh.2xlibre.net/locale/da_DK/
module.exports = require('d3').locale({
  'decimal': ',',
  'thousands': '.',
  'grouping': [3],
  'currency': ['', ' kr'],
  'dateTime': '%a %d %b %Y %X',
  'date': '%d-%m-%Y',
  'time': '%H:%M:%S',
  'periods': ['', ''],
  'days': ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  'shortDays': ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'],
  'months': ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'],
  'shortMonths': ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec']
})
