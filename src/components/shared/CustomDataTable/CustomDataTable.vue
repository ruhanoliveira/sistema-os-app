<template>
  <div>
    <v-form v-if="filters">
      <v-container>
        <v-layout row wrap>
          <slot name="filter" v-bind:filters="filters"></slot>
        </v-layout>
        <v-layout>
          <v-btn
            color="blue-grey"
            class="white--text"
            @click="getData()"
          >
            <v-icon dark>search</v-icon>
            Buscar
          </v-btn>
        </v-layout>
      </v-container>
    </v-form>
    <v-data-table
      v-model="selected"
      :headers="tableHeaders"
      :items="desserts"
      :pagination.sync="pagination"
      :total-items="totalDesserts"
      :loading="loading"
      :rows-per-page-text="config.rowsPerPageTex"
      :rows-per-page-items="config.rowsPerPageItems"
      :select-all="selectAll"
      :item-key="itemKey"
      class="elevation-1"
    >
      <template v-if="selectAll" v-slot:headers="props">
        <tr>
          <th>
            <v-checkbox
              :input-value="props.all"
              :indeterminate="props.indeterminate"
              primary
              hide-details
              @click.stop="toggleAll"
            ></v-checkbox>
          </th>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template
        slot="items"
        slot-scope="props"
      >
        <tr v-if="selectAll" :active="props.selected" >
          <td>
            <v-checkbox
              :input-value="props.selected"
              primary
              hide-details
              @change="props.selected = !props.selected"
            ></v-checkbox>
          </td>
          <slot name="items" v-bind:item="props.item"></slot>
          <slot name="actions" v-bind:item="props.item">
            <td v-if="actions" class="justify-center layout px-0">
              <template
                v-for="(action, index) of actions"
              >
                <v-btn
                  v-if="action == 'edit'"
                  :key="index"
                  small
                  flat
                  fab
                  title="Editar item"
                  @click="onEditItem(props.item.id)"
                >
                  <v-icon>edit</v-icon>
                </v-btn>

                <v-btn
                  v-if="action == 'del'"
                  :key="index"
                  small
                  flat
                  fab
                  title="Excluir item"
                  @click="onDeleteBtnClick(props.item.id)"
                >
                  <v-icon>delete</v-icon>
                </v-btn>
              </template>
            </td>
          </slot> 
        </tr>
        <template v-else>
          <slot name="items" v-bind:item="props.item"></slot>
          <slot name="actions" v-bind:item="props.item">
            <td v-if="actions" class="justify-center layout px-0">
              <template
                v-for="(action, index) of actions"
              >
                <v-btn
                  v-if="action == 'edit'"
                  :key="index"
                  small
                  flat
                  fab
                  title="Editar item"
                  @click="onEditItem(props.item.id)"
                >
                  <v-icon>edit</v-icon>
                </v-btn>

                <v-btn
                  v-if="action == 'del'"
                  :key="index"
                  small
                  flat
                  fab
                  title="Excluir item"
                  @click="onDeleteBtnClick(props.item.id)"
                >
                  <v-icon>delete</v-icon>
                </v-btn>
              </template>
            </td>
          </slot>        
        </template>

      </template>
      <template slot="pageText" slot-scope="props">
        Itens {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
      </template>
        <template slot="no-data">
        <v-alert :value="true" color="blue-grey darken-2" icon="warning">
          Nenhum item encontrado.
        </v-alert>
      </template>
    </v-data-table>

    <v-dialog
      v-model="deleteDialog"
      max-width="290"
      :lazy="true"
    >
      <v-card>
        <v-card-title class="headline">Deseja realmente deletar este item?</v-card-title>
        <v-card-text>Ao confirmar esta ação, todos os dados deste item serão apagados do sistema.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat="flat"
            @click="deleteDialog = false"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            flat="flat"
            @click="onDeleteItem(itemToDelete)"
          >
            Confirmar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { debounce } from "debounce";

export default {
  props: {
    input: {
      default: () => {}
    },
    filters: {
      type: Object,
      default: () => {}
    },
    headers: {
      default: () => []
    },
    tableData: {
      default: null
    },
    actions: {
      default: () => ['edit','del']
    },
    defaultSort: {
      required: true,
      type: String
    },
    defaultDescending: {
      type: Boolean,
      default: false
    },
    returnItem: {
      type: Boolean,
      default: false
    },
    selectAll:{
      default:false
    },
    itemKey: {
      default: ''
    }
  },
  
  data () {
    return {
      tableHeaders:[],
      desserts: [],
      pagination: {
        sortBy: '',
        descending: false
      },
      totalDesserts: 0,
      loading: false,
      config: {
        rowsPerPageTex: 'Itens por página',
        rowsPerPageItems: [10, 20, 40, 100]
      },
      deleteDialog: false,
      itemToDelete:null,
      selected: []
    }
  },

  watch: {
    pagination: {
      handler () {
        this.getData()
      },
      deep: true
    },

    headers: {
      handler () {
        this.setHeaders()
      },
      deep: true
    },

    tableData: {
      handler () {
        this.proccessTableData()
      },
      depp: true
    },

    selected: function (nv) {
      this.$emit('onSelected',nv)
    }
  },

  methods: {
    getData () {
      this.loading = true
      this.$emit('input', {
        filters: this.filters,
        pagination: this.pagination
      })
    },

    proccessTableData () {
      this.loading = false
      if(this.tableData) {
        this.desserts = this.tableData.data
        this.totalDesserts = this.tableData.meta.total
      } else {
        this.desserts = []
        this.totalDesserts = 0
      }
    },

    setDefaultPagination () {
      this.pagination.sortBy = this.defaultSort
      this.pagination.descending = this.defaultDescending
    },

    setHeaders() {
      if(this.actions) {
        this.tableHeaders = [
          ...this.headers,
          {
            text: '',
            value: 'ACTIONS',
            sortable: false,
          }
        ]
      } else {
        this.tableHeaders = this.headers
      }
    },
    
    getItem (id) {
      return this.tableData.data.find(item => { return item.id == id })
    },

    onDeleteBtnClick(id) {
      this.deleteDialog = true
      this.itemToDelete = id
    },

    onDeleteItem (id) {
      this.deleteDialog = false
      let item = null

      if(this.returnItem) {
        item = this.getItem(id)
      } else {
        item = id
      }
      this.$emit('onDeleteItem',item)
    },

    onEditItem (id) {
      let item = null

      if(this.returnItem) {
        item = this.getItem(id)
      } else {
        item = id
      }
      this.$emit('onEditItem',item)
    },

    toggleAll () {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort (column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  },

  mounted() {
    this.setDefaultPagination()
    this.setHeaders()
  }
}
</script>
