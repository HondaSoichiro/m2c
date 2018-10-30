<template>
  <div class="memo">

  <div class="navigation2">
   <a class="button2" v-on:click="deleteMode">
     <img src="../../static/deletemode.svg">
    <div id="remove" class="deletemode">DeleteMode</div>
   </a>
  </div>
  <div class="navigation">
   <a class="button" @click="signOut">
     <img src="../../static/signout.svg">
    <div class="logout">SignOut</div>
   </a>
  </div>
   <div class="input-zone">
    <h1>{{email[0]}}</h1>
     <textarea id="nameInput" v-model="message" @keyup.shift.enter="sendMessage" placeholder="WriteMe" class="textbox" :rows="message.split(/\n/).length"/>
   </div>
     <Boardbtn></Boardbtn>
   <div class="postit-zone">
    <postit
     v-for="item in list"
     :postit-id="item.id"
     :content="item.message"
     :delete-mode-flg="deleteModeFlg"
     :uid="uid"
     :board-id="boardId"
     >
    </postit>
   </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Postit from './Postit'
import firebase from 'firebase'
import Boardbtn from './Boardbtn'
var deleteModeFlg = false
var boardId = 1
/* eslint-disable */
export default {
  name: 'HelloWorld',
  components: {
  Postit,Boardbtn
},
    data () {
      return {
        list: [],     // 最新状態はここにコピーされる
        name: '',     // 名前
        message: '',  // 送信メッセージ
        email: firebase.auth().currentUser.email.match(/(.*)(?=@)/),
        deleteModeFlg: deleteModeFlg,
        uid: firebase.auth().currentUser.uid,
        boardId:boardId
      }
    },
    created () {
      this.listen();
    },
    methods: {
      // データベースの変更を購読、最新状態をlistにコピーする
      listen () {
      var uid = firebase.auth().currentUser.uid
        firebase.database().ref(uid+'/'+boardId+'/').on('value', snapshot => {
          if (snapshot) {
            const rootList = snapshot.val()
            let list = [];
            if(rootList === null){
            }else{
            Object.keys(rootList).forEach((val, key) => {
              rootList[val].id = val;
              list.push(rootList[val]);
            })
            this.list = list;
         }
         }
        })
      },
      sendMessage () {
      var uid = firebase.auth().currentUser.uid
        // 空欄の場合は実行しない
        if (!this.message) return
        // 送信
        firebase.database().ref(uid+'/'+boardId+'/').push({
          message: this.message
        })
        // 送信後inputを空にする
        this.message = ''
      },
      signOut () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    },
     deleteMode(){
       var deleteTargets = document.getElementsByClassName('input-sticky-note')
       if(this.deleteModeFlg === false){
         this.deleteModeFlg = true
         Object.values(deleteTargets).forEach((deleteTarget) => {
         deleteTarget.style.cursor = 'url("../../static/target.png"),auto'
         })
         alert('消したい付箋をクリックしてね(再クリックで通常に戻るよ)')
       }else if(this.deleteModeFlg === true){
         this.deleteModeFlg = false
         Object.values(deleteTargets).forEach((deleteTarget) => {
         deleteTarget.style.cursor = 'auto';
         })
         alert('通常モードに戻したよ')
       }
     }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.postit-zone{
padding: 50px 314px 0px;
}
textarea::placeholder {
  color: blue;
}

.textbox {
  margin-top: 50px;
  border: 2px solid #b186fb;
  color: blue;
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
img {
  width: 25px;
  float: left;
}

.logout {
  color: blue;
  font-size: 16px;
	position: relative;
  bottom: -2px;
  overflow: hidden;
  opacity: 0;
  transition: opacity .45s;
  -webkit-transition: opacity .35s;
}

.deletemode {
  color: red;
  font-size: 16px;
	position: relative;
  bottom: -2px;
  right: 2px;
  overflow: hidden;
  opacity: 0;
  transition: opacity .45s;
  -webkit-transition: opacity .35s;
}

.navigation{
  position: absolute;
  right: 2px
}

.navigation2{
  position: absolute;
  right: 150px
}

.button {
	text-decoration: none;
	float: right;
  padding: 12px;
  margin: 15px;
  color: white;
  width: 25px;
  border: 2px solid #b186fb;
  border-radius: 50px;
  transition: width .35s;
  -webkit-transition: width .35s;
  overflow: hidden
}

.button2 {
	text-decoration: none;
	float: right;
  padding: 12px;
  margin: 15px;
  color: white;
  width: 25px;
  border: 2px solid red;
  border-radius: 50px;
  transition: width .35s;
  -webkit-transition: width .35s;
  overflow: hidden
}

a:hover {
  width: 100px;
}

.button2:hover {
  width: 130px;
}

a:hover .logout,.deletemode {
  opacity: .9;
}

</style>
