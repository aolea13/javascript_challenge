// Data Table Conect
var tableData = data;

// Events
var tbody = d3.select('tbody');
var buttons = d3.select('#filter-btn');
var inputfield1 = d3.select('#datetitme');
var inputfield2 = d3.select('#city');
var restbtn = d3.select('#reset-btn');
var columns = ['date/time', 'city', 'state', 'country', 'shape', 'comments']

var populate = (datainput) => {
    datainput.forEach(ufo_sightings => {
        var row = tbody.append('tr');
        columns.forEach(column => row.append('td').text(ufo_sightings[column])
        )
    });
}
