var m = [
 [1.000000000000000000e+00, 1.344861396006232501e01, 1.024777327818727629e01, 4.482609993240828372e02, 6.345523974669299572e02, 7.111989863672570078e02, 3.298498340049065003e02, 1.462082267342352734e02, 2.857160002762056811e02, 8.106147572057495476e02, 9.744709910178168955e02, 1.074557469502760571e01, 3.751654812641855991e02, 3.212459398841589070e02, 7.090932829899633527e02, 6.572875015876933347e02, 1.389540528833543565e01, 5.531418301958110351e02, 1.277068394921672401e02, 2.467587311921570076e02, 4.625427880276799381e02, 2.509795759499510934e02, 5.066654520997893735e02, 2.922755725936367413e02],
[1.344861396006232501e01, 1.000000000000000000e+00, 2.539103966667046342e03, 8.006092711307841170e02, 3.133798916836983556e02, 9.825776786436628274e02, 9.034235751977860718e02, 5.443521764998210388e02, 9.307198581746072008e02, 8.749822559497028029e02, 3.746679242094163448e02, 3.215046561849401602e02, 1.206191006826249218e01, 1.157985429109347347e01, 8.883896466323167040e02, 6.951485271261265142e02, 1.575763999977193852e01, 9.701635188503419938e02, 6.807085950342511849e02, 1.024771317906916085e01, 5.179908391709087123e02, 1.281963333928395378e02, 5.972607655358507656e02, 1.066570169459363920e01],
[1.024777327818727629e01, 2.539103966667046342e03, 1.000000000000000000e+00, 5.287558684682976823e02, 1.524642591858310810e02, 5.456452624093658527e02, 1.507985584548193064e02, 6.265476370263818595e02, 8.839382978781923361e02, 2.534393465238189355e02, 5.325318060942654808e02, 4.681244582662239667e02, 5.291331704135885522e02, 6.406337688575007572e02, 9.210706408934636602e02, 4.071957622288070733e02, 3.313777819932427898e02, 4.637023111874378350e02, 3.212923746983462059e02, 6.791946587046959749e02, 1.215984983491483033e02, 3.613152452594225322e02, 3.847588602498484833e02, 1.628385533103816549e02],
[4.482609993240828372e02, 8.006092711307841170e02, 5.287558684682976823e02, 1.000000000000000000e+00, 1.900828524524199314e02, 3.519239098762829560e02, 4.598098429724589709e02, 5.173379485373921088e02, 4.116085926400431250e02, 3.499976396113289867e03, 3.395298386920194561e02, 9.304641955796124969e04, 3.480372969876587008e02, 2.312814229704001495e02, 6.184925364630407957e02, 7.769765515409662870e02, 4.987346272186015533e02, 3.385853408709855322e02, 2.881777520250067715e03, 2.821302160785271740e03, 1.459712527006458080e02, 3.064396328855927693e02, 1.677928280971086386e02, 1.436665390869122476e02],
[6.345523974669299572e02, 3.133798916836983556e02, 1.524642591858310810e02, 1.900828524524199314e02, 1.000000000000000000e+00, 3.037882244988272806e02, 2.144263193390734748e02, 3.150364135024590756e02, 2.972086755278468759e02, 4.931956614398697210e03, 1.388462018142525185e02, 2.914208971376801294e02, 8.838108975319476993e03, 5.395933996647684500e02, 4.017177988498627644e02, 2.529073516865284338e02, 3.142506388340866874e02, 7.651780264924774866e02, 1.490153425492792179e02, 5.664434426110582371e02, 1.479618684948131278e02, 4.066202686611428141e02, 2.715153054683730124e02, 1.704959632828245697e02],
[7.111989863672570078e02, 9.825776786436628274e02, 5.456452624093658527e02, 3.519239098762829560e02, 3.037882244988272806e02, 1.000000000000000000e+00, 1.032635681447341067e02, 6.131105728026700619e02, 5.478532422480781629e03, 5.397637424484836438e02, 7.154398442011047909e02, 7.090334200691564281e02, 5.596552156408534512e02, 1.789263564570092030e02, 4.784186650594532408e02, 1.111112599669112494e01, 9.318006895616734453e02, 2.081695798466549896e02, 3.047959522570084165e02, 2.995068439232731125e02, 3.125275728404242580e03, 5.701557130228239456e02, 5.678309624490646135e02, 2.886373978803121951e02],
[3.298498340049065003e02, 9.034235751977860718e02, 1.507985584548193064e02, 4.598098429724589709e02, 2.144263193390734748e02, 1.032635681447341067e02, 1.000000000000000000e+00, 1.061380906473362862e01, 2.583802757000825193e02, 2.431727829590369337e03, 3.384141773997383085e02, 2.164507767044098266e02, 3.829821031116746599e02, 4.260085069372397085e04, 7.332418337340593228e02, 1.426545775485824619e01, 1.153713323836724897e01, 1.462369824567843080e03, 6.120014975421921022e02, 1.303462473201929574e02, 3.962102674931311519e02, 7.089145738108858230e02, 8.556055178733923405e02, 4.813853614100673667e02],
[1.462082267342352734e02, 5.443521764998210388e02, 6.265476370263818595e02, 5.173379485373921088e02, 3.150364135024590756e02, 6.131105728026700619e02, 1.061380906473362862e01, 1.000000000000000000e+00, 1.283852584156792154e01, 6.976582587836431537e02, 5.965471162265182509e02, 3.208670593304285140e02, 8.263617397959176214e02, 9.448217980695722273e02, 1.809848051139643574e02, 1.717017623642559665e02, 5.098685458991124991e02, 7.084274499679840686e02, 6.367479473524344236e02, 9.574579265468510791e02, 5.994363981211595777e02, 2.760749986963158958e02, 2.263645857435719541e02, 1.850837802096583218e02],
[2.857160002762056811e02, 9.307198581746072008e02, 8.839382978781923361e02, 4.116085926400431250e02, 2.972086755278468759e02, 5.478532422480781629e03, 2.583802757000825193e02, 1.283852584156792154e01, 1.000000000000000000e+00, 3.673095361853651736e02, 6.431032345973153319e02, 6.918922762742599208e02, 2.943507660111047489e02, 3.940707091869764811e02, 5.226989272353736726e02, 1.302356975789020765e01, 1.238665345380793453e01, 1.339523134698666039e02, 1.504266343938717027e02, 4.418278796102732831e02, 1.657280961862749036e02, 9.716407362675517911e02, 3.852060432131312190e02, 6.627673609269342514e02],
[8.106147572057495476e02, 8.749822559497028029e02, 2.534393465238189355e02, 3.499976396113289867e03, 4.931956614398697210e03, 5.397637424484836438e02, 2.431727829590369337e03, 6.976582587836431537e02, 3.673095361853651736e02, 1.000000000000000000e+00, 9.723354913630929616e03, 4.389720838684126741e02, 1.476535977053834887e02, 6.976236227197829369e03, 1.290744404755618246e01, 1.004066496936207725e01, 7.688534634276140978e02, 5.264938529670519507e03, 6.237435217320123210e02, 4.621884800364349163e03, 2.878331629341601347e02, 4.711042606264705807e02, 6.312376867902508293e02, 1.733282410033884502e02],
[9.744709910178168955e02, 3.746679242094163448e02, 5.325318060942654808e02, 3.395298386920194561e02, 1.388462018142525185e02, 7.154398442011047909e02, 3.384141773997383085e02, 5.965471162265182509e02, 6.431032345973153319e02, 9.723354913630929616e03, 1.000000000000000000e+00, 6.824524203368688424e02, 3.972074117079366085e02, 2.052337262654395020e02, 2.289218545303487243e02, 4.493006911496281314e02, 1.740583352154564598e02, 1.134517442861081998e02, 3.810231298906895797e02, 5.338146528218212783e02, 3.684872618301399810e02, 2.625878384187814787e02, 8.235259971495659248e02, 3.025942277584242959e02],
[1.074557469502760571e01, 3.215046561849401602e02, 4.681244582662239667e02, 9.304641955796124969e04, 2.914208971376801294e02, 7.090334200691564281e02, 2.164507767044098266e02, 3.208670593304285140e02, 6.918922762742599208e02, 4.389720838684126741e02, 6.824524203368688424e02, 1.000000000000000000e+00, 6.894759601898955981e02, 3.677418002946620385e02, 1.034197758120165705e01, 5.031819722525224942e02, 6.023076807451840931e02, 3.039141458836489701e02, 6.584526150556124779e02, 7.411707326493513492e02, 3.688166081628282966e02, 1.298657554617814458e02, 1.924369582127653799e02, 3.887613375961426060e02],
[3.751654812641855991e02, 1.206191006826249218e01, 5.291331704135885522e02, 3.480372969876587008e02, 8.838108975319476993e03, 5.596552156408534512e02, 3.829821031116746599e02, 8.263617397959176214e02, 2.943507660111047489e02, 1.476535977053834887e02, 3.972074117079366085e02, 6.894759601898955981e02, 1.000000000000000000e+00, 8.828340613914688242e04, 8.575662887635712717e02, 1.082695227227884888e01, 1.026649905500319343e01, 2.461366098806331074e02, 1.077258930186358460e01, 5.994140560504505888e03, 3.930132498326444068e02, 6.687914073833826911e02, 2.972202742687595281e02, 2.594502862684059524e02],
[3.212459398841589070e02, 1.157985429109347347e01, 6.406337688575007572e02, 2.312814229704001495e02, 5.395933996647684500e02, 1.789263564570092030e02, 4.260085069372397085e04, 9.448217980695722273e02, 3.940707091869764811e02, 6.976236227197829369e03, 2.052337262654395020e02, 3.677418002946620385e02, 8.828340613914688242e04, 1.000000000000000000e+00, 2.380179771216109352e02, 1.371570589966697173e01, 1.133681849308812439e01, 4.523598789376168799e03, 7.237811834682983392e02, 4.109019405410112985e02, 3.147042797643303386e02, 6.905439560166939938e02, 6.868567450506153638e02, 3.834640707444786356e02],
[7.090932829899633527e02, 8.883896466323167040e02, 9.210706408934636602e02, 6.184925364630407957e02, 4.017177988498627644e02, 4.784186650594532408e02, 7.332418337340593228e02, 1.809848051139643574e02, 5.226989272353736726e02, 1.290744404755618246e01, 2.289218545303487243e02, 1.034197758120165705e01, 8.575662887635712717e02, 2.380179771216109352e02, 1.000000000000000000e+00, 1.126648638806653641e01, 1.058600605125330912e01, 4.592893806265112983e02, 1.970076607523847667e02, 4.941008746325441930e02, 4.148903043867693125e02, 2.913727587352607160e02, 6.429268451712544241e04, 4.727965441779499733e02],
[6.572875015876933347e02, 6.951485271261265142e02, 4.071957622288070733e02, 7.769765515409662870e02, 2.529073516865284338e02, 1.111112599669112494e01, 1.426545775485824619e01, 1.717017623642559665e02, 1.302356975789020765e01, 1.004066496936207725e01, 4.493006911496281314e02, 5.031819722525224942e02, 1.082695227227884888e01, 1.371570589966697173e01, 1.126648638806653641e01, 1.000000000000000000e+00, 6.636349835647327444e02, 1.066880773319909964e01, 2.225337176990932822e02, 7.494065672348237950e02, 5.572151685660935161e02, 6.017919161494906383e02, 9.837668544315512908e02, 3.697320919043994153e02],
[1.389540528833543565e01, 1.575763999977193852e01, 3.313777819932427898e02, 4.987346272186015533e02, 3.142506388340866874e02, 9.318006895616734453e02, 1.153713323836724897e01, 5.098685458991124991e02, 1.238665345380793453e01, 7.688534634276140978e02, 1.740583352154564598e02, 6.023076807451840931e02, 1.026649905500319343e01, 1.133681849308812439e01, 1.058600605125330912e01, 6.636349835647327444e02, 1.000000000000000000e+00, 9.415516835412143792e02, 1.687161631682125920e02, 8.321467298400060664e02, 1.091435344524897683e01, 1.728197916384724767e02, 4.219429693178913116e02, 6.168269846505484988e02],
[5.531418301958110351e02, 9.701635188503419938e02, 4.637023111874378350e02, 3.385853408709855322e02, 7.651780264924774866e02, 2.081695798466549896e02, 1.462369824567843080e03, 7.084274499679840686e02, 1.339523134698666039e02, 5.264938529670519507e03, 1.134517442861081998e02, 3.039141458836489701e02, 2.461366098806331074e02, 4.523598789376168799e03, 4.592893806265112983e02, 1.066880773319909964e01, 9.415516835412143792e02, 1.000000000000000000e+00, 2.571391524451651853e02, 4.370686141187519330e02, 6.523222092844692399e02, 7.993273668195345627e02, 3.660092974862166892e02, 4.864248224071511528e02],
[1.277068394921672401e02, 6.807085950342511849e02, 3.212923746983462059e02, 2.881777520250067715e03, 1.490153425492792179e02, 3.047959522570084165e02, 6.120014975421921022e02, 6.367479473524344236e02, 1.504266343938717027e02, 6.237435217320123210e02, 3.810231298906895797e02, 6.584526150556124779e02, 1.077258930186358460e01, 7.237811834682983392e02, 1.970076607523847667e02, 2.225337176990932822e02, 1.687161631682125920e02, 2.571391524451651853e02, 1.000000000000000000e+00, 2.957172425045773850e02, 3.748804129764094634e02, 4.511263885040477789e02, 5.488768626137961043e02, 1.994380019892640077e01],
[2.467587311921570076e02, 1.024771317906916085e01, 6.791946587046959749e02, 2.821302160785271740e03, 5.664434426110582371e02, 2.995068439232731125e02, 1.303462473201929574e02, 9.574579265468510791e02, 4.418278796102732831e02, 4.621884800364349163e03, 5.338146528218212783e02, 7.411707326493513492e02, 5.994140560504505888e03, 4.109019405410112985e02, 4.941008746325441930e02, 7.494065672348237950e02, 8.321467298400060664e02, 4.370686141187519330e02, 2.957172425045773850e02, 1.000000000000000000e+00, 1.636418178894315581e02, 6.367493881301773684e02, 4.352830337385092327e03, 3.263394101358509797e02],
[4.625427880276799381e02, 5.179908391709087123e02, 1.215984983491483033e02, 1.459712527006458080e02, 1.479618684948131278e02, 3.125275728404242580e03, 3.962102674931311519e02, 5.994363981211595777e02, 1.657280961862749036e02, 2.878331629341601347e02, 3.684872618301399810e02, 3.688166081628282966e02, 3.930132498326444068e02, 3.147042797643303386e02, 4.148903043867693125e02, 5.572151685660935161e02, 1.091435344524897683e01, 6.523222092844692399e02, 3.748804129764094634e02, 1.636418178894315581e02, 1.000000000000000000e+00, 5.886345027252888606e02, 5.065183621127366392e02, 2.644689086687028456e02],
[2.509795759499510934e02, 1.281963333928395378e02, 3.613152452594225322e02, 3.064396328855927693e02, 4.066202686611428141e02, 5.701557130228239456e02, 7.089145738108858230e02, 2.760749986963158958e02, 9.716407362675517911e02, 4.711042606264705807e02, 2.625878384187814787e02, 1.298657554617814458e02, 6.687914073833826911e02, 6.905439560166939938e02, 2.913727587352607160e02, 6.017919161494906383e02, 1.728197916384724767e02, 7.993273668195345627e02, 4.511263885040477789e02, 6.367493881301773684e02, 5.886345027252888606e02, 1.000000000000000000e+00, 6.790332901289697354e02, 5.403996150192498515e02],
[5.066654520997893735e02, 5.972607655358507656e02, 3.847588602498484833e02, 1.677928280971086386e02, 2.715153054683730124e02, 5.678309624490646135e02, 8.556055178733923405e02, 2.263645857435719541e02, 3.852060432131312190e02, 6.312376867902508293e02, 8.235259971495659248e02, 1.924369582127653799e02, 2.972202742687595281e02, 6.868567450506153638e02, 6.429268451712544241e04, 9.837668544315512908e02, 4.219429693178913116e02, 3.660092974862166892e02, 5.488768626137961043e02, 4.352830337385092327e03, 5.065183621127366392e02, 6.790332901289697354e02, 1.000000000000000000e+00, 1.867194281839791581e02],
[2.922755725936367413e02, 1.066570169459363920e01, 1.628385533103816549e02, 1.436665390869122476e02, 1.704959632828245697e02, 2.886373978803121951e02, 4.813853614100673667e02, 1.850837802096583218e02, 6.627673609269342514e02, 1.733282410033884502e02, 3.025942277584242959e02, 3.887613375961426060e02, 2.594502862684059524e02, 3.834640707444786356e02, 4.727965441779499733e02, 3.697320919043994153e02, 6.168269846505484988e02, 4.864248224071511528e02, 1.994380019892640077e01, 3.263394101358509797e02, 2.644689086687028456e02, 5.403996150192498515e02, 1.867194281839791581e02, 1.000000000000000000e+00]
];

var partidos = ['DEM', 'PCDOB', 'PDT', 'PHS', 'PMB', 'PMDB', 'PP', 'PPS', 'PR', 'PRB', 'PROS', 'PSB',
 'PSC', 'PSD', 'PSDB', 'PSOL', 'PT', 'PTB', 'PTDOB', 'PTN', 'PV', 'REDE', 'SD',
 'SEM PARTIDO'];


var data = new Array();

for(var i = 0; i < partidos.length; i++){
	console.log("teste i :" + i);
	for(var j=0; j < partidos.length;j++){
		var arr = new Array();
		arr.push(partidos[i]);
		arr.push(partidos[j]);
		arr.push(m[i][j]);
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
      .sort(sort)
	  .innerRadius(300)
	  .outerRadius(320)
	  .duration(1000)
	  .chordOpacity(0.3)
	  .labelPadding(.03)
      .fill(function(d){ return colors[d];});

var width=1200, height=1100;

var svg = d3.select("body").append("svg").attr("height",height).attr("width",width);

svg.append("g").attr("transform", "translate(600,550)").call(ch);

// adjust height of frame in bl.ocks.org
d3.select(self.frameElement).style("height", height+"px").style("width", width+"px");     