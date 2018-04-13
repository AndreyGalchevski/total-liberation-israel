<template lang="pug">
  div(class="pageNotFound")
    div(class='container')
      div(class='row')
        div(class='col-sm-2')
        div(class='col-sm-8')
          h1 אופס! זה מביך
          img(
            class="img-fluid" 
            src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1515755075/alf-israel/notFound/2070934_ba9f548d50_b.jpg"
          )
          h1 העמוד שאליו ניסית לגשת לא קיים
        div(class='col-sm-2')
</template>

<script>
export default {
	name: 'pageNotFound',
	metaInfo: {
		title: 'העמוד לא קיים'
	}
}
</script>

<style scoped>
.container {
  font-size: 17px;
  padding-top: 15px;
  padding-bottom: 30px;
}
</style>


