(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-537ec6ac"],{"3d0b":function(e,t,a){"use strict";a("96cf");var r=a("3b8d"),n=a("d225"),i=a("b0b4"),s=a("308d"),o=a("6bb5"),c=a("013f"),u=a("4e2b"),l=a("bd86"),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,p=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null,h=arguments.length>11&&void 0!==arguments[11]?arguments[11]:null,_=arguments.length>12&&void 0!==arguments[12]?arguments[12]:null,v=arguments.length>13&&void 0!==arguments[13]?arguments[13]:null,f=arguments.length>14&&void 0!==arguments[14]?arguments[14]:null,b=arguments.length>15&&void 0!==arguments[15]?arguments[15]:null,m=arguments.length>16&&void 0!==arguments[16]?arguments[16]:null,g=arguments.length>17&&void 0!==arguments[17]?arguments[17]:null,w=arguments.length>18&&void 0!==arguments[18]?arguments[18]:null,x=arguments.length>19&&void 0!==arguments[19]?arguments[19]:null;Object(n["a"])(this,e),this.ordens_servico_id=t,this.manifesto_tipo=a,this.manifesto_tipos_operacao_id=r,this.gerador_id=i,this.gerador_observacao=s,this.clientes_id=o,this.numero_manifesto=c,this.motorista_id=u,this.veiculos_id=l,this.residuos_id=d,this.residuo_acondicionamentos_id=p,this.residuo_quantidade=h,this.residuo_unidade=_,this.residuo_estado_fisico=v,this.receptores_id=f,this.receptor_observacao=b,this.transportadores_id=m,this.data_geracao=g,this.data_recebimento=w,this.id=x},p=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;Object(n["a"])(this,e),this.balanca_data_entrada=t,this.balanca_data_saida=a,this.balanca_hora_entrada=r,this.balanca_hora_saida=i,this.balanca_peso_entrada=s,this.balanca_peso_saida=o,this.balanca_unidade=c,this.balanca_peso_calculado=u,this.id=l},h=a("8141");a.d(t,"a",function(){return _});var _=function(e){function t(){var e,a;Object(n["a"])(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return a=Object(s["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(i))),Object(l["a"])(Object(c["a"])(a),"_baseApiUrl","manifestos"),a}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"getModel",value:function(){var e=new d;return e}},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new d(t.ordens_servico_id,t.manifesto_tipo,t.manifesto_tipos_operacao_id,t.gerador_id,t.gerador_observacao,t.clientes_id,t.numero_manifesto,t.motorista_id,t.veiculos_id,t.residuos_id,t.residuo_acondicionamentos_id,t.residuo_quantidade,t.residuo_unidade,t.residuo_estado_fisico,t.receptores_id,t.receptor_observacao,t.transportadores_id,t.data_geracao,t.data_recebimento),e.next=4,this._request.post(this._baseApiUrl,a);case 4:return r=e.sent,e.abrupt("return",this.response("Manifesto adicionado com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new d(t.ordens_servico_id,t.manifesto_tipo,t.manifesto_tipos_operacao_id,t.gerador_id,t.gerador_observacao,t.clientes_id,t.numero_manifesto,t.motorista_id,t.veiculos_id,t.residuos_id,t.residuo_acondicionamentos_id,t.residuo_quantidade,t.residuo_unidade,t.residuo_estado_fisico,t.receptores_id,t.receptor_observacao,t.transportadores_id,t.data_geracao,t.data_recebimento,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(a.id),a);case 4:return r=e.sent,e.abrupt("return",this.response("Manifesto editado com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateBlanca",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new p(t.balanca_data_entrada,t.balanca_data_saida,t.balanca_hora_entrada,t.balanca_hora_saida,t.balanca_peso_entrada,t.balanca_peso_saida,t.balanca_unidade,t.balanca_peso_calculado,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(a.id),a);case 4:return r=e.sent,e.abrupt("return",this.response("Manifesto editado com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Manifesto carregado com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getBalanca",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Manifesto carregado com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,a,r,n,i){var s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=this.buildQueryParams(t,a,r,n,i),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(s));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,a,r,n,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return a=e.sent,e.abrupt("return",this.response(!1,a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Manifesto apagado com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(h["a"])},c6c6:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{color:"white",width:"100%"}},[a("v-card-title",[a("v-btn",{attrs:{color:"primary",large:"",to:"manifestos/adicionar"}},[a("v-icon",{attrs:{dark:""}},[e._v("add")]),e._v("\n            Adicionar manifesto\n          ")],1)],1),a("v-divider"),a("v-card-text",[a("custom-data-table",{attrs:{headers:e.headers,"table-data":e.tableData,filters:e.filters,"default-sort":e.defaultSort,"default-descending":e.defaultDescending},on:{onDeleteItem:function(t){return e.onDeleteItem(t)},onEditItem:function(t){return e.onEditItem(t)}},scopedSlots:e._u([{key:"filter",fn:function(t){return[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"Cliente",clearable:""},model:{value:t.filters.cliente_nome,callback:function(a){e.$set(t.filters,"cliente_nome",a)},expression:"props.filters.cliente_nome"}})],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-text-field",{attrs:{label:"CNPJ",clearable:"",mask:"##.###.###/####-##","return-masked-value":""},model:{value:t.filters.cliente_cnpj,callback:function(a){e.$set(t.filters,"cliente_cnpj",a)},expression:"props.filters.cliente_cnpj"}})],1)]}},{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.data_geracao))]),a("td",[e._v(e._s(t.item.manifesto_tipo))]),a("td",[e._v(e._s(t.item.numero_manifesto))]),a("td",[e._v(e._s(t.item.tipo_operacao?t.item.tipo_operacao.descricao:""))]),a("td",[e._v(e._s(t.item.cliente?t.item.cliente.razao_social:""))]),a("td",[e._v(e._s(t.item.gerador?t.item.gerador.cliente.razao_social:""))]),a("td",[e._v(e._s(t.item.receptor?t.item.receptor.razao_social:""))]),a("td",[e._v(e._s(t.item.residuo?t.item.residuo.grupo:""))]),a("td",[e._v(e._s(t.item.veiculo?t.item.veiculo.placa:""))])]}}]),model:{value:e.tableIpunt,callback:function(t){e.tableIpunt=t},expression:"tableIpunt"}})],1)],1)],1)],1)],1)},n=[],i=(a("96cf"),a("3b8d")),s=a("cebc"),o=a("efa1"),c=a("3d0b"),u=a("2f62"),l={components:{CustomDataTable:o["a"]},data:function(){return{filters:{cliente_nome:""},defaultSort:"data_geracao",defaultDescending:!0,headers:[{text:"Data Geração",align:"left",sortable:!0,value:"data_criacao"},{text:"Tipo",align:"left",sortable:!1,value:"manifesto_tipo"},{text:"Numero",align:"left",sortable:!0,value:"numero_manifesto"},{text:"Operação",align:"left",sortable:!0,value:"tipo_operacao"},{text:"Cliente",align:"left",sortable:!1,value:"cliente_nome"},{text:"Gerador",align:"left",sortable:!1,value:"gerador_nome"},{text:"Receptor",align:"left",sortable:!1,value:"receptor_nome"},{text:"Resíduo",align:"left",sortable:!1,value:"residuo"},{text:"Veículo",align:"left",sortable:!1,value:"veiculo"}],tableData:null,tableIpunt:{}}},methods:Object(s["a"])({},Object(u["c"])(["SHOW_ALERT","SHOW_LOADER","CLOSE_LOADER"]),{getData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tableIpunt.filters,a=this.tableIpunt.pagination,r=new c["a"],e.next=5,r.list(t,a.page,a.rowsPerPage,a.sortBy,a.descending);case 5:n=e.sent,n.error?this.tableData=[]:this.tableData=n.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onDeleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),a=new c["a"],e.next=4,a.delete(t);case 4:r=e.sent,this.CLOSE_LOADER(),this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.getData();case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onEditItem:function(e){this.$router.push({path:"/manifestos/editar/".concat(e,"/detalhes")})}}),watch:{tableIpunt:{handler:function(){this.getData()},deep:!0}}},d=l,p=a("2877"),h=a("6544"),_=a.n(h),v=a("8336"),f=a("b0af"),b=a("99d9"),m=a("12b2"),g=a("a523"),w=a("ce7e6"),x=a("0e8f"),O=a("132d"),k=a("a722"),y=a("2677"),R=Object(p["a"])(d,r,n,!1,null,null,null);t["default"]=R.exports;_()(R,{VBtn:v["a"],VCard:f["a"],VCardText:b["b"],VCardTitle:m["a"],VContainer:g["a"],VDivider:w["a"],VFlex:x["a"],VIcon:O["a"],VLayout:k["a"],VTextField:y["a"]})}}]);
//# sourceMappingURL=chunk-537ec6ac.7d32075a.js.map