<template lang="pug">
  div.fixed-action-btn(ref='fab')
    a.btn-floating.btn-large.red
      i.fas.fa-share-alt share
    ul
      li
        a.btn-floating.red(:href="'mailto:?subject=' + thisArticle.title + '&body=https://www.totalliberationisrael.com/article/' + thisArticle._id")
          i.fa.fa-envelope-o.top-icon(aria-hidden="true")
      li
        a.btn-floating.yellow.darken-1(
          target="_blank"
          :href="'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.totalliberationisrael.com%2Farticle%2F' + thisArticle._id + '&amp;src=sdkpreparse'"
        )
          i.fab.fa-facebook-f(aria-hidden="true")
      li
        a.btn-floating.green(
          :href="'https://api.whatsapp.com/send?text=https://www.totalliberationisrael.com/article/' + thisArticle._id" 
          data-action="share/whatsapp/share" 
          target="_blank"
        )
          i.fa.fa-whatsapp.top-icon(aria-hidden="true")
</template>

<script>
import M from "materialize-css/dist/js/materialize.js";
export default {
  data() {
    return {
      fabInstance: null
    };
  },
  mounted() {
    this.fabInstance = M.FloatingActionButton.init(this.$refs.fab, {});
  }
};
</script>

<style scoped>
.fixed-action-btn {
  bottom: 30px;
}
.facebook {
  background-color: #3b5998;
}
.twitter {
  background-color: #1da1f2;
}
.linkedin {
  background-color: #0077b5;
}
.google-plus {
  background-color: #dd4b39;
}
</style>
