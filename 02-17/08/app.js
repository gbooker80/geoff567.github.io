var dataSet = [17, 23, 20, 34];

var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", 600)
  .attr("width", 400);

// Vertical Bar Chart
svg
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("width", 50)
  .attr("height", function(data) {
    return data * 10;
  })
  .attr("x", function(data, index) {
    return index * 60;
  })
  // We now set the y coordinate of each rectangle to equal the height of our SVG wrapper minus the height of our rectangle. This sets the bar chart 'right-side-up'.
  .attr("y", function(data) {
    return 600 - data * 10;
  })
  .attr("class", "bar");
