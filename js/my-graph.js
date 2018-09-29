
if(!isOldIE()){
  $("#technical,  #creative").hide();
  drawSkillsGraph();
} else {
  $("#skills-legend").html("Your browser is too old to display the graph. Please update your browser.");
}

function drawSkillsGraph(){

  var diameter = 470,
      format = d3.format(",d"),
      color = d3.scale.ordinal()
      .range(["#ff8c00", "#d0743c", "#a05d56", "#8a89a6", "#7b6888", "#6b486b"]);
    /* If mobile device - made the graph smaller */
    if(isMobile()){
      diameter = 250;
    } 

  var bubble = d3.layout.pack()
      .sort(null)
      .size([diameter, diameter])
      .padding(1.5);

  var svg = d3.select("#skills-graph").append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
      .attr("class", "bubble");

  /********************** create and call tooltip **********************/
  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<div class=\"tipName\">" + d.className + "</div><strong>Level:</strong> <span>" + d.value + " out of 100</span>";
    });

  svg.call(tip);

  /********************** Retrieve data and draw the graph **********************/
  d3.json("js/my-graph.json", function(error, root) {
    var node = svg.selectAll(".node")
        .data(bubble.nodes(classes(root))
        .filter(function(d) { return !d.children; }))
      .enter().append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

    node.append("title")
        .text(function(d) { return d.className + ": " + format(d.value); });

    node.append("circle")
        .attr("r", function(d) { return d.r; })
        .style("fill", function(d) { return color(d.packageName); })
        .attr("class", "circle");
       /* .on('mouseover', function(d){testMouseon(d);}) */

    node.append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .attr("class", "label")
        .text(function(d) { return d.className.substring(0, d.r / 3); });

  /********************** create legend **********************/
  var legend = d3.select("#skills-legend").append("svg")
        .attr("class", "legend")
        .attr("width", 150)
        .attr("height", 150)
      .selectAll("g")
        .data(color.domain().slice())
      .enter().append("g")
        .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

    legend.append("rect")
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", color);

    legend.append("text")
        .attr("x", 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(function(d) { return d; });


  });



  // Returns a flattened hierarchy containing all leaf nodes under the root.
  function classes(root) {
    var classes = [];

    function recurse(name, node) {
      if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
      else classes.push({packageName: name, className: node.name, value: node.size});
    }

    recurse(null, root);
    return {children: classes};
  }

    d3.select(self.frameElement).style("height", diameter + "px");




  /********************** Adding interactivity **********************/
  function testMouseon(d){
    console.log("Mouseover!" + d.packageName);
    /*node.style("fill", function(d) { return color(d.packageName); } );*/
  }


  /*
  function testMouseout(){
    console.log("Mouseout!");
    return true;
  }*/

  /********************** helper methods **********************/


  function isMobile(){
    $winwidth = getWindowWidth();
    /* check window width */
    if($winwidth < 768)
      return true;
    else 
      return false;
  }

  function getWindowWidth(){
    return $(window).width();
  }

}

  /* check if IE version < IE 9 */
function isOldIE(){
  if(navigator.appName.indexOf("Internet Explorer")!=-1){     //yeah, he's using IE
      var badBrowser=(
          navigator.appVersion.indexOf("MSIE 9")==-1 &&   //v9 is ok
          navigator.appVersion.indexOf("MSIE 1")==-1  //v10, 11, 12, etc. is fine too
      );
      if(badBrowser){
          return true;
      }
  }
  return false;
}
