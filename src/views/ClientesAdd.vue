<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex>
        <v-card
          color="white"
          width="100%"
        >
          <v-card-text>
            <v-form v-model="valid" @submit.prevent="" ref="form">
              <v-container>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-switch
                      v-model="formFields.ativo"
                      color="primary"
                      label="Cadastro Ativo?"
                    ></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.razao_social"
                      :rules="[formRules.default.required]"
                      label="Razão Social"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.nome_fantasia"
                      label="Nome Fantasia"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.cnpj"
                      mask="##.###.###/####-##"
                      label="CNPJ"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.cpf"
                      mask="###.###.###-##"
                      label="CPF"
                      return-masked-value
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.inscricao_estadual"
                      label="Inscrição Estadual"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.numero_licenca"
                      label="Numero da Licença"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.telefone_principal"
                      return-masked-value
                      mask="(##) ##########"
                      label="Telefone Principal"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-text-field
                      v-model="formFields.fax"
                      label="Fax"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs6
                    md4
                  >
                    <v-layout>
                      <v-select
                        v-model="formFields.cliente_atividades_id"
                        :items="atividadesOptions"
                        :loading="atividadesOptionsLoad"
                        label="Atividade"
                        item-text="descricao"
                        item-value="id"                    
                      />
                      <cliente-atividade-light-form 
                        @success="atividadeAddSuccess($event)"
                      />
                    </v-layout>
                  </v-flex> 
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs6
                    md4
                  >
                    <v-select
                      v-model="formFields.funcionarios_id"
                      :items="funcionariosOptions"
                      label="Vendedor"
                      item-text="nome"
                      item-value="id"                      
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md2
                  >
                    <custom-decimal-field
                      v-model="formFields.porcentagem_comissao_vendedor"
                      label="Comissão (%)"
                      suffix="%"
                    />
                  </v-flex>                  
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs6
                    md6
                  >
                    <v-textarea
                      v-model="formFields.observacao"
                      label="Observações"
                    />
                  </v-flex>
                  <v-flex
                    xs6
                    md6
                  >
                    <v-textarea
                      v-model="formFields.informacao_faturamento"
                      label="Informações de faturamento"
                    />
                  </v-flex>                  
                  <v-flex
                    xs12
                    md3
                  >
                    <v-switch
                      v-model="formFields.pendencia"
                      color="primary"
                      label="Possui pendência?"
                    ></v-switch>
                  </v-flex>
                  <v-flex
                    xs6
                    md6
                  >
                    <v-textarea
                      v-model="formFields.pendencia_motivo"
                      label="Motivo da pendência"
                    />
                  </v-flex>  
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-switch
                      v-model="formFields.rastreabilidade_mri"
                      color="primary"
                      label="Rastreabilidade MRI"
                    ></v-switch>
                  </v-flex>
                  <v-flex
                    xs12
                    md3
                  >
                    <v-switch
                      v-model="formFields.faturamento_mensal"
                      color="primary"
                      label="Faturamento mensal"
                    ></v-switch>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-switch
                      v-model="formFields.contrato_manutencao"
                      color="primary"
                      label="Contrato de manutenção"
                    ></v-switch>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              flat
              large
              :loading="loading"
              @click="save"
            >
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { ClientesController } from "../controllers/ClientesController";
import { FuncionariosController } from "../controllers/FuncionariosController";
import { ClienteAtividadesController } from '../controllers/ClienteAtividadesController';

import {VMoney} from 'v-money'
import CustomDecimalField from '../components/shared/CustomDecimalField/CustomDecimalField'
import ClienteAtividadeLightForm from "../components/shared/ClienteAtividadeLightForm/ClienteAtividadeLightForm"
import { mapMutations } from "vuex";

export default {
  directives: {money: VMoney},
  components: {
    CustomDecimalField,
    ClienteAtividadeLightForm
  },
  data() {
    return {
      loading: false,
      valid: false,
      formFields:{},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      },

      atividadesOptions:[],
      atividadesOptionsLoad: false,

      funcionariosOptions:[],
      funcionariosOptionsLoad: false,
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),

    async save() {
      if (this.valid) {
        this.loading = true;

        let clientesController = new ClientesController();
        let result = await clientesController.create(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        if (!result.error)
          this.$router.push({ path: `/clientes/editar/${result.data.id}` });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadFuncionarios() {
      this.funcionariosOptionsLoad = true

      let funcionarioController = new FuncionariosController()
      let result = await funcionarioController.all()

      this.funcionariosOptions = result.data.data

      this.funcionariosOptionsLoad = false
    },

    async loadAtividades() {
      this.atividadesOptionsLoad = true

      let clienteAtividadesController = new ClienteAtividadesController()
      let result = await clienteAtividadesController.all()

      this.atividadesOptions = result.data.data

      this.atividadesOptionsLoad = false
    },

    async atividadeAddSuccess(atividade) {
      await this.loadAtividades()
      this.formFields.cliente_atividades_id = atividade.id
    },
  },

  created() {
    this.SET_TOOLBAR_BACK_URL('/clientes')
    this.formFields = new ClientesController().getModel()
    this.loadFuncionarios()
    this.loadAtividades()
  }
};
</script>