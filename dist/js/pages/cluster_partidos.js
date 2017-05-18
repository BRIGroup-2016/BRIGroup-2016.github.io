var clusters = new Array();

for(var i = 0; i < clusters_partidos.length; i++){
	var c = new Array();
	for(var j=0; j < clusters_partidos[i].length;j++){
		obj = new Array();
		obj = { name: clusters_partidos[i][j],
				size: 10
			}
		c.push(obj);
	}
	clusters.push({
		name: 'Cluster ' + i,
		children: c
	});
}

json = {
	name: "clusters",
	children: clusters
}

 var svg = d3.select("svg"),
    diameter = +svg.attr("width"),
    g = svg.append("g").attr("transform", "translate(2,2)"),
    format = d3.format(",d");

var pack = d3.pack()
    .size([diameter - 4, diameter - 4]);

  json = d3.hierarchy(json)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

  var node = g.selectAll(".node")
    .data(pack(json).descendants())
    .enter().append("g")
      .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("title")
      .text(function(d) { return d.data.name + "\n" + format(d.value); });

  node.append("circle")
      .attr("r", function(d) { return d.r; });

  node.filter(function(d) { return !d.children; }).append("text")
      .attr("dy", "0.3em")
      .text(function(d) { return d.data.name.substring(0, d.r / 3); });


