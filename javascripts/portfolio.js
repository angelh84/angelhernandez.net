$(document).ready(function() {
	
	//ajax call feeding json data
	/*
	$.ajax({
		url: "myData.php",
		type: "GET",
		dataType:"json",
		success: function(data){
			callbackDataFunc(data);
		},
		error: function(){
			alert("There was an error");
		},
		complete: function(){
			console.log("Your data call was successful!");
		}
	});

	function callbackDataFunc(data){
		for (var value in data) {
			console.log(value + " : " + data[value]);
		};
	}; 
	 */
	
    var noWeb = "No Website"
    var portfolioData = {
      websites: [
        {"id" : "casaDelSol", "name" : "Casa Del Sol", "description" : "Guesthouse Accomodations", "imgCount" : 3, "url" : "http://www.MyCasaDelSol.com"},
        {"id" : "hapiFoundation", "name" : "Hapi Foundation", "description" : "Community Health Program", "imgCount" : 2, "url" : "http://www.HapiApts.org"},
        {"id" : "crackenbackFarm", "name" : "Crackenback Farm", "description" : "Guesthouse Accomodations", "imgCount" : 3, "url" : "http://www.Crackenback.com"},
        {"id" : "euchner", "name" : "Euchner Performance", "description" : "Real Estate Consulting", "imgCount" : 3, "url" : noWeb},
        {"id" : "mcResidential", "name" : "MC Residential", "description" : "Property Management", "imgCount" : 3, "url" : noWeb},
        {"id" : "s101", "name" : "S101 Management", "description" : "Property Management", "imgCount" : 1, "url" : noWeb},
        {"id" : "scotia", "name" : "Scotia Group", "description" : "Property Management", "imgCount" : 2, "url" : "http://www.ScotiaGroupManagement.com"},
        {"id" : "silverStone", "name" : "SilverStone Capital", "description" : "Property Management", "imgCount" : 1, "url" : noWeb},
        {"id" : "grandReserve", "name" : "The Grand Reserve", "description" : "Property Management", "imgCount" : 1, "url" : noWeb},
        {"id" : "jevanCapital", "name" : "Jevan Capital", "description" : "Property Management \u0026 Investment", "imgCount" : 3, "url" : "http://www.JevanCapital.com"},
        {"id" : "allisonShelton", "name" : "Allison-Shelton", "description" : "Property Management", "imgCount" : 3, "url" : "http://www.allison-shelton.com"},
        {"id" : "firstPacific", "name" : "First Pacific Group", "description" : "Property Management", "imgCount" : 3, "url" : "http://www.fPacific.com"},
        {"id" : "catalystProperty", "name" : "Catalyst Property Solutions", "description" : "Property Management", "imgCount" : 1, "url" : noWeb},
        {"id" : "mutualRealEstate", "name" : "Mutual Real Estate", "description" : "Property Management", "imgCount" : 1, "url" : noWeb},
        {"id" : "surePayroll", "name" : "Sure Payroll", "description" : "Insurance Agency", "imgCount" : 1, "url" : noWeb},
        {"id" : "interGroup", "name" : "The InterGroup Corp.", "description" : "Investment Firm", "imgCount" : 2, "url" : "http://www.intgla.com"},
        {"id" : "trinity", "name" : "Trinity", "description" : "Property Management", "imgCount" : 1, "url" : noWeb},
        {"id" : "lbk", "name" : "LBK Management", "description" : "Property Management", "imgCount" : 3, "url" : "http://www.LBKmanagement.com"},
        {"id" : "nicklin", "name" : "Nicklin Property Mgmt.", "description" : "Property Management", "imgCount" : 2, "url" : "http://www.NicklinPM.com"},
        {"id" : "pacificCrest", "name" : "Pacific Crest Realty", "description" : "Property Management", "imgCount" : 3, "url" : "http://www.PCRapts.com"},
        {"id" : "conAm", "name" : "ConAm - San Diego", "description" : "Property Management", "imgCount" : 1, "url" : "http://www.AptsInSoCal.com"},
        {"id" : "paramount", "name" : "The Paramount Group", "description" : "Asset Management", "imgCount" : 3, "url" : "http://www.ParamountAM.com"},
		{"id" : "sanAirport", "name" : "San Airport Trans.", "description" : "Airport Transportation", "imgCount" : 2, "url" : "http://www.SanAirportTransportation.com"},
		{"id" : "hotelAquaMar", "name" : "Hotel Aqua Mar", "description" : "Hotel", "imgCount" : 2, "url" : "http://www.HotelAquaMar.com"},
		{"id" : "super8", "name" : "Super 8 Motel", "description" : "Motel", "imgCount" : 2, "url" : "http://www.Super8NationalCity.com"}
      ],
      emails: [
        {"id" : "qrCode", "name" : "QR Code Feature", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "verizon", "name" : "Verizon Email Campaign", "description" : "Email Newsletter", "imgCount" : 2},
        {"id" : "massMailer", "name" : "Mass Mailing Feature", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "webApp", "name" : "Web Application Marketing", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "goGreen", "name" : "Go Green Campaign", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "intuit", "name" : "Intuit Marketing Email", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "craigslist", "name" : "Craigslist Assistant", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "webSolutions", "name" : "Web Solutions", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "endOfYear", "name" : "End-of-Year Newsletter", "description" : "Email Newsletter", "imgCount" : 2},
        {"id" : "onlineApplication", "name" : "Online Application", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "digitalFrame", "name" : "Digital Frame Product", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "softwareIntegration", "name" : "Software Integration", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "productAnnouncement", "name" : "Product Announcement", "description" : "Email Newsletter", "imgCount" : 1},
        {"id" : "companyServices", "name" : "Company Services", "description" : "Email Newsletter", "imgCount" : 1}
      ],
      misc: [
        {"id" : "liveChat", "name" : "Online Live Chat", "description" : "Web Interface Design", "imgCount" : 3},
        {"id" : "photoBuilder", "name" : "Photo Presentation Builder", "description" : "Interface Design", "imgCount" : 1},
        {"id" : "movableFurniture", "name" : "Movable Furniture App", "description" : "Web Interface Design", "imgCount" : 2},
        {"id" : "photographyServices", "name" : "Photography Services", "description" : "Print Marketing", "imgCount" : 3},
        {"id" : "iPhoneRender", "name" : "iPhone Photoshop Render", "description" : "Photoshop Realism", "imgCount" : 1},
        {"id" : "dvdBrochure1", "name" : "DVD Marketing Brochure", "description" : "DVD Menu", "imgCount" : 3},
        {"id" : "dvdBrochure2", "name" : "DVD Marketing Brochure", "description" : "DVD Menu", "imgCount" : 3},
        {"id" : "iStockUFO", "name" : "iStock Photo Art", "description" : "Photoshop", "imgCount" : 1},
        {"id" : "iStockPyramids", "name" : "iStock Photo Art", "description" : "Photoshop", "imgCount" : 1},
        {"id" : "iStockShip", "name" : "iStock Photo Art", "description" : "Photoshop", "imgCount" : 1}
      ]
    };

    var i = 0;
    var portfolioWebsites = [];
    var portfolioEmails = [];
    var portfolioMisc = [];
    var emailsImgCount = [];
    var miscImgCount = [];
    
    var webCount = portfolioData.websites.length;
    var emailCount = portfolioData.emails.length;
    var miscCount = portfolioData.misc.length;
    var portfolioBoxContent = ['<div class="portfolio-box" id="', '"><div class="plaque"><h5>', '</h5><h6>', '</h6></div>', '<div class="boxThumb"></div></div>'];
    

    for (var a = 0; a < webCount; a++){
      var ID = portfolioData.websites[a]["id"];
      var Name = portfolioData.websites[a]["name"];
      var Description = portfolioData.websites[a]["description"];
      portfolioWebsites[a] = portfolioBoxContent[0] + ID + portfolioBoxContent[1] + Name + portfolioBoxContent[2] + Description + portfolioBoxContent[3] + portfolioBoxContent[4];
    }; $("#web").after(portfolioWebsites.join(""));

    for (var a = 0; a < emailCount; a++){
      var ID = portfolioData.emails[a]["id"];
      var Name = portfolioData.emails[a]["name"];
      var Description = portfolioData.emails[a]["description"];
      portfolioEmails[a] = portfolioBoxContent[0] + ID + portfolioBoxContent[1] + Name + portfolioBoxContent[2] + Description + portfolioBoxContent[3] + portfolioBoxContent[4];
    }; $("#emails").after(portfolioEmails.join(""));

    for (var a = 0; a < miscCount; a++){
      var ID = portfolioData.misc[a]["id"];
      var Name = portfolioData.misc[a]["name"];
      var Description = portfolioData.misc[a]["description"];
      portfolioMisc[a] = portfolioBoxContent[0] + ID + portfolioBoxContent[1] + Name + portfolioBoxContent[2] + Description + portfolioBoxContent[3] + portfolioBoxContent[4];
    }; $("#misc").after(portfolioMisc.join(""));

    if ( window.location.hash != "#home" && window.location.hash != "#about-me" && window.location.hash != "#contact-me"  ){
      window.location.hash = "#home";
      $('#navigation-container a').eq(0).addClass('nav-select').siblings().removeAttr('class');
      $('#body-text-container > div').eq(0).css({"display": "block", "top": "-510px"}).animate({"top": 0, "opacity": 1}, 700).addClass("content-active");
    } else if (window.location.hash == "#home"){
      $('#navigation-container a').eq(0).addClass('nav-select').siblings().removeAttr('class');
      $('#body-text-container > div').eq(0).css({"display": "block", "top": "-510px"}).animate({"top": 0, "opacity": 1}, 700).addClass("content-active");
    } else if (window.location.hash == "#about-me"){
      $('#navigation-container a').eq(1).addClass('nav-select').siblings().removeAttr('class');
      $('#body-text-container > div').eq(1).css({"display": "block", "top": "-510px"}).animate({"top": 0, "opacity": 1}, 700).addClass("content-active");
    } else if (window.location.hash == "#contact-me") {
      $('#navigation-container a').eq(2).addClass('nav-select').siblings().removeAttr('class');
      $('#body-text-container > div').eq(2).css({"display": "block", "top": "-510px"}).animate({"top": 0, "opacity": 1}, 700).addClass("content-active");
    }
    function bodyContentLoad(contentContainer, mainNavIndex){
        $(contentContainer).eq(mainNavIndex).siblings(".content-active").stop().animate({"top": "510px", "opacity": 0 }, 250, function() {
          $(this).css("display", "none").removeClass('content-active');
          $(contentContainer).eq(mainNavIndex).css({"display": "block", "top": "-510px"}).stop().animate({"top": 0, "opacity": 1}, 250, function(){}).addClass("content-active");
        });
      };
    
    var AppRouter = Backbone.Router.extend({
        routes: {
            "home": "home",
            "about-me": "about-me",
            "contact-me": "contact-me"
        }
    });
    // Initiate the router
    var app_router = new AppRouter;

    app_router.on('route:home', function() {
      $('#navigation-container a').eq(0).addClass('nav-select').siblings().removeAttr('class');
      bodyContentLoad("#body-text-container > div", 0);
    });
    app_router.on('route:about-me', function() {    
      $('#navigation-container a').eq(1).addClass('nav-select').siblings().removeAttr('class');
      bodyContentLoad("#body-text-container > div", 1); 
    });
    app_router.on('route:contact-me', function() {
      $('#navigation-container a').eq(2).addClass('nav-select').siblings().removeAttr('class');
      bodyContentLoad("#body-text-container > div", 2);
    });

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
    

  // Adds mobileClass to modal Header elements. Function included in "closed" reveal function, .portfolio-box click function (@ end), and win resize function.
    function modalHeaderMobile(){
      var modalHeaderWidth = $('#modalHeader').width();
      var modalInfoWidth = $('#modalInfo').width();
      var modalThumbsWidth = $('#modalThumbs').width();
      var modalThumbsLength = $('#modalThumbs').children().length;
      if ( modalThumbsLength > 1 && modalInfoWidth + modalThumbsWidth > modalHeaderWidth && modalHeaderWidth < 700 ) {
        $('#modalInfo').addClass('modalInfoMobile');
        $('#modalThumbs').addClass('modalThumbsMobile');
      } else {
        $('#modalInfo').removeAttr('class');
        $('#modalThumbs').removeAttr('class');
      };
      if ( modalThumbsLength < 2 ){
        $('#modalInfo').addClass('modalInfoMobile');
      }; 
    };
  
  // Modal pop-up click function updates headlines and adds in correct css height for large gallery image depending on screen size. 
    $(".portfolio-box").on("click", function() {
      
      $("#myModal").reveal({ 
        "open" : function () { 
          if ( $(window).width() > 1340 ){
            $('#modalScreenshots').css("height", 225);
          } else { $('#modalScreenshots').css("height", 125); };
          $('#modalScreenshots').fadeTo(0, 0);
          $('#modalHeader').fadeTo(0, 0);
        },
        "close" : function(){
          modalHeaderMobile();
        },
        "closed": function () { 
          $('#modalInfo').find('span').remove();
          $('#modalInfo').find('a').remove(); 
          $('#modalInfo').removeAttr('class');
          $('#modalThumbs').children('a').remove();
          $('#modalScreenshots').children('img').remove();
          $('#modalScreenshots').fadeTo("fast", 0);
          $('#modalScreenshots').css("height", 425);
          $('#modalHeader').fadeTo("fast", 0);
        }
      });
      var modalThumbs = [];
      var modalImgs = [];
      var boxIndex = $(this).index();
      var boxID = $(this).attr('id');
      var modalHeadline = $(this).find('h5').text();
      var modalSubHead = $(this).find('h6').text();
      var modalImgName = $(this).attr('id').toLowerCase();
      var modalThumbsSRC = 'url("images/portfolio/thumbs/' + modalImgName + '.jpg")';

      
      $('#myModal').find('h5').text(modalHeadline);
      $('#myModal').find('h6').text(modalSubHead);


      function modalImagesLoad(){
        for (var a = 0; a <= imgCount - 1; a++){  
          modalThumbs[a] = '<a href="#"></a>';
          modalImgs[a] = '<img src="images/portfolio/large/' + modalImgName + '-' + [a + 1] + '.jpg"' + 'alt="' + name + '">';
        }; 
        if (modalThumbs.length > 1){
          $('#modalThumbs').prepend(modalThumbs.join(""));
        };
        $('#modalScreenshots').prepend(modalImgs.join(""));
        $('#modalScreenshots img').eq(0).css('z-index', 1);
        $('#modalScreenshots img').eq(0).load(function(){
          function getImgSize(imgSrc) {
            var newImg = new Image();
            newImg.onload = function() {
              var width = newImg.width;
              if ( $(window).width() > 1340 ){
                var height = newImg.height;
              } else { var height = $('#modalScreenshots img').eq(0).height(); };
              
              $('#modalScreenshots').css("max-width", width + 'px');
              $('#modalHeader').css("max-width", width + 'px');
              $('#modalScreenshots').animate({ height: height + 'px', opacity: 1 }, 300);
              $('#modalHeader').animate({opacity: 1 }, 300);
            };
            newImg.src = imgSrc;
          };
          getImgSize('http://www.angelsportfolio.com/images/portfolio/large/' + modalImgName + '-1.jpg');
        });

      };

      for (var x in portfolioData.websites){
        var websitesID = portfolioData.websites[x]["id"];
        if(boxID == websitesID){
          var imgCount = portfolioData.websites[x]["imgCount"];
          var name = portfolioData.websites[x]["name"];
          var webURL = portfolioData.websites[x]["url"];
          var webLinkFormat = webURL.toLowerCase();
          var webLink = webURL.replace(/http:\/\//g,"");

          modalImagesLoad();

        // Adds in corresponding URL for websites under headlines
          if (webURL == noWeb) {
            $('#modalInfo').append('<span>' + noWeb + '</span>');
          } else {
            $('#modalInfo').append('<a href="' + webLinkFormat + '" target="_blank">' + webLink + '</a>');
          };
        };
      };

      for (var x in portfolioData.emails){
        var emailsID = portfolioData.emails[x]["id"];
        if(boxID == emailsID){
          var imgCount = portfolioData.emails[x]["imgCount"];
          var name = portfolioData.emails[x]["name"];
          modalImagesLoad();
        };
      };

      for (var x in portfolioData.misc){
        var miscID = portfolioData.misc[x]["id"];
        if(boxID == miscID){
          var imgCount = portfolioData.misc[x]["imgCount"];
          var name = portfolioData.misc[x]["name"];
          modalImagesLoad();
        };
      };
   
      $('#modalThumbs a').css('background-image', modalThumbsSRC);
      $('#modalThumbs a').eq(0).attr('class', 'active');

    // Modal thumbnail click functions
      $('#modalThumbs a').on("click", function(event){
        event.preventDefault();
        var thumbsIndex = $(this).index();
        $('#modalScreenshots img').eq(thumbsIndex).animate({opacity: 1}, 300).siblings().animate({opacity: 0}, 300);
        $(this).addClass('active').siblings().removeAttr('class');
      });
      modalHeaderMobile();
    });

  // Updates large gallery image height to the size of modal window when resizing window.
    $(window).resize(function(){
      var modalHeight = $('#modalScreenshots img').eq(0).height();
      $('#modalScreenshots').css('height', + modalHeight + 'px');
      modalHeaderMobile();
    });

  // Portfolio anchor smooth scroll functions
    function scroll_to(div){
      $('html, body').animate({
      scrollTop: $(div).offset().top
      },1000);
    };
    $(".top").on("click", function(event){
      event.preventDefault();
      scroll_to("#portfolio-nav");
    });
    $("#portfolio-web").on("click", function(event){
      event.preventDefault();
      scroll_to("#portfolio-nav");
    });
    $("#portfolio-emails").on("click", function(event){
      event.preventDefault();
      scroll_to("#emails");
    });
    $("#portfolio-misc").on("click", function(event){
      event.preventDefault();
      scroll_to("#misc");
    });


  $(function(){
    $('#contact-content form').submit(function(e){
      e.preventDefault();
      var form = $(this);
      var post_url = form.attr('action');
      var post_data = form.serialize();
      $.ajax({
        type: 'POST',
        url: post_url,
        data: post_data,
        dataType: 'json',
        success: function(msg) {
          var errors = msg.message;
          var errorsLength = errors.length;
          var nameError = $.inArray("Please enter your name.", errors);
          var contactError = $.inArray("Please enter your contact details.", errors);
          var messageError = $.inArray("Please enter a message.", errors);
          if(msg.status == 'error'){
            $("#fieldName").removeAttr("class").parent().find('small').remove();
            $("#fieldContact").removeAttr("class").parent().find('small').remove();
            $("#fieldMessage").removeAttr("class").parent().find('small').remove();
            if( nameError > -1 ) {
              $('#fieldName').addClass('error').parent().append('<small class="error">' + errors[nameError] + '</small>');
            } else { $('#fieldName').removeAttr('class').parent().find('small').remove(); };
            if( contactError > -1 ) {
              $('#fieldContact').addClass('error').parent().append('<small class="error">' + errors[contactError] + '</small>');
            } else { $('#fieldContact').removeAttr('class').parent().find('small').remove(); };
            if( messageError > -1 ) {
              $('#fieldMessage').addClass('error').parent().append('<small class="error">' + errors[messageError] + '</small>');
            } else { $('#fieldMessage').removeAttr('class').parent().find('small').remove(); };
            //console.log($.inArray("Please enter your contact details.", errors));
          }else if(msg.status == 'success'){
            $(form).fadeOut(400, function(){
              form.html("<h5>Your form has been sent sucessfully!</h5><p>Thank you for contacting me, I will get back to you promptly.</p>").fadeIn(400);
            });
          }
          
        }
      });
    });
  });

});