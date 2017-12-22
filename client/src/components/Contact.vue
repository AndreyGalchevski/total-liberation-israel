<template>
  <div class="container">
    <br>
    <h2>צור קשר</h2>
    <br>
    <form :action="sendMessage" method="post" enctype="text/plain">
      <div class="form-group">
        <input type="email" class="form-control" placeholder="כתובת דואר אלקטרוני"  required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="נושא הפנייה" v-model="subject" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="במה נוכל לעזור?" v-model="body" required/>
      </div>
      <input type="submit" class="btn btn-primary" value="שלח"/>
      <input type="reset" class="btn btn-elegant" value="אפס"/>
    </form>
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
  computed: {
    sendMessage: function () {
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