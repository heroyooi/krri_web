var colors = ['#00bbfe', '#2f78ff', '#853cfc', '#00be9c', '#e3c208'];

var options = {
    pie: {
        color: colors,
        title: {
            text: '돌발상황 발생량 통계',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{b} {d}%'
        },
        legend: {
            orient: 'vertical', // 범례의 방향 설정 (수직)
            right: '0%', // 범례의 위치 설정
            align: 'left', // 범례 내용의 정렬 방향 (색상은 왼쪽, 텍스트는 오른쪽)
            top: 'middle', // 범례의 상단 위치 설정 (화면 상단 중앙)
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            
            itemGap: 0, // 항목 간 상하 간격 조정
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            formatter: function (name) {
                return name; // 색상과 텍스트를 포함한 포맷을 설정
            }
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                center: ['45%', '60%'],
                data: [
                    { value: 65, name: '차량고장' },
                    { value: 15, name: '교통사고' },
                    { value: 10, name: '낙하물' },
                    { value: 7, name: '과목' },
                    { value: 3, name: '난폭운전' }
                ],
                label: {
                    formatter: '{b} {d}%', // 라벨 포맷 설정
                    textStyle: {
                        fontSize: 12,
                        color: '#b2bbce',
                        fontFamily: 'Pretendard',
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
    },
    line: {
        color: colors,
        title: {
            text: '시간대별 사고 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{b} {c}건'
        },
        legend: {
            data: ['졸음운전', '과속', '빗길/눈길', '낙하물', '기타'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '10%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['0시', '1시', '2시', '3시', '4시', '5시', '6시', '7시', '8시', '9시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시', '21시', '22시', '23시'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
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
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                }
            },
            min: 0,
            max: 40,
            interval: 5,
        },
        series: [
            {
                name: "졸음운전",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [21, 27, 14, 15, 21, 11, 6, 20, 14, 10, 5, 11, 5, 10, 4, 6, 35, 10, 18, 16, 33, 23, 13, 22]
            },
            {
                name: "과속",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [19, 20, 17, 13, 25, 12, 9, 9, 10, 17, 7, 5, 8, 6, 4, 5, 20, 6, 16, 9, 18, 10, 12, 12]
            },
            {
                name: "빗길/눈길",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [12, 12, 6, 8, 0, 2, 20, 8, 6, 9, 4, 6, 10, 9, 2, 14, 14, 9, 11, 7, 14, 18, 9, 9]
            },
            {
                name: "낙하물",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [7, 13, 6, 6, 2, 25, 5, 4, 6, 7, 3, 4, 6, 5, 0, 27, 5, 2, 5, 14, 6, 2, 7, 6]
            },
            {
                name: "기타",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [1, 7, 14, 11, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]
            },
        ]
    },
    lineBar: {
        color: colors,
        title: {
            text: '돌발상황 발생량 통계',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '0%', // 제목을 위쪽으로
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            data: ['차량고장', '과속', '빗길/눈길', '낙하물', '기타'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '10%', // 범례를 제목 아래로
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        toolbox: {
            // feature: {
            //     saveAsImage: {}
            // }
            show: false
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['12364', '56768', '66666', '66123', '55555', '66666', '76666', '86666', '96666', '106666'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                rotate: 45, 
                interval: 0,
            },
        },
        yAxis: [
            {
                type: 'value',
                position: 'left',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e4157',
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e4157'
                    },
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: 'Pretendard',
                        color: '#b2bbce'
                    }
                },
                min: 0,
                max: 1.2,
                interval: 0.2,
            },
            {
                type: 'value',
                position: 'right',
                alignTicks: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e4157',
                    },
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 11,
                        fontWeight: 600,
                        fontFamily: 'Pretendard',
                        color: '#b2bbce'
                    }
                },
            }
        ],
        series: [
            {
                name: '차량고장',
                type: 'bar',
                yAxisIndex: 1, // 오른쪽 y축 사용
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [48000, 9000, 24000, 53000, 33000, 49000, 50000, 20500, 29000, 11000],
            },
            {
                name: '과속',
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                data: [0.95, 0.9, 0.8, 0.9, 0.82, 1.1, 0.9, 1.05, 0.95, 0.91]
            },
            {
                name: '빗길/눈길',
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                data: [0.72, 0.72, 0.73, 0.76, 0.76, 0.79, 0.8, 0.76, 0.85, 0.75]
            },
            {
                name: '낙하물',
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                data: [0.95, 1.05, 0.85, 1.1, 0.8, 1.15, 1, 0.8, 0.9, 1]
            },
            {
                name: '기타',
                type: 'line',
                symbol: 'circle',
                symbolSize: 7,
                data: [1.05, 0.85, 1.1, 1.05, 0.95, 1.05, 1.1, 1.05, 1.07, 1.01]
            },
            
        ]
    },
    lineUp: {
        color: ['#00bbfe', '#2f78ff', '#e3c208'],
        title: {
            text: '통행시간',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '0%', // 제목을 위쪽으로
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            data: ['소형', '중형', '대형'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '7%', // 범례를 제목 아래로
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            top: '55%', // 그래프 영역을 아래로 이동
        },
        toolbox: {
            // feature: {
            //     saveAsImage: {}
            // }
            show: false
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['2024.10.01', '2024.10.01', '2024.10.01', '2024.10.01', '2024.10.01', '2024.10.01'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                // rotate: 45, 
                interval: 0,
            },
        },
        yAxis: {
            type: 'value',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                }
            },
            min: 0,
            max: 100,
            interval: 20,
        },
        series: [
            {
                name: '소형',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                data: [50, 81, 77, 83, 99, 100]
            },
            {
                name: '중형',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                data: [15, 15, 15, 15, 15, 15]
            },
            {
                name: '대형',
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                data: [5, 5, 5, 5, 5, 5]
            },
        ]
    },
    pieDown: {
        color: ['#00bbfe', '#2f78ff', '#e3c208'],
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            show: false,
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 65, name: '소형' },
                    { value: 32, name: '중형' },
                    { value: 3, name: '대형' }
                ],
                label: {
                    formatter: '{b} {d}%',
                    textStyle: {
                        fontSize: 12,
                        color: '#b2bbce',
                        fontFamily: 'Pretendard',
                    }
                },
            }
        ]

    },
    barStack: {
        color: [...colors].reverse(),
        title: {
            text: '월별 교통사고 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{a} 사고 {b} {c}건'
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['1등급', '2등급', '3등급', '4등급', '5등급'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '10%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
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
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                }
            },
            min: 0,
            max: 50,
            interval: 5,
        },
        series: [
            {
                name: "5등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            },
            {
                name: "4등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
            },
            {
                name: "3등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 19]
            },
            {
                name: "2등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
            },
            {
                name: "1등급",
                type: "bar",
                barWidth: '40%',
                stack: "total",
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [22, 22, 22, 22, 22, 12, 22, 22, 22, 22, 22, 12]
            },
        ]
    },
    barMulti: {
        color: [...colors, '#ef4345'],
        title: {
            text: '월별 교통사고 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{b} {a} 사고 {c}건'
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['사망', '중상', '경상', '차량 완파', '차량 반파', '차량 파손 경비'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '5%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
            top: '12%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
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
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                }
            },
            min: 0,
            max: 35,
            interval: 5,
        },
        series: [
            {
                name: "사망",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [11, 17, 12, 17, 17, 17, 17, 17, 12, 12, 12, 12]
            },
            {
                name: "중상",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [1, 1, 1, 6, 6, 6, 6, 6, 1, 1, 1, 1]
            },
            {
                name: "경상",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [3, 3, 3, 20, 20, 20, 20, 20, 3, 3, 3, 3]
            },
            {
                name: "차량 완파",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [2, 2, 2, 12, 12, 12, 12, 12, 2, 2, 2, 2]
            },
            {
                name: "차량 반파",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [2, 16, 2, 26, 26, 26, 26, 26, 2, 2, 2, 2]
            },
            {
                name: "차량 파손 경비",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [21, 21, 21, 35, 35, 35, 35, 35, 21, 21, 21, 21]
            },
        ]
    },
    pieRight: {
        color: ['#00bbfe', '#2f78ff', '#00be9c', '#e3c208'],
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#ffffff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            show: false,
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 65, name: '차트A' },
                    { value: 21, name: '차트B' },
                    { value: 11, name: '차트C' },
                    { value: 3, name: '차트D' },
                ],
                label: {
                    formatter: '{b} {d}%',
                    textStyle: {
                        fontSize: 12,
                        color: '#b2bbce',
                        fontFamily: 'Pretendard',
                    }
                },
            }
        ]

    },
    doughnut: {
        color: [...colors, '#ef4345'],
        title: {
            text: '원인별 사고 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '[원인: {b}] 발생 사고 {c}건'
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['졸음운전', '과속', '빗길/눈길', '차량이상', '낙하물', '도로상태'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '15%', // 범례를 제목 아래로
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                center: ['50%', '60%'],
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 50, name: '졸음운전' },
                    { value: 15, name: '과속' },
                    { value: 15, name: '빗길/눈길' },
                    { value: 10, name: '차량이상' },
                    { value: 5, name: '낙하물' },
                    { value: 5, name: '도로상태' }
                ]
            }
        ]
    },
    barVertical: {
        color: colors[0],
        title: {
            text: '계절별 사고 발생 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '{b} 사고 발생 {c}건'
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['계절 별 사고 발생 사건'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '8%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '5%',
            top: '18%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            min: 0,
            max: 35,
            interval: 5,
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                interval: 0,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157' // x축의 큰 세로선 색상 설정
                }
            }
        },
        yAxis: {
            type: 'category',
            data: ['봄', '여름', '가을', '겨울'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                interval: 0,
            },
            axisTick: {
                show: false // x축의 작은 세로선 숨기기
            }
        },
        series: [
            {
                name: '계절 별 사고 발생 사건',
                type: 'bar',
                barWidth: '30%',
                itemStyle: {
                    borderRadius: [0, 4, 4, 0],
                },
                data: [13, 32, 26, 13]
            },
        ]
    },
    barLine: {
        color: ['#00bbfe', '#e3c208', '#853cfc', '#00be9c'],
        title: {
            text: '품목별 장비투입 현황',
            textStyle: {
                fontSize: 14,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['DCS-T980', 'DCS-T970', '재고현황', '적정제고'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '5%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '3%',
            containLabel: true,
            top: '12%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
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
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                }
            },
            min: 0,
            max: 14,
            interval: 2,
        },
        series: [
            {
                name: "DCS-T980",
                type: "bar",
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5]
            },
            {
                name: "DCS-T970",
                type: "bar",
                barWidth: 16,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4, 4.4]
            },
            {
                name: "재고현황",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [11, 10, 8, 10, 6, 4, 6, 4, 8, 7, 6, 10]
            },
            {
                name: "적정제고",
                type: "line",
                symbol: 'circle',
                symbolSize: 7,
                data: [10, 10, 8, 8, 7, 5, 5, 4, 8, 8, 7, 10]
            },
        ]
    },

    // https://echarts.apache.org/examples/en/editor.html?c=gauge-simple
    // https://echarts.apache.org/examples/en/editor.html?c=gauge-grade
    gauge: {
        series: [
            {
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                center: ['50%', '62%'],
                radius: '95%',
                min: 0,
                max: 1,
                splitNumber: 10,
                axisLine: {
                  lineStyle: {
                    width: 6,
                    color: [
                      [0.1, '#ad2ec6'],
                      [0.3, '#ef4345'],
                      [0.5, '#fcbb25'],
                      [0.7, '#0bbe35'],
                      [0.9, '#1ac2ff'],
                      [1, '#2f78ff'],
                    ]
                  }
                },
                pointer: {
                  icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                  length: '12%',
                  width: 10,
                  offsetCenter: [0, '-60%'],
                  itemStyle: {
                    color: 'auto'
                  }
                },
                axisTick: {
                  length: 12,
                  lineStyle: {
                    width: 1
                  }
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                  color: '#778298',
                  fontSize: 11,
                  distance: -38,
                  formatter: function (value) {
                    console.log('axisLabel : ', value)
                    // if (value === 1) {
                    //     return '100';
                    if (value === 0.9) {
                        return '90';
                    // } else if (value === 0.8) {
                    //     return '80';
                    } else if (value === 0.7) {
                        return '70';
                    // } else if (value === 0.6) {
                    //     return '60';
                    } else if (value === 0.5) {
                        return '50';
                    // } else if (value === 0.4) {
                    //     return '40';
                    } else if (value === 0.3) {
                        return '30';
                    // } else if (value === 0.2) {
                    //     return '20';
                    } else if (value === 0.1) {
                        return '10';
                    // } else if (value === 0) {
                    //     return '0';
                    }
                    return '';
                  },
                },
                title: {
                    offsetCenter: [0, '70%'],
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                    color: '#778298',
                },
                detail: {
                  fontSize: 26,
                  offsetCenter: [0, '0%'],
                  valueAnimation: true,
                  formatter: function (value) {
                    return Math.round(value * 100) + '';
                  },
                  color: '#ffffff'
                },
                data: [
                  {
                    value: 0.72,
                    name: '통행속도(km/h)'
                  }
                ]
              }
        ]
    },
    gauge2: {
        series: [
            {
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                center: ['50%', '60%'],
                radius: '105%',
                min: 0,
                max: 1,
                splitNumber: 10,
                axisLine: {
                  lineStyle: {
                    width: 6,
                    color: [
                      [0.1, '#ad2ec6'],
                      [0.3, '#ef4345'],
                      [0.5, '#fcbb25'],
                      [0.7, '#0bbe35'],
                      [0.9, '#1ac2ff'],
                      [1, '#2f78ff'],
                    ]
                  }
                },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 10,
                    offsetCenter: [0, '-60%'],
                    itemStyle: {
                      color: 'auto'
                    }
                },
                axisTick: {
                  length: 12,
                  lineStyle: {
                    width: 1
                  }
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                  color: '#778298',
                  fontSize: 11,
                  distance: -38,
                  formatter: function (value) {
                    console.log('axisLabel : ', value)
                    // if (value === 1) {
                    //     return '100';
                    if (value === 0.9) {
                        return '90';
                    // } else if (value === 0.8) {
                    //     return '80';
                    } else if (value === 0.7) {
                        return '70';
                    // } else if (value === 0.6) {
                    //     return '60';
                    } else if (value === 0.5) {
                        return '50';
                    // } else if (value === 0.4) {
                    //     return '40';
                    } else if (value === 0.3) {
                        return '30';
                    // } else if (value === 0.2) {
                    //     return '20';
                    } else if (value === 0.1) {
                        return '10';
                    // } else if (value === 0) {
                    //     return '0';
                    }
                    return '';
                  },
                },
                title: {
                    offsetCenter: [0, '70%'],
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                    color: '#778298',
                },
                detail: {
                  fontSize: 26,
                  offsetCenter: [0, '0%'],
                  valueAnimation: true,
                  formatter: function (value) {
                    return Math.round(value * 100) + '';
                  },
                  color: '#ffffff'
                },
                data: [
                  {
                    value: 0.72,
                  }
                ]
              }
        ]
    },
    
    bar: {
        color: ['#00bbfe', '#0bbe35'],
        title: {
            show: false
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['전일', '금일'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            top: '0%', // 범례를 제목 아래로
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            show: false,
            type: 'category',
            boundaryGap: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
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
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 11,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                formatter: function(value) {
                    switch (value) {
                        case 100: return '교통량';
                        case 50: return '';
                        case 0: return '시간대';
                        default: return value;
                    }
                }
            },
            min: 0,
            max: 100,
            interval: 50,
        },
        series: [
            {
                name: "전일",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [50, 50, 50, 100, 50, 50, 50, 100, 50]
            },
            {
                name: "금일",
                type: "bar",
                barWidth: 8,
                itemStyle: {
                    borderRadius: [2, 2, 0, 0],
                },
                data: [80, 50, 20, 60, 80, 50, 20, 60, 20]
            },
        ]
    },

    d_bar: {
        color: ['#1ac2ff', '#00be9c'],
        title: {
            text: '{highlight|인주JCT - 예산IC} 구간',
            textStyle: {
                fontSize: 19,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
                rich: {
                    highlight: {
                        fontSize: 19,
                        fontFamily: 'Pretendard',
                        color: '#ffffff', // 색상 변경
                        fontWeight: 'bold'
                    }
                }
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#fff',
                fontFamily: 'Pretendard',
                fontSize: 17,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            data: ['전일', '금일'],
            textStyle: {
                fontSize: 17,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            bottom: '0%',
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '8%',
            containLabel: true,
            top: '20%',
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['00', '04', '08', '12', '16', '20', '24'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                interval: 0,
            },
            axisTick: {
                show: false
            },
            // name: '시간',
            // nameLocation: 'end',
            // nameGap: 0,
            // nameTextStyle: {
            //     fontSize: 17,
            //     fontWeight: 600,
            //     fontFamily: 'Pretendard',
            //     color: '#b2bbce',
            //     padding: [0, 30, 0, 0]
            // }
        },
        yAxis: {
            type: 'value',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
                formatter: function () { return ''; }  // y축 단위 제거
            },
            min: 0,
            max: 14,
            interval: 2,
            // name: '교통량',
            // nameLocation: 'end',
            // nameTextStyle: {
            //     fontSize: 17,
            //     fontWeight: 600,
            //     fontFamily: 'Pretendard',
            //     color: '#b2bbce',
            //     padding: [0, 0, 0, 30]
            // },
        },
        series: [
            {
                name: "전일",
                type: "line",
                symbol: 'none',
                data: [0, 3, 6, 8, 10, 8, 11],
                smooth: true,
            },
            {
                name: "금일",
                type: "line",
                symbol: 'none',
                data: [4, 5, 6, 4, 5, 8, 10],
                smooth: true,
            },
        ]
    },
    d_doughnut: {
        color: [...colors, '#ef4345'],
        title: {
            text: '{highlight|인주JCT - 예산IC} 구간',
            textStyle: {
                fontSize: 19,
                color: '#b2bbce',
                fontFamily: 'Pretendard',
                rich: {
                    highlight: {
                        fontSize: 19,
                        fontFamily: 'Pretendard',
                        color: '#ffffff',
                        fontWeight: 'bold'
                    }
                }
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            textStyle: {
                color: '#fff',
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '[원인: {b}] 발생 사고 {c}건'
        },
        legend: {
            itemWidth: 16,
            itemHeight: 8,
            data: ['1종', '2종', '3종', '4종', '5종', '6종'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
            },
            right: '0', // 범례를 우측에 위치
            top: '30%', // 범례의 상단 위치 조정
            orient: 'vertical', // 범례를 수직으로 배치
        },
        series: [
            {
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                center: ['50%', '60%'],
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 50, name: '1종' },
                    { value: 16, name: '2종' },
                    { value: 16, name: '3종' },
                    { value: 11, name: '4종' },
                    { value: 5, name: '5종' },
                    { value: 2, name: '6종' }
                ]
            }
        ]
    },
    d_gauge: {
        series: [
            {
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                center: ['53%', '60%'],
                radius: '105%',
                min: 0,
                max: 1,
                splitNumber: 10,
                axisLine: {
                  lineStyle: {
                    width: 12,
                    color: [
                      [0.1, '#ad2ec6'],
                      [0.3, '#ef4345'],
                      [0.5, '#fcbb25'],
                      [0.7, '#0bbe35'],
                      [0.9, '#1ac2ff'],
                      [1, '#2f78ff'],
                    ]
                  }
                },
                pointer: {
                    icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    length: '12%',
                    width: 20,
                    offsetCenter: [0, '-60%'],
                    itemStyle: {
                      color: 'auto'
                    }
                },
                axisTick: {
                  length: 12,
                  lineStyle: {
                    width: 1
                  }
                },
                splitLine: {
                    show: false,
                },
                axisLabel: {
                  color: '#778298',
                  fontSize: 17,
                  fontWeight: 600,
                  distance: -50,
                  formatter: function (value) {
                    // if (value === 1) {
                    //     return '100';
                    if (value === 0.9) {
                        return '90';
                    // } else if (value === 0.8) {
                    //     return '80';
                    } else if (value === 0.7) {
                        return '70';
                    // } else if (value === 0.6) {
                    //     return '60';
                    } else if (value === 0.5) {
                        return '50';
                    // } else if (value === 0.4) {
                    //     return '40';
                    } else if (value === 0.3) {
                        return '30';
                    // } else if (value === 0.2) {
                    //     return '20';
                    } else if (value === 0.1) {
                        return '10';
                    // } else if (value === 0) {
                    //     return '0';
                    }
                    return '';
                  },
                },
                title: {
                    offsetCenter: [0, '70%'],
                    fontSize: 14,
                    fontFamily: 'Pretendard',
                    color: '#778298',
                },
                detail: {
                  fontSize: 51,
                  fontWeight: 700,
                  offsetCenter: [0, '0%'],
                  valueAnimation: true,
                  formatter: function (value) {
                    return Math.round(value * 100) + '';
                  },
                  color: '#ffffff'
                },
                data: [
                  {
                    value: 0.72,
                  }
                ]
              }
        ]
    },
    d_bar2: {
        color: ['#00bbfe', '#0bbe35'],
        title: {
            show: false,
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 12,
                fontWeight: '600'
            },
            borderWidth: 0,
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['익산', '평택'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
                fontSize: 19,
                fontWeight: 600
            },
            top: '0%', // 범례를 제목 아래로
            right: '5%',
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true,
            top: '20%', // 그래프 영역을 아래로 이동
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['익산', '평택', '익산', '평택', '익산', '평택', '익산', '평택'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                },
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
                    color: '#3e4157',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#3e4157'
                },
            },
            axisLabel: {
                textStyle: {
                    fontSize: 17,
                    fontWeight: 600,
                    fontFamily: 'Pretendard',
                    color: '#b2bbce'
                }
            },
            min: 0,
            max: 70000,
            interval: 10000,
        },
        series: [
            {
                name: "익산",
                type: "bar"
            },
            {
                name: "평택",
                type: "bar"
            },
            {
                name: "데이터",
                type: "bar",
                barWidth: 16,
                itemStyle: {
                    borderRadius: [4, 4, 0, 0],
                },
                data: [
                    {
                        "value": 25000,
                        "itemStyle": { "color": "#00bbfe" } // 익산
                    },
                    {
                        "value": 45000,
                        "itemStyle": { "color": "#0bbe35" } // 평택
                    },
                    {
                        "value": 65000,
                        "itemStyle": { "color": "#00bbfe" }
                    },
                    {
                        "value": 55000,
                        "itemStyle": { "color": "#0bbe35" }
                    },
                    {
                        "value": 60000,
                        "itemStyle": { "color": "#00bbfe" }
                    },
                    {
                        "value": 50000,
                        "itemStyle": { "color": "#0bbe35" }
                    },
                    {
                        "value": 20000,
                        "itemStyle": { "color": "#00bbfe" }
                    },
                    {
                        "value": 65000,
                        "itemStyle": { "color": "#0bbe35" }
                    },
                ]
            },
        ]
    },
    d_doughnut2: {
        color: [...colors, '#ef4345'],
        title: false,
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', // 툴팁 배경색상 설정
            textStyle: {
                color: '#fff', // 툴팁 글씨색상 설정
                fontFamily: 'Pretendard',
                fontSize: 18,
                fontWeight: '600'
            },
            borderWidth: 0,
            formatter: '[원인: {b}] 발생 사고 {c}건'
        },
        legend: {
            itemWidth: 16, // 아이템 너비
            itemHeight: 8, // 아이템 높이
            data: ['졸음운전', '과속', '빗길/눈길', '차량이상', '낙하물', '도로상태'],
            textStyle: {
                color: '#b2bbce',
                fontFamily: 'Pretendard',
                fontSize: 19,
                fontWeight: 600,
            },
            top: '0%', // 범례를 제목 아래로
        },
        series: [
            {
                type: 'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,
                center: ['50%', '53%'],
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: false,
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 50, name: '졸음운전' },
                    { value: 15, name: '과속' },
                    { value: 15, name: '빗길/눈길' },
                    { value: 10, name: '차량이상' },
                    { value: 5, name: '낙하물' },
                    { value: 5, name: '도로상태' }
                ]
            }
        ]
    },
}