<template lang="pug">
  div(class="about")
    div(class='container')
      div(class='row')
        div(class='col-sm-2')
        div(class='col-sm-8')
          h1 מי אנחנו?
          p.
            תנועת החזית הישראלית לשחרור בעלי חיים הוקמה בספטמבר 2013
            על ידי אסופת פעילים מצומצמת שרק הלכה וגדלה ככל שעבר הזמן
            וכיום החזית מונה מאות פעילים בכל רחבי הארץ בשלל תאי פעילות אזוריים,
            אנו פועלים במגוון אירועי שטח כמו שתיקה רועמת, מחאות והפגנות רועשות, מייצגי רחוב,
            מעוררים את דור המהפכה בפעילות הסברה מול בני נוער בתיכונים,
            פעילים מתעדים במשקים בהם כלואים בעלי החיים,
            חלוקת מזון טבעוני בבתי חולים ועוד אינספור פרויקטים,
            שכל מטרתם השמעת קולם של בעלי החיים הסובלים והנטבחים
            בכל מקום ובכל זמן.
          p מוזמנים להצטרף אלינו. הירשמו לקבוצת הפעילות שלנו
            a(href="https://www.drove.com/vegans" target="_blank")  בדרוב.
          p מלאו את פרטי ההתקשרות שלכם
            router-link(to="/contact")  כאן
            span   ונצרף אתכם לתאי הפעילות האזוריים.
          img(
            class="img-fluid" 
            src="http://res.cloudinary.com/dqvimfd8b/image/upload/v1515705896/alf-israel/about/about.jpg"
          )
        div(class='col-sm-2')
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
.container {
  font-size: 17px;
  padding-top: 15px;
  padding-bottom: 30px;
}
p {
  text-align: right;
}
h1 {
  padding-bottom: 20px;
}
</style>


