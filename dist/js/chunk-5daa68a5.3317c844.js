(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5daa68a5"],{1718:function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),u=r("6bb5"),c=r("4e2b"),o=function e(t,r){Object(a["a"])(this,e),this.nome=t,this.uf=r},d=r("8141");r.d(t,"a",function(){return p});var p=function(e){function t(){return Object(a["a"])(this,t),Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new o(t.nome,t.uf),e.next=4,this._request.post("estados",r);case 4:return n=e.sent,e.abrupt("return",this.response("Estado adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("estados".concat(i));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("estados".concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"getCidades",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("estados/".concat(t,"/cidades"));case 3:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(d["a"])},"46fa":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),u=r("6bb5"),c=r("4e2b"),o=function e(t,r,n){Object(a["a"])(this,e),this.id=n,this.nome=t,this.cidades_id=r},d=r("8141");r.d(t,"a",function(){return p});var p=function(e){function t(){return Object(a["a"])(this,t),Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new o(t.nome,t.cidades_id),e.next=4,this._request.post("bairros",r);case 4:return n=e.sent,e.abrupt("return",this.response("Bairro adicionado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new o(t.nome,t.cidades_id,t.id),e.next=4,this._request.put("bairros/".concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Bairro editado com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("bairros".concat(i));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("bairros/".concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Bairro apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("bairros/".concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Bairro carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(d["a"])},"8d64":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("d225"),s=r("b0b4"),i=r("308d"),u=r("6bb5"),c=r("4e2b"),o=function e(t,r,n){Object(a["a"])(this,e),this.id=n,this.nome=t,this.estados_id=r},d=r("8141");r.d(t,"a",function(){return p});var p=function(e){function t(){return Object(a["a"])(this,t),Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"create",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new o(t.nome,t.estados_id),e.next=4,this._request.post("cidades",r);case 4:return n=e.sent,e.abrupt("return",this.response("Cidade adicionada com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new o(t.nome,t.estados_id,t.id),e.next=4,this._request.put("cidades/".concat(r.id),r);case 4:return n=e.sent,e.abrupt("return",this.response("Cidade editada com sucesso.",n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t,r,n,a,s){var i,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(t,r,n,a,s),e.next=4,this._request.get("cidades".concat(i));case 4:return u=e.sent,e.abrupt("return",this.response(!1,u.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,n,a,s){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("cidades/".concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cidade apagada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("cidades/".concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cidade carregada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"listAllByEstado",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=this.buildQueryParams({estados_id:t},!1,-1),e.next=4,this._request.get("cidades".concat(r));case 4:return n=e.sent,e.abrupt("return",this.response(!1,n.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getBairros",value:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("cidades/".concat(t,"/bairros"));case 3:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(d["a"])},f54a:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",[r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-text-field",{attrs:{rules:[e.formRules.default.required],label:"Nome",required:""},model:{value:e.formFields.nome,callback:function(t){e.$set(e.formFields,"nome",t)},expression:"formFields.nome"}})],1),r("v-flex",{attrs:{xs6:"",md3:""}},[r("v-select",{attrs:{items:e.estadosOptions,rules:[e.formRules.default.required],label:"Estado","item-text":"nome","item-value":"id",autofocus:!0,loading:e.estadosOptionsLoading,required:""},model:{value:e.estados_id,callback:function(t){e.estados_id=t},expression:"estados_id"}})],1),r("v-flex",{attrs:{xs6:"",md4:""}},[r("v-select",{attrs:{items:e.cidadesOptions,rules:[e.formRules.default.required],label:"Cidade","item-text":"nome","item-value":"id",loading:e.cidadesOptionsLoading,autofocus:!0,"no-data-text":"Selecione um estado",required:""},model:{value:e.formFields.cidades_id,callback:function(t){e.$set(e.formFields,"cidades_id",t)},expression:"formFields.cidades_id"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},a=[],s=(r("96cf"),r("3b8d")),i=r("cebc"),u=r("46fa"),c=r("8d64"),o=r("1718"),d=r("2f62"),p={data:function(){return{loading:!1,valid:!1,formFields:{nome:"",cidades_id:""},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},estados_id:"",estadosOptions:[],estadosOptionsLoading:!1,cidadesOptions:[],cidadesOptionsLoading:!1}},methods:Object(i["a"])({},Object(d["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{loadEntity:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),t=new u["a"],e.next=4,t.get(this.$route.params.id);case 4:r=e.sent,this.CLOSE_LOADER(),r.error?(this.SHOW_ALERT({type:"error",message:r.message}),this.$router.push({path:"/bairros"})):(this.formFields=r.data,this.estados_id=r.data.cidade.estado.id);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=8;break}return this.loading=!0,t=new u["a"],e.next=5,t.update(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),this.loading=!1;case 8:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadEstados:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.estadosOptionsLoading=!0,t=new o["a"],e.next=4,t.all();case 4:r=e.sent,this.estadosOptions=r.data.data,this.estadosOptionsLoading=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadCidades:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.cidadesOptionsLoading=!0,n=new c["a"],e.next=4,n.listAllByEstado(t);case 4:a=e.sent,this.cidadesOptions=a.data.data,r||(this.formFields.cidades_id=null),this.cidadesOptionsLoading=!1;case 8:case"end":return e.stop()}},e,this)}));function t(t,r){return e.apply(this,arguments)}return t}()}),watch:{estados_id:{handler:function(e,t){t&&this.loadCidades(this.estados_id)},deep:!0}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SET_TOOLBAR_BACK_URL("/bairros"),e.next=3,this.loadEntity();case 3:this.loadEstados(),this.loadCidades(this.estados_id,this.formFields.cidades_id);case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},h=p,l=r("2877"),f=r("6544"),v=r.n(f),m=r("8336"),b=r("b0af"),g=r("99d9"),w=r("a523"),O=r("ce7e6"),x=r("0e8f"),R=r("4bd4"),y=r("a722"),_=r("b56d"),k=r("9910"),j=r("2677"),q=Object(l["a"])(h,n,a,!1,null,null,null);t["default"]=q.exports;v()(q,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VContainer:w["a"],VDivider:O["a"],VFlex:x["a"],VForm:R["a"],VLayout:y["a"],VSelect:_["a"],VSpacer:k["a"],VTextField:j["a"]})}}]);
//# sourceMappingURL=chunk-5daa68a5.3317c844.js.map