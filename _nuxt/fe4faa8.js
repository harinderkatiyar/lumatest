(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{772:function(t,e,n){"use strict";n(35),n(34);var r=n(127),o=n(71),c={mixins:[r.a,o.Kb],layout:function(t){var e=t.store,n=t.route;return n.params.layout?n.params.layout:e.getters.settings.layout.layout},data:function(){return{title:null}},computed:{breadcrumb:function(){return[{text:this.$t("Home"),to:this.routeTo(this.routes.home)},{text:this.$t(this.title),active:!0}]},headerClass:function(){return null},headerEffects:function(){return"waterfall"},headerImage:function(){return null},headerContentClass:function(){return null},headerCondenses:function(){return!1},headerContentComponent:function(){return null},headerContentComponentProps:function(){return null},guest:function(){return!1},subLayout:function(){return!1},subLayoutHasScrollingRegion:function(){return!0},subLayoutDrawer:function(){return!1},subLayoutDrawerId:function(){return"sub-layout-drawer"},subLayoutDrawerAlign:function(){return"end"}},created:function(){this.emitOptions()},methods:{emitOptions:function(){var t=this;["guest","subLayout","subLayoutHasScrollingRegion","subLayoutDrawerId","subLayoutDrawerAlign","subLayoutDrawer","headerClass","headerEffects","headerImage","headerContentClass","headerCondenses","headerContentComponent","headerContentComponentProps"].map((function(option){void 0!==t[option]&&t.$root.$emit("luma::".concat(option),t[option])}))}},head:function(){return{title:"".concat(this.$t(this.title)," - ").concat(this.$store.state.brand)}}},l=n(70),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);e.a=component.exports},815:function(t,e,n){"use strict";n.r(e);var r=n(43),o=n.n(r),c=n(29),l=n.n(c),d=n(772),f={components:{LumaStudentQuizResultPage:n(71).X},extends:d.a,data:function(){return{title:this.$t("Quiz Result")}},computed:{headerClass:function(){return"mb-0"}},asyncData:function(t){return o()(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.app,e.abrupt("return",{title:n.i18n.t("Quiz Result")});case 2:case"end":return e.stop()}}),e)})))()}},h=n(70),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("luma-student-quiz-result-page",{attrs:{title:t.title,breadcrumb:t.breadcrumb,"container-class":t.containerClass}})}),[],!1,null,null,null);e.default=component.exports}}]);