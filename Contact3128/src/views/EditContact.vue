<template>
  <div class="container">
    <br>
    <form>
      <div class="well" style="text-align:left">
        <h4>Contact <sui-label color="teal">Edit</sui-label></h4>
        <sui-divider />
        <div class="form-group" >
          <label class="pull-left ">Contact ID <span class="text-danger">*</span></label>
          <input type="text" class="form-control" placeholder="Contact ID" v-model="Contact.cid">
        </div><br>
        <div class="form-group" >
          <label class="pull-left">First Name <span class="text-danger">*</span></label>
          <input type="text" class="form-control" placeholder="First Name" v-model="Contact.firstName">
        </div><br>
        <div class="form-group" >
          <label class="pull-left">Last Name <span class="text-danger">*</span></label>
          <input type="text" class="form-control" placeholder="Last Name" v-model="Contact.lastName">
        </div><br>
        <div class="form-group" >
          <label class="pull-left">Mobile No <span class="text-danger">*</span></label>
          <input type="text" class="form-control" placeholder="Mobile No" v-model="Contact.mobile">
        </div><br>
        <div class="form-group" >
          <label class="pull-left">Email </label>
          <input type="text" class="form-control" placeholder="Email" v-model="Contact.email">
        </div><br>
        <div class="form-group" >
          <label class="pull-left">Facebook </label>
          <input type="text" class="form-control" placeholder="Facebook" v-model="Contact.facebook">
        </div><br>
        <div class="form-group" >
          <label class="pull-left">Image Url </label>
          <input type="text" class="form-control" placeholder="Image Url" v-model="Contact.imageUrl">
        </div><br>
      </div>
      
      <div style="text-align : center;">
        <sui-button-group>
          <!-- <router-link to="/"> -->
          <sui-button basic color="blue" @click="updateToAPI"><sui-icon name="save" />Save</sui-button>
          <!-- </router-link> -->
          <router-link to="/contacts">
            <sui-button basic color="blue"><sui-icon name="close" color="red" />Close</sui-button>
          </router-link> 
        </sui-button-group>
      </div> 
    </form>
  </div>

</template>

<script>
import axios from 'axios'
let localhost = "https://contact-3128-be.herokuapp.com/contacts/"
export default {
    name: 'EditContact',
    data () {
        return {
            Contact: {
                cid: '',
                firstName: '',
                lastName: '',
                email: '',
                mobile: '',
                facebook: '',
                imageUrl: ''
            }
        }
    },
    mounted() {
        axios.get(localhost+this.$route.params.contactId)
        .then((response)=>{
            this.Contact = response.data
            console.log(this.Contact)
        })
        .catch((error)=>{
                console.log(error)
        })
    },
    methods: {
        updateToAPI() {
            let newContact = {
                cid: this.Contact.cid,
                firstName: this.Contact.firstName,
                lastName: this.Contact.lastName,
                email: this.Contact.email,
                mobile: this.Contact.mobile,
                facebook: this.Contact.facebook,
                imageUrl: this.Contact.imageUrl,
            }
            console.log(newContact)
            let c_id = /^\d+$/
            let m_number = /^\d{10}$/
            let mail = /\S+@\S+\.\S+/
            if(!newContact.cid.match(c_id)){
                alert("Please enter 'Contact ID' in the correct format and enter only number")
            }
            else if(!newContact.mobile.match(m_number)){
                alert("Please enter 'Mobile No' in the correct format and enter only number")
            }
            else if(newContact.cid!=''||newContact.firstName!=''||newContact.lastName!=''||newContact.mobile!=''){
                if((newContact.email!=''&&newContact.email.match(mail))||newContact.email==''){
                    this.$router.replace('/contacts')
                    axios.post(localhost+this.$route.params.contactId, newContact)
                    .then((response)=>{
                        console.log(response)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                }
                else{
                    alert("Please enter 'Email' in the correct format")
                }
            }
            else{
                alert("Field cannot be left blank")
            } 
        }
    },  
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>