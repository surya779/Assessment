CreateBarchart("TEAMS")


function Change(){
    var choose=document.getElementById("dataset").value;
    console.log(choose);
    CreateBarchart(choose)
}
// function toggleSort(){
//     Data.choose();
//    var choose= Data.map(function(d)){
//         return d.choose;
//     }
//     x.domain(choose);

//     svg.transition()
//     .selectAll("rect")
//     .attr("x",function(d){
//         return x(d.YEAR);
//     });
// }




function CreateBarchart(choose){
var barsvg=document.getElementById("barsvg");
if(barsvg){
    barsvg.remove();
}

var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


// width = width - margin.left - margin.right;
// height = height - margin.top - margin.bottom;



var x = d3.scaleBand()
    
    .range([0, width])
    .padding(0.1);

var y = d3.scaleLinear()
    .domain([0,16])
    .range([height, 0]);


var graphid=document.getElementById("graph");
var svg = d3.select(graphid).append("svg")
    .attr("id","barsvg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")");

      
d3.csv("./Data/fifa-world-cup.csv",function(Data){
    console.log(Data);
    Data.forEach(function(d) {
        d[choose] = +d[choose];
      });
      x.domain(Data.map(function(d) { return d.YEAR; }));
      y.domain([0, d3.max(Data, function(d) { return d[choose]; })]);
      svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // add the y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

var bar=svg.selectAll("bar")
      .data(Data)
      .enter()
      .append("rect")
      .attr("fill","#2b8cbe")
      .attr("class", "bar")
      .attr("x", function(d,i) { return x(d.YEAR); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(0); })
      .attr("height", function(d) { return height - y(0);
     });


    // bar
    //     .data(Data)
    //     .enter()
    //     .append('rect')
    //     .attr('class', 'bar')
    //     .attr("fill", "red")
    //     .attr('width', x.bandwidth())
    //     .attr('height', 0)
    //     .attr('y', height)
    //     .merge(bar)
    //     .transition()
    //     .duration(200)
    //     .attr("height", function(d, i) {
    //         return height - y(d);
    //     })
    //     .attr("y", function(d, i) {
    //         return y(d);
    //     })
    //     .attr("width", x.bandwidth())
    //     .attr("x", function(d, i) {
    //         return x(i)
       
        
        
        
    // })

      

// bar
//    .exit()
//    .transition()
//    .duration(duration)
//    .attr('height',0)
//    .attr('y',height)
//    .remove();
    //    bar
    //    .transition().duration(250)
    //    .attr("y", function(d) { return y(d[choose]); })
    //    .attr("height", function(d) { return height - y(d[choose]); })
      

  
    //     bar.exit().remove();
svg.selectAll("rect")
        .transition()
        .duration(2000)
        .attr("y", function(d) { return y(d[choose]); })
        .attr("height", function(d,i) { return  height-y(d[choose]); })
        .attr( function(d) {
            return "rgb("+ Math.round(d * 8) + ",0," + Math.round(d * 10) + ")"; });
        // .delay(function(d,i){console.log(i);
        // return(i*100)}) ;

//         bar.selectAll(".negative").data([]).exit().remove()

    //   .on("mouseover", onMouseOver) //Add listener for the mouseover event
    //   .on("mouseout", onMouseOut)
    //   function onMouseOver(d, i) {
    //     d3.select(this).attr('class', 'highlight');
    //     d3.select(this)
    //       .transition()     // adds animation
    //       .duration(400)
    //       .attr('width', x.bandwidth() + 5)
    //       .attr("y", function(d) { return y(d.TEAMS) - 10; })
    //       .attr("height", function(d) { return height - y(d.TEAMS) + 10; });

    //     g.append("text")
    //      .attr('class', 'val') 
    //      .attr('x', function() {
    //          return x(d.YEAR);
    //      })
    //      .attr('y', function() {
    //          return y(d.TEAMS) - 15;
    //      })
    //      .text(function() {
    //          return [ '$' +d.TEAMS];  // Value of the text
    //      });
    // }
    

    // function onMouseOut(d, i) {
    //     // use the text label class to remove label on mouseout
    //     d3.select(this).attr('class', 'bar');
    //     d3.select(this)
    //       .transition()     // adds animation
    //       .duration(400)
    //       .attr('width', x.bandwidth())
    //       .attr("y", function(d) { return y(d.TEAMS); })
    //       .attr("height", function(d) { return height - y(d.TEAMS); });

    //     d3.selectAll('.val')
    //       .remove()
    // }

    
    
})
}