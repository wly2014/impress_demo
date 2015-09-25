var width=250;
var height=700;

var svg=Snap(".svg");
var svg2=Snap(".svg2");
var svg3=Snap(".svg3");
var paper=svg.paper;
var paper2=svg2.paper;
var paper3=svg3.paper;
// var path=paper.path("M0 0L"+width+" 0Q"+width+" "+height/4+","+width+" "+height/2+"200 80");
// var path=paper.path("M0 0L250 0Q250 175,250 350Q100 525,250 700L0 700 L0 0");
// var path=paper.path("M250 350Q250 525,100 700L0 700L0 0L100 0Q250 175,250 350");
// svg

// var setPath=function(){
	var path=paper.path("M0 0Q0 0,0 0L0 0L0 0L0 0Q0 0,0 0");
	path.attr({
		stroke:"#fff",
		stroke_width:0,
		fill: "rgba(0,0,0,0.1)",
	});
	var path2=paper2.path("M0 0Q0 0,0 0L0 0L0 0L0 0Q0 0,0 0");
	path2.attr({
		stroke:"#fff",
		stroke_width:0,
		fill: "rgba(0,0,0,0.1)",
	});
	var path3=paper3.path("M0 0Q0 0,0 0L0 0L0 0L0 0Q0 0,0 0");
	path3.attr({
		stroke:"#fff",
		stroke_width:0,
		fill: "rgba(0,0,0,0.1)",
	});
// };
// setPath();

$(document).keydown(function(event){
	// alert(event.keyCode);
	// if ($(".present").attr("id")=="A") {
	// 	// alert("yes");
	// 	setTimeout(animate,0);

	// }else if ($(".present").attr("id")=="step-6"){
	// 	setTimeout(animate2,1000);
	// }else if ($(".present").attr("id")=="step-7"){
	// 	setTimeout(animate,1000);
	// }else{
	// 	setPath();
	// };
	setTimeout(animate,1200);
});

var animate=function(){
	// alert("hello");
		Snap.animate(0, 250, function (val) {
		    path.attr({
		        d: "M0 0L0 0Q"+val+" 175,"+val+" 350Q"+val+" 525,0 700L0 700 L0 0",
		    });
		    path2.attr({
		        d: "M0 0L0 0Q"+val+" 175,"+val+" 350Q"+val+" 525,0 700L0 700 L0 0",
		    });
		    path3.attr({
		        d: "M0 0L0 0Q"+val+" 175,"+val+" 350Q"+val+" 525,0 700L0 700 L0 0",
		    });
		}, 100,mina.linear,function(){
			Snap.animate(150, 0, function (val) {
			    path.attr({
			        d: "M0 0L"+(250-val)+" 0Q250 175,250 350Q250 525,"+(250-val)+" 700L0 700 L0 0",
			    });
			    path2.attr({
			        d: "M0 0L"+(250-val)+" 0Q250 175,250 350Q250 525,"+(250-val)+" 700L0 700 L0 0",
			    });
			    path3.attr({
			        d: "M0 0L"+(250-val)+" 0Q250 175,250 350Q250 525,"+(250-val)+" 700L0 700 L0 0",
			    });
			}, 1000,mina.elastic);
		});

		
};

// var animate2=function(){
// 	Snap.animate(0, 250, function (val) {
// 		    path2.attr({
// 		        d: "M0 0L0 0Q"+val+" 175,"+val+" 350Q"+val+" 525,0 700L0 700 L0 0",
// 		    });
// 		}, 100,mina.linear,function(){
// 			Snap.animate(150, 0, function (val) {
// 			    path2.attr({
// 			        d: "M0 0L"+(250-val)+" 0Q250 175,250 350Q250 525,"+(250-val)+" 700L0 700 L0 0",
// 			    });
// 			    // path3.attr({
// 			    //     d: "M0 0L"+(250-val)+" 0Q250 175,250 350Q250 525,"+(250-val)+" 700L0 700 L0 0",
// 			    // });
// 			}, 1000,mina.elastic);
// 		});
// };