(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1877f7e6"],{"01a8":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-submenu",{attrs:{index:e.menu.path||e.uniqueId}},[n("template",{slot:"title"},[e.menu.icon?n("i",{class:"fa fa-"+e.menu.icon}):e.menu.iconSvg?n("d2-icon-svg",{attrs:{name:e.menu.iconSvg}}):n("i",{staticClass:"fa fa-folder-o"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title))])],1),e._l(e.menu.children,function(e,t){return[void 0===e.children?n("d2-layout-header-aside-menu-item",{key:t,attrs:{menu:e}}):n("d2-layout-header-aside-menu-sub",{key:t,attrs:{menu:e}})]})],2)},s=[],r=n("2ef0"),l=n("73eb"),a={name:"d2-layout-header-aside-menu-sub",components:{"d2-layout-header-aside-menu-item":l["a"]},props:{menu:{type:Object,required:!1,default:function(){}}},data:function(){return{uniqueId:Object(r["uniqueId"])("d2-menu-empty-")}}},c=a,o=n("2877"),u=Object(o["a"])(c,i,s,!1,null,null,null);u.options.__file="index.vue";t["a"]=u.exports},"6f93":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"page",staticClass:"d2-theme-header-menu",class:{"is-scrollable":e.isScroll},attrs:{flex:"cross:center"}},[n("div",{ref:"content",staticClass:"d2-theme-header-menu__content",attrs:{"flex-box":"1",flex:""}},[n("div",{ref:"scroll",staticClass:"d2-theme-header-menu__scroll",style:"transform: translateX("+e.currentTranslateX+"px);",attrs:{"flex-box":"0"}},[n("el-menu",{attrs:{mode:"horizontal","default-active":e.active},on:{select:e.handleMenuSelect}},[e._l(e.header,function(e,t){return[void 0===e.children?n("d2-layout-header-aside-menu-item",{key:t,attrs:{menu:e}}):n("d2-layout-header-aside-menu-sub",{key:t,attrs:{menu:e}})]})],2)],1)]),e.isScroll?n("div",{staticClass:"d2-theme-header-menu__prev",attrs:{"flex-box":"0",flex:"main:center cross:center"},on:{click:function(t){e.scroll("left")}}},[n("i",{staticClass:"el-icon-arrow-left"})]):e._e(),e.isScroll?n("div",{staticClass:"d2-theme-header-menu__next",attrs:{"flex-box":"0",flex:"cross:center"},on:{click:function(t){e.scroll("right")}}},[n("i",{staticClass:"el-icon-arrow-right"})]):e._e()])},s=[],r=n("c93e"),l=(n("cadf"),n("551c"),n("097d"),n("2ef0")),a=n("2f62"),c=n("b55f"),o=n("73eb"),u=n("01a8"),d={name:"d2-layout-header-aside-menu-header",mixins:[c["a"]],components:{"d2-layout-header-aside-menu-item":o["a"],"d2-layout-header-aside-menu-sub":u["a"]},computed:Object(r["a"])({},Object(a["e"])("d2admin/menu",["header"])),data:function(){return{active:"",isScroll:!1,scrollWidth:0,contentWidth:0,currentTranslateX:0,throttledCheckScroll:null}},watch:{"$route.matched":{handler:function(e){this.active=e[e.length-1].path},immediate:!0}},methods:{scroll:function(e){"left"===e?this.currentTranslateX=0:2*this.contentWidth-this.currentTranslateX<=this.scrollWidth?this.currentTranslateX-=this.contentWidth:this.currentTranslateX=this.contentWidth-this.scrollWidth},checkScroll:function(){var e=this,t=this.$refs.content.clientWidth,n=this.$refs.scroll.clientWidth;this.isScroll&&(this.contentWidth-this.scrollWidth===this.currentTranslateX&&(this.currentTranslateX=t-n,this.currentTranslateX>0&&(this.currentTranslateX=0)),this.contentWidth=t,this.scrollWidth=n,t>n&&(this.isScroll=!1)),!this.isScroll&&t<n&&(this.isScroll=!0,this.$nextTick(function(){t=e.$refs.content.clientWidth,n=e.$refs.scroll.clientWidth,e.contentWidth=t,e.scrollWidth=n,e.currentTranslateX=0}))}},mounted:function(){this.checkScroll(),this.throttledCheckScroll=Object(l["throttle"])(this.checkScroll,300),window.addEventListener("resize",this.throttledCheckScroll)},beforeDestroy:function(){window.removeEventListener("resize",this.throttledCheckScroll)}},h=d,m=n("2877"),f=Object(m["a"])(h,i,s,!1,null,null,null);f.options.__file="index.vue";t["default"]=f.exports},"73eb":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu-item",{attrs:{index:e.menu.path||e.uniqueId}},[e.menu.icon?n("i",{class:"fa fa-"+e.menu.icon}):e.menu.iconSvg?n("d2-icon-svg",{attrs:{name:e.menu.iconSvg}}):n("i",{staticClass:"fa fa-file-o"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.menu.title||"未命名菜单"))])],1)},s=[],r=n("2ef0"),l={name:"d2-layout-header-aside-menu-item",props:{menu:{type:Object,required:!1,default:function(){}}},data:function(){return{uniqueId:Object(r["uniqueId"])("d2-menu-empty-")}}},a=l,c=n("2877"),o=Object(c["a"])(a,i,s,!1,null,null,null);o.options.__file="index.vue";t["a"]=o.exports},b55f:function(e,t,n){"use strict";var i=n("c276");t["a"]={methods:{handleMenuSelect:function(e,t){/^d2-menu-empty-\d+$/.test(e)||void 0===e?this.$message.warning("临时菜单"):/^https:\/\/|http:\/\//.test(e)?i["a"].open(e):this.$router.push({path:e})}}}}}]);
//# sourceMappingURL=chunk-1877f7e6.711b2589.js.map