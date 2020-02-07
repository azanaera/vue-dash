(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665e04ba"],{"0227":function(e,t,n){(function(e,n){n(t)})(0,(function(e){"use strict";var t="undefined"!==typeof window&&void 0!==window.flatpickr?window.flatpickr:{l10ns:{}},n={firstDayOfWeek:1,weekdays:{shorthand:["dim","lun","mar","mer","jeu","ven","sam"],longhand:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},months:{shorthand:["janv","févr","mars","avr","mai","juin","juil","août","sept","oct","nov","déc"],longhand:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},ordinal:function(e){return e>1?"":"er"},rangeSeparator:" au ",weekAbbreviation:"Sem",scrollTitle:"Défiler pour augmenter la valeur",toggleTitle:"Cliquer pour basculer",time_24hr:!0};t.l10ns.fr=n;var a=t.l10ns;e.French=n,e.default=a,Object.defineProperty(e,"__esModule",{value:!0})}))},"2be5":function(e,t,n){},c8de:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"extra-component-datetime-picker-demo"}},[e._m(0),n("div",{staticClass:"vx-row match-height"},[n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datetime-picker-basic",{staticClass:"mb-base"})],1),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datetime-picker-datetime",{staticClass:"mb-base"})],1),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datetime-picker-time",{staticClass:"mb-base"})],1),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datetime-picker-locale",{staticClass:"mb-base"})],1),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datetime-picker-start-end",{staticClass:"mb-base"})],1),n("div",{staticClass:"vx-col md:w-1/2 w-full"},[n("datetime-picker-input",{staticClass:"mb-base"})],1),n("div",{staticClass:"vx-col w-full"},[n("datetime-picker-inline")],1)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"mb-4"},[e._v("vue-flatpickr-component is Vue.js component for Flatpickr datetime picker. Read full documnetation "),n("a",{attrs:{href:"https://github.com/ankurk91/vue-flatpickr-component",target:"_blank",rel:"nofollow"}},[e._v("here")])])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Basic","code-toggler":""}},[n("p",[e._v("Rendering basic Datetime Picker with "),n("code",[e._v("v-model")])]),n("div",{staticClass:"mt-5"},[n("flat-pickr",{model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),n("p",{staticClass:"mt-4"},[e._v("Selected Date: "+e._s(e.date))])],1),n("template",{slot:"codeContainer"},[e._v("\n<template>\n  <flat-pickr v-model=\"date\" />\n</template>\n\n<script>\nimport flatPickr from 'vue-flatpickr-component';\nimport 'flatpickr/dist/flatpickr.css';\n\nexport default {\n    data() {\n        return {\n            date: null,\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ")])],2)},l=[],r=n("c38f"),o=n.n(r),s=(n("0952"),{data:function(){return{date:null}},components:{flatPickr:o.a}}),m=s,d=n("2877"),p=Object(d["a"])(m,c,l,!1,null,null,null),f=p.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Datetime Picker","code-toggler":""}},[n("p",[e._v("Rendering datetime picker by updating config")]),n("div",{staticClass:"mt-5"},[n("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Date Time"},model:{value:e.datetime,callback:function(t){e.datetime=t},expression:"datetime"}}),n("p",{staticClass:"mt-4"},[e._v("Selected Datetime: "+e._s(e.datetime))])],1),n("template",{slot:"codeContainer"},[e._v("\n<template>\n  <flat-pickr :config=\"configdateTimePicker\" v-model=\"datetime\" placeholder=\"Date Time\" />\n</template>\n\n<script>\nimport flatPickr from 'vue-flatpickr-component';\nimport 'flatpickr/dist/flatpickr.css';\n\nexport default {\n    data() {\n        return {\n            datetime: null,\n            configdateTimePicker: {\n              enableTime: true,\n              dateFormat: 'd-m-Y H:i'\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ")])],2)},k=[],v={data:function(){return{datetime:null,configdateTimePicker:{enableTime:!0,dateFormat:"d-m-Y H:i"}}},components:{flatPickr:o.a}},g=v,h=Object(d["a"])(g,u,k,!1,null,null,null),P=h.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Time Picker","code-toggler":""}},[n("p",[e._v("set "),n("code",[e._v("noCalendar")]),e._v(" to "),n("code",[e._v("true")]),e._v(" to hide calendar")]),n("div",{staticClass:"mt-5"},[n("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Choose time"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}}),n("p",{staticClass:"mt-4"},[e._v("Selected Time: "+e._s(e.time))])],1),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configdateTimePicker" v-model="time" placeholder="Choose time" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            time: null,\n            configdateTimePicker: {\n              enableTime: true,\n              enableSeconds: true,\n              noCalendar: true\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},T=[],b={data:function(){return{time:null,configdateTimePicker:{enableTime:!0,enableSeconds:!0,noCalendar:!0}}},components:{flatPickr:o.a}},C=b,D=Object(d["a"])(C,_,T,!1,null,null,null),x=D.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Change Locale","code-toggler":""}},[n("p",[e._v("Import locale and set "),n("code",[e._v("locale")]),e._v(" in config of picker to change locale.")]),n("div",{staticClass:"mt-5"},[n("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Choose Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),n("p",{staticClass:"mt-4"},[e._v("Selected Date: "+e._s(e.date))])],1),n("template",{slot:"codeContainer"},[e._v("\n<template>\n  <flat-pickr :config=\"configdateTimePicker\" v-model=\"date\" placeholder=\"Choose Date\" />\n</template>\n\n<script>\nimport flatPickr from 'vue-flatpickr-component'\nimport 'flatpickr/dist/flatpickr.min.css';\nimport {French as FrenchLocale} from 'flatpickr/dist/l10n/fr.js';\n\nexport default {\n    data() {\n        return {\n            date: null,\n            configdateTimePicker: {\n              locale: FrenchLocale\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ")])],2)},F=[],j=(n("2be5"),n("0227")),S={data:function(){return{date:null,configdateTimePicker:{locale:j["French"]}}},components:{flatPickr:o.a}},$=S,E=Object(d["a"])($,w,F,!1,null,null,null),I=E.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Start-End Date","code-toggler":""}},[n("p",[e._v("Create start and end date - date picker")]),n("div",{staticClass:"mt-5"},[n("div",[n("flat-pickr",{attrs:{config:e.configFromdateTimePicker,placeholder:"From Date"},on:{"on-change":e.onFromChange},model:{value:e.fromDate,callback:function(t){e.fromDate=t},expression:"fromDate"}})],1),n("div",{staticClass:"mt-4"},[n("flat-pickr",{attrs:{config:e.configTodateTimePicker,placeholder:"To Date"},on:{"on-change":e.onToChange},model:{value:e.toDate,callback:function(t){e.toDate=t},expression:"toDate"}})],1)]),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configFromdateTimePicker" v-model="fromDate" placeholder="From Date" @on-change="onFromChange" />\n  <flat-pickr :config="configTodateTimePicker" v-model="toDate" placeholder="To Date" @on-change="onToChange" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            fromDate: null,\n            toDate: null,\n            configFromdateTimePicker: {\n              minDate: new Date(),\n              maxDate: null\n            },\n            configTodateTimePicker: {\n              minDate: null\n            }\n        }\n    },\n    methods: {\n      onFromChange(selectedDates, dateStr, instance) {\n        this.$set(this.configTodateTimePicker, \'minDate\', dateStr);\n      },\n      onToChange(selectedDates, dateStr, instance) {\n        this.$set(this.configFromdateTimePicker, \'maxDate\', dateStr);\n      }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},y=[],L={data:function(){return{fromDate:null,toDate:null,configFromdateTimePicker:{minDate:new Date,maxDate:null},configTodateTimePicker:{minDate:null}}},methods:{onFromChange:function(e,t){this.$set(this.configTodateTimePicker,"minDate",t)},onToChange:function(e,t){this.$set(this.configFromdateTimePicker,"maxDate",t)}},components:{flatPickr:o.a}},R=L,A=Object(d["a"])(R,O,y,!1,null,null,null),B=A.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Inline Picker","code-toggler":""}},[n("p",[e._v("Creating inline datetime picker by setting "),n("code",[e._v("inline")]),e._v(" to "),n("code",[e._v("true")])]),n("div",{staticClass:"mt-5"},[n("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Inline Picker"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configdateTimePicker" v-model="date" placeholder="Inline Picker" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            date: null,\n            configdateTimePicker: {\n              inline: true,\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},J=[],Y={data:function(){return{date:null,configdateTimePicker:{inline:!0}}},components:{flatPickr:o.a}},q=Y,M=Object(d["a"])(q,H,J,!1,null,null,null),U=M.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Allow input in Picker","code-toggler":""}},[n("p",[e._v("Use "),n("code",[e._v("allowInput")]),e._v(" to create Datepicker with input support")]),n("div",{staticClass:"mt-5"},[n("flat-pickr",{attrs:{config:e.configdateTimePicker,placeholder:"Insert Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <flat-pickr :config="configdateTimePicker" v-model="date" placeholder="Inline Picker" />\n</template>\n\n<script>\nimport flatPickr from \'vue-flatpickr-component\';\nimport \'flatpickr/dist/flatpickr.css\';\n\nexport default {\n    data() {\n        return {\n            date: null,\n            configdateTimePicker: {\n              inline: true,\n            }\n        }\n    },\n    components: {\n        flatPickr\n    }\n}\n<\/script>\n        ')])],2)},W=[],z={data:function(){return{date:null,configdateTimePicker:{allowInput:!0}}},components:{flatPickr:o.a}},G=z,K=Object(d["a"])(G,V,W,!1,null,null,null),N=K.exports,Q={components:{DatetimePickerBasic:f,DatetimePickerDatetime:P,DatetimePickerTime:x,DatetimePickerLocale:I,DatetimePickerStartEnd:B,DatetimePickerInline:U,DatetimePickerInput:N}},X=Q,Z=Object(d["a"])(X,a,i,!1,null,null,null);t["default"]=Z.exports}}]);
//# sourceMappingURL=chunk-665e04ba.4ffeffca.js.map