(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54f03892"],{1718:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),u=r("308d"),i=r("6bb5"),o=r("4e2b"),c=function e(t,r){Object(a["a"])(this,e),this.nome=t,this.uf=r},l=r("8141");r.d(t,"a",function(){return f});var f=function(e){function t(){return Object(a["a"])(this,t),Object(u["a"])(this,Object(i["a"])(t).apply(this,arguments))}return Object(o["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new c(t.nome,t.uf),e.next=4,this._request.post("estados",r);case 4:return n=e.sent,e.abrupt("return",this.response("Estado adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var u,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,u=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("estados".concat(u));case 4:return i=e.sent,e.abrupt("return",this.response(!1,i.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("estados".concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"getCidades",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("estados/".concat(t,"/cidades"));case 3:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(l["a"])},"6af6":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-title",[r("v-btn",{attrs:{color:"primary",large:"",to:"estados/novo"}},[r("v-icon",{attrs:{dark:""}},[e._v("add")]),e._v("\n            Adicionar estado\n          ")],1)],1),r("v-divider"),r("v-card-text",[r("custom-data-table",{attrs:{headers:e.headers,"table-data":e.tableData,filters:e.filters,"default-sort":e.defaultSort},on:{getData:function(t){return e.getData(t)},onDeleteItem:function(t){return e.onDeleteItem(t)},onEditItem:function(t){return e.onEditItem(t)}},scopedSlots:e._u([{key:"filter",fn:function(t){return[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:"Nome"},model:{value:t.filters.nome,callback:function(r){e.$set(t.filters,"nome",r)},expression:"props.filters.nome"}})],1),r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-text-field",{attrs:{label:"UF"},model:{value:t.filters.uf,callback:function(r){e.$set(t.filters,"uf",r)},expression:"props.filters.uf"}})],1)]}},{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.nome))]),r("td",[e._v(e._s(t.item.uf))])]}}])})],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),u=r("efa1"),i=r("1718"),o={components:{CustomDataTable:u["a"]},data:function(){return{filters:{nome:"",uf:""},defaultSort:"nome",headers:[{text:"Nome",align:"left",sortable:!0,value:"nome"},{text:"UF",align:"left",sortable:!0,value:"uf"}],tableData:null}},methods:{getData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.filters,n=t.pagination,a=new i["a"],e.next=5,a.list(r,n.page,n.rowsPerPage,n.sortBy,n.descending);case 5:s=e.sent,s.error||(this.tableData=s.data);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onDeleteItem:function(e){console.log(e)},onEditItem:function(e){console.log(e)}}},c=o,l=r("2877"),f=r("6544"),d=r.n(f),p=r("8336"),h=r("b0af"),v=r("99d9"),m=r("12b2"),b=r("a523"),g=r("ce7e6"),w=r("0e8f"),x=r("132d"),y=r("a722"),k=r("2677"),j=Object(l["a"])(c,n,a,!1,null,null,null);t["default"]=j.exports;d()(j,{VBtn:p["a"],VCard:h["a"],VCardText:v["b"],VCardTitle:m["a"],VContainer:b["a"],VDivider:g["a"],VFlex:w["a"],VIcon:x["a"],VLayout:y["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-54f03892.985b3778.js.map