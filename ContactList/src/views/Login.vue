<template>
    <div class="container">
        <sui-card centered>
            <sui-card-content>
                <sui-segment color="teal">
                    <sui-label ribbon color="teal">Login</sui-label>
                </sui-segment>
                <div>
                    <span><b>User Account</b></span>
                    <input type="username" v-model="formData.username" class="form-control" placeholder="User Account">
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
                axios.post('http://localhost:5001/login/'+this.formData.username+'/'+this.formData.password, this.formData)
                .then((response)=>{ 
                    console.log("response"+response.data.username)
                    if(response.data.username === this.formData.username && response.data.password === this.formData.password){
                        this.$router.replace('/contacts')
                        console.log('success') 
                    }
                    else if(response.data==null){
                    }
                }).catch((err)=>{ 
                    console.log(err)
                    // window.location.reload()
                    alert("username or password is invalid")   
                    console.log('failed to login')
                })
            }
        }
    }
</script>

<style>
</style>