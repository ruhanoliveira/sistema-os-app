(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-596a4382"],{1266:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),o=r("6bb5"),c=r("013f"),u=r("4e2b"),l=r("bd86"),p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;Object(a["a"])(this,e),this.nome=t,this.cargo=r,this.telefone=n,this.email=s,this.clientes_id=i,this.id=o},d=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(a["a"])(this,t);for(var n=arguments.length,s=new Array(n),u=0;u<n;u++)s[u]=arguments[u];return r=Object(i["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(c["a"])(r),"_baseApiUrl",""),r}return Object(u["a"])(t,e),Object(s["a"])(t,[{key:"getModel",value:function(){return new p}},{key:"getBaseApiUrl",value:function(e){return"clientes/".concat(e,"/contatos")}},{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new p(t.nome,t.cargo,t.telefone,t.email,t.clientes_id),e.next=4,this._request.post(this.getBaseApiUrl(r),n);case 4:return a=e.sent,e.abrupt("return",this.response("Contato adicionado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new p(t.nome,t.cargo,t.telefone,t.email,t.clientes_id,t.id),e.next=4,this._request.put("".concat(this.getBaseApiUrl(r),"/").concat(n.id),n);case 4:return a=e.sent,e.abrupt("return",this.response("Contato editado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Contato carregado com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s,i){var o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,o=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("".concat(this.getBaseApiUrl(i)).concat(o));case 4:return c=e.sent,e.abrupt("return",this.response(!1,c.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=this.buildQueryParams(!1,!1,-1),e.next=4,this.request().get("".concat(this.getBaseApiUrl(t)).concat(r));case 4:return n=e.sent,window.console.log("contato",n),e.abrupt("return",this.response(!1,n.data));case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this.getBaseApiUrl(r),"/").concat(t));case 3:return n=e.sent,e.abrupt("return",this.response("Contato apagado com sucesso.",n.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t,r){return e.apply(this,arguments)}return t}()}]),t}(d["a"])},b922:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{label:"Nome",rules:[e.formRules.default.required],required:""},model:{value:e.formFields.nome,callback:function(t){e.$set(e.formFields,"nome",t)},expression:"formFields.nome"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{label:"E-mail"},model:{value:e.formFields.email,callback:function(t){e.$set(e.formFields,"email",t)},expression:"formFields.email"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{label:"Cargo"},model:{value:e.formFields.cargo,callback:function(t){e.$set(e.formFields,"cargo",t)},expression:"formFields.cargo"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{label:"Telefone","return-masked-value":"",mask:"(##) ##########"},model:{value:e.formFields.telefone,callback:function(t){e.$set(e.formFields,"telefone",t)},expression:"formFields.telefone"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),o=r("1266"),c=r("2f62"),u={data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}}}},methods:Object(i["a"])({},Object(c["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{loadEntity:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),t=new o["a"],e.next=4,t.get(this.$route.params.cliente_contatos_id,this.$route.params.id);case 4:r=e.sent,this.CLOSE_LOADER(),r.error?(this.SHOW_ALERT({type:"error",message:r.message}),this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/contatos")})):this.formFields=r.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=9;break}return this.loading=!0,t=new o["a"],e.next=5,t.update(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.$router.push({path:"/clientes/editar/".concat(this.getClienteID(),"/contatos")}),this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getClienteID:function(){return this.$route.params.id}}),created:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SET_TOOLBAR_BACK_URL("/clientes/editar/".concat(this.getClienteID(),"/contatos")),e.next=3,this.loadEntity();case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},l=u,p=r("2877"),d=r("6544"),h=r.n(d),f=r("8336"),v=r("b0af"),m=r("99d9"),g=r("a523"),b=r("ce7e6"),w=r("0e8f"),x=r("4bd4"),O=r("a722"),y=r("9910"),R=r("2677"),k=Object(p["a"])(l,n,a,!1,null,null,null);t["default"]=k.exports;h()(k,{VBtn:f["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VContainer:g["a"],VDivider:b["a"],VFlex:w["a"],VForm:x["a"],VLayout:O["a"],VSpacer:y["a"],VTextField:R["a"]})}}]);
//# sourceMappingURL=chunk-596a4382.24716af8.js.map