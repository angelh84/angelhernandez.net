document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    //
    // Datatable: Initialize
    //
    // ========================================

    var chargebacks = $('#chargebacks_table').DataTable({
        "columnDefs": [
            { 
                "orderable": false, 
                "targets": 0,
                "className": "text-center actions"
            }
        ],
        "order": [[ 2, 'asc' ]],
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
        "dom": '<"btn-group pull-right fit-width table-top-right"<"mids"><"search"f><"show-hide"><"icons">>r<"table-wrap"t><"bottom"ilp><"clear">'
    });


    // ========================================
    //
    // Datatable: Show/Hide Drop
    //
    // ========================================

    // Handle show-hide drop
    $('.show-hide').html('<button type="button" class="show-hide-button">Show / Hide Columns <i class="icon-arrow-down22"></i></button>');
    $('.show-hide').append(createShowHideDrop());
    $('.show-hide-button').on('click', function () {
        $('.show-hide-drop').toggleClass('showing')
    });

    // Toggle column visibility
    $('.show-hide-check').on('input', function () {
        var column = chargebacks.column($(this).attr('data-index'));
        column.visible(!column.visible());
    })

    // Close drop on body click
    $('body').on('click', function (e) {
        if(!$(e.target).parents('.show-hide').length){
            $('.show-hide-drop').removeClass('showing')
        }
    });

    // Build Show / Hide dropdown
    function createShowHideDrop () {
        var i = 0;
        var $dropUl = $('<ul/>').addClass('dropdown-menu show-hide-drop');
        var tableHeaders = getTableHeaders();

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

    var searchDrop = '<div class="table-search-drop">' +
        '<select class="select table-search-select">' +
            searchDropOptions().html() +
        '</select>' +
    '</div>';

    function searchDropOptions () {
        var i = 0;
        var $dropUl = $('<ul/>');
        var tableHeaders = getTableHeaders();

        $dropUl.append(new Option('All', 'all'))
        for (i; i < tableHeaders.length; i++) {
            var $li = new Option(tableHeaders[i], tableHeaders[i]);
            $dropUl.append($li)
        }
        return $dropUl;
    }
    $('.search').prepend(searchDrop)


    // ========================================
    //
    // Datatable: Mid's Drop
    //
    // ========================================

    var midsDrop = '<select class="select">' +
        '<option value="all-mids">All MIDs (12)</option>' +
        '<option value="visible-mids">Visible MIDs (10)</option>' +
        '<option value="hidden-mids">Hidden MIDs (1)</option>' +
        '<option value="hidden-mids-cbs">Hidden MIDs with CBs (0)</option>' +
    '</select>';

    $('.mids').append(midsDrop)


    // ========================================
    //
    // Misc.
    //
    // ========================================

    // Get TH text in arr
    function getTableHeaders () {
        var tableHeaders = [];

        $('.table-wrap').find('th').each(function (index, item) {
            tableHeaders.push($(item).text());
        });
        return tableHeaders;
    }

    // Styled checkboxes/radios
	$('.styled').uniform();

	// Switchery toggles
	var toggle = Array.prototype.slice.call(document.querySelectorAll('.switchery'));
	
	toggle.forEach(function(html) {
		var switchery = new Switchery(html);
    });
});


