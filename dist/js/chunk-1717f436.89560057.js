(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1717f436"],{"2e29":function(e,t,r){},8006:function(e,t,r){"use strict";r("96cf");var a=r("3b8d"),n=r("d225"),i=r("b0b4"),s=r("308d"),o=r("6bb5"),c=r("013f"),u=r("4e2b"),l=r("bd86"),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(n["a"])(this,e),this.id=r,this.descricao=t},p=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(n["a"])(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=Object(s["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(i))),Object(l["a"])(Object(c["a"])(r),"_baseApiUrl","cliente-atividades"),r}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"getModel",value:function(){return new d}},{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.descricao),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return a=e.sent,e.abrupt("return",this.response("Atividade adicionada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.descricao,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return a=e.sent,e.abrupt("return",this.response("Atividade editada com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Atividade carregada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,a,n,i){var s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=this.buildQueryParams(t,r,a,n,i),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(s));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,a,n,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Atividade apagada com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p["a"])},b4ea:function(e,t,r){"use strict";r("96cf");var a=r("3b8d"),n=r("d225"),i=r("b0b4"),s=r("308d"),o=r("6bb5"),c=r("013f"),u=r("4e2b"),l=r("bd86"),d=function e(t,r,a){Object(n["a"])(this,e),this.id=a,this.nome=t,this.funcionario_cargos_id=r},p=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(n["a"])(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=Object(s["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(i))),Object(l["a"])(Object(c["a"])(r),"_baseApiUrl","funcionarios"),r}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.nome,t.funcionario_cargos_id),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return a=e.sent,e.abrupt("return",this.response("Funcionário adicionado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.nome,t.funcionario_cargos_id,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return a=e.sent,e.abrupt("return",this.response("Funcionário editado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,a,n,i){var s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=this.buildQueryParams(t,r,a,n,i),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(s));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,a,n,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Funcionário apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p["a"])},b73d:function(e,t,r){"use strict";r("94a7"),r("2e29");var a=r("5368"),n=r("c341"),i=r("0789"),s=r("490a"),o=r("80d2"),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e};t["a"]={name:"v-switch",directives:{Touch:n["a"]},mixins:[a["a"]],props:{loading:{type:[Boolean,String],default:!1}},computed:{classes:function(){return{"v-input--selection-controls v-input--switch":!0}},switchData:function(){return this.setTextColor(this.loading?void 0:this.computedColor,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",this.$attrs),this.genRipple(this.setTextColor(this.computedColor,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",c({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",c({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(i["b"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(s["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===o["o"].left&&this.isActive||e.keyCode===o["o"].right&&!this.isActive)&&this.onChange()}}}},be4c:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[r("v-flex",[r("v-card",{attrs:{color:"white",width:"100%"}},[r("v-card-text",[r("v-form",{on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-switch",{attrs:{color:"primary",label:"Cadastro Ativo?"},model:{value:e.formFields.ativo,callback:function(t){e.$set(e.formFields,"ativo",t)},expression:"formFields.ativo"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-switch",{attrs:{color:"primary",label:"Possui pendência?"},model:{value:e.formFields.pendencia,callback:function(t){e.$set(e.formFields,"pendencia",t)},expression:"formFields.pendencia"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{rules:[e.formRules.default.required],label:"Razão Social",required:""},model:{value:e.formFields.razao_social,callback:function(t){e.$set(e.formFields,"razao_social",t)},expression:"formFields.razao_social"}})],1),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{label:"Nome Fantasia"},model:{value:e.formFields.nome_fantasia,callback:function(t){e.$set(e.formFields,"nome_fantasia",t)},expression:"formFields.nome_fantasia"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{mask:"##.###.###/####-##",label:"CNPJ","return-masked-value":""},model:{value:e.formFields.cnpj,callback:function(t){e.$set(e.formFields,"cnpj",t)},expression:"formFields.cnpj"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{mask:"###.###.###-##",label:"CPF","return-masked-value":""},model:{value:e.formFields.cpf,callback:function(t){e.$set(e.formFields,"cpf",t)},expression:"formFields.cpf"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{label:"Inscrição Estadual"},model:{value:e.formFields.inscricao_estadual,callback:function(t){e.$set(e.formFields,"inscricao_estadual",t)},expression:"formFields.inscricao_estadual"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{label:"Numero da Licença"},model:{value:e.formFields.numero_licenca,callback:function(t){e.$set(e.formFields,"numero_licenca",t)},expression:"formFields.numero_licenca"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{"return-masked-value":"",mask:"(##) ##########",label:"Telefone Principal"},model:{value:e.formFields.telefone_principal,callback:function(t){e.$set(e.formFields,"telefone_principal",t)},expression:"formFields.telefone_principal"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-text-field",{attrs:{label:"Fax"},model:{value:e.formFields.fax,callback:function(t){e.$set(e.formFields,"fax",t)},expression:"formFields.fax"}})],1),r("v-flex",{attrs:{xs6:"",md3:""}},[r("v-select",{attrs:{items:e.atividadesOptions,loading:e.atividadesOptionsLoad,label:"Atividade","item-text":"descricao","item-value":"id"},model:{value:e.formFields.cliente_atividades_id,callback:function(t){e.$set(e.formFields,"cliente_atividades_id",t)},expression:"formFields.cliente_atividades_id"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:"",md4:""}},[r("v-select",{attrs:{items:e.funcionariosOptions,label:"Vendedor","item-text":"nome","item-value":"id"},model:{value:e.formFields.funcionarios_id,callback:function(t){e.$set(e.formFields,"funcionarios_id",t)},expression:"formFields.funcionarios_id"}})],1),r("v-flex",{attrs:{xs12:"",md2:""}},[r("v-text-field",{attrs:{label:"Comissão (%)"},model:{value:e.formFields.porcentagem_comissao_vendedor,callback:function(t){e.$set(e.formFields,"porcentagem_comissao_vendedor",t)},expression:"formFields.porcentagem_comissao_vendedor"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:"",md6:""}},[r("v-textarea",{attrs:{label:"Observações"},model:{value:e.formFields.observacao,callback:function(t){e.$set(e.formFields,"observacao",t)},expression:"formFields.observacao"}})],1),r("v-flex",{attrs:{xs6:"",md6:""}},[r("v-textarea",{attrs:{label:"Informações de faturamento"},model:{value:e.formFields.informacao_faturamento,callback:function(t){e.$set(e.formFields,"informacao_faturamento",t)},expression:"formFields.informacao_faturamento"}})],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-switch",{attrs:{color:"primary",label:"Rastreabilidade MRI"},model:{value:e.formFields.rastreabilidade_mri,callback:function(t){e.$set(e.formFields,"rastreabilidade_mri",t)},expression:"formFields.rastreabilidade_mri"}})],1),r("v-flex",{attrs:{xs12:"",md3:""}},[r("v-switch",{attrs:{color:"primary",label:"Faturamento mensal"},model:{value:e.formFields.faturamento_mensal,callback:function(t){e.$set(e.formFields,"faturamento_mensal",t)},expression:"formFields.faturamento_mensal"}})],1),r("v-flex",{attrs:{xs12:"",md4:""}},[r("v-switch",{attrs:{color:"primary",label:"Contrato de manutenção"},model:{value:e.formFields.contrato_manutencao,callback:function(t){e.$set(e.formFields,"contrato_manutencao",t)},expression:"formFields.contrato_manutencao"}})],1)],1)],1)],1)],1),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},n=[],i=(r("96cf"),r("3b8d")),s=r("cebc"),o=r("e46e"),c=r("b4ea"),u=r("2f62"),l=r("8006"),d={data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},atividadesOptions:[],atividadesOptionsLoad:!1,funcionariosOptions:[],funcionariosOptionsLoad:!1}},methods:Object(s["a"])({},Object(u["b"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),{save:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=9;break}return this.loading=!0,t=new o["a"],e.next=5,t.create(this.formFields);case 5:r=e.sent,this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.$router.push({path:"/clientes/editar/".concat(r.data.id)}),this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadFuncionarios:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.funcionariosOptionsLoad=!0,t=new c["a"],e.next=4,t.all();case 4:r=e.sent,this.funcionariosOptions=r.data.data,this.funcionariosOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),loadAtividades:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.atividadesOptionsLoad=!0,t=new l["a"],e.next=4,t.all();case 4:r=e.sent,this.atividadesOptions=r.data.data,this.atividadesOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),created:function(){this.SET_TOOLBAR_BACK_URL("/clientes"),this.formFields=(new o["a"]).getModel(),this.loadFuncionarios(),this.loadAtividades()}},p=d,h=r("2877"),f=r("6544"),v=r.n(f),m=r("8336"),b=r("b0af"),_=r("99d9"),g=r("a523"),x=r("ce7e6"),w=r("0e8f"),k=r("4bd4"),y=r("a722"),O=r("b56d"),F=r("9910"),j=r("b73d"),R=r("2677"),A=r("a844"),C=Object(h["a"])(p,a,n,!1,null,null,null);t["default"]=C.exports;v()(C,{VBtn:m["a"],VCard:b["a"],VCardActions:_["a"],VCardText:_["b"],VContainer:g["a"],VDivider:x["a"],VFlex:w["a"],VForm:k["a"],VLayout:y["a"],VSelect:O["a"],VSpacer:F["a"],VSwitch:j["a"],VTextField:R["a"],VTextarea:A["a"]})},e46e:function(e,t,r){"use strict";r("96cf");var a=r("3b8d"),n=r("d225"),i=r("b0b4"),s=r("308d"),o=r("6bb5"),c=r("013f"),u=r("4e2b"),l=r("bd86"),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8],d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:2,p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null,h=arguments.length>11&&void 0!==arguments[11]&&arguments[11],f=arguments.length>12&&void 0!==arguments[12]?arguments[12]:null,v=arguments.length>13&&void 0!==arguments[13]?arguments[13]:null,m=arguments.length>14&&void 0!==arguments[14]&&arguments[14],b=arguments.length>15&&void 0!==arguments[15]&&arguments[15],_=arguments.length>16&&void 0!==arguments[16]&&arguments[16],g=arguments.length>17&&void 0!==arguments[17]?arguments[17]:null,x=arguments.length>18&&void 0!==arguments[18]?arguments[18]:null,w=arguments.length>19&&void 0!==arguments[19]?arguments[19]:null;Object(n["a"])(this,e),this.razao_social=t,this.nome_fantasia=r,this.cnpj=a,this.cpf=i,this.inscricao_estadual=s,this.telefone_principal=o,this.fax=c,this.numero_licenca=u,this.ativo=l,this.prospeccao=d,this.porcentagem_comissao_vendedor=p,this.pendencia=h,this.observacao=f,this.informacao_faturamento=v,this.rastreabilidade_mri=m,this.faturamento_mensal=b,this.contrato_manutencao=_,this.cliente_atividades_id=g,this.funcionarios_id=x,this.id=w},p=r("8141");r.d(t,"a",function(){return h});var h=function(e){function t(){var e,r;Object(n["a"])(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=Object(s["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(i))),Object(l["a"])(Object(c["a"])(r),"_baseApiUrl","clientes"),r}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"getModel",value:function(){return new d}},{key:"create",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.razao_social,t.nome_fantasia,t.cnpj,t.cpf,t.inscricao_estadual,t.telefone_principal,t.fax,t.numero_licensa,t.ativo,t.prospeccao,t.porcentagem_comissao_vendedor,t.pendencia,t.obervacao,t.informacao_faturamento,t.rastreabilidade_mri,t.faturamento_mensal,t.contrato_manutencao,t.cliente_atividades_id,t.funcionarios_id),e.next=4,this._request.post(this._baseApiUrl,r);case 4:return a=e.sent,e.abrupt("return",this.response("Cliente adicionado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=new d(t.razao_social,t.nome_fantasia,t.cnpj,t.cpf,t.inscricao_estadual,t.telefone_principal,t.fax,t.numero_licensa,t.ativo,t.prospeccao,t.porcentagem_comissao_vendedor,t.pendencia,t.observacao,t.informacao_faturamento,t.rastreabilidade_mri,t.faturamento_mensal,t.contrato_manutencao,t.cliente_atividades_id,t.funcionarios_id,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(r.id),r);case 4:return a=e.sent,e.abrupt("return",this.response("Cliente editado com sucesso.",a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cliente carregado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,r,a,n,i){var s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=this.buildQueryParams(t,r,a,n,i),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(s));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,r,a,n,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return r=e.sent,e.abrupt("return",this.response(!1,r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return r=e.sent,e.abrupt("return",this.response("Cliente apagado com sucesso.",r.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p["a"])}}]);
//# sourceMappingURL=chunk-1717f436.89560057.js.map