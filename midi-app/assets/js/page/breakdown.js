document.addEventListener('DOMContentLoaded', function() {

  barChart("preventionAnalytics", prevention_analytics_marketing_source_json);
  toggleOverlay("Marketing Source");
  
  $("#prevention_analytics_select").on("change", function(elm) {
    switch ($(this).val()) {
      case "Marketing Source":
        barChart("preventionAnalytics", prevention_analytics_marketing_source_json);
        break;
      case "Rebill Cycle":
        barChart("preventionAnalytics", prevention_analytics_rebill_cycle_json);
        break;
      case "Product":
        barChart("preventionAnalytics", prevention_analytics_product_json);
        break;
      case "Country":
        barChart("preventionAnalytics", prevention_analytics_country_json);
        break;
      case "Price Point":
        doublePieChart("preventionAnalytics", prevention_analytics_price_point_json, 'price-point');
        setHiddenDefaultLegend("price_point_legends_overlay_preventionAnalytics", prevention_analytics_price_point_json);
        break;
      case "BIN Number":
        doublePieChart("preventionAnalytics", prevention_analytics_bin_number_json, "bin-number");
        setHiddenDefaultLegend("bin_number_legends_overlay_preventionAnalytics", prevention_analytics_bin_number_json);
        break;
    }
    updatePreventionAnalyticsTitle($(this).val());
    toggleOverlay($(this).val());
  });
  
  function updatePreventionAnalyticsTitle(name) {
    $("#prevention_analytics_title").html("PREVENTION ANALYTICS - " + name.toUpperCase());
  }
  
  function toggleOverlay(series) {
    $(".graph-overlay").each(function(key, elm) {
      $(elm).hide();
      if ($(elm).data('series').includes(series.toLowerCase().replace(" ", "-"))) {
        $(elm).show();
      }
    });
  }
  
  function setHiddenDefaultLegend(elm, data) {
    let overlayData = {};
    let params = [];
    for (let i = 0; i < data.length; i++) {
      if (!overlayData.percentage || Number(data[i].overlay.percentage) > Number(overlayData.percentage)) {
        overlayData = data[i].overlay;
      }
    }
    if (elm == "bin_number_legends_overlay_preventionAnalytics") {
      params = [overlayData.legend, overlayData.bank, overlayData.count, overlayData.percentage];
    } else {
      params = [overlayData.legend, overlayData.count, overlayData.percentage];
    }
    updatePreventionAnalyticsLegend(elm, params, true);
  }


        // ========================================
    //
    // Datatable: Initialize
    //
    // ========================================

    var $totalsTable = $('#totals_table');
    var $breakdownTable = $('#breakdown_table');

    var tableInit = function ($table) {
        var table = $table.DataTable({
            "language": {
                "lengthMenu":     "Display _MENU_ records",
                "search":         "",
                "paginate": {
                    "first":      "First",
                    "last":       "Last",
                    "next":       "First",
                    "previous":   "Last"
                }
            },
            "dom": '<"btn-group pull-right fit-width table-top-right"<"search"f><"show-hide"><"icons">>r<"table-wrap"t><"bottom"ilp><"clear">'
        });


        // ========================================
        //
        // Datatable: Show/Hide Drop
        //
        // ========================================

    
        // Handle show-hide drop
        var $parent = $table.parents('.dataTables_wrapper');

        $parent
            .find('.show-hide')
            .html('<button type="button" class="show-hide-button">Show / Hide Columns <i class="icon-arrow-down22"></i></button>')
            .append(createShowHideDrop($parent));

        $parent.find('.show-hide-button').on('click', function () {
            $parent.find('.show-hide-drop').toggleClass('showing');
        });

        // Toggle column visibility
        $parent.find('.show-hide-check').on('input', function () {
            var column = table.column($(this).attr('data-index'));
            column.visible(!column.visible());
        })

        // Close drop on body click
        $('body').on('click', function (e) {
            if(!$(e.target).parents('.show-hide').length){
                $parent.find('.show-hide-drop').removeClass('showing');
            }
        });
    };

    // INIT ALL TABLES
    tableInit($totalsTable);
    tableInit($breakdownTable);
    

    // Build Show / Hide dropdown
    function createShowHideDrop ($target) {
        var i = 0;
        var $dropUl = $('<ul/>').addClass('dropdown-menu show-hide-drop');
        var tableHeaders = getTableHeaders($target);

        for (i; i < tableHeaders.length; i++) {
            var $dropLi = $('<li/>').addClass('checkbox');
            var $dropLabel = $('<label/>');
            $('<input>', {
                'class': 'styled show-hide-check',
                'type': 'checkbox',
                'data-index': i,
                'checked': 'checked'
            }).appendTo($dropLabel);

            $dropLabel.append(tableHeaders[i])
            $dropLi.html($dropLabel);
            $dropUl.append($dropLi);
        }
        return $dropUl;
    }


    // ========================================
    //
    // Datatable: Search Drop
    //
    // ========================================

    var searchDrop = function ($target) {
        return '<div class="table-search-drop">' +
          '<select class="select table-search-select">' +
              searchDropOptions($target).html() +
          '</select>' +
        '</div>';
      } 
  
    function searchDropOptions ($target) {
        var i = 0;
        var $dropUl = $('<ul/>');
        var tableHeaders = getTableHeaders($target);

        $dropUl.append(new Option('Search by', 'all'))
        for (i; i < tableHeaders.length; i++) {
            var $li = new Option(tableHeaders[i], tableHeaders[i]);
            $dropUl.append($li)
        }
        return $dropUl;
    }


    $breakdownTable
        .parents('.dataTables_wrapper')
        .find('.search')
        .prepend(searchDrop($breakdownTable));

    
    // ========================================
    //
    // Daterange drop
    //
    // ========================================

    $('.tab').on('click', function () {
        var $daterangeDrop = $('.daterange-drop').siblings('.select2-container');
        if ($(this).hasClass('showDateDrop')) {
            $daterangeDrop.addClass('showDateDrop');
        } else {
            $daterangeDrop.removeClass('showDateDrop');
        }
    })
  
    // ========================================
    //
    // Misc.
    //
    // ========================================

    // Get TH text in arr
    function getTableHeaders ($target) {
        var tableHeaders = [];

        $target.find('th').each(function (index, item) {
            tableHeaders.push($(item).text());
        });
        return tableHeaders;
    }
    
    $('.multiselect').multiselect({
      buttonText: function () {
          return 'Options'
      }
    });

    // Styled checkboxes/radios
    $('.styled').uniform();
  
  });
