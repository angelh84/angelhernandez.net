(function(t){function e(e){for(var r,n,l=e[0],a=e[1],c=e[2],d=0,p=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&p.push(s[n][0]),s[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],r=!0,l=1;l<o.length;l++){var a=o[l];0!==s[a]&&(r=!1)}r&&(i.splice(e--,1),t=n(n.s=o[0]))}return t}var r={},s={app:0},i=[];function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1a10":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e623"),o("e379"),o("5dc8"),o("37e1");var r=o("2b0e"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"h-full",attrs:{id:"app"}},[o("ToDo")],1)},i=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex h-full flex-col justify-between"},[o("div",{class:["flex justify-between","fixed top-0 left-0","bg-gray-100","w-full p-4 lg:p-6","transition-opacity opacity-0 duration-700 pointer-events-none",{"opacity-100 pointer-events-auto":t.itemsChecked.length}]},[o("t-button",{class:["text-color text-sm text-red-500 hover:underline"],attrs:{variant:"text"},on:{click:t.deleteChecked}},[t._v(" Delete Selected ")]),o("t-button",{class:["rounded text-sm",{"bg-yellow-100":t.showEditFields}],attrs:{variant:"secondary"},on:{click:t.editChecked}},[t._v(" Edit Selected ")])],1),o("div",{class:["h-full w-full sm:w-600 mx-auto","pt-24 lg:pt-32 pr-5 pb-3 pl-5 mb-36","overflow-auto"]},[o("div",{class:[{"border-b-2 border-gray-300":t.toDoList.length},"flex flex-column items-center p-1 pb-2"]},[t.toDoList.length?o("t-checkbox",{staticClass:"mr-4",attrs:{value:!0},on:{click:function(e){return t.clickCheckAll(!t.checkAll)}},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}}):t._e(),o("h1",{staticClass:"w-full"},[t._v("My to-do list")]),t.toDoList.length?o("t-select",{class:["text-xs sm:text-sm",{"text-gray-400":"Sort"===t.sort||""===t.sort}],attrs:{placeholder:"Sort",fixedClasses:["border-0 block w-52 sm:w-48","-mr-4 px-3 py-2","transition duration-100 ease-in-out","focus:ring-2 focus:ring-blue-500","focus:outline-none focus:ring-opacity-50","disabled:opacity-50 disabled:cursor-not-allowed"],options:t.sortOptions},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}}):t._e()],1),t.toDoList.length?t._l(t.toDoList,(function(e,r){return o("div",{key:r,class:["flex flex-row items-center","w-full","h-14","border-b"]},[o("label",{staticClass:"w-full flex items-center p-1 pr-4"},[o("t-checkbox",{staticClass:"mr-4",attrs:{name:"options",value:!0},model:{value:e.checked,callback:function(o){t.$set(e,"checked",o)},expression:"item.checked"}}),t.showEditFields&&e.checked?o("t-input",{ref:"listItem",refInFor:!0,staticClass:"text-xs sm:text-sm",attrs:{placeholder:"To-do item name"},model:{value:e.name,callback:function(o){t.$set(e,"name",o)},expression:"item.name"}}):o("span",{staticClass:"break-all"},[t._v(" "+t._s(e.name)+" ")])],1),t.showEditFields&&e.checked?o("t-select",{staticClass:"text-xs sm:text-sm",attrs:{options:["No Priority","Life Changing","Important","Meh"]},model:{value:e.priority,callback:function(o){t.$set(e,"priority",o)},expression:"item.priority"}}):o("div",{class:[t.labels(e.priority),"w-40 rounded p-2","text-center text-white text-xs sm:text-sm"]},[t._v(" "+t._s(e.priority)+" ")])],1)})):[o("p",{class:["border-2 border-dashed","rounded text-gray-400 p-3"]},[t._v(" Add your first to-do item below. ")])]],2),o("div",{class:["fixed bottom-0","flex flex-col sm:flex-row","p-6 sm:pr-12 sm:pl-12","bg-gray-700","w-full"]},[o("div",{staticClass:"flex flex-row mb-4 w-full"},[o("t-input",{ref:"toDoInput",staticClass:"mr-4 w-full sm:h-16 sm:text-xl",attrs:{placeholder:"Add your next to-do",value:"",name:"to-do",maxlength:"100"},model:{value:t.toDoInput,callback:function(e){t.toDoInput=e},expression:"toDoInput"}}),o("t-select",{class:["w-42","hidden sm:block","mr-8","sm:text-xl",{"text-gray-400":""===t.prioritySelect}],attrs:{id:"to-do-priority",name:"priority",placeholder:"Priority",options:t.priorityOptions},model:{value:t.prioritySelect,callback:function(e){t.prioritySelect=e},expression:"prioritySelect"}}),o("button",{staticClass:"w-8 sm:w-12 disabled:opacity-50",class:{"pointer-events-none":!t.toDoInput.length},attrs:{type:"button",disabled:!t.toDoInput.length},on:{click:t.addToDo}},[o("svg",{staticClass:"fill-current text-green-500 hover:text-green-300",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"}})])])],1),o("div",{staticClass:"flex flex-row sm:hidden"},[o("label",{staticClass:"flex items-center mr-4 text-sm text-gray-50"},[o("t-radio",{attrs:{name:"priority",value:"Life Changing"},model:{value:t.prioritySelect,callback:function(e){t.prioritySelect=e},expression:"prioritySelect"}}),o("span",{staticClass:"ml-2"},[t._v("Life Changing")])],1),o("label",{staticClass:"flex items-center mr-4 text-sm text-gray-50"},[o("t-radio",{attrs:{name:"priority",value:"Important"},model:{value:t.prioritySelect,callback:function(e){t.prioritySelect=e},expression:"prioritySelect"}}),o("span",{staticClass:"ml-2"},[t._v("Important")])],1),o("label",{staticClass:"flex items-center mr-4 text-sm text-gray-50"},[o("t-radio",{attrs:{name:"priority",value:"Meh"},model:{value:t.prioritySelect,callback:function(e){t.prioritySelect=e},expression:"prioritySelect"}}),o("span",{staticClass:"ml-2"},[t._v("Meh")])],1)])])])},l=[],a=o("2909"),c=(o("159b"),o("4de4"),o("4e82"),o("fb6a"),o("b0c0"),o("d3b7"),o("6062"),o("3ca3"),o("ddb0"),o("99af"),{name:"ToDo",props:{},data:function(){return{toDoList:[],toDoInput:"",prioritySelect:"",priorityOptions:["Life Changing","Important","Meh"],sort:"Sort",checkAll:!1,showEditFields:!1}},watch:{itemsChecked:function(t){t.length||(this.showEditFields=!1),t.length===this.toDoList.length?this.checkAll=!0:this.checkAll=!1},checkAll:function(t){t&&this.toDoList.forEach((function(t){return t.checked=!0}))},sort:function(t){this.sortByPriority(t)},toDoList:{deep:!0,handler:function(){this.saveToDoList()}}},computed:{itemsChecked:function(){return this.toDoList.filter((function(t){return t.checked}))},itemsUnChecked:function(){return this.toDoList.filter((function(t){return!t.checked}))},sortLocal:function(){return this.toDoList.slice().sort((function(t,e){return t.timeStamp-e.timeStamp}))},sortByTimestamp:function(){return this.toDoList.slice().sort((function(t,e){return t.timeStamp-e.timeStamp}))},labels:function(){return function(t){switch(t.toLowerCase()){case"life changing":return"bg-green-500";case"important":return"bg-yellow-500";case"meh":return"bg-blue-400";default:return"border border-dashed rounded text-gray-400"}}},sortOptions:function(){var t=this,e=[{name:"Order (default)",value:0}],o=[];return this.toDoList.forEach((function(o){var r="No Priority"===o.priority;e.push({name:o.priority,value:r?t.priorityOptions.length:t.priorityOptions.indexOf(o.priority)+1})})),e.sort((function(t,e){return t.value-e.value})),e.forEach((function(t){return o.push(t.name)})),o=Object(a["a"])(new Set(o)),o}},methods:{addToDo:function(){this.toDoList.push({name:this.toDoInput,priority:this.prioritySelect?this.prioritySelect:"No Priority",checked:!1,timeStamp:new Date}),this.clearFields(),this.$refs.toDoInput.focus()},clearFields:function(){this.toDoInput="",this.prioritySelect=""},clickCheckAll:function(t){t||this.toDoList.forEach((function(t){return t.checked=!1}))},sortByPriority:function(t){var e=this.toDoList.filter((function(e){return e.priority===t})),o=this.toDoList.filter((function(e){return e.priority!==t})),r=[].concat(Object(a["a"])(e),Object(a["a"])(o));this.toDoList=""===t||"Order (default)"===t?this.sortByTimestamp:r},editChecked:function(){var t=this;this.showEditFields=!this.showEditFields,this.$nextTick((function(){t.showEditFields&&t.$refs.listItem[0].focus()}))},deleteChecked:function(){this.toDoList=this.itemsUnChecked},getToDoList:function(){var t=JSON.parse(localStorage.getItem("toDoList"));if(t&&t.length)return t.forEach((function(t){t.timeStamp=new Date(t.timeStamp)})),t},saveToDoList:function(){localStorage.setItem("toDoList",JSON.stringify(this.toDoList))}},created:function(){var t=this.getToDoList();localStorage&&t&&(this.toDoList=t)},mounted:function(){this.$refs.toDoInput.focus()}}),u=c,d=o("2877"),p=Object(d["a"])(u,n,l,!1,null,null,null),f=p.exports,h={name:"App",components:{ToDo:f}},b=h,m=Object(d["a"])(b,s,i,!1,null,null,null),g=m.exports,y=o("2f62");r["default"].use(y["a"]);var x=new y["a"].Store({state:{},mutations:{},actions:{},modules:{}}),v=o("2a13"),w=o.n(v),k=(o("1a10"),o("481d")),D={"t-input":{component:k["TInput"],props:{fixedClasses:"block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",classes:"text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",variants:{danger:"border-red-300 bg-red-50 placeholder-red-200 text-red-900",success:"border-green-300 bg-green-50 placeholder-gray-400 text-green-900"}}},"t-select":{component:k["TSelect"],props:{fixedClasses:"block pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-inset focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",classes:"text-black placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ",variants:{danger:"border-red-300 bg-red-50 placeholder-red-200 text-red-900",success:"border-green-300 bg-green-50 placeholder-gray-400 text-green-900"}}},"t-radio":{component:k["TRadio"],props:{fixedClasses:"transition duration-100 ease-in-out shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0  disabled:opacity-50 disabled:cursor-not-allowed",classes:"text-blue-500 border-gray-300",variants:{error:"text-red-500 border-red-300",success:"text-green-500 border-green-300"}}},"t-checkbox":{component:k["TCheckbox"],props:{fixedClasses:"transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed",classes:"text-blue-500 border-gray-300 ",variants:{error:"text-red-500 border-red-300",success:"text-green-500 border-green-300"}}},"t-button":{component:k["TButton"],props:{fixedClasses:"block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",classes:"text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600",variants:{secondary:"text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600",error:"text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600",success:"text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600",link:"text-blue-500 underline hover:text-blue-600"}}}};r["default"].use(w.a,D),r["default"].config.productionTip=!1,new r["default"]({store:x,render:function(t){return t(g)}}).$mount("#app")}});
//# sourceMappingURL=app.96d6ff11.js.map