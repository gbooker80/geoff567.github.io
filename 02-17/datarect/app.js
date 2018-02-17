// booksReadThisYear we will be using to alter the height of our bars
var booksReadThisYear = [7, 12, 4, 20];
// booksReadThisYear we will be using to alter the color of our bars
var colors = ["red", "green", "blue", "orange"];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", 600)
  .attr("width", 400);

// Loops through our array and appends a rectangle to the SVG wrapper for each individual piece of data
for (var i = 0; i < booksReadThisYear.length; i++) {
  svg
    .append("rect")
    // Sets the width of our rectangles to 25 pixels and sets the height of each rectangle to equal a piece of data in our 'booksReadThisYear' array multiplied by 10
    .attr("width", 25)
    .attr("height", booksReadThisYear[i] * 10)
    // Sets the x coordinate to equal the current iteration of our for loop multiplied by 50. Creates separation between bars.
    .attr("x", i * 50)
    // Sets the color of each individual rectangle equal to a piece of data in our 'colors' array
    .attr("fill", colors[i]);
}
