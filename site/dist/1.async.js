(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{nseO:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("MVZn")),r=n(a("o0o1")),s=a("dCQc"),u={namespace:"forgot",state:{status:void 0},effects:{submit:r.default.mark(function e(t,a){var n,o,u,d;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,o=a.call,u=a.put,e.next=4,o(s.fakeForgot,n);case 4:return d=e.sent,e.next=7,u({type:"forgotHandle",payload:d});case 7:case"end":return e.stop()}},e,this)})},reducers:{forgotHandle:function(e,t){var a=t.payload;return(0,o.default)({},e,{status:a.status})}}};t.default=u}}]);