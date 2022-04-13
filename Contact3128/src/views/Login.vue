<template>
    <div class="container">
        <sui-card centered horizontal>
            <sui-card-content>
                <sui-segment color="teal">
                    <sui-label ribbon color="teal" size="large">Login</sui-label>
                </sui-segment>
                <div>
                    <span><b>User Account</b></span>
                    <input type="username" v-model="formData.username" class="form-control" placeholder="User Account" @keyup.enter="signIn()">
                    <br>
                    <span><b>Password</b></span>
                    <input type="password" v-model="formData.password" class="form-control" placeholder="Password"  @keyup.enter="signIn()">
                    <br>
                    <sui-button @click="signIn">Login</sui-button>
                </div>
            </sui-card-content>
        </sui-card>

    </div>
</template>

<script>
    import axios from 'axios'
    let localhost = "http://localhost:5001/contacts"
    export default {
        name: 'Login',
        data() {
            return {
                formData: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            signIn() {
                console.log("formData "+this.formData.username+" "+this.formData.password)
                // axios.post('http://localhost:5001/login/'+this.formData)
                axios.post(localhost+this.formData.username+'/'+this.formData.password, this.formData)
                .then((response)=>{ 
                    console.log("response"+response.data.username)
                    if(response.data.username === this.formData.username && response.data.password === this.formData.password){
                        this.$router.replace('/contacts')
                        console.log('success') 
                    }
                    else{
                        alert("password is invalid")
                        window.location.reload()
                    }
                }).catch((err)=>{ 
                    console.log(err)
                    alert("username or password is invalid")
                    window.location.reload()   
                    console.log('failed to login')
                })
            }
        }
    }
</script>

<style>
</style>