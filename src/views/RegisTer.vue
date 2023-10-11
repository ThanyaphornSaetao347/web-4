<template>
          <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Sign Up</h1>
      
          <div class="form-floating my-2">
            <span class="icon"><i :class="Username"></i></span>
            <input type="text" class="form-control" id="username" placeholder="Enter your username">
            <label class="user-input" for="floatingInput">Username</label>
          </div>

          <div class="form-floating my-2">
            <span class="icon"><i :class="Email"></i></span>
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label class="email-input" for="floatingInput">Email address</label>
          </div>
          <div class="form-floating my-2">
            <span class="icon"><i :class="Password"></i></span>
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label class="pass-input" for="floatingPassword">Password</label>
          </div>
          <!-- <div class="form-floating my-2">
            <input type="password" class="form-control" id="ConfirmPassword" placeholder="Confirm Password">
            <label for="floatingPassword">Comfirm Password</label>
          </div> -->
      
         
          <RouterLink class="btn btn-primary w-100 py-2" to="/">Sign Up</RouterLink>
          <p class="mt-5 mb-3 text-body-secondary">Already have an account? <RouterLink to="signIn">Login</RouterLink></p>
        </form>
      </main>
      <link :href="fontAwesomeLink" rel="stylesheet">
</template>

<script setup>
import { ref } from 'vue';

const fontAwesomeLink = ref('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');
const Email = ref('fa-solid fa-envelope')
const Password = ref('fa-solid fa-lock')
const Username = ref('fa-solid fa-users')
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.email-input,.pass-input{
  padding-top: 25px;
}
</style>