// customize css
var cssTitle = {
  textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#111',
      fontFamily: 'Noto Sans KR',
  },
  left: 'center',
  bottom: '0%',
}
var cssTooltip = {
  trigger: 'item',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  textStyle: {
      color: '#fff',
      fontFamily: 'Noto Sans KR',
      fontSize: 12,
      fontWeight: '600'
  },
  borderWidth: 0,
};
var cssLabel = {
  fontSize: 12,
  fontWeight: 400,
  fontFamily: 'Noto Sans KR',
  color: '#111'
}

// customize options
var pieOptions = (_data, titleText) => ({
  color: ['#0082ff', '#339bff', '#66b4ff', '#99cdff', '#cce6ff'],
  title: {
      ...cssTitle,
      text: titleText,
  },
  tooltip: {
      ...cssTooltip,
      formatter: '{b} - {d}%',
  },
  legend: false,
  series: [
      {
          type: 'pie',
          radius: '80%',
          center: ['50%', '45%'],
          data: _data.map((item, index) => ({
              ...item,
              ...(index === 4 && { label: { textStyle: { ...cssLabel, color: '#0082ff' } } })
          })),
          label: {
              formatter: '{b} \n{d}%',
              position: 'inner',
              textStyle: {
                  ...cssLabel,
                  color: '#fff',
                  lineHeight: 15
              }
          },
          emphasis: {
              itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              
          }
      }
  ]
});

var radarOptions = (_data, titleText) => ({
  color: ['#0082ff'],
  title: {
      ...cssTitle,
      text: titleText
  },
  tooltip: {
      ...cssTooltip,
      formatter: function(params) {
          let indicators = _data.map(item => item.name);
          let tooltipText = '';
          indicators.forEach((indicator, index) => {
              tooltipText += `${indicator}: ${params.value[index]}%<br/>`;
          });
          return tooltipText;
      }
  },
  radar: {
      startAngle: _data.length == 4 ? 45 : 90,
      
      indicator: _data.map(item => ({
          name: item.name,
          max: 100,
      })),
      name: {
          textStyle: cssLabel,
      }
  },
  series: [
      {
          name: '정답률',
          type: 'radar',
          data: [
              {
                  value: _data.map(item => item.value), // 각 과목의 값
                  name: '정답률1',
                  areaStyle: {
                      color: 'rgba(0, 130, 255, 0.5)' // 레이더의 채워질 색상
                  }
              }
          ]
      }
  ]
});

var lineOptions = (_data, titleText) => ({
  color: ['#0082ff', '#e45c6c'],
  title: {
      ...cssTitle,
      text: titleText
  },
  tooltip: {
      ...cssTooltip,
      formatter: '{a} {b} - {c}점',
  },
  legend: {
      data: _data.map(item => item.name),
      textStyle: cssLabel,
      top: '0%',
      right: '0%',
      show: true,
  },
  grid: {
      left: '0%',
      right: '0%',
      bottom: '15%',
      containLabel: true,
      top: '10%',
  },
  xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['1회', '2회', '3회', '4회', '5회', '6회', '7회', '8회', '9회', '10회'],
      axisLine: {
          show: true,
          lineStyle: {
              color: '#111111'
          }
      },
      axisLabel: {
          textStyle: cssLabel,
          interval: 0,
      },
      axisTick: {
          show: false // x축의 작은 세로선 숨기기
      }
  },
  yAxis: {
      type: 'value',
      position: 'left',
      alignTicks: true,
      axisLine: {
          show: true,
          lineStyle: {
              color: '#d1d1d1',
          },
      },
      splitLine: {
          show: true,
          lineStyle: {
              color: '#d1d1d1'
          },
      },
      axisLabel: {
          textStyle: cssLabel,
      },
      min: 0,
      max: 100,
      interval: 20,
  },
  series: _data.map((item) => ({
      type: "line",
      symbol: 'circle',
      symbolSize: 7,
      name: item.name,
      data: item.value
  })),
});

// bar 차트 (PC)
var barResponseOptions_pc = (_data, titleText) => ({
  color: ['#0082ff'],
  title: {
      ...cssTitle,
      text: titleText,
  },
  tooltip: {
      ...cssTooltip,
      formatter: '{a} {b} - {c}점',
  },
  legend: {
      data: _data.map(item => item.name),
      textStyle: cssLabel,
      top: '0%',
      right: '0%',
      show: true,
  },
  grid: {
      left: '0%',
      right: '0%',
      bottom: '15%',
      containLabel: true,
      top: '10%',
  },
  xAxis: {
      type: 'category',
      data: ['1회', '2회', '3회', '4회', '5회', '6회', '7회', '8회', '9회', '10회'],
      axisLine: {
          show: true,
          lineStyle: {
              color: '#111111'
          }
      },
      axisLabel: {
          textStyle: cssLabel,
      },
      axisTick: {
          show: false // x축의 작은 세로선 숨기기
      }
  },
  yAxis: {
      type: 'value',
      position: 'left',
      axisLine: {
          show: true,
          lineStyle: {
              color: '#d1d1d1',
          },
      },
      axisLabel: {
          textStyle: cssLabel,
      },
      min: 0,
      max: 100,
  },
  series: _data.map((item) => ({
      type: "bar",
      name: item.name,
      data: item.value,
      barWidth: '50%',
  })),
});

// bar 차트 (MO)
var barResponseOptions_mo = (_data, titleText) => ({
  color: ['#0082ff'],
  title: {
      ...cssTitle,
      text: titleText,
  },
  tooltip: {
      ...cssTooltip,
      formatter: '{a} {b} - {c}점',
  },
  legend: {
      data: _data.map(item => item.name),
      textStyle: cssLabel,
      top: '0%',
      right: '0%',
      show: true,
  },
  grid: {
      left: '0%',
      right: '0%',
      bottom: '15%',
      containLabel: true,
      top: '10%',
  },
  xAxis: {
      type: 'value',
      position: 'left',
      alignTicks: true,
      axisLabel: {
          textStyle: cssLabel,
      },
      min: 0,
      max: 100,
  },
  yAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['1회', '2회', '3회', '4회', '5회', '6회', '7회', '8회', '9회', '10회'],
      axisLabel: {
          textStyle: cssLabel,
      },
      axisTick: {
          show: false // x축의 작은 세로선 숨기기
      }
  },
  series: _data.map((item) => ({
      type: "bar",
      name: item.name,
      data: item.value,
  })),
});