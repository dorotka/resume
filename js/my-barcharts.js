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
                  { label: "UX", y: 80 },
                  { label: "AngulaJs", y: 90 },
                  { label: "SASS", y: 90 },
                  { label: "jQuery & jQuery UI", y: 80 },
                  { label: "HTML5", y: 90 },
                  { label: "CSS3", y: 90 },
                  { label: "Bootstrap", y: 80 },
                  { label: "LESS", y: 50 },
                  { label: "AJAX", y: 70 }
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
                  { label: "InDesign", y: 80 },
                  { label: "Photoshop", y: 60 },
                  { label: "Graphic Design", y: 80 },
                  { label: "Potography", y: 60 }
                  ]
              }
             ]
          });

          techChart.render();
          artChart.render();
}

        /********************** helper methods **********************/

