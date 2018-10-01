document.addEventListener('DOMContentLoaded', function() {
  
  let tableSettings = {
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
    "dom": '<"btn-group pull-right fit-width table-top-right"<"search"f><"icons">>r<"table-wrap"t><"bottom"ilp><"clear">'
  };
  
  let verifi_columns = ['id', 'external_id', 'order_id', 'transaction_received', 'transaction_timestamp',
    'amount', 'currency', 'bin', 'last_four', 'first_name', 'last_name', 'arn', 'reason_code', 'mid', 'merchant_descriptor'];
  
  let ethoca_columns = ['id', 'external_id', 'order_id', 'transaction_received', 'transaction_timestamp',
    'amount', 'currency', 'bin', 'last_four', 'arn', 'reason_code', 'mid', 'merchant_descriptor'];

  pieChart("verifiEthoca", prevention_alert_count_json);
  barChart("preventionAnalytics", prevention_analytics_marketing_source_json);
  toggleOverlay("Marketing Source");


  let ethocaTable = $("#ethoca_table").DataTable(tableSettings);
  let verifiTable = $("#verifi_table").DataTable(tableSettings);


  insertTableRecords(prevention_verifi_json, verifi_columns, verifiTable);
  insertTableRecords(prevention_ethoca_json, ethoca_columns, ethocaTable);
  
  function insertTableRecords(records, fields, tableElm) {
    tableElm.clear();
    let replaceNullOrEmptyString = function(inputString) {
      let replacementString = '--';
      if (inputString === '' || inputString === null) {
        return replacementString;
      }
      return inputString;
    };
    for (let x = 0; x < records.length; x++) {
      let row = [];
      // add action column to row if needed
      // row = buildActionButtonAndAttachToRow(row, result[x], options.actionColumn);
      for (let y = 0; y < fields.length; y++) {
        records[x][fields[y]] = replaceNullOrEmptyString(records[x][fields[y]]);
        row.push(records[x][fields[y]]);
      }
      // add row to DataTable's rows
      tableElm.row.add(row);
    }
    // fire update of DataTable
    tableElm.draw(true);
  }
  
  
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

    $('#verifi_table_wrapper').find('.search').prepend(searchDrop($('#verifi_table')));
    $('#ethoca_table_wrapper').find('.search').prepend(searchDrop($('#ethoca_table')));


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

    // Styled checkboxes/radios
	  $('.styled').uniform();
  
  });
