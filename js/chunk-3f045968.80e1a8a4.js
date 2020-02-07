(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f045968"],{"37fe":function(t,s,a){},7855:function(t,s,a){"use strict";var e=a("37fe"),i=a.n(e);i.a},"7cd7":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"demo-card-analytics"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[a("vx-card",{attrs:{title:"Sessions By Device"}},[a("template",{slot:"actions"},[a("change-time-duration-dropdown")],1),a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("vue-apex-charts",{staticClass:"mb-12 mt-4",attrs:{type:"donut",height:"340",options:t.analyticsData.sessionsByDeviceDonut.chartOptions,series:t.sessionsData.series}})],1),a("ul",t._l(t.sessionsData.analyticsData,(function(s){return a("li",{key:s.device,staticClass:"flex mb-3"},[a("feather-icon",{attrs:{icon:s.icon,svgClasses:["h-5 w-5 stroke-current text-"+s.color]}}),a("span",{staticClass:"ml-2 inline-block font-semibold"},[t._v(t._s(s.device))]),a("span",{staticClass:"mx-2"},[t._v("-")]),a("span",{staticClass:"mr-4"},[t._v(t._s(s.sessionsPercentage)+"%")]),a("div",{staticClass:"ml-auto flex -mr-1"},[a("span",{staticClass:"mr-1"},[t._v(t._s(s.comparedResultPercentage)+"%")]),a("feather-icon",{attrs:{icon:s.comparedResultPercentage<0?"ArrowDownIcon":"ArrowUpIcon",svgClasses:[s.comparedResultPercentage<0?"text-danger":"text-success","stroke-current h-4 w-4 mb-1 mr-1"]}})],1)],1)})),0)],2)],1),a("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[a("vx-card",{attrs:{title:"Product Orders"}},[a("template",{slot:"actions"},[a("change-time-duration-dropdown")],1),a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("vue-apex-charts",{attrs:{type:"radialBar",height:"420",options:t.analyticsData.productOrdersRadialBar.chartOptions,series:t.productsOrder.series}})],1),a("ul",t._l(t.productsOrder.analyticsData,(function(s){return a("li",{key:s.orderType,staticClass:"flex mb-3 justify-between"},[a("span",{staticClass:"flex items-center"},[a("span",{staticClass:"inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid",class:"border-"+s.color}),a("span",{staticClass:"font-semibold"},[t._v(t._s(s.orderType))])]),a("span",[t._v(t._s(s.counts))])])})),0)],2)],1),a("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[a("vx-card",{attrs:{title:"Customers"}},[a("template",{slot:"actions"},[a("change-time-duration-dropdown")],1),a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("vue-apex-charts",{staticClass:"my-12",attrs:{type:"pie",height:"334",options:t.analyticsData.customersPie.chartOptions,series:t.customersData.series}}),a("ul",{staticClass:"mb-1"},t._l(t.customersData.analyticsData,(function(s){return a("li",{key:s.customerType,staticClass:"flex justify-between py-3 px-6 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0"},[a("span",{staticClass:"flex items-center"},[a("span",{staticClass:"inline-block h-3 w-3 rounded-full mr-2",class:"bg-"+s.color}),a("span",{staticClass:"font-semibold"},[t._v(t._s(s.customerType))])]),a("span",[t._v(t._s(s.counts))])])})),0)],1)],2)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base"},[a("vx-card",{attrs:{title:"Sales",subtitle:"Last 6 Months"}},[a("template",{slot:"actions"},[a("feather-icon",{attrs:{icon:"MoreVerticalIcon",svgClasses:"w-6 h-6 text-grey"}})],1),a("div",{staticClass:"flex"},[a("span",{staticClass:"flex items-center"},[a("div",{staticClass:"h-3 w-3 rounded-full mr-2 bg-primary"}),a("span",[t._v("Sales")])]),a("span",{staticClass:"flex items-center ml-5"},[a("div",{staticClass:"h-3 w-3 rounded-full mr-2 bg-success"}),a("span",[t._v("Visits")])])]),a("div",{attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"},[a("vue-apex-charts",{attrs:{type:"radar",options:t.analyticsData.statisticsRadar.chartOptions,series:t.salesRadar.series}})],1)],2)],1),a("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base"},[a("vx-card",{attrs:{title:"Support Tracker"}},[a("template",{slot:"actions"},[a("change-time-duration-dropdown")],1),t.supportTracker.analyticsData?a("div",{attrs:{slot:"no-body"},slot:"no-body"},[a("div",{staticClass:"vx-row text-center"},[a("div",{staticClass:"vx-col w-full lg:w-1/5 md:w-full sm:w-1/5 flex flex-col justify-between mb-4 lg:order-first md:order-last sm:order-first order-last"},[a("div",{staticClass:"lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6"},[a("h1",{staticClass:"font-bold text-5xl"},[t._v(t._s(t.supportTracker.analyticsData.openTickets))]),a("small",[t._v("Tickets")])])]),a("div",{staticClass:"vx-col w-full lg:w-4/5 md:w-full sm:w-4/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6"},[a("vue-apex-charts",{attrs:{type:"radialBar",height:"385",options:t.analyticsData.supportTrackerRadialBar.chartOptions,series:t.supportTracker.series}})],1)]),a("div",{staticClass:"flex flex-row justify-between px-8 pb-4 mt-2"},t._l(t.supportTracker.analyticsData.meta,(function(s,e){return a("p",{key:e,staticClass:"text-center"},[a("span",{staticClass:"block"},[t._v(t._s(e))]),a("span",{staticClass:"text-2xl font-semibold"},[t._v(t._s(s))])])})),0)]):t._e()],2)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-2/3 mb-base"},[a("vx-card",{attrs:{title:"Revenue"}},[a("template",{slot:"actions"},[a("feather-icon",{attrs:{icon:"SettingsIcon",svgClasses:"w-6 h-6 text-grey"}})],1),a("div",{staticClass:"p-6 pb-0",attrs:{slot:"no-body"},slot:"no-body"},[t.revenueComparisonLine.analyticsData?a("div",{staticClass:"flex"},[a("div",{staticClass:"mr-6"},[a("p",{staticClass:"mb-1 font-semibold"},[t._v("This Month")]),a("p",{staticClass:"text-3xl text-success"},[a("sup",{staticClass:"text-base mr-1"},[t._v("$")]),t._v(t._s(t.revenueComparisonLine.analyticsData.thisMonth.toLocaleString()))])]),a("div",[a("p",{staticClass:"mb-1 font-semibold"},[t._v("Last Month")]),a("p",{staticClass:"text-3xl"},[a("sup",{staticClass:"text-base mr-1"},[t._v("$")]),t._v(t._s(t.revenueComparisonLine.analyticsData.lastMonth.toLocaleString()))])])]):t._e(),a("vue-apex-charts",{attrs:{type:"line",height:"266",options:t.analyticsData.revenueComparisonLine.chartOptions,series:t.revenueComparisonLine.series}})],1)],2)],1),a("div",{staticClass:"vx-col w-full md:w-1/3 mb-base"},[a("vx-card",{attrs:{title:"Goal Overview"}},[a("template",{slot:"actions"},[a("feather-icon",{attrs:{icon:"HelpCircleIcon",svgClasses:"w-6 h-6 text-grey"}})],1),a("template",{slot:"no-body"},[a("div",{staticClass:"mt-10"},[a("vue-apex-charts",{attrs:{type:"radialBar",height:"240",options:t.analyticsData.goalOverviewRadialBar.chartOptions,series:t.goalOverview.series}})],1)]),t.goalOverview.analyticsData?a("div",{staticClass:"flex justify-between text-center mt-4",attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"},[a("div",{staticClass:"w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0"},[a("p",{staticClass:"mt-4"},[t._v("Completed")]),a("p",{staticClass:"mb-4 text-3xl font-semibold"},[t._v(t._s(t.goalOverview.analyticsData.completed.toLocaleString()))])]),a("div",{staticClass:"w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0"},[a("p",{staticClass:"mt-4"},[t._v("In Progress")]),a("p",{staticClass:"mb-4 text-3xl font-semibold"},[t._v(t._s(t.goalOverview.analyticsData.inProgress.toLocaleString()))])])]):t._e()],2)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/2 mb-base"},[a("vx-card",[a("div",{staticClass:"vx-row flex-col-reverse lg:flex-row"},[t.salesBarSession.analyticsData?a("div",{staticClass:"vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col justify-between"},[a("div",[a("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t._f("k_formatter")(t.salesBarSession.analyticsData.session)))]),a("span",{staticClass:"font-medium"},[t._v("Avg Sessions")]),a("p",{staticClass:"mt-2 text-xl font-medium"},[a("span",{class:t.salesBarSession.analyticsData.comparison.result>=0?"text-success":"text-danger"},[t.salesBarSession.analyticsData.comparison.result>0?a("span",[t._v("+")]):t._e(),a("span",[t._v(t._s(t.salesBarSession.analyticsData.comparison.result))])]),a("span",[t._v(" vs ")]),a("span",[t._v(t._s(t.salesBarSession.analyticsData.comparison.str))])])]),a("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":""}},[t._v("View Details")])],1):t._e(),a("div",{staticClass:"vx-col w-full lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 mb-base"},[a("change-time-duration-dropdown",{staticClass:"self-end"}),t.salesBarSession.series?a("vue-apex-charts",{attrs:{type:"bar",height:"200",options:t.analyticsData.salesBar.chartOptions,series:t.salesBarSession.series}}):t._e()],1)]),a("vs-divider",{staticClass:"my-6"}),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-1/2 mb-3"},[a("small",[t._v("Goal: $100000")]),a("vs-progress",{staticClass:"block mt-1",attrs:{percent:50,color:"primary"}})],1),a("div",{staticClass:"vx-col w-1/2 mb-3"},[a("small",[t._v("Users: 100K")]),a("vs-progress",{staticClass:"block mt-1",attrs:{percent:60,color:"warning"}})],1),a("div",{staticClass:"vx-col w-1/2 mb-3"},[a("small",[t._v("Retention: 90%")]),a("vs-progress",{staticClass:"block mt-1",attrs:{percent:70,color:"danger"}})],1),a("div",{staticClass:"vx-col w-1/2 mb-3"},[a("small",[t._v("Duration: 1yr")]),a("vs-progress",{staticClass:"block mt-1",attrs:{percent:90,color:"success"}})],1)])],1)],1),a("div",{staticClass:"vx-col w-full md:w-1/2 mb-base"},[a("vx-card",{staticClass:"overflow-hidden"},[a("template",{slot:"no-body"},[a("div",{staticClass:"flex justify-between items-center p-6 border border-solid d-theme-border-grey-light border-r-0 border-l-0 border-t-0"},[a("div",[a("p",[a("span",{staticClass:"font-semibold"},[t._v(t._s(t.todoToday.numComletedTasks)+" task completed")]),t._v(" out of "+t._s(t.todoToday.totalTasks))]),a("vs-progress",{attrs:{percent:20,color:"primary"}})],1),a("span",[t._v(t._s(t.todoToday.date))])]),a("ul",{staticClass:"tasks-today-container"},t._l(t.todoToday.tasksToday,(function(s){return a("li",{key:s.id,staticClass:"px-6 py-4 tasks-today__task"},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full sm:w-auto"},[a("p",{staticClass:"font-semibold text-lg"},[t._v(t._s(s.task))]),a("small",[t._v(t._s(s.date))])]),a("div",{staticClass:"tasks-today__actions vx-col w-full sm:w-auto ml-auto mt-2 sm:mt-0"},[a("vs-button",{attrs:{radius:"",color:"primary",type:"border","icon-pack":"feather",icon:"icon-check",size:"small"}}),a("vs-button",{staticClass:"ml-3",attrs:{radius:"",color:"primary",type:"border","icon-pack":"feather",icon:"icon-edit-2",size:"small"}}),a("vs-button",{staticClass:"ml-3",attrs:{radius:"",color:"primary",type:"border","icon-pack":"feather",icon:"icon-trash",size:"small"}})],1)])])})),0)])],2)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-2/3 lg:w-3/4"},[a("vx-card",{staticClass:"mb-base",attrs:{title:"Sales"}},[a("template",{slot:"actions"},[a("feather-icon",{attrs:{icon:"SettingsIcon",svgClasses:"w-6 h-6 text-grey"}})],1),a("div",{staticClass:"p-6 pb-0",attrs:{slot:"no-body"},slot:"no-body"},[a("vue-apex-charts",{attrs:{type:"line",height:"266",options:t.analyticsData.salesLine.chartOptions,series:t.salesLine.series}})],1)],2)],1),a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/4 xl:w-1/4"},[a("vx-card",[Object.entries(t.funding).length?a("template",{slot:"no-body"},[a("div",{staticClass:"p-8 clearfix"},[a("div",[a("h1",[a("sup",{staticClass:"text-lg"},[t._v("$")]),a("span",[t._v(t._s(t.funding.currBalance.toLocaleString()))])]),a("small",[a("span",{staticClass:"text-grey"},[t._v("Deposits: ")]),a("span",[t._v("$")]),a("span",[t._v(t._s(t.funding.depostis.toLocaleString()))])])]),a("p",{staticClass:"mt-2 mb-8 text-xl font-medium",class:t.funding.comparison.resultPerc>=0?"text-success":"text-danger"},[t.funding.comparison.resultPerc>0?a("span",[t._v("+")]):t._e(),a("span",[t._v(t._s(t.funding.comparison.resultPerc)+"%")]),a("span",{staticClass:"ml-1"},[t._v("($"+t._s(t.funding.comparison.pastData)+")")])]),a("vs-button",{staticClass:"shadow-md w-full",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":""}},[t._v("Add Funds")])],1),a("div",{staticClass:"p-8 border d-theme-border-grey-light border-solid border-r-0 border-l-0 border-b-0"},[a("div",{staticClass:"mb-4"},[a("small",[t._v("Earned: $"+t._s(t.funding.meta.earned.val))]),a("vs-progress",{attrs:{percent:t.funding.meta.earned.progress,color:"success"}})],1),a("div",[a("small",[t._v("Duration: "+t._s(t.funding.meta.duration.val))]),a("vs-progress",{attrs:{percent:t.funding.meta.duration.progress,color:"warning"}})],1)])]):t._e()],2)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3"},[a("vx-card",{staticClass:"mt-base",attrs:{title:"Browser Statistics"}},t._l(t.browserStatistics,(function(s,e){return a("div",{key:s.id,class:{"mt-4":e}},[a("div",{staticClass:"flex justify-between"},[a("div",{staticClass:"flex flex-col"},[a("span",{staticClass:"mb-1"},[t._v(t._s(s.name))]),a("h4",[t._v(t._s(s.ratio)+"%")])]),a("div",{staticClass:"flex flex-col text-right"},[a("span",{staticClass:"flex -mr-1"},[a("span",{staticClass:"mr-1"},[t._v(t._s(s.comparedResult))]),a("feather-icon",{attrs:{icon:s.comparedResult<0?"ArrowDownIcon":"ArrowUpIcon",svgClasses:[s.comparedResult<0?"text-danger":"text-success","stroke-current h-4 w-4 mb-1 mr-1"]}})],1),a("span",{staticClass:"text-grey"},[t._v(t._s(t._f("time")(s.time,!0)))])])]),a("vs-progress",{attrs:{percent:s.ratio}})],1)})),0)],1),a("div",{staticClass:"vx-col w-full md:w-2/3"},[a("vx-card",{staticClass:"mt-base",attrs:{title:"Client Retention"}},[a("div",{staticClass:"flex items-center mb-3"},[a("span",{staticClass:"flex items-center"},[a("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-warning"}),a("span",[t._v("New Clients")])]),a("span",{staticClass:"flex items-center ml-4"},[a("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-danger"}),a("span",[t._v("Retained Clients")])])]),a("vue-apex-charts",{attrs:{type:"bar",height:"266",options:t.analyticsData.clientRetentionBar.chartOptions,series:t.clientRetentionBar.series}})],1)],1)])])},i=[],o=a("1321"),r=a.n(o),l=a("43ca"),c=a("da24"),n=a("5f88"),d={data:function(){return{sessionsData:{},productsOrder:{},customersData:{},salesRadar:{},supportTracker:{},revenueComparisonLine:{},goalOverview:{},salesBarSession:{},sessionDataTime:"lastWeek",todoToday:{},salesLine:{},funding:{},browserStatistics:[],clientRetentionBar:{},analyticsData:c["a"]}},components:{VueApexCharts:r.a,StatisticsCardLine:l["a"],ChangeTimeDurationDropdown:n["a"]},created:function(){var t=this;this.$http.get("/api/card/card-analytics/session-by-device").then((function(s){t.sessionsData=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/products-orders").then((function(s){t.productsOrder=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/customers").then((function(s){t.customersData=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/radar").then((function(s){t.salesRadar=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/support-tracker").then((function(s){t.supportTracker=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/revenue-comparison").then((function(s){t.revenueComparisonLine=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/goal-overview").then((function(s){t.goalOverview=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/bar").then((function(s){t.salesBarSession=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/todo/today").then((function(s){t.todoToday=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/funding").then((function(s){t.funding=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/line").then((function(s){t.salesLine=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/browser-analytics").then((function(s){t.browserStatistics=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/client-retention").then((function(s){t.clientRetentionBar=s.data})).catch((function(t){console.log(t)}))}},p=d,v=(a("7855"),a("2877")),m=Object(v["a"])(p,e,i,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-3f045968.80e1a8a4.js.map