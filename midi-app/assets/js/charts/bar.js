function barChart(container, data) {

  Highcharts.setOptions({
    lang: {
      thousandsSep: '',
      numericSymbols: [' k']
    }
  });

  Highcharts.chart(container, {
    credits: {
      enabled: false
    },
    title: '',
    noData: 'No data to display...',
    chart: {
      backgroundColor: "transparent",
      defaultSeriesType: "line",
      type: 'column',
      zoomType: 'x',
      ignoreHiddenSeries: false,
      margin: ["20", "20", "60", "60"],
      showAxes: true,
      style: {
        fontFamily: 'Open Sans'
      }
    },
    legend: {
      float: true,
      itemDistance: 10,
      itemStyle: {
        fontSize: "12px",
        fontWeight: "normal"
      },
      layout: "horizontal",
      symbolRadius: 0,
      verticalAlign: "bottom"
    },
    xAxis: {
      type: "category",
      categories: data[0].categories,
      title: {
        text: ''
      },
      labels: {
        align: "center",
        padding: 10,
        overflow: false,
        style: {
          fontFamily: 'Open Sans',
          fontSize: "10px"
        },
        y: 30,
        formatter: function() {
          var axisLabel = this.value && this.value[0];
          if (axisLabel) {
            var charLimit = 8;
            if (axisLabel.length > charLimit) {
              axisLabel = axisLabel.substr(0, charLimit);
            }
            return axisLabel;
          }
        }
      },
      minRange: 1
    },
    yAxis: {
      type: 'logarithmic',
      min: 0.1,
      tickInterval: 1,
      minorTickInterval: 0.3,
      minRange: 1,
      allowDecimals: false,
      minTickInterval: 1,
      title: {
        text: ''
      },
      labels: {
        style: {
          fontSize: '11px',
          align: 'center'
        }
      },
      lineWidth: 1,
      minorGridLineWidth: 0,
      gridLineColor: '#CCCCCC',
      visible: true
    },
    tooltip: {
      valueDecimals: 2,
      shared: false,
      crosshairs: false,
      overflow: 'hidden',
      wordWrap: 'break-word',
      useHTML: true,
      backgroundColor: 'rgba(255, 255, 255, .95)',
      borderColor: '#5a5a5c',
      borderWidth: 0,
      borderRadius: 0,
      shadow: true,
      shape: 'callout',
      style: {
        color: '#5a5a5c',
        fontSize: '11px',
        padding: '15px',
        width: '250px',
        maxWidth: '250px',
        wordWrap: 'break-word'
      }
    },
    plotOptions: {
      series: {
        pointPadding: 0.01,
        borderWidth: 1
      },
      column: {
        dataLabels: {
          enabled: false,
          useHTML: false,
          crop: false,
          overflow: "none",
          align: "center",
          y: -5,
          x: 0,
          color: "#5A5A5C",
          backgroundColor: "rgba(255, 255, 255, .5)",
          style: {
            zIndex: 1,
            fontSize: "11px",
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold"
          }
        },
        minPointLength: 4
      }
    },
    legend: {
      enabled: false
    },
    series: data
  });
}
