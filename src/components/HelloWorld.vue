<template>
  <div class="memo">
   <textarea v-model="message" placeholder="WriteMe" class="textbox" :rows="message.split(/\n/).length" style="overflow:hidden;"></textarea>
   <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

textarea::placeholder {
  color: blue;
}

.textbox {
  margin-top: 50px;
  border: 2px solid #b186fb;
  color: blue;
  opacity: .7;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 80px;
  transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  font-size: 16px;
  outline: none;
  resize: none;
}

.textbox:focus {
  width: 500px;
  outline: none;
}
</style>
