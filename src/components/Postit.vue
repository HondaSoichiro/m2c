<template>
<div class="postit-wrapp">
  <textarea v-on:click="postitDalete" :name="postitId" id="postit_origin" rows="11" cols="40" class="input-sticky-note" placeholder="Write me">{{content}}</textarea>
</div>
</template>

<script>
/* eslint-disable */
import firebase from 'firebase'
export default {
props: ['content','postitId','deleteModeFlg','uid','boardId'],
  name: 'Postit',
    data () {
      return {
          message: '',
      }
   },
   methods: {
    postitDalete: function (event) {
    if(this.deleteModeFlg === true){
    /*firebase削除処理(付箋単位)*/
    firebase.database().ref(this.uid+'/'+this.boardId+'/'+this.postitId).remove()
     }
    }
  }
}
</script>

<style scoped>

.postit-wrapp{
float: left;
padding: 20px;
}

.input-sticky-note {
  border: 2px solid #b186fb;
  color: blue;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  width: 200px;
  height: 100px;
  transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  font-size: 16px;
  outline: none;
  resize: none;
  color: blue;
}
</style>
