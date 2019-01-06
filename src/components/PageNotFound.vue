<template lang="pug">
div.pageNotFound
	div.container
		div.row
			div.col-sm-2
			div.col-sm-8
				h1 אופס! זה מביך
				img.img-fluid(src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1515755075/alf-israel/notFound/2070934_ba9f548d50_b.jpg")
				h1 העמוד שאליו ניסית לגשת לא קיים
			div.col-sm-2
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


