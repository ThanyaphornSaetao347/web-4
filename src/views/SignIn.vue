<template>
    <div class="wrapper">
      <div class="from-box">
      <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please Sign In</h1>
          <div class="input-box">
          <div class="form-floating my-2">
            <span class="icon"><i :class="Email"></i></span>
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">
              <p class="email-input">Email address</p></label>
          </div> 
          <div class="form-floating my-2">
            <span class="icon"><i :class="Password"></i></span>
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">
              <p class="pass-input">Password</p></label>
          </div>
        </div>

          <div class="remember-forgot">
                    <label class="text-checkbox"><input type="checkbox"> Remember me?</label>
                    <a href="#">Forgot Password</a>
                </div>

          <RouterLink class="btn btn-primary w-100 py-2" to="/">Sign in</RouterLink>
          <p class="mt-5 mb-3 text-body-secondary">Don't have an account yet? <RouterLink to="RegisTer">Sign Up</RouterLink></p>
        </form>
      </main>
      </div>
    </div>
      <link :href="fontAwesomeLink" rel="stylesheet">

</template>

<script setup>
import { ref } from 'vue';

const fontAwesomeLink = ref('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');
const Email = ref('fa-solid fa-envelope')
const Password = ref('fa-solid fa-lock')
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 1rem;
}
.email-input,.pass-input{
  padding-top: 25px;
}
.icon{
  padding-left: 270px;
}
.text-checkbox{
  margin: 20px;
}
</style>