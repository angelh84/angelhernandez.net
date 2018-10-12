document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    //
    // Datatable: Initialize
    //
    // ========================================

    var $matchTable = $('#match_order_table');
    var $processTable = $('#process_cb_table');
    var $pendingTable = $('#pending_cb_table');
    var $completedTable = $('#completed_cb_table');

    var tableInit = function ($table) {
        var table = $table.DataTable({
            colReorder: true,
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
    tableInit($matchTable);
    tableInit($processTable);
    tableInit($pendingTable);
    tableInit($completedTable);
    

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
  
    $matchTable
        .parents('.dataTables_wrapper')
        .find('.search')
        .prepend(searchDrop($matchTable));

    $processTable
        .parents('.dataTables_wrapper')
        .find('.search')
        .prepend(searchDrop($processTable));

    $pendingTable
        .parents('.dataTables_wrapper')
        .find('.search')
        .prepend(searchDrop($pendingTable));

    $completedTable
        .parents('.dataTables_wrapper')
        .find('.search')
        .prepend(searchDrop($completedTable));
    
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

    // Styled checkboxes/radios
    $('.styled').uniform();


    
});
