var mid = [
    '028500249 | Vantiv F1 Price Media Eye-To-Face',
    '028500256 | Vantiv F1 Price Media Face Cream',
    '028500363 | Vantiv F1 Branded Jasmine Face Cream',
    '028500371 | Vantiv F1 Branded Jasmine Eye-To-Face',
    '028500389 | Vantiv F1 Cuff Advertising Face Cream',
    '028500397 | Vantiv F1 Cuff Advertising Face-To-Eye',
    '028500553 | Vantiv F1 SW Marketing Face Cream',
    '028500603 | Vantiv F1 SW Marketing Eye Serum',
    '028500942 | Vantiv F1 Miller Sales Ventures Face Cream',
    '028500959 | Vantiv F1 Miller Sales Ventures Eye Serum',
    '028500967 | Vantiv F1 Ryklan Marketing Eye Serum',
    '028500975 | Vantiv F1 Ryklan Marketing Face Cream',
    '028501072 | Vantiv F1 Dianite Business Sales Face Cream',
    '028501080 | Vantiv F1 Dianite Business Sales Eye Serum',
    '028501387 | Vantiv F1 Colbran Grinds Face Cream',
    '028501452 | Vantiv F1 Colbran Grinds Eye Serum',
    '028501809 | Vantiv F1 Aveleen Eye Serum',
    '028501817 | Vantiv F1 Aveleen Face Cream'
];

var processor = [
    'Vantiv F1',
    'Vantiv',
    'USMS',
    'Soft Connect',
    'Signature',
    'Signapay',
    'Select Bank Card',
    'securebancard',
    'Pivotal',
    'Paysafe',
    'Payment World',
    'No Processor',
    'NMA',
    'nationalmerchantcenter',
    'National Merchants',
    'Meritus',
    'Merchant Connect',
    'Humboldt',
    'HMS',
    'Group ISO',
    'GMA',
    'GlobalOnePay',
    'GET',
    'Frontline',
    'ePay Machine',
    'EMS Data',
    'Cynergy',
    'Concept Payments',
    'Chain Commerce',
    'BofA',
    'AVPS',
    'Argus Payments'
];

// drop down functions

var updatePlaceholder = function ($select, placeholder) {
    $select
        .siblings('.btn-group')
        .find('.multiselect-selected-text')
        .text(placeholder);
};

var setOptions = function ($select, optionArr, placeholder) {
    var i = 0;
    var data = [];
    for (i; i < optionArr.length; i++) {
        data.push({label: optionArr[i], value: optionArr[i]})
    }
    $select.multiselect('dataprovider', data);
    $select.multiselect('enable')
    updatePlaceholder($select, placeholder);
};

var assignOptions = function ($select, val) {
    switch(val) {
        case 'mid':
            return setOptions($select, mid, 'Select MID(s)');
        case 'processor':
            return setOptions($select, processor, 'Select Processor(s)');
        case 'all':
            $select.children().remove();
            $select.multiselect('disable');
            updatePlaceholder($select, '');
            break;
        default:
            $select.multiselect('disable');
            updatePlaceholder($select, 'Coming Soon');
            break;
    }
};


// Datatable

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    //
    // Datatable: Initialize
    //
    // ========================================

    var chargebacks = $('#source_table').DataTable({
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

        $dropUl.append(new Option('Search by', 'all'))
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

});


// Basic initialization
$('.multiselect').multiselect({
    buttonText: function () {
        return 'Options'
    }
});





// ======== DROP DOWN CLICK EVENTS ======= //

$('.reason-drop').on('change', function (e) {
    e.preventDefault();
    var val = $(this).val().toLowerCase();
    var $select = $('.reason-drop-sub');

    assignOptions($select, val);
})

$('.results-drop').on('change', function (e) {
    e.preventDefault();
    var val = $(this).val().toLowerCase();
    var $select = $('.results-drop-sub');

    assignOptions($select, val);
})

$('.alerts-drop').on('change', function (e) {
    e.preventDefault();
    var val = $(this).val().toLowerCase();
    var $select = $('.alerts-drop-sub');

    assignOptions($select, val);
})

$('.alerts-drop').on('change', function (e) {
    e.preventDefault();
    var val = $(this).val().toLowerCase();
    var $select = $('.alerts-drop-sub');

    assignOptions($select, val);
})

$('.performance-drop').on('change', function (e) {
    e.preventDefault();
    var val = $(this).val().toLowerCase();
    var $select = $('.performance-drop-sub');

    assignOptions($select, val);
})

$('.chargeback-drop').on('change', function (e) {
    e.preventDefault();
    var val = $(this).val().toLowerCase();
    var $select = $('.chargeback-drop-sub');

    assignOptions($select, val);
})

$('.ratio-drop').on('change', function (e) {
    e.preventDefault();
    var val = $(this).val().toLowerCase();
    var $select = $('.ratio-drop-sub');

    assignOptions($select, val);
})



// ======== BREAKDOWN SLIDE MODAL ======= //

// set modal position
var setBreakdownPosition = function () {
    var $modal = $('.breakdown-modal');
    var modalWidth = $modal.outerWidth();

    $modal.css('right', -(modalWidth + 100));
}

// initialize modal position
setBreakdownPosition();

// open modal
var openBreakdown = function () {
    var $modal = $('.breakdown-modal');

    $('body').addClass('breakdown-open');
    $('.breakdown-modal-bg').removeAttr('style').addClass('active');
    setTimeout(function () {
        $modal.css('right', 0);
    }, 300)
};


// close modal
var closeBreakdown = function () {
    var $modalBg = $('.breakdown-modal-bg');

    setBreakdownPosition();
    setTimeout(function () {
        $('body').removeClass('breakdown-open');
        $modalBg.removeClass('active')
    }, 300)

    setTimeout(function () {
        $modalBg.css('visibility', 'hidden');
    }, 600)
};

// --------- click events ----------- //

// open
$('.breakdown-button').on('click', function () {
    openBreakdown();
});

// close
$('.close-breakdown').on('click', function () {
    closeBreakdown();
});

// body click close
$('.breakdown-modal-bg').on('click', function (e) {
    if ($(e.target).hasClass('breakdown-modal-bg')) {
        closeBreakdown();
    }
});

// resize
$(window).on('resize', function () {
    setTimeout(function () {
        if (!$('body').hasClass('breakdown-open')) {
            setBreakdownPosition();
        }
    }, 100)
});
