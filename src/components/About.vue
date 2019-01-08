<template lang="pug">
div.about
	div.container.flow-text
		h3 מי אנחנו?
		p.
			תנועת שחרור מוחלט הוקמה במרץ 2018 על ידי חבורת אקטיביסטים ממובילי מהפכת שחרור בעלי החיים בישראל.
			התנועה בנויה מתאי פעילות אזוריים בכל רחבי הארץ ואנו פועלים במגוון אירועי שטח כמו מחאות והפגנות רועשות ושקטות, מייצגי רחוב, פעילות הסברה מול בני נוער בתיכונים, פעילים מתעדים במשקים בהם כלואים בעלי החיים, חלוקת מזון טבעוני בבתי חולים ועוד אינספור פרויקטים, שכל מטרתם השמעת קולם של בעלי החיים הסובלים והנטבחים בכל מקום ובכל זמן.
		p מוזמנים להצטרף אלינו. הירשמו לקבוצת הפעילות שלנו ב
			a(href="https://www.drove.com/vegans" target="_blank") דרוב.
		p מלאו את פרטי ההתקשרות שלכם
			router-link(to="/contact")  כאן
			span   ונצרף אתכם לתאי הפעילות האזוריים.
		div
			img.responsive-img(
				src="https://res.cloudinary.com/dqvimfd8b/image/upload/v1515705896/alf-israel/about/about.jpg"
			)
</template>

<script>
export default {
	name: 'about',
	metaInfo: {
		title: 'מי אנחנו'
	}
}
</script>

<style scoped>
img {
	padding-bottom: 80px;
}
p {
	text-align: right;
}
</style>


