(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09eb4192"],{"0fe3":function(e,t,a){"use strict";a("96cf");var r=a("3b8d"),n=a("d225"),i=a("b0b4"),s=a("308d"),o=a("6bb5"),c=a("013f"),u=a("4e2b"),l=a("bd86"),d=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null,d=arguments.length>9&&void 0!==arguments[9]?arguments[9]:null,h=arguments.length>10&&void 0!==arguments[10]?arguments[10]:null,p=arguments.length>11&&void 0!==arguments[11]?arguments[11]:null,v=arguments.length>12&&void 0!==arguments[12]?arguments[12]:null,_=arguments.length>13&&void 0!==arguments[13]?arguments[13]:null,b=arguments.length>14&&void 0!==arguments[14]?arguments[14]:null,m=arguments.length>15&&void 0!==arguments[15]?arguments[15]:null,f=arguments.length>16&&void 0!==arguments[16]?arguments[16]:null,g=arguments.length>17&&void 0!==arguments[17]?arguments[17]:null,w=arguments.length>18&&void 0!==arguments[18]?arguments[18]:null,x=arguments.length>19&&void 0!==arguments[19]?arguments[19]:null,O=arguments.length>20&&void 0!==arguments[20]?arguments[20]:null,k=arguments.length>21&&void 0!==arguments[21]?arguments[21]:null,y=arguments.length>22&&void 0!==arguments[22]?arguments[22]:null,R=arguments.length>23&&void 0!==arguments[23]?arguments[23]:null;Object(n["a"])(this,e),this.codigo_os=t,this.data_criacao=a,this.ordem_servico_tipos_id=r,this.funcionarios_id=i,this.clientes_id=s,this.atracacao_id=o,this.atracacao_observacao=c,this.equipamentos_id=u,this.motorista_id=l,this.veiculos_id=d,this.km_inicial=h,this.km_final=p,this.residuos_id=v,this.residuo_quantidade=_,this.residuo_unidade=b,this.gerador_id=m,this.gerador_observacao=f,this.receptores_id=g,this.receptor_observacao=w,this.servico_observacao=x,this.empresa_terceirizada=O,this.comentarios=k,this.nota_fiscal_numero=y,this.id=R},h=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;Object(n["a"])(this,e),this.balanca_data_entrada=t,this.balanca_data_saida=a,this.balanca_hora_entrada=r,this.balanca_hora_saida=i,this.balanca_peso_entrada=s,this.balanca_peso_saida=o,this.balanca_unidade=c,this.balanca_peso_calculado=u,this.id=l},p=a("8141");a.d(t,"a",function(){return v});var v=function(e){function t(){var e,a;Object(n["a"])(this,t);for(var r=arguments.length,i=new Array(r),u=0;u<r;u++)i[u]=arguments[u];return a=Object(s["a"])(this,(e=Object(o["a"])(t)).call.apply(e,[this].concat(i))),Object(l["a"])(Object(c["a"])(a),"_baseApiUrl","ordens-servico"),a}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"getModel",value:function(){return new d}},{key:"create",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new d(t.codigo_os,t.data_criacao,t.ordem_servico_tipos_id,t.funcionarios_id,t.clientes_id,t.atracacao_id,t.atracacao_observacao,t.equipamentos_id,t.motorista_id,t.veiculos_id,t.km_inicial,t.km_final,t.residuos_id,t.residuo_quantidade,t.residuo_unidade,t.gerador_id,t.gerador_observacao,t.receptores_id,t.receptor_observacao,t.servico_observacao,t.empresa_terceirizada,t.nota_fiscal_numero,t.comentarios),e.next=4,this._request.post(this._baseApiUrl,a);case 4:return r=e.sent,e.abrupt("return",this.response("Ordem de serviço adicionada com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new d(t.codigo_os,t.data_criacao,t.ordem_servico_tipos_id,t.funcionarios_id,t.clientes_id,t.atracacao_id,t.atracacao_observacao,t.equipamentos_id,t.motorista_id,t.veiculos_id,t.km_inicial,t.km_final,t.residuos_id,t.residuo_quantidade,t.residuo_unidade,t.gerador_id,t.gerador_observacao,t.receptores_id,t.receptor_observacao,t.servico_observacao,t.empresa_terceirizada,t.comentarios,t.nota_fiscal_numero,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(a.id),a);case 4:return r=e.sent,e.abrupt("return",this.response("Ordem de serviço editada com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateBlanca",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=new h(t.balanca_data_entrada,t.balanca_data_saida,t.balanca_hora_entrada,t.balanca_hora_saida,t.balanca_peso_entrada,t.balanca_peso_saida,t.balanca_unidade,t.balanca_peso_calculado,t.id),e.next=4,this._request.put("".concat(this._baseApiUrl,"/").concat(a.id),a);case 4:return r=e.sent,e.abrupt("return",this.response("Ordem de serviço editada com sucesso.",r.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"get",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Ordem de serviço carregada com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getBalanca",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.get("".concat(this._baseApiUrl,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Ordem de serviço carregada com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"list",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,a,r,n,i){var s,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=this.buildQueryParams(t,a,r,n,i),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(s));case 4:return o=e.sent,e.abrupt("return",this.response(!1,o.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t,a,r,n,i){return e.apply(this,arguments)}return t}()},{key:"all",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.buildQueryParams(!1,!1,-1),e.next=4,this._request.get("".concat(this._baseApiUrl).concat(t));case 4:return a=e.sent,e.abrupt("return",this.response(!1,a.data));case 8:return e.prev=8,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this._request.delete("".concat(this._baseApiUrl,"/").concat(t));case 3:return a=e.sent,e.abrupt("return",this.response("Ordem de serviço apagada com sucesso.",a.data));case 7:return e.prev=7,e.t0=e["catch"](0),e.abrupt("return",this.response(!1,!1,e.t0));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}]),t}(p["a"])},e992:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",{attrs:{color:"white",width:"100%"}},[a("v-card-title",[a("v-btn",{attrs:{color:"primary",large:"",to:"ordens-servico/adicionar"}},[a("v-icon",{attrs:{dark:""}},[e._v("add")]),e._v("\n            Adicionar O.S\n          ")],1)],1),a("v-divider"),a("v-card-text",[a("custom-data-table",{attrs:{headers:e.headers,"table-data":e.tableData,filters:e.filters,"default-sort":e.defaultSort},on:{onDeleteItem:function(t){return e.onDeleteItem(t)},onEditItem:function(t){return e.onEditItem(t)}},scopedSlots:e._u([{key:"filter",fn:function(t){return[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{label:"Cliente",clearable:""},model:{value:t.filters.cliente_nome,callback:function(a){e.$set(t.filters,"cliente_nome",a)},expression:"props.filters.cliente_nome"}})],1),a("v-flex",{attrs:{xs12:"",md3:""}},[a("v-text-field",{attrs:{label:"CNPJ",clearable:"",mask:"##.###.###/####-##","return-masked-value":""},model:{value:t.filters.cliente_cnpj,callback:function(a){e.$set(t.filters,"cliente_cnpj",a)},expression:"props.filters.cliente_cnpj"}})],1)]}},{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.data_criacao))]),a("td",[e._v(e._s(t.item.id))]),a("td",[e._v(e._s(t.item.tipo?t.item.tipo.descricao:""))]),a("td",[e._v(e._s(t.item.cliente?t.item.cliente.razao_social:""))]),a("td",[e._v(e._s(t.item.gerador?t.item.gerador.cliente.razao_social:""))]),a("td",[e._v(e._s(t.item.receptor?t.item.receptor.razao_social:""))]),a("td",[e._v(e._s(t.item.residuo?t.item.residuo.grupo:""))]),a("td",[e._v(e._s(t.item.veiculo?t.item.veiculo.placa:""))])]}}]),model:{value:e.tableIpunt,callback:function(t){e.tableIpunt=t},expression:"tableIpunt"}})],1)],1)],1)],1)],1)},n=[],i=(a("96cf"),a("3b8d")),s=a("cebc"),o=a("efa1"),c=a("0fe3"),u=a("2f62"),l={components:{CustomDataTable:o["a"]},data:function(){return{filters:{cliente_nome:"",cnpj:""},defaultSort:"id",defaultDescending:!0,headers:[{text:"Data",align:"left",sortable:!0,value:"data_criacao"},{text:"Numero",align:"left",sortable:!0,value:"numero"},{text:"Tipo",align:"left",sortable:!0,value:"tipo"},{text:"Cliente",align:"left",sortable:!1,value:"cliente_nome"},{text:"Gerador",align:"left",sortable:!0,value:"gerador_nome"},{text:"Receptor",align:"left",sortable:!1,value:"receptor_nome"},{text:"Resíduo",align:"left",sortable:!1,value:"residuo"},{text:"Veículo",align:"left",sortable:!1,value:"veiculo"}],tableData:null,tableIpunt:{}}},methods:Object(s["a"])({},Object(u["c"])(["SHOW_ALERT","SHOW_LOADER","CLOSE_LOADER"]),{getData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,a,r,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.tableIpunt.filters,a=this.tableIpunt.pagination,r=new c["a"],e.next=5,r.list(t,a.page,a.rowsPerPage,a.sortBy,a.descending);case 5:n=e.sent,n.error?this.tableData=[]:this.tableData=n.data;case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onDeleteItem:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.SHOW_LOADER(),a=new c["a"],e.next=4,a.delete(t);case 4:r=e.sent,this.CLOSE_LOADER(),this.SHOW_ALERT({type:r.error?"error":"success",message:r.message}),r.error||this.getData();case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),onEditItem:function(e){this.$router.push({path:"/ordens-servico/editar/".concat(e,"/detalhes")})}}),watch:{tableIpunt:{handler:function(){this.getData()},deep:!0}}},d=l,h=a("2877"),p=a("6544"),v=a.n(p),_=a("8336"),b=a("b0af"),m=a("99d9"),f=a("12b2"),g=a("a523"),w=a("ce7e6"),x=a("0e8f"),O=a("132d"),k=a("a722"),y=a("2677"),R=Object(h["a"])(d,r,n,!1,null,null,null);t["default"]=R.exports;v()(R,{VBtn:_["a"],VCard:b["a"],VCardText:m["b"],VCardTitle:f["a"],VContainer:g["a"],VDivider:w["a"],VFlex:x["a"],VIcon:O["a"],VLayout:k["a"],VTextField:y["a"]})}}]);
//# sourceMappingURL=chunk-09eb4192.cb47e318.js.map