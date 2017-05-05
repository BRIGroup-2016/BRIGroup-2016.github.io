for (var i in partidos) {
    var partido = partidos[i];
    $('#comboPart').append("<option id='" + i + "'>"+partido+"</option>");
}

function comboPartidos(){
    var partidoId = document.getElementById("comboPart").selectedIndex;
    createTags(partidoId, "#visCaracterizante");
    createTags(partidoId, "#visDescaracterizante");
}

function createTags(partidoId, div){
    var words = [];

    for (var palavraId in palavras){
        var palavra = palavras[palavraId];
        var importancia = Number(model[partidoId][palavraId]);
        if (importancia && importancia > 0 && div == "#visCaracterizante"){
            words.push({"key": palavra, "value": importancia})
        }
        if (importancia && importancia < 0 && div == "#visDescaracterizante"){
            words.push({"key": palavra, "value": -importancia})
        }
    }
    words.sort(function (x, y){return y.value - x.value});
    words = words.slice(0, 200).map(function(x){ return {key: x.key, value: Math.log(1 + x.value)}});
    createWordCloud(words, div);
}

function createWordCloud(tags, div){
    $(div).empty();
    
    //var fill = d3.interpolateReds()
    //var fill = d3.scale.category20b();
    var w = 1200,
        h = 600;

    //var w = window.innerWidth,
    //h = window.innerHeight;
 

    var max,
        fontSize;

    var layout = d3.layout.cloud()
        .timeInterval(Infinity)
        .size([w, h])
        .fontSize(function(d) {
            return fontSize(+d.value);
        })
        .text(function(d) {
            return d.key;
        })
        .on("end", draw);

    var svg = d3.select(div).append("svg")
        .attr("width", w)
        .attr("height", h);

    var vis = svg.append("g").attr("transform", "translate(" + [w >> 1, h >> 1] + ")");

    update();

    window.onresize = function(event) {
        update();
    };

    function draw(data, bounds) {
        var w = 1200,
            h = 600;

        svg.attr("width", w).attr("height", h);

        scale = bounds ? Math.min(
                w / Math.abs(bounds[1].x - w / 2),
                w / Math.abs(bounds[0].x - w / 2),
                h / Math.abs(bounds[1].y - h / 2),
                h / Math.abs(bounds[0].y - h / 2)) / 2 : 1;

        var text = vis.selectAll("text")
                .data(data, function(d) {
                    return d.text.toLowerCase();
                });
        text.transition()
                .duration(1000)
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("font-size", function(d) {
                    return d.size + "px";
                });
        text.enter().append("text")
                .attr("text-anchor", "middle")
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .style("font-size", function(d) {
                    return d.size + "px";
                })
                .style("opacity", 1e-6)
                .transition()
                .duration(1000)
                .style("opacity", 1);
        text.style("font-family", function(d) {
            return d.font;
        })
                .style("fill", function(d) {
                    if(div=='#visCaracterizante'){
                        return d3.interpolateBlues('0.'+d.size);
                    }else{
                        return d3.interpolateReds('0.'+d.size);
                    }

                })
                .text(function(d) {
                    return d.text;
                });

        vis.transition().attr("transform", "translate(" + [w >> 1, h >> 1] + ")scale(" + scale + ")");
    }

    function update() {
        layout.font('impact').spiral('archimedean');
        fontSize = d3.scale['sqrt']().range([10, 70]);
        if (tags.length){
            fontSize.domain([+tags[tags.length - 1].value || 1, +tags[0].value]);
        }
        layout.stop().words(tags).start();
    }
}

comboPartidos();
