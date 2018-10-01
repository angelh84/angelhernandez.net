function pieChart(container, data) {

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
    chart: {
      backgroundColor: "transparent",
      defaultSeriesType: "line",
      type: 'pie',
      zoomType: 'x',
      margin: [20, 20, 60, null],
      selectionMarkerFill: "rgba(192,192,192,0.25)",
      style: {
        fontFamily: "Open Sans"
      }
    },
    legend: {
      enabled: true,
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
    noData: "No data to display...",
    title: {
      align: "left",
      text: "",
      x: 50
    },
    tooltip: {
      enabled: false
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        borderWidth: 0,
        cursor: "pointer",
        dataLabels: {
          align: 'center',
          borderColor: "#AAA",
          borderWidth: 0,
          y: -6,
          softConnector: false,
          borderRadius: 0,
          distance: 30,
          enabled: true,
          color: '#5A5A5C',
          format: '{point.y} | {point.percentage:.2f} %',
          style: {
            fontSize: '10px',
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 'normal'
          }
        },
        marker: {
          enabled: true,
          radius: 2,
          symbol: "circle"
        },
        showInLegend: true,
        size: 140,
        states: {
          hover: {
            enabled: false,
            halo: {
              size: 0
            }
          }
        }
      }
    },
    xAxis: {
      labels: {
        align: "center",
        padding: 10,
        style: {},
        y: null
      },
      title: {
        text: ""
      }
    },
    series: data
  });
}
