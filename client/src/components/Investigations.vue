<template>
  <div class="container">  
    <div class="row">
      <div class="col-sm-2">
      </div>
      <div class="col-sm-8">
        <div class="google-map" :id="mapName"></div>
      </div>
      <div class="col-sm-2">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      investigations: [
        {
          name: 'לולי הודים מעלה גלבוע',
          latitude: 32.4769862,
          longitude: 35.4109732,
          url: 'https://www.facebook.com/media/set/?set=a.887055088120147.1073742168.356859544473040&type=1&l=695984a739'
        },
        {
          name: 'רפת עין גב',
          latitude: 32.783385,
          longitude: 35.6339787,
          url: 'https://www.facebook.com/media/set/?set=a.890134797812176.1073742169.356859544473040&type=1&l=8f3b264743'
        },
        {
          name: 'רפת גשור',
          latitude: 32.8176357,
          longitude: 35.7098672,
          url: 'https://www.facebook.com/media/set/?set=a.885179214974401.1073742166.356859544473040&type=1&l=96bf418365'
        },
        {
          name: 'רפת קבוצת שילר',
          latitude: 31.8780219,
          longitude: 34.7943055,
          url: 'https://www.facebook.com/media/set/?set=a.886187861540203.1073742167.356859544473040&type=1&l=fc89bc9f8a'
        },
        {
          name: 'לולי עוף טוב בקיבוץ אפיק',
          latitude: 32.7797632,
          longitude: 35.6930777,
          url: 'https://www.facebook.com/media/set/?set=a.884717785020544.1073742164.356859544473040&type=1&l=8b1dcadcfd'
        },
        {
          name: 'רפתות בגבעת יואב',
          latitude: 32.7980682,
          longitude: 35.6732848,
          url: 'https://www.facebook.com/media/set/?set=a.884756358350020.1073742165.356859544473040&type=1&l=6965185097'
        },
        {
          name: 'לול בקיבוץ יפתח',
          latitude: 33.1277855,
          longitude: 35.5454647,
          url: 'https://www.facebook.com/media/set/?set=a.877379082421081.1073742157.356859544473040&type=1&l=cbbb305507'
        },
        {
          name: 'רפת קיבוץ גזר',
          latitude: 31.8761814,
          longitude: 34.9161307,
          url: 'https://www.facebook.com/media/set/?set=a.873091806183142.1073742154.356859544473040&type=1&l=bb51a4da83'
        },
        {
          name: 'רפת נחשונים',
          latitude: 32.0656332,
          longitude: 34.9377421,
          url: 'https://www.facebook.com/media/set/?set=a.873918076100515.1073742155.356859544473040&type=1&l=33ad43dd8d'
        },
        {
          name: 'רפת אליפז',
          latitude: 29.7964095,
          longitude: 35.0073612,
          url: 'https://www.facebook.com/media/set/?set=a.869776146514708.1073742145.356859544473040&type=1&l=89b7b3b011'
        },
        {
          name: 'רפת דפנה',
          latitude: 33.2300324,
          longitude: 35.6342217,
          url: 'https://www.facebook.com/media/set/?set=a.870407286451594.1073742146.356859544473040&type=1&l=6ef951d45a'
        },
        {
          name: 'כפר סאלד',
          latitude: 33.1950794,
          longitude: 35.6530516,
          url: 'https://www.facebook.com/media/set/?set=a.866803933478596.1073742143.356859544473040&type=1&l=750303a70c'
        },
        {
          name: 'לולי תעשיית הביצים במרגליות',
          latitude: 33.2151336,
          longitude: 35.5366307,
          url: 'https://www.facebook.com/media/set/?set=a.867266126765710.1073742144.356859544473040&type=1&l=ba7e40d554'
        },
        {
          name: 'רפת יד מרדכי',
          latitude: 31.5890367,
          longitude: 34.5488902,
          url: 'https://www.facebook.com/media/set/?set=a.507140349444958.1073741962.356859544473040&type=1&l=2a065be301'
        },
        {
          name: 'רפת נגבה',
          latitude: 31.6612127,
          longitude: 34.6736602,
          url: 'https://www.facebook.com/media/set/?set=a.835820526576937.1073742131.356859544473040&type=1&l=41f13a71bb'
        },
        {
          name: 'רפת ניר עוז',
          latitude: 31.312319,
          longitude: 34.3975921,
          url: 'https://www.facebook.com/media/set/?set=a.831031327055857.1073742121.356859544473040&type=1&l=f8e2de9d18'
        },
        {
          name: 'בית כלא לעגלים אוסטרלים במושב שרונה',
          latitude: 32.7281981,
          longitude: 35.4590598,
          url: 'https://www.facebook.com/media/set/?set=a.717904211701903.1073742069.356859544473040&type=1&l=c5a328d916'
        },
        {
          name: 'בית המטבחיים בחיפה',
          latitude: 32.7996029,
          longitude: 34.9467358,
          url: 'https://www.facebook.com/media/set/?set=a.851739564985033.1073742133.356859544473040&type=1&l=3d7a6b584f'
        },
        {
          name: 'רפת בית העמק',
          latitude: 32.9718319,
          longitude: 35.1409421,
          url: 'https://www.facebook.com/media/set/?set=a.832841103541546.1073742128.356859544473040&type=1&l=3cdced2def'
        },
        {
          name: 'חזיריית להב',
          latitude: 31.379032,
          longitude: 34.8654627,
          url: 'https://www.facebook.com/media/set/?set=a.589412331217759.1073741997.356859544473040&type=1&l=00b555bb99'
        },
        {
          name: 'רפת נווה חריף',
          latitude: 30.0380174,
          longitude: 35.0332021,
          url: 'https://www.facebook.com/media/set/?set=a.834098403415816.1073742129.356859544473040&type=1&l=1101e1e28e'
        },
        {
          name: 'רפת ניצנים',
          latitude: 31.7170384,
          longitude: 34.6301567,
          url: 'https://www.facebook.com/media/set/?set=a.834400156718974.1073742130.356859544473040&type=1&l=ea711aecb5'
        },
        {
          name: 'חוות הפיטום בקיבוץ חצור',
          latitude: 31.7751207,
          longitude: 34.7107007,
          url: 'https://www.facebook.com/media/set/?set=a.832755213550135.1073742126.356859544473040&type=1&l=9a0ac4d0c3'
        }
      ],
      map: null,
      markers: []
    }
  },
  mounted: function () {
    this.map = new google.maps.Map(document.getElementById(this.mapName), {
      zoom: 7,
      center: new google.maps.LatLng(31.611, 34.768)
    })
    const thisMarkers = this.markers
    this.map.addListener('zoom_changed', function () {
      console.log(this)
      if (this.getZoom() < 10) {
        thisMarkers.forEach((marker) => {
          marker.setLabel(null)
        })
      }
      console.log(this)
    })
    this.investigations.forEach((investigation) => {
      const position = new google.maps.LatLng(investigation.latitude, investigation.longitude)
      const marker = new google.maps.Marker({
        position: position,
        map: this.map,
        label: {
          text: investigation.name,
          fontWeight: 'bold',
          visible: false
        },
        animation: google.maps.Animation.DROP
      })
      marker.addListener('click', function () {
        window.open(investigation.url)
      })
      this.markers.push(marker)
    })
  },
  metaInfo: {
    title: 'תחקירים'
  }
}
</script>

<style scoped>
.row {
  padding-top: 25px;
}
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>


