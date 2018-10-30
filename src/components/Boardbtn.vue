<template>
  <div ripple="ripple" class="example">
<p style="color:blue;">1</p>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import VueRippler from 'vue-rippler'
Vue.use(VueRippler)
export default {
}
</script>

<style>
/*
play with some lines below
*/
[ripple] .ripple--container .ripple--body {
  opacity: 0.5 !important;
  background-color: rgba(0, 0, 0, 0.1) !important;
  -webkit-animation: rippler 1000ms;
          animation: rippler 1000ms;
}

.example {
    margin: auto;
    outline: none;
    display: table;
    cursor: pointer;
    width: 90px;
    height: 50px;
    position: absolute;
    border-radius: 80px;
    background-color: #42b883;
    -webkit-tap-highlight-color: rgba(0,0,0,0)!important;
}
</style>
