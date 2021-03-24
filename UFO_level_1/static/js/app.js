// Data Table Conect
var tableData = data;

// Table Set-Up
var tbody = d3.select('tbody');
var buttons = d3.select('#filter-btn');
var input_field1 = d3.select('#datetitme');
var input_field2 = d3.select('#city');
var restbtn = d3.select('#reset-btn');
var columns = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

var populate = (datainput) => {
    datainput.forEach(ufo_sightings => {
        var row = tbody.append('tr');
        columns.forEach(column => row.append('td').text(ufo_sightings[column])
        )
    });
}

//Populate table
populate(data);

//Filter by Attribute
button.on('click', () => {
    d3.event.preventDefault();
    var input_field1 = input_field1.property('value').trim();
    var input_field2 = input_field2.property('value').trim();
    var filter_date = data.filter(data => data.datetime === input_date); console.log(filter_date)
    var filter_city = data.filter(data => data.city === input_city); console.log(filter_city)
    var filter_data = data.filter(data => data.datetime === input_date && data.city === input_city); console.log(filter_data)

    //Add Filtered Data to Table
    

}
