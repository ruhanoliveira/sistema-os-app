(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59656b04"],{1266:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),o=r("6bb5"),c=r("013f"),u=r("4e2b"),l=r("bd86"),p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;Object(a["a"])(this,e),this.nome=t,this.cargo=r,this.telefone=n,this.email=s,this.clientes_id=i,this.id=o},h=r("8141");r.d(t,"a",function(){return d});var d=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return r=Object(i["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(c["a"])(r),"_baseApiUrl",""),r}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new p}},{key:"getBaseApiUrl",value:function(e){return"clientes/".concat(e,"/contatos")}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new p(t.nome,t.cargo,t.telefone,t.email,t.clientes_id),e.next=4,this._request.post(this.getBaseApiUrl(r),n);case 4:return a=e.sent,e.abrupt("return",this.response("Contato adicionado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new p(t.nome,t.cargo,t.telefone,t.email,t.clientes_id,t.id),e.next=4,this._request.put("".concat(this.getBaseApiUrl(r),"/").concat(n.id),n);case 4:return a=e.sent,e.abrupt("return",this.response("Contato editado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Contato carregado com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s,i){var o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,o=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this.getBaseApiUrl(i)).concat(o));case 4:return c=e.sent,e.abrupt("return",this.response(!1,c.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=this.buildQueryParams(!1,!1,-1),e.next=4,this.request().get("".concat(this.getBaseApiUrl(t)).concat(r));case 4:return n=e.sent,window.console.log("contato",n),e.abrupt("return",this.response(!1,n.data));case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Contato apagado com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()}]),t}(h["a"])},fb93:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-title",[r("v-btn",{attrs:{color:"primary",large:"",to:"/clientes/editar/"+this.getClienteID()+"/contatos/adicionar"}},[r("v-icon",{attrs:{dark:""}},[e._v("add")]),e._v("\n            Adicionar contato\n          ")],1)],1),r("v-divider"),r("v-card-text",[r("custom-data-table",{attrs:{headers:e.headers,"table-data":e.tableData,filters:e.filters,"default-sort":e.defaultSort},on:{onDeleteItem:function(t){return e.onDeleteItem(t)},onEditItem:function(t){return e.onEditItem(t)}},scopedSlots:e._u([{key:"filter",fn:function(t){return[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{label:"Nome",clearable:""},model:{value:t.filters.nome,callback:function(r){e.$set(t.filters,"nome",r)},expression:"props.filters.nome"}})],1)]}},{key:"items",fn:function(t){return[r("td",[e._v(e._s(t.item.nome))]),r("td",[e._v(e._s(t.item.cargo))]),r("td",[e._v(e._s(t.item.telefone))]),r("td",[e._v(e._s(t.item.email))])]}}]),model:{value:e.tableIpunt,callback:function(t){e.tableIpunt=t},expression:"tableIpunt"}})],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),o=r("efa1"),c=r("1266"),u=r("2f62"),l={components:{CustomDataTable:o["a"]},data:function(){return{filters:{nome:""},defaultSort:"nome",headers:[{text:"Nome",align:"left",sortable:!0,value:"nome"},{text:"Cargo",align:"left",sortable:!0,value:"cargo"},{text:"Telefone",align:"left",sortable:!1,value:"telefone"},{text:"E-mail",align:"left",sortable:!0,value:"email"}],tableData:null,tableIpunt:{}}},methods:Object(i["a"])({},Object(u["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{getData:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tableIpunt.filters,r=this.tableIpunt.pagination,n=new c["a"],e.next=5,n.list(t,r.page,r.rowsPerPage,r.sortBy,r.descending,this.getClienteID());case 5:a=e.sent,a.error?this.tableData=[]:this.tableData=a.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onDeleteItem:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),r=new c["a"],e.next=4,r.delete(t,this.getClienteID());case 4:n=e.sent,this.CLOSE_LOADER(),this.SHOW_ALERT({type:n.error?"error":"success",message:n.message}),n.error||this.getData();case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onEditItem:function(e){this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/contatos/editar/").concat(e)})},getClienteID:function(){return this.$route.params.id}}),watch:{tableIpunt:{handler:function(){this.getData()},deep:!0}},created:function(){this.SET_TOOLBAR_BACK_URL("/clientes")}},p=l,h=r("2877"),d=r("6544"),f=r.n(d),v=r("8336"),b=r("b0af"),m=r("99d9"),g=r("12b2"),w=r("a523"),_=r("ce7e6"),x=r("0e8f"),O=r("132d"),y=r("a722"),R=r("2677"),k=Object(h["a"])(p,n,a,!1,null,null,null);t["default"]=k.exports;f()(k,{VBtn:v["a"],VCard:b["a"],VCardText:m["b"],VCardTitle:g["a"],VContainer:w["a"],VDivider:_["a"],VFlex:x["a"],VIcon:O["a"],VLayout:y["a"],VTextField:R["a"]})}}]);
//# sourceMappingURL=chunk-59656b04.8cd87f92.js.map