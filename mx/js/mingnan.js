
//var arr1=document.getElementsByClassName(".qy-c-d");
//$(arr1[0]).css("margin-left","0px");
//var timer=setInterval(function(){
//	if($(arr1[0]).css("margin-left")=="0px"){
//		console.log(1);
//		$(arr1[0]).css("margin-left","-230px");
//	}
//	var first=$(".qy-c-d")[0];
//	$($(".qy-c-d")[0]).remove();
//	$(".qy-big").append(first);
//},1500)



//var arr1=document.getElementsByClassName(".qy-c-d");
//$(arr1[0]).css("margin-left","0px");
//var timer=setInterval(function(){
//	if($(arr1[0]).css("margin-left")=="0px"){
//		console.log(1);
//		$(arr1[0]).css("margin-left","-230px");
//	}
//	var first=$(".qy-c-d")[0];
//	$($(".qy-c-d")[0]).remove();
//	$(".qy-big").append(first);
//},1500)



//var timer=setInterval(function(){
//		console.log(1);
//		$($(".qy-c-d")[0]).css("margin-left","-240px");
//		console.log(3);
//		if($($(".qy-c-d")[0]).css("margin-left")=="-240px"){
//			var t=setTimeout(function(){
//				var first=$(".qy-c-d")[0];
//				$($(".qy-c-d")[0]).remove();
////				$($(".qy-c-d")[0]).appendTo($(".qy-big"));
//				$(".qy-big").append(first);
//				$(".qy-big").css("margin-left","");
//			},1500)	
//		}
//},1500)
//var timer=setInterval(function(){
//	$($(".qy-c-d")[0]).css("margin-left","-240px").css("opacity","0");
//	if($($(".qy-c-d")[0]).css("opacity")=="0"){
//		$($(".qy-c-d")[0]).appendTo($(".qy-c-d"));
//		$($(".qy-c-d")[5]).css("opacity","1").css("margin-left","");
//	}
//})
$($(".qy-c-d")[0]).css("margin-left","0px");
function slider(){
	let fir=$($(".qy-c-d")[0])
	fir.css("margin-left","-236px");
	setTimeout(function(){
		fir.appendTo(".qy-big").css("margin-left","0px");
	},1000)
}
let timer=setInterval(slider,2000);
$(".qy-btl").click(function(){
	clearInterval(timer);
	slider();
	timer=setInterval(slider,2000);
})

$(".cha").click(function(){
	$(".foot-up").css("display","none");
})
$(".btl").click(function(){
	var f=$($(".team-c-d")[0]);
	$($(".team-c-d")[0]).css("margin-left","-224px");
	let timer=setTimeout(function(){
		f.css("margin-left","0px");
		$(".team-c").append(f);
//		f.css("margin-left","0px").appendTo(".team-c");
	},500)
	
})
$(".btr").click(function(){
	var f=$(".team-c div:last-child");
	var f1=$(".team-c div:first-child");
	let t2=setTimeout(function(){	
//		f.insertBefore(f1)
		$(".team-c").prepend(f);
		f.css("margin-left","-224px");
	},5);
	
	let t1=setTimeout(function(){
		f.css("margin-left","0px");
	},70)
})

console.log($(".team-c div:first-child"));