/* ------------------------------------------------------------------------------
*
*  # Template JS core
*
*  Core JS file with default functionality
*
* ---------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {

  // Disable CSS transitions on page load
  $('body').addClass('no-transitions');


  // ========================================
  //
  // Content area height
  //
  // ========================================


  // Calculate min height
  function containerHeight() {
    var pageContainerClass = 'page-container',
      bottomNavbarClass = 'navbar-fixed-bottom',
      bottomNavbar = $('.' + bottomNavbarClass).length && $('.' + bottomNavbarClass).outerHeight(),
      availableHeight = $(window).height() - $('.' + pageContainerClass).offset().top - bottomNavbar;

    $('.' + pageContainerClass).attr('style', 'min-height:' + availableHeight + 'px');
  }

  // Initialize
  containerHeight();


  // ========================================
  //
  // Heading elements
  //
  // ========================================


  // Heading elements toggler
  // -------------------------

  // Add control button toggler to page and panel headers if have heading elements
  $('.panel-footer').has('> .heading-elements:not(.not-collapsible)').prepend('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');
  $('.page-title, .panel-title').parent().has('> .heading-elements:not(.not-collapsible)').children('.page-title, .panel-title').append('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');


  // Toggle visible state of heading elements
  $('.page-title .heading-elements-toggle, .panel-title .heading-elements-toggle').on('click', function() {
    $(this).parent().parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
  });
  $('.panel-footer .heading-elements-toggle').on('click', function() {
    $(this).parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
  });

  var getMonth = function() {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[new Date().getMonth()];
  };

  $('.month').text(getMonth());
  $('.year').text(new Date().getFullYear());


  // Breadcrumb elements toggler
  // -------------------------

  // Add control button toggler to breadcrumbs if has elements
  $('.breadcrumb-line').has('.breadcrumb-elements').prepend('<a class="breadcrumb-elements-toggle"><i class="icon-menu-open"></i></a>');


  // Toggle visible state of breadcrumb elements
  $('.breadcrumb-elements-toggle').on('click', function() {
    $(this).parent().children('.breadcrumb-elements').toggleClass('visible-elements');
  });


  // ========================================
  //
  // Navbar
  //
  // ========================================


  // Navbar navigation
  // -------------------------

  // Prevent dropdown from closing on click
  $(document).on('click', '.dropdown-content', function(e) {
    e.stopPropagation();
  });

  // Disabled links
  $('.navbar-nav .disabled a').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // Show tabs inside dropdowns
  $('.dropdown-content a[data-toggle="tab"]').on('click', function(e) {
    $(this).tab('show');
  });

  // Calendar date range picker
  $('div[class="daterange"] input').on('show.daterangepicker', function(ev, picker) {
    $(this).parent().addClass('active');
  });

  $('div[class="daterange"] input').on('hide.daterangepicker', function(ev, picker) {
    $(this).parent().removeClass('active');
  });

  // Daterange Initialize with options
  $('input[name=daterange]').daterangepicker(
    {
      startDate: moment().subtract(29, 'days').format('MMM D, YYYY'),
      endDate: moment().format('MMM D, YYYY'),
      minDate: '01/01/2014',
      maxDate: '12/31/2016',
      dateLimit: { days: 60 },
      locale: {
        format: 'MMM D, YYYY'
      },
      ranges: {
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      },
      opens: 'left',
      applyClass: 'btn-small bg-slate',
      cancelClass: 'btn-small btn-default',
      template: '<div class="daterangepicker dropdown-menu">' +
        '<span>' +
        '<div class="calendar left">' +
        '<div class="range_inputs">' +
        '<div class="daterangepicker_start_input">' +
        '<label for="daterangepicker_start">from</label>' +
        '<input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" />' +
        '</div>' +
        '</div>' +
        '<div class="calendar-table"></div>' +
        '</div>' +
        '<div class="calendar right">' +
        '<div class="range_inputs">' +
        '<div class="daterangepicker_end_input">' +
        '<label for="daterangepicker_end">to</label>' +
        '<input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" />' +
        '</div>' +
        '</div>' +
        '<div class="calendar-table"></div>' +
        '</div>' +
        '<div class="ranges"></div>' +
        '</span>' +
        '<div class="daterange-footer">' +
        '<button class="applyBtn"></button>' +
        '<button class="cancelBtn"></button>' +
        '</div>' +
        '</div>'
    },
    function(start, end, e) {
      $('input[name=daterange]').val(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
    }
  );


  // Collapse fixed navbar
  $('body').removeClass('sidebar-fixed-expanded').addClass('sidebar-xs');

  // Display date format
  // $('.daterange-predefined span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' &nbsp; - &nbsp; ' + moment().format('MMMM D, YYYY'));

  $('.open-sandwhich').on('click', function() {
    $(this).parents('li').siblings('.menu-pop').toggleClass('showing');
  });


  // Question mark popover 
  $('.panel-question').on('click', function (e) {
    e.preventDefault();
    var $parent = $(this).parents('.panel');
    var $message = $(this).data('message');
    var popoverHTML = '<div class="question-pop"><button class="close-pop"><i class="fas fa-times"></i></button><p>' + $message +'</p></div>';

    $parent.prepend(popoverHTML);
    setTimeout(function () {
        $parent.find('.question-pop').addClass('show-pop');
    }, 100)
})

$('.panel').on('click', '.close-pop', function (e) {
    e.preventDefault();
    var questionPop = $(e.target).parents('.question-pop');
    questionPop.removeClass('show-pop')
    setTimeout(function () {
        questionPop.remove();
    }, 200)
})

  // Mini sidebar
  // -------------------------

  // Setup
  function miniSidebar() {
    if ($('body').hasClass('sidebar-xs')) {
      $('.sidebar-main.sidebar-fixed .sidebar-content').on('mouseenter', function() {
        if ($('body').hasClass('sidebar-xs')) {

          // Expand fixed navbar
          $('body').removeClass('sidebar-xs').addClass('sidebar-fixed-expanded');
        }
      }).on('mouseleave', function() {
        if ($('body').hasClass('sidebar-fixed-expanded') && !$('body').hasClass('notifications')) {
          // Collapse fixed navbar
          $('body').removeClass('sidebar-fixed-expanded').addClass('sidebar-xs');
        }
      });
    }
  }

  // Initialize
  miniSidebar();

  // Nav-Toggle
  // ============================
  $('.midi-daterangepicker .navbar-toggle').on('click', function() {
    $('.midi-daterangepicker ul').toggleClass('active');
    $(this).toggleClass('active');
  });


  // ========================================
  //
  // Element controls
  //
  // ========================================


  // Reload elements
  // -------------------------

  // Panels
  $('.panel [data-action=reload]').click(function(e) {
    e.preventDefault();
    var block = $(this).parent().parent().parent().parent().parent();
    $(block).block({
      message: '<i class="icon-spinner2 spinner"></i>',
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.8,
        cursor: 'wait',
        'box-shadow': '0 0 0 1px #ddd'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'none'
      }
    });

    // For demo purposes
    window.setTimeout(function() {
      $(block).unblock();
    }, 2000);
  });


  // Sidebar categories
  $('.category-title [data-action=reload]').click(function(e) {
    e.preventDefault();
    var block = $(this).parent().parent().parent().parent();
    $(block).block({
      message: '<i class="icon-spinner2 spinner"></i>',
      overlayCSS: {
        backgroundColor: '#000',
        opacity: 0.5,
        cursor: 'wait',
        'box-shadow': '0 0 0 1px #000'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'none',
        color: '#fff'
      }
    });

    // For demo purposes
    window.setTimeout(function() {
      $(block).unblock();
    }, 2000);
  });


  // Light sidebar categories
  $('.sidebar-default .category-title [data-action=reload]').click(function(e) {
    e.preventDefault();
    var block = $(this).parent().parent().parent().parent();
    $(block).block({
      message: '<i class="icon-spinner2 spinner"></i>',
      overlayCSS: {
        backgroundColor: '#fff',
        opacity: 0.8,
        cursor: 'wait',
        'box-shadow': '0 0 0 1px #ddd'
      },
      css: {
        border: 0,
        padding: 0,
        backgroundColor: 'none'
      }
    });

    // For demo purposes
    window.setTimeout(function() {
      $(block).unblock();
    }, 2000);
  });


  // Collapse elements
  // -------------------------

  //
  // Sidebar categories
  //

  // Hide if collapsed by default
  $('.category-collapsed').children('.category-content').hide();


  // Rotate icon if collapsed by default
  $('.category-collapsed').find('[data-action=collapse]').addClass('rotate-180');


  // Collapse on click
  $('.category-title [data-action=collapse]').click(function(e) {
    e.preventDefault();
    var $categoryCollapse = $(this).parent().parent().parent().nextAll();
    $(this).parents('.category-title').toggleClass('category-collapsed');
    $(this).toggleClass('rotate-180');

    containerHeight(); // adjust page height

    $categoryCollapse.slideToggle(150);
  });


  //
  // Panels
  //

  // Hide if collapsed by default
  $('.panel-collapsed').children('.panel-heading').nextAll().hide();


  // Rotate icon if collapsed by default
  $('.panel-collapsed').find('[data-action=collapse]').addClass('rotate-180');


  // Collapse on click
  $('.panel [data-action=collapse]').click(function(e) {
    e.preventDefault();
    var $panelCollapse = $(this).parent().parent().parent().parent().nextAll();
    $(this).parents('.panel').toggleClass('panel-collapsed');
    $(this).toggleClass('rotate-180');

    containerHeight(); // recalculate page height

    $panelCollapse.slideToggle(150);
  });


  // Remove elements
  // -------------------------

  // Panels
  $('.panel [data-action=close]').click(function(e) {
    e.preventDefault();
    var $panelClose = $(this).parent().parent().parent().parent().parent();

    containerHeight(); // recalculate page height

    $panelClose.slideUp(150, function() {
      $(this).remove();
    });
  });


  // Sidebar categories
  $('.category-title [data-action=close]').click(function(e) {
    e.preventDefault();
    var $categoryClose = $(this).parent().parent().parent().parent();

    containerHeight(); // recalculate page height

    $categoryClose.slideUp(150, function() {
      $(this).remove();
    });
  });


  // ========================================
  //
  // Main navigation
  //
  // ========================================


  // Main navigation
  // -------------------------

  // Add 'active' class to parent list item in all levels
  $('.navigation').find('li.active').parents('li').addClass('active');

  // Hide all nested lists
  $('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

  // Highlight children links
  $('.navigation').find('li').has('ul').children('a').addClass('has-ul');

  // Add active state to all dropdown parent levels
  $('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown:not(.language-switch), .navbar-nav .dropup:not(.language-switch)').addClass('active');


  // Main navigation tooltips positioning
  // -------------------------

  // Left sidebar
  $('.navigation-main > .navigation-header > i').tooltip({
    placement: 'right',
    container: 'body'
  });


  // ========================================
  //
  // NOTIFICATIONS NAV
  //
  // ========================================
  
  var createNotificationBG = function () {
    $('body').addClass('notifications').append('<div class="bg-overlay"></div>');
    setTimeout(function () {
      $('.bg-overlay').addClass('show');  
    }, 10)
  }

  var deleteNotificationBG = function () {
    var $bg = $('.bg-overlay');
    $bg.removeClass('show')
    $('body').removeClass('notifications')
    setTimeout(function () {
      $bg.remove();
    }, 250)
  }

  var toggleNotificationDrawer = function () {
    $('.notifications-pop').toggleClass('show');
  }

  var openNav = function () {
    $('body').attr('class', 'navbar-top pace-done notifications sidebar-fixed-expanded');
  }

  var closeNav = function () {
    $('body').attr('class', 'navbar-top pace-done sidebar-xs');
    setTimeout(function () {
      removeNavActive();
    }, 300)
  }

  var removeNavActive = function () {
    $('.navigation').find('.active').removeClass('active');
  }

  $('.notifications').on('click', function (e) {
    e.preventDefault();

     // Make notifications nav link active
     $(this)
      .parents('li')
      .addClass('active')
      .siblings('li')
      .removeClass('active')

    // if notification closed
    if (!$('body').hasClass('notifications')) {
      createNotificationBG();
      toggleNotificationDrawer();
      openNav();

    } else {
    // if notification is open
      deleteNotificationBG();
      toggleNotificationDrawer();
      removeNavActive();
    }
  });

  

  // close notification drawere
  $('body').on('click', '.bg-overlay', function () {
    if ($('body').hasClass('notifications')) {
      deleteNotificationBG();
      toggleNotificationDrawer();
      closeNav();
    }
  });

  $('.add-notification-button').on('click', function (e) {
    e.preventDefault();
    $('#add_notification_modal').modal('show');
  })

  $('.notification-check').find('input').on('change', function () {
    var $inputWrap = $(this).parents('.checkbox').siblings('.notification-input-wrap');
    if ($(this).is(':checked')) {
      $inputWrap.slideDown(250);
    } else {
      $inputWrap.slideUp(250);
    }
  })

  // Collapsible functionality
  // -------------------------

  // Main navigation
  $('.navigation-main').find('li').has('ul').children('a').on('click', function(e) {
    e.preventDefault();

    // Collapsible
    $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

    // Accordion
    if ($('.navigation-main').hasClass('navigation-accordion')) {
      $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
    }
  });


  // Alternate navigation
  $('.navigation-alt').find('li').has('ul').children('a').on('click', function(e) {
    e.preventDefault();

    // Collapsible
    $(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(200);

    // Accordion
    if ($('.navigation-alt').hasClass('navigation-accordion')) {
      $(this).parent('li').not('.disabled').siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(200);
    }
  });


  // ========================================
  //
  // Sidebars
  //
  // ========================================


  // Mini sidebar
  // -------------------------

  // Toggle mini sidebar
  $('.sidebar-main-toggle').on('click', function(e) {
    e.preventDefault();

    // Toggle min sidebar class
    $('body').toggleClass('sidebar-xs');
  });


  // Sidebar controls
  // -------------------------

  // Disable click in disabled navigation items
  $(document).on('click', '.navigation .disabled a', function(e) {
    e.preventDefault();
  });


  // Adjust page height on sidebar control button click
  $(document).on('click', '.sidebar-control', function(e) {
    containerHeight();
  });


  // Hide main sidebar in Dual Sidebar
  $(document).on('click', '.sidebar-main-hide', function(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-main-hidden');
  });


  // Toggle second sidebar in Dual Sidebar
  $(document).on('click', '.sidebar-secondary-hide', function(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-secondary-hidden');
  });


  // Hide detached sidebar
  $(document).on('click', '.sidebar-detached-hide', function(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-detached-hidden');
  });


  // Hide all sidebars
  $(document).on('click', '.sidebar-all-hide', function(e) {
    e.preventDefault();

    $('body').toggleClass('sidebar-all-hidden');
  });


  //
  // Opposite sidebar
  //

  // Collapse main sidebar if opposite sidebar is visible
  $(document).on('click', '.sidebar-opposite-toggle', function(e) {
    e.preventDefault();

    // Opposite sidebar visibility
    $('body').toggleClass('sidebar-opposite-visible');

    // If visible
    if ($('body').hasClass('sidebar-opposite-visible')) {

      // Make main sidebar mini
      $('body').addClass('sidebar-xs');

      // Hide children lists
      $('.navigation-main').children('li').children('ul').css('display', '');
    }
    else {

      // Make main sidebar default
      $('body').removeClass('sidebar-xs');
    }
  });


  // Hide main sidebar if opposite sidebar is shown
  $(document).on('click', '.sidebar-opposite-main-hide', function(e) {
    e.preventDefault();

    // Opposite sidebar visibility
    $('body').toggleClass('sidebar-opposite-visible');

    // If visible
    if ($('body').hasClass('sidebar-opposite-visible')) {

      // Hide main sidebar
      $('body').addClass('sidebar-main-hidden');
    }
    else {

      // Show main sidebar
      $('body').removeClass('sidebar-main-hidden');
    }
  });


  // Hide secondary sidebar if opposite sidebar is shown
  $(document).on('click', '.sidebar-opposite-secondary-hide', function(e) {
    e.preventDefault();

    // Opposite sidebar visibility
    $('body').toggleClass('sidebar-opposite-visible');

    // If visible
    if ($('body').hasClass('sidebar-opposite-visible')) {

      // Hide secondary
      $('body').addClass('sidebar-secondary-hidden');

    }
    else {

      // Show secondary
      $('body').removeClass('sidebar-secondary-hidden');
    }
  });


  // Hide all sidebars if opposite sidebar is shown
  $(document).on('click', '.sidebar-opposite-hide', function(e) {
    e.preventDefault();

    // Toggle sidebars visibility
    $('body').toggleClass('sidebar-all-hidden');

    // If hidden
    if ($('body').hasClass('sidebar-all-hidden')) {

      // Show opposite
      $('body').addClass('sidebar-opposite-visible');

      // Hide children lists
      $('.navigation-main').children('li').children('ul').css('display', '');
    }
    else {

      // Hide opposite
      $('body').removeClass('sidebar-opposite-visible');
    }
  });


  // Keep the width of the main sidebar if opposite sidebar is visible
  $(document).on('click', '.sidebar-opposite-fix', function(e) {
    e.preventDefault();

    // Toggle opposite sidebar visibility
    $('body').toggleClass('sidebar-opposite-visible');
  });


  // Mobile sidebar controls
  // -------------------------

  // Toggle main sidebar
  $('.sidebar-mobile-main-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-opposite sidebar-mobile-detached');
  });


  // Toggle secondary sidebar
  $('.sidebar-mobile-secondary-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-opposite sidebar-mobile-detached');
  });


  // Toggle opposite sidebar
  $('.sidebar-mobile-opposite-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-mobile-opposite').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached');
  });


  // Toggle detached sidebar
  $('.sidebar-mobile-detached-toggle').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('sidebar-mobile-detached').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-opposite');
  });


  // Mobile sidebar setup
  // -------------------------

  $(window).on('resize', function() {
    setTimeout(function() {
      containerHeight();

      if ($(window).width() <= 768) {

        // Add mini sidebar indicator
        $('body').addClass('sidebar-xs-indicator');

        // Place right sidebar before content
        $('.sidebar-opposite').insertBefore('.content-wrapper');

        // Place detached sidebar before content
        $('.sidebar-detached').insertBefore('.content-wrapper');

        // Add mouse events for dropdown submenus
        $('.dropdown-submenu-hover').on('mouseenter touchstart', function() {
          $(this).children('.dropdown-menu').addClass('show');
        }).on('mouseleave touchend', function() {
          $(this).children('.dropdown-menu').removeClass('show');
        });
      }
      else {

        // Remove mini sidebar indicator
        $('body').removeClass('sidebar-xs-indicator');

        // Revert back right sidebar
        $('.sidebar-opposite').insertAfter('.content-wrapper');

        // Remove all mobile sidebar classes
        $('body').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached sidebar-mobile-opposite');

        // Revert left detached position
        if ($('body').hasClass('has-detached-left')) {
          $('.sidebar-detached').insertBefore('.container-detached');
        }

        // Revert right detached position
        else if ($('body').hasClass('has-detached-right')) {
          $('.sidebar-detached').insertAfter('.container-detached');
        }

        // Remove visibility of heading elements on desktop
        $('.page-header-content, .panel-heading, .panel-footer').removeClass('has-visible-elements');
        $('.heading-elements').removeClass('visible-elements');

        // Disable appearance of dropdown submenus
        $('.dropdown-submenu').children('.dropdown-menu').removeClass('show');
      }
    }, 100);
  }).resize();

  // ========================================
  //
  // Demo Drop
  //
  // ========================================

  var userTypeUpdateURL = function (label) {
    var pathname = window.location.pathname;
    var pathHost = window.location.host;
    var pathArr = pathname.split('/');
    var pathLength = pathArr.length;
    var urlUserType = pathArr[pathLength - 3]; 
    var urlDataRangeNumber = pathArr[pathLength - 2];
    var urlDataFilename = pathArr[pathLength - 1];
    var hostPathnameAppend = function () {
      var hostPathnameArr = [];
      for (var i = 0; i < pathLength - 3; i++) {
        hostPathnameArr.push(pathArr[i]);
      }
      return hostPathnameArr;
    };
    var newHostPathname = hostPathnameAppend().join('/');
    
    if (label === 'demo1') {
      window.location.href = 'http://' + pathHost + newHostPathname + '/sales/' + urlDataRangeNumber + '/' + urlDataFilename
    } else if (label === 'demo2') {
      window.location.href = 'http://' + pathHost + newHostPathname + '/prevention/' + urlDataRangeNumber + '/' + urlDataFilename
    }

    // console.log(urlUserType)
    // console.log(urlDataRangeNumber);
    // console.log(urlDataFilename);
    // console.log(console.log('http://' + pathHost + newHostPathname + '/sales/' + urlDataRangeNumber + '/' + urlDataFilename))
  }
  

  $('.demo-drop').on('change', function () {
    var val = $(this).val();
    userTypeUpdateURL(val);
    console.log('working?')
  });
  

  // ========================================
  //
  // Other code
  //
  // ========================================


  // Clickable dropdown submenu
  // -------------------------

  // All parent levels require .dropdown-toggle class
  $('.dropdown-menu').find('.dropdown-submenu').not('.disabled').find('.dropdown-toggle').on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();

    // Remove "open" class in all siblings
    $(this).parent().siblings().removeClass('open');

    // Toggle submenu
    $(this).parent().toggleClass('open');

    // Hide all levels when parent dropdown is closed
    $(this).parents('.open').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu.open').removeClass('open');
    });
  });

  // instantiate select2 dropdown
  $('.select').select2({
    minimumResultsForSearch: Infinity
  });

  // Enable filtering
  $('.multiselect-filtering').multiselect({
    enableFiltering: true,
    nonSelectedText: '',
    templates: {
      filter: '<li class="multiselect-item multiselect-filter"><i class="icon-search4"></i> <input class="form-control" type="text"></li>'
    }
  });

  $('.ranges').css('visibility', 'hidden')

  var updateRangeButton = function (label) {
    var pathname = window.location.pathname;
    var pathHost = window.location.host;
    var pathArr = pathname.split('/');
    var pathLength = pathArr.length;
    var urlDateRangeNumber = pathArr[pathLength - 2];

    $('.ranges').find('.active').removeClass('active');
    if (urlDateRangeNumber === '30') {
      $('.ranges').find('li[data-range-key="Last 30 Days"]').addClass('active')
    } else if (urlDateRangeNumber === '60') {
      $('.ranges').find('li[data-range-key="Last 60 Days"]').addClass('active')
    } else if (urlDateRangeNumber === '90') {
      $('.ranges').find('li[data-range-key="Last 90 Days"]').addClass('active')
    }
    $('.ranges').css('visibility', 'visible')
  }

  var daterangeUpdateURL = function (label) {
    var pathname = window.location.pathname;
    var pathHost = window.location.host;
    var pathArr = pathname.split('/');
    var pathLength = pathArr.length;
    var urlUserType = pathArr[pathLength - 3]; 
    var urlDataRangeNumber = pathArr[pathLength - 2];
    var urlDataFilename = pathArr[pathLength - 1];
    var hostPathnameAppend = function () {
      var hostPathnameArr = [];
      for (var i = 0; i < pathLength - 3; i++) {
        hostPathnameArr.push(pathArr[i]);
      }
      return hostPathnameArr;
    };
    var newHostPathname = hostPathnameAppend().join('/');
    
    if (label === 'last 30 days') {
      window.location.href = 'http://' + pathHost + newHostPathname + '/' + urlUserType + '/30/' + urlDataFilename
    } else if (label === 'last 60 days') {
      window.location.href = 'http://' + pathHost + newHostPathname + '/' + urlUserType + '/60/' + urlDataFilename
    } else if (label === 'last 90 days') {
      window.location.href = 'http://' + pathHost + newHostPathname + '/' + urlUserType + '/90/' + urlDataFilename
    }

    

    // console.log(urlUserType)
    // console.log(urlDataRangeNumber);
    // console.log(urlDataFilename);
    // console.log(console.log('http://' + pathHost + newHostPathname + '/' + urlUserType + '/30/' + urlDataFilename))
  }

  $('.ranges').find('li').on('click', function () {
    var label = $(this).text().toLowerCase();
    daterangeUpdateURL(label)
  })

  $('input[name=daterange]').on('click', function (e) {
    updateRangeButton();
  })

  $('body').on('click','a[data-original-title="Logout"]', function () {
    cookieBakery.eat('demo');
  })
  


  // Plugins
  // -------------------------

  // Popover
  $('[data-popup="popover"]').popover();


  // Tooltip
  $('[data-popup="tooltip"]').tooltip();

  // Styled checkboxes/radios
  $('.styled').uniform();

});

// Allow CSS transitions when page is loaded
window.addEventListener('load', function() {
  $('body').removeClass('no-transitions');
});
