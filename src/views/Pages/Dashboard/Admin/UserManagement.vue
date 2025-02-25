<template>
  <div>
    <!-- ======================================= -->
    <!-- == "Base header" ====================== -->
    <!-- ======================================= -->
    <base-header
      type="primary"
      class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Dashboard</h6>
          <nav
            aria-label="breadcrumb"
            class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb/>
          </nav>
        </div>
      </div>
    </base-header>

    <!-- ======================================= -->
    <!-- == Main table ========================= -->
    <!-- ======================================= -->
    <div class="container-fluid mt--6 card-wrapper">
      <card
        class="no-border-card"
        body-classes="px-0 pb-1"
        footer-classes="pb-2">
        <template slot="header">
          <h3 class="mb-0">Gestion des utilisateurs</h3>
          <p class="text-sm mb-0">
            Recherchez, modifiez, ou encore supprimez n'importe quel utilisateur du site.
          </p>
        </template>
        <div>
          <div class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
            <el-select
              v-model="pagination.perPage"
              class="select-primary pagination-select"
              placeholder="Par page">
              <el-option
                v-for="item in pagination.perPageOptions"
                :key="item"
                :label="item"
                :value="item"
                class="select-primary"
              />
            </el-select>

            <div>
              <base-input
                v-model="searchQuery"
                prepend-icon="fas fa-search"
                placeholder="Rechercher..."/>
            </div>
          </div>
          <el-table
            id="userManagementTable"
            :data="queriedData"
            row-key="id"
            header-row-class-name="thead-light"
            @sort-change="sortChange">

            <!-- profile picture -->
            <el-table-column
              width="62px"
              min-width="62px"
              class="text-center">
              <template v-slot="{row}">
                <div class="d-flex justify-content-center">
                  <img
                    :src="row.avatarUrl || 'img/theme/default-pp.png'"
                    alt="Photo de profil"
                    class="avatar avatar-sm rounded-circle">
                </div>
              </template>
            </el-table-column>

            <el-table-column
              v-for="column in tableColumns"
              :key="column.label"
              v-bind="column"
            />

            <!-- register date -->
            <el-table-column
              label="Inscription"
              width="126px"
              min-width="126px"
              class="text-center"
              prop="row.creationDate"
              sortable>
              <template v-slot="{row}">
                <div class="d-flex">
                  <div class="col-auto text-center pl-1 pr-0">
                    {{ dateToDayMonthYear(timestampToDate(row.creationDate)) }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <!-- last active date -->
            <el-table-column
              label="Last seen"
              width="150px"
              min-width="150px"
              class="text-center"
              prop="row.lastActiveDate"
              sortable>
              <template v-slot="{row}">
                <div class="d-flex">
                  <div class="col-auto text-center pl-1 pr-0">
                    {{ dateToDayMonthYear(timestampToDate(row.lastActiveDate)) + ' - ' + timeToHour(timestampToDate(row.lastActiveDate)) }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <!-- isActive -->
            <el-table-column
              label="Actif"
              width="100px"
              min-width="100px"
              class="text-center"
              prop="row.isActive"
              sortable>
              <template v-slot="{row}">
                <div class="d-flex">
                  <div class="col-auto text-center pl-1 pr-0">
                    {{ row.isActive ? 'Oui' : 'Non' }}
                  </div>
                </div>
              </template>
            </el-table-column>

            <!-- actions -->
            <el-table-column
              min-width="140px"
              width="140px"
              align="right"
              label="Actions">
              <template v-slot="{row}">
                <div class="d-flex">
                  <base-button
                    class="edit"
                    type="info"
                    size="sm"
                    icon
                    @click="editUser(row)">
                    <i class="text-white ni ni-ruler-pencil"/>
                  </base-button>
                  <base-button
                    class="remove btn-link"
                    type="danger"
                    size="sm"
                    icon
                    @click="deleteUser(row)">
                    <i class="text-white fas fa-trash"/>
                  </base-button>
                </div>
              </template>
            </el-table-column>

          </el-table>

          <!-- ================================================= -->
          <!-- == MODAL: EDIT USER ============================= -->
          <!-- ================================================= -->
          <form
            v-if="modal"
            class="needs-validation"
            @submit.prevent="handleSubmit">
            <modal :show.sync="modal">
              <template slot="header">
                <h5 class="modal-title">Modifier les informations de {{ modifyForm.firstname + " " + modifyForm.lastname }}</h5>
              </template>

              <div class="row">
                <div class="col-md-6">
                  <base-input
                    v-validate="'required|min:3|max:32'"
                    v-model="modifyForm.firstname"
                    :error="getError('prénom')"
                    :valid="isValid('prénom')"
                    name="prénom"
                    class="mb-3"
                    prepend-icon="ni ni-single-02"
                    placeholder="Prénom"
                    label="Prénom"/>
                </div>
                <div class="col-md-6">
                  <base-input
                    v-validate="'required|min:3|max:32'"
                    v-model="modifyForm.lastname"
                    :error="getError('nom')"
                    :valid="isValid('nom')"
                    name="nom"
                    class="mb-3"
                    prepend-icon="ni ni-single-02"
                    placeholder="Nom"
                    label="Nom"/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <base-input
                    v-validate="'required|email|email_valid_school|min:12|max:64'"
                    v-model="modifyForm.email"
                    :error="getError('email')"
                    :valid="isValid('email')"
                    name="email"
                    class="mb-3"
                    prepend-icon="ni ni-email-83"
                    placeholder="Adresse mail"
                    label="Adresse mail"
                    autocapitalize="none"/>
                </div>
                <div class="col-md-6">
                  <base-input
                    :error="getError('ville')"
                    :valid="isValid('ville')"
                    class="mb-3"
                    prepend-icon="ni ni-hat-3"
                    label="Ville">
                    <select
                      v-validate="'required|valid_city'"
                      v-model="modifyForm.city"
                      name="ville"
                      class="form-control">
                      <option
                        value=""
                        hidden>Séléctionnez votre ville</option>
                      <option>Arras</option>
                      <option>Auxerre</option>
                      <option>Bordeaux</option>
                      <option>Brest</option>
                      <option>Grenoble</option>
                      <option>Lille</option>
                      <option>Lyon</option>
                      <option>Montpellier</option>
                      <option>Nantes</option>
                      <option>Rennes</option>
                      <option>Toulouse</option>
                      <option>Paris</option>
                      <option>Dakar</option>
                    </select>
                  </base-input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <GradeSelect
                    v-model="modifyForm.grade"
                    :school="modifyForm.email ? guessSchoolFromEmail(modifyForm.email) : ''"
                    :disabled="false"
                    :legacy="true"
                    label="Classe"/>
                </div>
                <div class="col-md-6">
                  <GroupsSelect
                    v-model="modifyForm.group"
                    :grade="modifyForm.grade"
                    :disabled="false"
                    :legacy="true"
                    label="Groupe"/>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <base-input
                    :error="getError('bts')"
                    :valid="isValid('bts')"
                    class="mb-3"
                    label="Option BTS"
                    prepend-icon="ni ni-book-bookmark">
                    <select
                      v-validate="'required|boolean'"
                      v-model="modifyForm.bts"
                      name="bts"
                      class="form-control">
                      <option :value="true">Oui</option>
                      <option :value="false">Non</option>
                    </select>
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    class="mb-3"
                    label="Rôle"
                    prepend-icon="ni ni-single-02">
                    <select
                      v-validate="'required|valid_role'"
                      v-model="modifyForm.permissionLevel"
                      name="permissions"
                      class="form-control">
                      <option
                        value="null"
                        hidden>Selectionner la permission</option>
                      <option>ADMIN</option>
                      <option>MEMBER</option>
                    </select>
                  </base-input>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <base-input
                    :error="getError('informationMails')"
                    :valid="isValid('informationMails')"
                    class="mb-3"
                    label="Mails d'informations"
                    prepend-icon="ni ni-check-bold">
                    <select
                      v-validate="'required|boolean'"
                      v-model="modifyForm.hasInformationMails"
                      name="actif"
                      class="form-control">
                      <option :value="true">Oui</option>
                      <option :value="false">Non</option>
                    </select>
                  </base-input>
                </div>
                <div class="col-md-6">
                  <base-input
                    :error="getError('actif')"
                    :valid="isValid('actif')"
                    class="mb-3"
                    label="Actif"
                    prepend-icon="ni ni-check-bold">
                    <select
                      v-validate="'required|boolean'"
                      v-model="modifyForm.isActive"
                      name="actif"
                      class="form-control">
                      <option :value="true">Oui</option>
                      <option :value="false">Non</option>
                    </select>
                  </base-input>
                </div>
              </div>

              <template slot="footer">
                <base-button
                  size="md"
                  type="secondary"
                  @click="modal = false">
                  Fermer
                </base-button>
                <base-button
                  size="md"
                  type="primary"
                  native-type="submit">
                  Sauvegarder
                </base-button>
              </template>
            </modal>
          </form>
        </div>
        <div
          slot="footer"
          class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap">
          <p class="card-category">
            Affichage de  {{ from + 1 }} à {{ to }} d'un total de {{ total }} entrées
          </p>

          <base-pagination
            v-model="pagination.currentPage"
            :per-page="pagination.perPage"
            :total="total"
            class="pagination-no-border"
          />
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import swal from 'sweetalert2'
import { BasePagination, Modal } from '@/components'
import { Table, TableColumn, Option, Select } from 'element-ui'
import clientPaginationMixin from '@/mixins/clientPaginationMixin'
import dateUtilMixin from '@/mixins/dateUtilMixin'
import UserService from '@/services/user.service'
import { mapState } from 'vuex'

import GradeSelect from '@/components/Inputs/custom/GradeSelect'
import GroupsSelect from '@/components/Inputs/custom/GroupsSelect'

export default {
  components: {
    BasePagination,
    [Option.name]: Option,
    [Select.name]: Select,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    Modal,
    GradeSelect,
    GroupsSelect
  },
  mixins: [clientPaginationMixin, dateUtilMixin],
  data () {
    return {
      modal: false,
      propsToSearch: ['firstname', 'lastname', 'city', 'grade', 'group', 'email'],
      tableColumns: [
        {
          prop: 'firstname',
          label: 'Prénom',
          minWidth: 110,
          sortable: true
        },
        {
          prop: 'lastname',
          label: 'Nom',
          minWidth: 100,
          sortable: true
        },
        {
          prop: 'grade',
          label: 'Classe',
          minWidth: 84,
          sortable: true
        },
        {
          prop: 'group',
          label: 'Groupe',
          minWidth: 100,
          sortable: true
        },
        {
          prop: 'city',
          label: 'Ville',
          minWidth: 86,
          sortable: true
        },
        {
          prop: 'email',
          label: 'Adresse mail',
          minWidth: 180,
          sortable: true
        }
      ],
      tableData: [],
      modifyForm: {}
    }
  },
  computed: {
    ...mapState({
      user: state => state.account.user,
      updateErrors: state => state.account.status.reason,
      updating: state => state.account.status.isUpdating
    })
  },
  created () {
    UserService.listAll().then(res => {
      this.tableData = res.users
      this.initFuseSearch(res.users)
    })
  },
  methods: {
    getError (name) {
      return this.errors.first(name)
    },
    isValid (name) {
      return this.validated && !this.errors.has(name)
    },
    handleSubmit (e) {
      // vérification validation des champs
      this.$validator.validate().then(valid => {
        if (valid) {
          // envoie de la requête d'actualisation
          this.$store.dispatch('account/update', this.modifyForm).then(response => {
            // TODO: update the user in the table without having to reload it
            // const index = this.tableData.findIndex(row => row._id === this.modifyForm._id)
            // this.tableData.splice(index, 1, this.modifyForm)

            // close the modal
            this.modal = false
            this.modifyForm = {}
          })
        }
      })
    },
    editUser (row) {
      UserService.getById(row._id).then((data) => {
        this.modifyForm = data.user
        this.modal = true
      })
    },
    deleteUser (row) {
      if (row._id === this.user._id) {
        return swal.fire({
          icon: 'error',
          title: 'Tututut !',
          text: 'Vous ne pouvez pas vous auto-supprimer, pour cela rendez-vous dans la page "Paramètres".',
          customClass: { confirmButton: 'btn btn-primary' }
        })
      }

      swal.fire({
        icon: 'warning',
        title: `Supprimer ${row.firstname} ${row.lastname}`,
        text: 'Êtes-vous sûr de vouloir supprimer ce compte ?',
        customClass: {
          confirmButton: 'btn btn-warning mt-2',
          cancelButton: 'btn btn-secondary mt-2'
        },
        buttonsStyling: false,
        showCancelButton: true,
        cancelButtonText: 'Annuler',
        confirmButtonText: 'Confimer'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('account/delete', { userId: row._id }).then(res => {
            const index = this.tableData.findIndex(element => element._id === row._id)
            this.tableData.splice(index, 1)
          })
        }
      })
    },
    guessSchoolFromEmail (email) {
      if (email.includes('@epsi.fr') || email.includes('@ecoles-epsi.net')) return 'EPSI'
      if (email.includes('@wis.fr') || email.includes('@ecoles-wis.net')) return 'WIS'
    }
  }
}
</script>

<style lang="scss">
  #userManagementTable {
    table tr td:first-child {
      padding-right: 0 !important;
    }

    // firstname
    table tr td:nth-child(2) { padding-right: 0 !important; }
    table tr th:nth-child(2) { padding-right: 0 !important; }

    // lastname
    table tr td:nth-child(3) { padding-right: 0 !important; }
    table tr th:nth-child(3) { padding-right: 0 !important; }

    // grade
    table tr td:nth-child(4) { padding-right: 0 !important; }
    table tr th:nth-child(4) { padding-right: 0 !important; }

    // grouo
    table tr td:nth-child(5) { padding-right: 0 !important; }
    table tr th:nth-child(5) { padding-right: 0 !important; }

    // city
    table tr td:nth-child(6) { padding-right: 0 !important; }
    table tr th:nth-child(6) { padding-right: 0 !important; }

    // email
    table tr td:nth-child(7) { padding-right: 0 !important; }
    table tr th:nth-child(7) { padding-right: 0 !important; }

    // bts
    table tr td:nth-child(8) { padding-right: 0 !important; }
    table tr th:nth-child(8) { padding-right: 0 !important; }

    // role/permissionLevel
    table tr td:nth-child(9) { padding-right: 0 !important; }
    table tr th:nth-child(9) { padding-right: 0 !important; }

    // register date
    table tr td:nth-child(10) { padding-right: 0 !important; }
    table tr th:nth-child(10) { padding-right: 0 !important; }

    // last seen (date)
    table tr td:nth-child(11) { padding-left: 0 !important; padding-right: 0 !important; }
    table tr th:nth-child(11) { padding-left: 10px !important; padding-right: 0 !important; }

    // active (email confirmed)
    table tr td:nth-child(12) { padding-right: 0 !important; }
    table tr th:nth-child(12) { padding-right: 0 !important; }
  }
</style>
