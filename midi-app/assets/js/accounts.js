document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    //
    // Datatable: Initialize
    //
    // ========================================

    var chargebacks = $('#chargebacks_table').DataTable({
        colReorder: true,
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
        "dom": '<"btn-group pull-right fit-width table-top-right"<"search"f><"icons">>r<"table-wrap"t><"bottom"ilp><"clear">'
    });


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

        $dropUl.append(new Option('Search By', 'all'))
        for (i; i < tableHeaders.length; i++) {
            var $li = new Option(tableHeaders[i], tableHeaders[i]);
            $dropUl.append($li)
        }
        return $dropUl;
    }
    $('.search').prepend(searchDrop)



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


