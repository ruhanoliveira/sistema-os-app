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
          <v-card-title>
            <v-btn
              color="primary"
              large
              to="conversa-acoes/adicionar"
            >
              <v-icon dark>add</v-icon>
              Adicionar ação
            </v-btn>
          </v-card-title>
          <v-divider />
          <v-card-text>
            <custom-data-table
              v-model="tableIpunt"
              :headers="headers"
              :table-data="tableData"
              :filters="filters"
              :default-sort="defaultSort"
              @onDeleteItem="onDeleteItem($event)"
              @onEditItem="onEditItem($event)"
            >
              <template
                slot="filter"
                slot-scope="props"
              >
                <v-flex
                  xs12
                  md4
                >
                  <v-text-field
                    label="Descricao"
                    clearable
                    v-model="props.filters.descricao"
                  ></v-text-field>
                </v-flex>
              </template>
              <template
                slot="items"
                slot-scope="props"
              >
                <td>{{ props.item.descricao }}</td>
              </template>
            </custom-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CustomDataTable from "./../components/shared/CustomDataTable/CustomDataTable";

import { ConversaAcoesController } from "../controllers/ConversaAcoesController";

import { mapMutations } from "vuex";

export default {
  components: {
    CustomDataTable
  },

  data() {
    return {
      filters: {
        descricao: "",
      },

      defaultSort: "descricao",
      headers: [
        {
          text: "Descricao",
          align: "left",
          sortable: true,
          value: "nome"
        }
      ],
      tableData: null,
      tableIpunt: {}
    };
  },

  methods: {
    ...mapMutations(["SHOW_ALERT","SHOW_LOADER","CLOSE_LOADER"]),

    async getData() {
      let filters = this.tableIpunt.filters;
      let pagination = this.tableIpunt.pagination;

      let conversaAcoesController = new ConversaAcoesController()
      let result = await conversaAcoesController.list(
        filters,
        pagination.page,
        pagination.rowsPerPage,
        pagination.sortBy,
        pagination.descending
      );

      if (result.error) {
        this.tableData = [];
      } else {
        // this.setDesserts(result.data.data)
        this.tableData = result.data;
      }
    },

    async onDeleteItem(item) {
      this.SHOW_LOADER()
      let conversaAcoesController = new ConversaAcoesController()
      let result = await conversaAcoesController.delete(item);
      this.CLOSE_LOADER()

      this.SHOW_ALERT({
        type: result.error ? "error" : "success",
        message: result.message
      });

      if (!result.error) this.getData();
    },

    onEditItem(item) {
      this.$router.push({ path: `/conversa-acoes/editar/${item}` });
    }
  },

  watch: {
    tableIpunt: {
      handler () {
        this.getData()
      },
      deep: true
    }
  }
};
</script>