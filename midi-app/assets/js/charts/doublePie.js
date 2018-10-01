function updatePreventionAnalyticsLegend(overlayId, params, populateHidden) {
  let overlayDiv = $('#' + overlayId);
  for (let i = 0; i < params.length; i++) {
    populatePreventionDataPoint(overlayDiv, '#param_' + (i + 1), params[i]);
    if (populateHidden) {
      populatePreventionDataPoint(overlayDiv, '#param_' + (i + 1) + '_hidden', params[i]);
    }
  }
}

function populatePreventionDataPoint(overlay, id, value) {
  if (value == null) {
    let originalValue = overlay.find(id + "_hidden").text();
    overlay.find(id).text(originalValue);
  } else {
    overlay.find(id).text(value);
  }
}

function doublePieChart(container, data, chartName) {
  let chartDefaultColors = [
    '#8dd3c7', '#ffffb3', '#bebada', '#fb8072',
    '#80b1d3', '#fdb462', '#b3de69', '#fccde5',
    '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'
  ];

  Highcharts.setOptions({
    lang: {
      thousandsSep: '',
      numericSymbols: [' k']
    },
    colors: chartDefaultColors
  });

  Highcharts.chart(container, {
    credits: {
      enabled: false
    },
    chart: {
      type: 'pie',
      zoomType: 'x',
      margin: [20, 20, 60, 60]
    },
    title: {
      text: ''
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      pie: {
        size: chartName === 'price-point' ? 130 : 120,
        allowPointSelect: true,
        cursor: 'pointer',
        borderWidth: 0,
        dataLabels: {
          align: 'center',
          y: -6,
          softConnector: false,
          borderRadius: 0,
          distance: 5,
          enabled: true,
          color: '#5A5A5C',
          format: '{point.name} | {point.percentage:.2f} %',
          style: {
            fontSize: '10px',
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 'normal'
          }
        }
      },
      series: {
        point: {
          events: {
            mouseOver: function() {
              let percentage = this.percentage ? this.percentage.toFixed(2) : null;
              let params = [];
              if (chartName == 'bin-number') {
                params = [this.legend, this.bank, this.count, percentage];
                updatePreventionAnalyticsLegend("bin_number_legends_overlay_preventionAnalytics", params);
              } else {
                params = [this.legend, this.count, percentage];
                updatePreventionAnalyticsLegend("price_point_legends_overlay_preventionAnalytics", params);
              }
            }
          }
        },
        events: {
          mouseOut: function() {
            let items = this.data || [];
            let selectedItems = [];
            let overlayData = {};
            let params = [];
            for (i = 0; i < items.length; i++) {
              if (items[i].selected) {
                selectedItems.push(items[i]);
              }
            }
            if (selectedItems.length === 1) {
              overlayData = selectedItems[0];
            }
            let percentage = overlayData.percentage ? overlayData.percentage.toFixed(2) : null;
            if (chartName == 'bin-number') {
              params = [overlayData.legend, overlayData.bank, overlayData.count, percentage];
              updatePreventionAnalyticsLegend("bin_number_legends_overlay_preventionAnalytics", params);
            } else {
              params = [overlayData.legend, overlayData.count, percentage];
              updatePreventionAnalyticsLegend("price_point_legends_overlay_preventionAnalytics", params);
            }
          }
        },
        states: {
          hover: {
            enabled: false
          }
        }
      }
    },
    series: data,
    responsive: {
      rules: [{
        condition: {
          maxWidth: 695
        },
        chartOptions: {
          plotOptions: {
            pie: {
              dataLabels: {
                padding: 0,
                format: '{point.name} <br> {point.percentage:.2f} %'
              }
            }
          }
        }
      }]
    }
  });
}
