<template>
  <div class="container">
    <h2>צור קשר</h2>
    <form :action="reversedMessage" method="post" enctype="text/plain">
      <div class="form-group">
        <input type="email" class="form-control" placeholder="כתובת דואר אלקטרוני"  required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="נושא" v-model="subject" required>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="במה נוכל לעזור?" v-model="body" required></input>
      </div>
      <input type="submit" class="btn btn-primary" value="שלח"></input>
      <input type="reset" class="btn btn-secondary" value="אפס"></input>
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
    reversedMessage: function () {
      return 'mailto:glasswallsisrael@gmail.com?subject=' + this.subject + '&body=' + this.body
    }
  },
  metaInfo: {
    title: 'צור קשר'
  }
}
</script>

<style scoped>
</style>