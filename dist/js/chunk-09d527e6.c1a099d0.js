(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09d527e6"],{"0fe3":function(e,a,t){"use strict";t("96cf");var r=t("3b8d"),n=t("d225"),s=t("b0b4"),i=t("308d"),o=t("6bb5"),c=t("013f"),d=t("4e2b"),l=t("bd86"),u=function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,u=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null,p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:null,v=arguments.length>12&&void 0!==arguments[12]?arguments[12]:null,_=arguments.length>13&&void 0!==arguments[13]?arguments[13]:null,m=arguments.length>14&&void 0!==arguments[14]?arguments[14]:null,f=arguments.length>15&&void 0!==arguments[15]?arguments[15]:null,b=arguments.length>16&&void 0!==arguments[16]?arguments[16]:null,g=arguments.length>17&&void 0!==arguments[17]?arguments[17]:null,x=arguments.length>18&&void 0!==arguments[18]?arguments[18]:null,w=arguments.length>19&&void 0!==arguments[19]?arguments[19]:null,O=arguments.length>20&&void 0!==arguments[20]?arguments[20]:null;Object(n["a"])(this,e),this.codigo_os=a,this.data_criacao=t,this.ordem_servico_tipos_id=r,this.funcionarios_id=s,this.clientes_id=i,this.transportadores_id=o,this.atracacao_id=c,this.atracacao_observacao=d,this.equipamentos_id=l,this.motorista_id=u,this.veiculos_id=h,this.residuos_id=p,this.residuo_quantidade=v,this.residuo_unidade=_,this.gerador_id=m,this.gerador_observacao=f,this.receptores_id=b,this.receptor_observacao=g,this.servico_observacao=x,this.empresa_terceirizada=w,this.id=O},h=function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,d=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;Object(n["a"])(this,e),this.balanca_data_entrada=a,this.balanca_data_saida=t,this.balanca_hora_entrada=r,this.balanca_hora_saida=s,this.balanca_peso_entrada=i,this.balanca_peso_saida=o,this.balanca_unidade=c,this.balanca_peso_calculado=d,this.id=l},p=function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;Object(n["a"])(this,e),this.km_inicial=a,this.km_final=t,this.hora_inicio=r,this.hora_fim=s,this.comentarios=i,this.nota_fiscal_numero=o,this.id=c},v=t("8141");t.d(a,"a",function(){return _});var _=function(e){function a(){var e,t;Object(n["a"])(this,a);for(var r=arguments.length,s=new Array(r),d=0;d<r;d++)s[d]=arguments[d];return t=Object(i["a"])(this,(e=Object(o["a"])(a)).call.apply(e,[this].concat(s))),Object(l["a"])(Object(c["a"])(t),"_baseApiUrl","ordens-servico"),Object(l["a"])(Object(c["a"])(t),"defaultValues",{transportadores_id:1}),t}return Object(d["a"])(a,e),Object(s["a"])(a,[{key:"getModel",value:function(){var e=new u;return e.transportadores_id=this.defaultValues.transportadores_id,e}},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=new u(a.codigo_os,a.data_criacao,a.ordem_servico_tipos_id,a.funcionarios_id,a.clientes_id,a.transportadores_id,a.atracacao_id,a.atracacao_observacao,a.equipamentos_id,a.motorista_id,a.veiculos_id,a.residuos_id,a.residuo_quantidade,a.residuo_unidade,a.gerador_id,a.gerador_observacao,a.receptores_id,a.receptor_observacao,a.servico_observacao,a.empresa_terceirizada),e.next=4,this._request.post(this._baseApiUrl,t);case 4:return r=e.sent,e.abrupt("return",this.response("Ordem de serviço adicionada com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function a(a){return e.apply(this,arguments)}return a}()},{key:"update",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=new u(a.codigo_os,a.data_criacao,a.ordem_servico_tipos_id,a.funcionarios_id,a.clientes_id,a.transportadores_id,a.atracacao_id,a.atracacao_observacao,a.equipamentos_id,a.motorista_id,a.veiculos_id,a.residuos_id,a.residuo_quantidade,a.residuo_unidade,a.gerador_id,a.gerador_observacao,a.receptores_id,a.receptor_observacao,a.servico_observacao,a.empresa_terceirizada,a.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(t.id),t);case 4:return r=e.sent,e.abrupt("return",this.response("Ordem de serviço editada com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function a(a){return e.apply(this,arguments)}return a}()},{key:"updateBlanca",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=new h(a.balanca_data_entrada,a.balanca_data_saida,a.balanca_hora_entrada,a.balanca_hora_saida,a.balanca_peso_entrada,a.balanca_peso_saida,a.balanca_unidade,a.balanca_peso_calculado,a.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(t.id),t);case 4:return r=e.sent,e.abrupt("return",this.response("Ordem de serviço editada com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function a(a){return e.apply(this,arguments)}return a}()},{key:"updatePosExecucao",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=new p(a.km_inicial,a.km_final,a.hora_inicio,a.hora_fim,a.comentarios,a.nota_fiscal_numero,a.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(t.id),t);case 4:return r=e.sent,e.abrupt("return",this.response("Ordem de serviço editada com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function a(a){return e.apply(this,arguments)}return a}()},{key:"get",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(a));case 3:return t=e.sent,e.abrupt("return",this.response("Ordem de serviço carregada com sucesso.",t.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function a(a){return e.apply(this,arguments)}return a}()},{key:"getBalanca",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(a));case 3:return t=e.sent,e.abrupt("return",this.response("Ordem de serviço carregada com sucesso.",t.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function a(a){return e.apply(this,arguments)}return a}()},{key:"getPosExecucao",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(a));case 3:return t=e.sent,e.abrupt("return",this.response("Ordem de serviço carregada com sucesso.",t.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function a(a){return e.apply(this,arguments)}return a}()},{key:"list",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a,t,r,n,s){var i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i=this.buildQueryParams(a,t,r,n,s),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(i));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function a(a,t,r,n,s){return e.apply(this,arguments)}return a}()},{key:"all",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var a,t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(a));case 4:return t=e.sent,e.abrupt("return",this.response(!1,t.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function a(){return e.apply(this,arguments)}return a}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(a){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(a));case 3:return t=e.sent,e.abrupt("return",this.response("Ordem de serviço apagada com sucesso.",t.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function a(a){return e.apply(this,arguments)}return a}()}]),a}(v["a"])},"3d3c":function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",{staticStyle:{padding:"0px"},attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"justify-center":"","align-center":""}},[t("v-flex",[t("v-card",{attrs:{color:"white",width:"100%"}},[t("v-card-text",[t("v-form",{ref:"form",on:{submit:function(e){e.preventDefault()}},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-container",[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",md2:""}},[t("v-text-field",{attrs:{mask:"##/##/####",placeholder:"dd/mm/aaaa",label:"Data Entrada","return-masked-value":""},model:{value:e.formFields.balanca_data_entrada,callback:function(a){e.$set(e.formFields,"balanca_data_entrada",a)},expression:"formFields.balanca_data_entrada"}})],1),t("v-flex",{attrs:{xs12:"",md2:""}},[t("v-text-field",{attrs:{mask:"##:##",placeholder:"HH:mm",label:"Hora Entrada","return-masked-value":""},model:{value:e.formFields.balanca_hora_entrada,callback:function(a){e.$set(e.formFields,"balanca_hora_entrada",a)},expression:"formFields.balanca_hora_entrada"}})],1),t("v-flex",{attrs:{xs12:"",md2:""}},[t("v-text-field",{attrs:{mask:"##/##/####",placeholder:"dd/mm/aaaa",label:"Data Saida","return-masked-value":""},model:{value:e.formFields.balanca_data_saida,callback:function(a){e.$set(e.formFields,"balanca_data_saida",a)},expression:"formFields.balanca_data_saida"}})],1),t("v-flex",{attrs:{xs12:"",md2:""}},[t("v-text-field",{attrs:{mask:"##:##",placeholder:"HH:mm",label:"Hora Saida","return-masked-value":""},model:{value:e.formFields.balanca_hora_saida,callback:function(a){e.$set(e.formFields,"balanca_hora_saida",a)},expression:"formFields.balanca_hora_saida"}})],1)],1),t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xs12:"",md2:""}},[t("v-select",{attrs:{items:e.residuoUnidadesOptions,loading:e.residuoUnidadesOptionsLoad,label:"Unidade","item-text":"descricao","item-value":"descricao"},model:{value:e.formFields.balanca_unidade,callback:function(a){e.$set(e.formFields,"balanca_unidade",a)},expression:"formFields.balanca_unidade"}})],1),t("v-flex",{attrs:{xs12:"",md2:""}},[t("custom-decimal-field",{attrs:{label:"Peso Entrada",precision:3,suffix:e.formFields.balanca_unidade},model:{value:e.formFields.balanca_peso_entrada,callback:function(a){e.$set(e.formFields,"balanca_peso_entrada",a)},expression:"formFields.balanca_peso_entrada"}})],1),t("v-flex",{attrs:{xs12:"",md2:""}},[t("custom-decimal-field",{attrs:{label:"Peso Saída",precision:3,suffix:e.formFields.balanca_unidade},model:{value:e.formFields.balanca_peso_saida,callback:function(a){e.$set(e.formFields,"balanca_peso_saida",a)},expression:"formFields.balanca_peso_saida"}})],1),t("v-flex",{attrs:{xs12:"",md2:""}},[t("v-text-field",{attrs:{disabled:"",label:"Peso Calculado"},model:{value:e.formFields.balanca_peso_calculado,callback:function(a){e.$set(e.formFields,"balanca_peso_calculado",a)},expression:"formFields.balanca_peso_calculado"}})],1)],1)],1)],1)],1),t("v-divider"),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"primary",flat:"",large:"",loading:e.loading},on:{click:e.save}},[e._v("\n            Salvar\n          ")])],1)],1)],1)],1)],1)},n=[],s=(t("96cf"),t("3b8d")),i=t("cebc"),o=t("0fe3"),c=t("8dc8"),d=t("6656"),l=t("2f62"),u={components:{CustomDecimalField:d["a"]},data:function(){return{loading:!1,valid:!1,formFields:{},formRules:{default:{required:function(e){return!!e||"Campo obrigatório"}}},residuoUnidadesOptions:null,residuoUnidadesOptionsLoad:!1}},methods:Object(i["a"])({},Object(l["c"])(["SHOW_ALERT","SET_TOOLBAR_BACK_URL","SHOW_LOADER","CLOSE_LOADER"]),{loadEntity:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var a,t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),a=new o["a"],e.next=4,a.getBalanca(this.getID());case 4:t=e.sent,this.CLOSE_LOADER(),t.error?(this.SHOW_ALERT({type:"error",message:t.message}),this.$router.push({path:"/ordens-servico"})):(this.formFields=t.data,this.dataLoaded=!0);case 7:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),getID:function(){return this.$route.params.id},save:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var a,t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.valid){e.next=10;break}return this.loading=!0,a=new o["a"],e.next=5,a.updateBlanca(this.formFields);case 5:t=e.sent,this.SHOW_ALERT({type:t.error?"error":"success",message:t.message}),this.loading=!1,e.next=11;break;case 10:this.$refs.form.validate();case 11:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),loadResiduoUnidades:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var a,t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.residuoUnidadesOptionsLoad=!0,a=new c["a"],e.next=4,a.all();case 4:t=e.sent,this.residuoUnidadesOptions=t.data,this.residuoUnidadesOptionsLoad=!1;case 7:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),setPesoCalculado:function(){this.formFields.balanca_peso_calculado=this.formFields.balanca_peso_entrada-this.formFields.balanca_peso_saida}}),watch:{"formFields.balanca_peso_entrada":function(){this.setPesoCalculado()},"formFields.balanca_peso_saida":function(){this.setPesoCalculado()}},created:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SET_TOOLBAR_BACK_URL("/ordens-servico"),e.next=3,this.loadEntity();case 3:this.loadResiduoUnidades();case 4:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}()},h=u,p=t("2877"),v=t("6544"),_=t.n(v),m=t("8336"),f=t("b0af"),b=t("99d9"),g=t("a523"),x=t("ce7e6"),w=t("0e8f"),O=t("4bd4"),k=t("a722"),R=t("b56d"),y=t("9910"),F=t("2677"),j=Object(p["a"])(h,r,n,!1,null,null,null);a["default"]=j.exports;_()(j,{VBtn:m["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VContainer:g["a"],VDivider:x["a"],VFlex:w["a"],VForm:O["a"],VLayout:k["a"],VSelect:R["a"],VSpacer:y["a"],VTextField:F["a"]})}}]);
//# sourceMappingURL=chunk-09d527e6.c1a099d0.js.map