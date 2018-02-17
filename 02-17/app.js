// Step 1: Define the height and width of the SVG container
var svgWidth = "100%";
var svgHeight = "800";

// Step 2: Append the SVG wrapper to the page and create a variable which references it
var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Step 3: Add a circle to the SVG wrapper
var circle = svg.append("circle");

// Step 4: Set the x and y coordinates before setting the circle's radius and setting its color to light green.
circle.attr("cx", 50).attr("cy", 50).attr("r", 40).attr("fill", "lightgreen");

// Step 5: Add a rectangle to the SVG wrapper
var rectangle = svg.append("rect");

// Step 6: Set the x and y coordinates before setting the rectangle's height and width. Then colors the rectangle red.
rectangle
  .attr("x", 100)
  .attr("y", 20)
  .attr("height", 60)
  .attr("width", 100)
  .attr("fill", "red");

// Bonus

// Add an ellipse to the SVG wrapper
var ellipse = svg.append("ellipse");

ellipse
  .attr("cx", 100)
  .attr("cy", 200)
  .attr("rx", 50)
  .attr("ry", 60)
  .attr("fill", "yellow");

// Add a path to the SVG wrapper
var path = svg.append("path");

// Draw the line using the d attribute
path
  .attr("d", "M220,130 L260,170 L300,140 L340,200, L380,100")
  .attr("fill", "none")
  .attr("stroke", "blue");
