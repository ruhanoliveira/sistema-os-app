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
                      v-model="formFields.telefone"
                      return-masked-value
                      mask="(##) ##########"
                      label="Telefone"
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
                      v-model="formFields.vencimento_licenca"
                      return-masked-value
                      mask="##/##/####"
                      label="Vencimento da licença"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md2
                  >
                    <v-text-field
                      v-model="formFields.cep"
                      label="CEP"
                      return-masked-value
                      mask="##.###-###"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md7
                  >
                    <v-text-field
                      v-model="formFields.logradouro"
                      label="Logradouro"
                    ></v-text-field>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-select
                      v-model="estados_id"
                      :items="estadosOptions"
                      :loading="estadosOptionsLoad"
                      label="Estado"
                      item-text="nome"
                      item-value="id"                    
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-select
                      v-model="formFields.cidades_id"
                      :items="cidadesOptions"
                      :loading="cidadesOptionsLoad"
                      label="Cidade"
                      item-text="nome"
                      item-value="id"   
                      no-data-text="Selecione um estado"                 
                    />
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-layout>
                      <v-select
                        v-model="formFields.bairros_id"
                        :items="bairrosOptions"
                        :loading="bairrosOptionsLoad"
                        label="Bairro"
                        item-text="nome"
                        item-value="id" 
                        no-data-text="Seleciona uma cidade"                   
                      />
                      <bairro-light-form 
                        :cidades-id="this.formFields.cidades_id"
                        @success="bairroAddSuccess($event)"
                      />
                    </v-layout>
                  </v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-textarea
                      v-model="formFields.observacao"
                      label="Observações"
                    />
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
import BairroLightForm from "../components/shared/BairroLightForm/BairroLightForm"
import { TransportadoresController } from "../controllers/TransportadoresController";
import { EstadosController } from '../controllers/EstadosController';
import { CidadesController } from '../controllers/CidadesController';

import { mapMutations } from "vuex";

export default {
  components: {
    BairroLightForm
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

      estados_id: '',
      estadosOptions:[],
      estadosOptionsLoad: false,

      cidadesOptions:[],
      cidadesOptionsLoad: false,

      bairrosOptions:[],
      bairrosOptionsLoad: false,
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),

    async save() {
      if (this.valid) {
        this.loading = true;

        let transportadoresController = new TransportadoresController();
        let result = await transportadoresController.create(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        if (!result.error)
          this.$router.push({ path: `/transportadores/editar/${result.data.id}` });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },

    async loadEstados() {
      this.enderecoTiposOptionsLoad = true

      let estadoController = new EstadosController()
      let result = await estadoController.all()

      this.estadosOptions = result.data.data

      this.enderecoTiposOptionsLoad = false
    },

    async loadCidades(estados_id) {
      this.cidadesOptionsLoad = true

      let cidadeController = new EstadosController()
      let result = await cidadeController.getCidades(estados_id)

      this.cidadesOptions = result.data

      this.formFields.cidades_id = null

      this.cidadesOptionsLoad = false
    },

    async loadBairros(cidades_id) {
      this.bairrosOptionsLoad = true

      let cidadeController = new CidadesController()
      let result = await cidadeController.getBairros(cidades_id)

      this.bairrosOptions = result.data

      this.formFields.bairros_id = null

      this.bairrosOptionsLoad = false
    },

    async bairroAddSuccess(bairro) {
      await this.loadBairros(this.formFields.cidades_id)
      this.formFields.bairros_id = bairro.id
    },
  },

  watch: {
    'estados_id': function () {
      this.loadCidades(this.estados_id)
    },
    'formFields.cidades_id': {
      handler () {
        this.loadBairros(this.formFields.cidades_id)
      },
      deep:true
    }
  },

  created() {
    this.SET_TOOLBAR_BACK_URL('/transportadores')
    this.formFields = new TransportadoresController().getModel()
        this.loadEstados()
  }
};
</script>