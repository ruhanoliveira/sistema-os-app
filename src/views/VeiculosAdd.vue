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
                <v-layout>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="formFields.descricao"
                      :rules="[formRules.default.required]"
                      label="Descrição"
                      required
                    ></v-text-field>
                  </v-flex>  
                  <v-flex
                    xs6
                    md4
                  >
                    <v-text-field
                      v-model="formFields.placa"
                      :rules="[formRules.default.required]"
                      label="Placa"
                      required
                    ></v-text-field>
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
import { VeiculosController } from "../controllers/VeiculosController";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      loading: false,
      valid: false,
      formFields: {},
      formRules: {
        default: {
          required: value => !!value || "Campo obrigatório"
        }
      }
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SET_TOOLBAR_BACK_URL"]),

    async save() {
      if (this.valid) {
        this.loading = true;

        let veiculosController = new VeiculosController();
        let result = await veiculosController.create(this.formFields);

        this.SHOW_ALERT({
          type: result.error ? "error" : "success",
          message: result.message
        });

        if (!result.error)
          this.$router.push({ path: "/veiculos" });

        this.loading = false
      }else {
        this.$refs.form.validate()
      }
    },
  },

  mounted() {
    this.SET_TOOLBAR_BACK_URL('/veiculos')
    this.formFields = new VeiculosController().getModel()
  }
};
</script>