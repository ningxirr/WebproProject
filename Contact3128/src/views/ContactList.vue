<template>

  <div class="container">

    <sui-segment>
      <sui-segment color="teal">
        <div class="input-group">
          <sui-label ribbon color="teal">Contacts</sui-label>
          <input class="form-control" placeholder="Search..." v-model="search">
          <sui-button floated="right">Search</sui-button>
          <router-link to="/newcontact">
            <sui-button floated="right" color="orange">
              <sui-icon name="plus" />Add</sui-button>
          </router-link>
        </div>
      </sui-segment>

      <sui-divider />
      <sui-card-group :itemsPerRow="4" doubling style="text-align : center;">
        <sui-card v-for="contact_alias in filterContacts" v-bind:key="contact_alias._id">
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
            <sui-button color="red" icon @click="delContact(contact_alias._id)">
              <!-- <sui-button color="red" icon @click="delContact(contact_alias.cid)"> -->
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
  let localhost = "https://limitless-waters-18137.herokuapp.com/contacts/"
  export default {
    name: 'Contacts',
    props: {
    },
    data() {
      return {
        search: '',
        Contacts: [],
        _id: ''
      }
    },
    mounted() {
      axios.get(localhost)
        .then((reponse) => {
          console.log(reponse.data)
          this.Contacts = reponse.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      /* checkdel(_id){
        var result = confirm("Want to delete?");
        if (result) {
          this.delContact(_id)
        }
      }, */
      delContact(id) {
        axios.get(localhost+id)
        .then((response)=>{
            var result = confirm("Want to delete "+response.data.firstName+" "+response.data.lastName+"?");
            if (result) {
              axios.delete(localhost + id)
            .then(() => {
              window.location.reload()
            })
            .catch((error) => {
              console.log(error)
            })
          }
        })
        .catch((error)=>{
          console.log(error)
        })
        
      } 
    },
    /* methods: {
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
    }, */
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