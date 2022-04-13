<template>

  <div class="container">

    <!-- <sui-menu inverted borderless>
      <img src="../assets/logo.png" height="20" width="20" padding="100px">
      <sui-menu-item>contacts</sui-menu-item>
      <sui-menu-menu position="right">
        <sui-menu-item>
          <sui-icon name="user outline" />
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu> -->

    <sui-segment>
      <sui-segment color="teal">
        <div class="input-group">
          <sui-label size="large" ribbon color="teal">Contacts</sui-label>
          <input class="form-control" placeholder="Search..." v-model="search">
          <sui-button floated="right">Search</sui-button>
          <router-link to="/newcontact">
            <sui-button floated="right" color="orange"><sui-icon name="plus" />Add</sui-button>
          </router-link>
        </div>
      </sui-segment>

      <sui-divider />
      <sui-card-group :itemsPerRow="4" doubling style="text-align : center;">
        <sui-card v-for="contact_alias in filterContacts" v-bind:key="contact_alias.id">
          <sui-image v-bind:src="contact_alias.imageUrl" wrapped />
          <sui-card-content>
            <sui-card-header>{{ contact_alias.firstName }} {{ contact_alias.lastName }}</sui-card-header>
            <sui-card-description>
              Mobile:{{ contact_alias.mobile }}<br>Email:{{ contact_alias.email }}<br>Facebook:{{ contact_alias.facebook }}
            </sui-card-description>
          </sui-card-content>
          <hr>
          <div>
            <router-link :to="{ path: 'editcontact', name: 'EditContact', params:{contactId: contact_alias._id} }">
              <sui-button color="blue" icon>
                <sui-icon name="edit" />
              </sui-button>
            </router-link>
            <sui-button color="red" icon @click="delContact(contact_alias.cid)">
              <sui-icon name="eraser" />
            </sui-button>
          </div>
          <br>
        </sui-card>
      </sui-card-group>

    </sui-segment>

  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Contacts',
    props: {
    },
    data() {
      return {
        search: '',
        Contacts: [],
        cid: ''
      }
    },
    mounted() {
      axios.get('http://localhost:5001/contacts')
        .then((reponse) => {
          console.log(reponse.data)
          this.Contacts = reponse.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // methods: {
    //   delContact(cid) {
    //     axios.delete('http://localhost:5001/contacts/' + cid)
    //       .then(() => {
    //         console.log('Delete User ID: ' + cid)
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //     window.location.reload()
    //   }
    // },

    methods: {
    DELETE(id) {
        axios.delete('http://localhost:5001/contacts/' + id)
          .then(() => {
            console.log('Delete User ID: ' + id)
          })
          .catch((error) => {
            console.log(error)
          })
        window.location.reload()
      }
    },

    computed: {
      filterContacts: function () {
        return this.Contacts.filter((contact) => {
          return contact.firstName.match(this.search) || contact.lastName.match(this.search)
        })
      }
    }
  }
</script>

<style>
</style>