var data = new Array();

for(var i = 0; i < politicos.length; i++){
	//console.log("teste i :" + i);
	for(var j=0; j < politicos.length;j++){
		var arr = new Array();
		arr.push(politicos[i]);
		arr.push(politicos[j]);
		arr.push(model[i][j] + 2);
		data.push(arr);
	}
}

console.log(data);


var colors = {
"DEM":         "#da4480"
,"PCDOB":    "#5ab449"
,"PDT":    "#7f5acd"
,"PHS":        "#aab740"
,"PMB": "#ce58c0"
,"PMDB":        "#50a26e"
,"PP": "#d1434b"
,"PR":      "#45c0bc"
,"PPS":"#ce5929"
,"PRB": "#4e7bda"
,"PROS":  "#d49d3c"
,"PSB":   "#6660a3"
,"PSC":    "#7b853c"
,"PSD":     "#b58dde"
,"PSDB":     "#97622e"
,"PSOL":   "#609dd6"
,"PT":      "#e29074"
,"PTB":        "#9c4b88"
,"PTDOB":  "#ab505f"
,"PTN":   "#dc85b6"
,"PV": "#FFC107"
,"REDE": "#FF9800"
,"SD":"#009682"
,"SEM PARTIDO": "#4CAF50"
};

var sortOrder =[
"Arsenal"
,"Aston Villa"
,"Bournemouth"
,"Chelsea"
,"Crystal Palace"
,"Everton"
,"Leicester City"
,"Liverpool"
,"Manchester City"
,"Manchester Utd"
,"Newcastle Utd"
,"Norwich City"
,"Southampton"
,"Stoke City"
,"Sunderland"
,"Swansea City"
,"Tottenham"
,"Watford"
,"West Bromwich"
,"West Ham Utd"
];

function sort(a,b){ return d3.ascending(sortOrder.indexOf(a),sortOrder.indexOf(b)); }

var ch = viz.ch().data(data)
      .padding(.01)
      // .sort(sort)
	  .innerRadius(300)
	  .outerRadius(320)
	  .duration(500)
	  .chordOpacity(0.3)
	  .labelPadding(.03)
      .fill(function(d){ return colors[d];});

var width=1200, height=1100;

var svg = d3.select("body").append("svg").attr("height",height).attr("width",width);

svg.append("g").attr("transform", "translate(600,550)").call(ch);

// adjust height of frame in bl.ocks.org
d3.select(self.frameElement).style("height", height+"px").style("width", width+"px");     