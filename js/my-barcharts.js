if(!isOldIE()){
  $("#main-technical ul,  #main-creative ul").hide();
  drawMainSkillsGraphs();
} else {
  $("#skills-legend").html("Your browser is too old to display the graph. Please update your browser.");
}

function drawMainSkillsGraphs() {
    var techChart = new CanvasJS.Chart("chartMainTech", {
      theme: "theme1",
      axisY:{
        gridColor: "#fff",
        lineThickness: 1,
       },
       axisX:{
        lineThickness: 1,
       },
       toolTip: {
        content: "<div class=\"tipName\"> {label}</div><div>Level: {y} out of 100</div>",
        borderColor: "#eeeeee", 
        animationEnabled: true
       },
       data: [              
        {
            type: "bar",
            color: "#7b6888", 
            dataPoints: [
            { label: "AngulaJs", y: 95 },
            { label: "Javascript", y: 95 },
            { label: "Java", y: 85 },
            { label: "Python", y: 80 },
            { label: "SQL", y: 70 },
            { label: "GIT", y: 70 }
            ]
        }
       ]
    });

/*  var techSkillsData = {};*/

    var artChart = new CanvasJS.Chart("chartMainArt", {
      theme: "theme1",
      axisY:{
        gridColor: "#fff",
        lineThickness: 1,
       },
       axisX:{
        lineThickness: 1,
       },
       toolTip: {
        content: "<div class=\"tipName\"> {label}</div><div>Level: {y} out of 100</div>",
        borderColor: "#eeeeee", 
        animationEnabled: true
       },
       data: [              
        {
            type: "bar",
            color: "#7b6888", 
            dataPoints: [
            { label: "Scrum", y: 80 },
            { label: "Architecture and Design", y: 80 },
            { label: "Data Visualization", y: 90 },
            { label: "Data Mining", y: 80 }
            ]
        }
       ]
    });

    techChart.render();
    artChart.render();
}

        /********************** helper methods **********************/

