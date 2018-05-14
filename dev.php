
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Development</title>
<meta name="robots" content="noindex, nofollow">

<style>
	.showMore {
		width: 30%;	
	}
</style>

</head>

<body>

<div class="showMore">
	
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id tincidunt augue. Proin volutpat luctus orci, non scelerisque dui convallis non. Curabitur lobortis lacus ultricies varius facilisis. Nunc ultrices erat sit amet libero accumsan lobortis. In id velit vehicula, suscipit nisi ac, tincidunt arcu. Morbi massa ligula, tempor vel libero non, tempus luctus magna.</p>
	
	<p>Proin sed diam rhoncus dui semper tincidunt. Curabitur gravida consequat blandit. Quisque mauris massa, ultrices suscipit sollicitudin quis, luctus eu nisl. Ut eu nulla sed mi auctor adipiscing in sed mauris. Fusce lobortis velit vitae nisi imperdiet suscipit. In congue velit at sapien aliquam, id interdum justo malesuada. Suspendisse laoreet, dolor vel ultrices aliquet, massa dolor semper nisl, at consectetur metus arcu vitae sem. Cras in lectus ultricies mauris condimentum interdum vitae eget tellus. Maecenas dignissim aliquam elit, vitae aliquet dui rhoncus posuere.</p>

</div>



<!-- Included JS Files (Compressed) -->
<script src="javascripts/jquery-1.9.1.min.js"></script>

<script>

var friends = {};

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: "888-888-8888",
    address: ['1234 Street name, Palo Alto, CA 92101']
};
friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "999-999-9999",
    address: ['1234 Street name, Las Vegas, NV 92101']
};

var list = function(test){
    for( var key in test ){
        console.log(test.key);
		console.log(friends[key]);
    };
};

list(friends);

/*
$(function(){
	var showMore = $(".showMore");
	var showLimit = 200;
	// console.log(showMore.text().length);
	showMore.text(function(index){
		for(var i = 0; i < showMore.text().length; i++){
			if(i === showLimit ) {
				return "test";	
			}; 
		};
		//return showMore.text() + "test";
	});
	console.log(Math.floor(Math.random()*2));
});

*/
/*
$(function(){
	

	var showMore = $(".showMore");
	var showMoreLength = showMore.text().length;
	var showLimit = 200;
	var showMoreLink = ' ...<a class="read-more-link" href="#">Read More</a>';
	
	if( showMoreLength > showLimit ) {
		for(var i = 0; i < showMoreLength; i++){
			if(i === showLimit ) {
					
			}; 
		};
	};
	
});

*/

/*
$(function(){
	
	var showMore = $(".showMore");
	var showMoreText = showMore.text();
	var showMoreContent = showMore.html();
	var showHtmlLength = showMoreContent.length;
	var showLimit = 200;
	var showArray = [];
	var hiddenArray = [];
	var showMoreLink = ' ...<a class="read-more-link" href="#">Read More</a>';
	
	for(var i = 0; i < showHtmlLength; i++){
		
		if(i < showLimit ) {
			showArray.push(showMoreContent[i]);	
		} else {
			hiddenArray.push(showMoreContent[i]);
		};
		
	};
	
	var showResult = showArray.join("");
	var hiddenResult = hiddenArray.join("");
	
	//console.log(showResult);
	
	var endResult = showResult + showMoreLink;
	
	//console.log(hiddenResult);
	showMore.html('<div class="test">' + endResult + '</div>' + '<div class="hiddenText" style="display: none;">' + hiddenResult + '</div>');
	
	$(".read-more-link").each(function(index){
		$(this).on("click", function(){
			$(this).parents(".showMore").children(".hiddenText").css("display", "block");
		});
	});
	
	
	

});
	*/

</script>	

</body>
</html>
