function lineChart(name, data) {

  Highcharts.setOptions({
    lang: {
      thousandsSep: '',
      numericSymbols: [' k']
    }
  });

  Highcharts.chart(name, {
    credits: {
      enabled: false
    },
    title: '',
    noData: 'No data to display...',
    style: {
      fontFamily: 'Open Sans'
    },
    chart: {
      type: 'areaspline',
      height: 300,
      zoomType: 'x'
    },
    xAxis: {
      type: 'datetime',
      //tickInterval: 1,
      dateTimeLabelFormats: {
        hour: '%b %d',
        day: '%b %d',
        week: '%b %d',
        month: '%b %Y'
      },
      title: {
        text: ''
      },
      labels: {
        rotation: -45,
        style: {
          fontSize: '10px'
        }
      }
    },
    yAxis: {
      min: 0,
      minRange: 1,
      allowDecimals: false,
      minTickInterval: 1,
      gridLineColor: '#CCCCCC',
      gridLineWidth: 1,
      lineWidth: 1,
      title: {
        text: ''
      },
      labels: {
        style: {
          fontSize: '10px'
        }
      }
    },
    tooltip: {
      valueDecimals: 6,
      shared: true,
      crosshairs: true,
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
        fontSize: '10px',
        padding: '15px',
        width: '250px',
        maxWidth: '250px',
        wordWrap: 'break-word'
      }
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.05,
        marker: {
          enabled: true,
          symbol: 'circle',
          radius: 2
        }
      }
    },
    legend: {
      itemStyle: {
        fontFamily: 'Open Sans',
        fontWeight: 'normal'
      }
    },
    series: data
  });

}
