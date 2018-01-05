<template>
  <div class="container">
    <br>
    <h2>צור קשר</h2>
    <br>
    <div class="form">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="נושא הפנייה" 
        oninvalid="this.setCustomValidity('נא להזין נושא הפנייה')"
        oninput="setCustomValidity('')" 
        v-model="subject" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="במה נוכל לעזור?" 
        oninvalid="this.setCustomValidity('איך נדע במה לעזור אם לא תגיד/י')"
        oninput="setCustomValidity('')" 
        v-model="body" required/>
      </div>
      <a :href="sendEmail" @click="redirect">
        <div class="btn btn-primary">
          שלח
        </div>
      </a>
    </div>
	</div> 
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      subject: '',
      body: ''
    }
  },
  methods: {
    redirect () {
      this.$router.push({name: 'Home'})
    }
  },
  computed: {
    sendEmail: function () {
      var unicodedSubject = this.subject.replace(/\?/g, '%3F')
      var unicodedBody = this.body.replace(/\?/g, '%3F')
      return 'mailto:andreygalchevski@gmail.com?subject=' + unicodedSubject + '&body=' + unicodedBody
    }
  },
  metaInfo: {
    title: 'צור קשר'
  }
}
</script>

<style scoped>
</style>