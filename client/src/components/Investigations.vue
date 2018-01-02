<template>
  <div class="container">  
    <div class="google-map" :id="mapName"></div>
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
      map: null,
      investigations: Object.assign({}, this.$store.getters.investigations),
      markers: [],
      infoWindows: []
    }
  },
  mounted () {
    this.getInvestigations()
    this.initMap()
  },
  methods: {
    async getInvestigations () {
      this.loading = true
      await this.$store.dispatch('getInvestigations')
      this.loading = false
    },
    initMap () {
      this.map = new google.maps.Map(document.getElementById(this.mapName), {
        zoom: 7,
        center: new google.maps.LatLng(31.611, 34.768)
      })
      for (var i = 0; i < this.investigations.length; i++) {
        const currentInvestigation = investigations[i]
        const position = new google.maps.LatLng(currentInvestigation.latitude, currentInvestigation.longitude)
        const marker = new google.maps.Marker({
          position: position,
          map: this.map,
          animation: google.maps.Animation.DROP
        })

        const contentString =
          '<div>' +
            '<h5>' + currentInvestigation.name + '</h5>' +
            '<div>' +
              '<p><a href="' + currentInvestigation.url + '"target="_blank">' + 'קישור לחתקיר</a></p>' +
            '</div>' +
          '</div>'

        const infoWindow = new google.maps.InfoWindow({
          content: contentString
        })
        this.infoWindows.push(infoWindow)
        const thisInfoWindows = this.infoWindows

        marker.addListener('click', function () {
          infoWindow.open(this.map, marker)
          for (var i = 0; i < thisInfoWindows.length; i++) {
            if (infoWindow !== thisInfoWindows[i]) {
              thisInfoWindows[i].close()
            }
          }
        })
        this.markers.push(marker)
      }
    }
  },
  destroyed () {
    this.$store.commit('CLEAR_INVESTIGATIONS')
  },
  metaInfo: {
    title: 'תחקירים'
  }
}
</script>

<style scoped>
.container {
  padding-top: 25px;
}
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>


