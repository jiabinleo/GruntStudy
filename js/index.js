var index = {
    today: new Date().getTime(), //当前时间戳
    menuData: null,
    echarData: null,
    init() {
        this.listen()
    },
    listen() {
        var _this = this
        var bannerHTML = [{
            imgUrl: 'images/banner.png'
        }, {
            imgUrl: 'images/banner.png'
        }, {
            imgUrl: 'images/banner.png'
        }, {
            imgUrl: 'images/banner.png'
        }, {
            imgUrl: 'images/banner.png'
        }]
        this.bannerHTML(bannerHTML)
        this.farm()
        var weather = {
            text: '深圳今天有大雨，有大雨，有大雨，有大雨，有大雨',
            weather: 'CLO'
        }
        this.weatherHTML(weather)
        var allData = [
            {
                name: '环境监测',
                id: 0,
                code: 'hjjc',
                new: [{
                    img: 'images/weather/kqwd.png',
                    name: '空气温度',
                    val: '25℃'
                }, {
                    img: 'images/weather/kqsd.png',
                    name: '空气湿度',
                    val: '25℃'
                }, {
                    img: 'images/weather/co2.png',
                    name: 'CO2',
                    val: '25℃'
                }, {
                    img: 'images/weather/gzqd.png',
                    name: '光照强度',
                    val: '25℃'
                }, {
                    img: 'images/weather/trsd.png',
                    name: '土壤湿度',
                    val: '25℃'
                }, {
                    img: 'images/weather/trwd.png',
                    name: '土壤温度',
                    val: '25℃'
                }, {
                    img: 'images/weather/ph.png',
                    name: '土壤PH值',
                    val: '25℃'
                }, {
                    img: 'images/weather/trddl.png',
                    name: '土壤电导率',
                    val: '25℃'
                }],
                old: [{
                    name: '空气温度',
                    code: 'kqwd',
                    old: ['0', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '空气湿度',
                    code: 'kqsd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '二氧化碳',
                    code: 'co2',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '光照强度',
                    code: 'gzqd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '土壤温度',
                    code: 'trwd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '土壤湿度',
                    code: 'trsd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '土壤PH值',
                    code: 'ph',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '土壤电导率',
                    code: 'trddl',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }]
            },
            {
                name: '气象监测',
                id: 1,
                code: 'qxjc',
                new: [{
                    img: 'images/weather/kqwd.png',
                    name: '空气温度',
                    val: '24℃'
                }, {
                    img: 'images/weather/kqsd.png',
                    name: '空气湿度',
                    val: '25℃'
                }, {
                    img: 'images/weather/dqyl.png',
                    name: '气压',
                    val: '25℃'
                }, {
                    img: 'images/weather/gzqd.png',
                    name: '光照强度',
                    val: '25℃'
                }, {
                    img: 'images/weather/fs.png',
                    name: '风速',
                    val: '25℃'
                }, {
                    img: 'images/weather/fx.png',
                    name: '风向',
                    val: '25℃'
                }, {
                    img: 'images/weather/jyl.png',
                    name: '降雨量',
                    val: '25℃'
                }],
                old: [{
                    name: '空气温度',
                    code: 'kqwd',
                    old: ['0', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '空气湿度',
                    code: 'kqsd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '气压',
                    code: 'co2',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '光照强度',
                    code: 'gzqd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '风速',
                    code: 'trwd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '风向',
                    code: 'trsd',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }, {
                    name: '降雨量',
                    code: 'ph',
                    old: ['10', '1.0', '0.6', '1.2', '1.0', '0.4', '0.2'],
                    date: ['12日', '13日', '14日', '15日', '16日', '17日', '18日'],
                    new: ['1.0', '1.1', '0.2', '1.4', '1.6', '0.2', '0.4']
                }]
            }, {
                name: '远程控制',
                id: 2,
                code: 'yckz'
            }, {
                name: '视频监控',
                id: 3,
                code: 'spjk'
            }
        ]
        var yckcData = [{
            imgUrl: '',
            name: '天窗',
            status: 1,
            time: '1000'
        }, {
            imgUrl: '',
            name: '雷达',
            status: 0,
            time: null
        }]
        var videoData = [
            {
                videoUrl: ''
            },
            {
                videoUrl: ''
            },
            {
                videoUrl: ''
            },
            {
                videoUrl: ''
            },
            {
                videoUrl: ''
            }
        ]
        this.menuHTML(allData)
        this.menuData = allData[0]
        _this.listHTML(_this.menuData['new'])
        $(document).on('click', '#swiper_menu .swiper-slide', function () {
            $(this).addClass('active').siblings().removeClass('active')
            $("#content").hide()
            $("#table").hide()
            $("#yckz").hide()
            $("#spjk").hide()
            if ($(this).attr('data-id') == 'hjjc' || $(this).attr('data-id') == 'qxjc') {
                _this.menuData = allData[$(this).index()]
                _this.listHTML(_this.menuData['new'])
                $('.menu2 > div').eq(0).addClass('active').siblings().removeClass('active')
                $("#content").show()
            } else if ($(this).attr('data-id') == 'yckz') {
                $("#yckz").show()
                _this.rckzHTML(yckcData)
            } else if ($(this).attr('data-id') == 'spjk') {
                $("#spjk").show()
                _this.videoHTML(videoData)
            }
            if (myScroll) {
                myScroll.refresh();
            }
        })

        $(document).on('click', '.menu2 > div', function () {
            $(this).addClass('active').siblings().removeClass('active')
            var ids = $(this).attr('data-id')
            console.log(_this.menuData)
            if (ids == 'new') {
                _this.listHTML(_this.menuData['new'])
            } else if (ids == 'old') {
                _this.oldMenu(_this.menuData['old'])
            }
            if (myScroll) {
                myScroll.refresh();
            }
        })
        $(document).on('click', '#historyUl>li', function () {
            $(this).addClass('active').siblings().removeClass('active');
        })
        console.log()
        $(document).on('click', '#historyUl > li', function () {
            _this.echartsHTML(_this.echarData[$(this).index()])
        })
    },
    bannerHTML(data) {
        data.forEach(ele => {
            $("#banner").append(
                `<div class="swiper-slide">
                <img src="${ele.imgUrl}" alt="banner01">
            </div>`
            )
        });
        this.swiperInit()
    },
    swiperInit() {
        var mySwiper = new Swiper(".swiper-container", {
            autoplay: 3000,
            loop: true,
            speed: 1000,
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false,
            centeredSlides: true,
            observerParent: true
        });
    },
    weatherHTML(data) {
        $('#description').html(data.text)
        $('#icon').attr('src', `images/${data.weather}.svg`)
    },
    farm() {
        var myFarm = ['百草园', '凯撒叽歪的卡号是', '哦', '欧维欧维欧维欧维欧维欧维欧维欧维'];
        $('#myFarm').html(myFarm[0])
        new MobileSelect({
            trigger: '#myFarm',
            title: '我的农场',
            wheels: [{
                data: myFarm
            }],
            position: [0] //初始化定位 打开时默认选中的哪个  如果不填默认为0
        });
    },
    menuHTML(data) {
        console.log(data)
        $("#swiper_menu").empty()
        data.forEach((ele, index) => {
            if (index) {
                $("#swiper_menu").append(
                    `<div class="swiper-slide" data-id="${ele.code}">
                        <span>${ele.name}</span>
                    </div>`
                )
            } else {
                $("#swiper_menu").append(
                    `<div class="active swiper-slide" data-id="${ele.code}">
                        <span>${ele.name}</span>
                    </div>`
                )
            }
        });
        var mySwiper1 = new Swiper(".swiper-menu", {
            slidesPerView: 4
        });
    },
    listHTML(data) {
        $("#historyWrap").hide()
        $("#realTimeWrap").show()
        $("#table").hide()
        $("#listHTML").empty()
        data.forEach((ele, index) => {
            $('#listHTML').append(
                `<li>
                    <img src="${ele.img}" alt="" />
                    <p>${ele.name}</p>
                    <p>${ele.val}</p>
                </li>`
            )
        })
    },
    oldMenu(data) {
        console.log(data)
        this.echarData = data
        this.echartsHTML(this.echarData[0])
        $("#realTimeWrap").hide()
        $("#historyWrap").show()
        $("#historyUl").empty()
        data.forEach((ele, index) => {
            if (index) {
                $("#historyUl").append(
                    `<li>${ele.name}</li>`
                )
            } else {
                $("#historyUl").append(
                    `<li class="active">${ele.name}</li>`
                )
            }

        })
    },
    echartsHTML(data) {
        var before7 = this.today - 7 * 24 * 60 * 60 * 1000
        $("#canvas").html(
            `<div class="time">
            <div class="left">
              开始结束时间
            </div>
            <div class="right">
              <p><span>${this.timestampToTime(before7)}</span>至<span>${this.timestampToTime(this.today)}</span></p>
            </div>
          </div>
          <canvas id="ec"></canvas>`
        )
        console.log(data)
        var myChart = echarts.init(document.getElementById("ec"));
        var menu = data.date
        var ghzs = data.old;
        var tqdb = data.new;
        var allData = ghzs.concat(tqdb)
        // var maxData = Math.max.apply(null, allData)
        // var minData = Math.min.apply(null, allData)
        var endPercent = (10 / allData.length) * 100;
        var msg = [data.name, "去年同期对比"]
        option = {
            color: ['#4472C5', '#ED7C30'],
            xAxis: {
                type: 'category',
                data: menu,
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#d3d3d3'
                    }
                },
                axisLabel: {
                    color: '#333333'
                },
                "axisTick": {
                    "show": false
                },
            },
            legend: {
                data: msg,
                x: 14,
                // icon: 'circle',
                // 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
                textStyle: {
                    color: '#999999',
                    fontSize: 10
                }
            },
            yAxis: {
                type: 'value',
                "axisTick": {
                    "show": false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#333',
                        // width: '12',
                        // height: '12',
                        // backgroundColor: {
                        //     image: img1
                        // }
                    }
                },

                splitNumber: 2,
                // min: 0,
                // max: (maxData + (maxData + minData) / 2).toFixed(2)
            },
            grid: {
                left: '2%',
                right: '6%',
                bottom: '6%',
                top: '24%',
                containLabel: true
            },
            dataZoom: [ //给x轴设置滚动条  
                {
                    start: 0, //默认为0  
                    end: endPercent,
                    type: 'slider',
                    show: false,
                    xAxisIndex: [0],
                    handleSize: 0, //滑动条的 左右2个滑动条的大小  
                    height: 4, //组件高度  
                    // left: 0, //左边的距离  
                    // right: 0, //右边的距离  
                    bottom: 26, //右边的距离  
                    handleColor: '#ddd', //h滑动图标的颜色  
                    handleStyle: {
                        borderColor: "#cacaca",
                        borderWidth: "1",
                        shadowBlur: 2,
                        background: "#ddd",
                        shadowColor: "#ddd",
                    },
                    fillerColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        //给颜色设置渐变色 前面4个参数，给第一个设置1，第四个设置0 ，就是水平渐变  
                        //给第一个设置0，第四个设置1，就是垂直渐变  
                        offset: 0,
                        color: '#1eb5e5'
                    }, {
                        offset: 1,
                        color: '#5ccbb1'
                    }]),
                    backgroundColor: '#ddd', //两边未选中的滑动条区域的颜色  
                    showDataShadow: false, //是否显示数据阴影 默认auto  
                    showDetail: false, //即拖拽时候是否显示详细数值信息 默认true  
                    handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
                    filterMode: 'filter'
                },
                //下面这个属性是里面拖到  
                {
                    type: 'inside',
                    show: true,
                    xAxisIndex: [0],
                    start: 0, //默认为1  
                    end: 50
                },
            ],
            calculable: true,
            series: [{
                name: msg[0],
                data: ghzs,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#32C380',
                        lineStyle: {
                            color: '#32C380'
                        }
                    }
                },
            }, {
                name: msg[1],
                data: tqdb,
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        color: '#33B7EF',
                        lineStyle: {
                            color: '#33B7EF'
                        }
                    }
                },
            }]
        };
        myChart.setOption(option);

        console.log(data)
        var tableHTML = ""
        data.date.forEach((ele, index) => {
            tableHTML +=
                `<tr>
              <td>${ele}</td>
              <td>${data.new[index]}</td>
              <td>${data.old[index]}</td>
            </tr>`
        })
        $("#table").empty().append(
            `<p>表格统计</p>
            <table>
                <thead>
                    <tr>
                    <td>时间</td>
                    <td>${msg[0]}</td>
                    <td>${msg[1]}</td>
                    </tr>
                </thead>
                <tbody>
                ${tableHTML}
                </tbody>
            </table>`
        )
        $("#table").show()
    },
    rckzHTML(data) {
        $("#yckzHTML").empty()
        data.forEach((ele, index) => {
            var time = ele.time ? ele.time : '请选择时间'
            var status = 'switch_1'
            if (ele.status) {
                status = 'switch_2'
            }
            $("#yckzHTML").append(
                `<li>
                    <div class="top">
                    <div class="icon">
                        <img src="${ele.imgUrl}" alt>
                    </div>
                    <div class="name">
                        ${ele.name}
                    </div>
                    <div class="kg">
                        <div class="switch_box">
                        <input type="checkbox" class="${status}">
                        </div>
                    </div>
                    </div>
                    <div class="bottom">
                    <p>${time}</p>
                    </div>
                </li>`
            )
        })
    },
    videoHTML(data) {
        $("#spjkHTML").empty()
        data.forEach((ele, index) => {
            $("#spjkHTML").append(
                `<li>
                    <video width='100px' height="100px;" src="http://www.baidu.com"></video>
                </li>`
            )
        });
    },
    timestampToTime: function (timestamp) {
        var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '.';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.';
        var D = date.getDate() + ' ';
        var h = date.getHours() + ':';
        var m = date.getMinutes() + ':';
        var s = date.getSeconds();
        return Y + M + D;
    },
}
$(function () {
    index.init()
})