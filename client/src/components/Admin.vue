<template>
    <div class="container">
        <br>
        <h1>ניהול המידע</h1>
        <br>
        <router-link class="btn btn-outline-info btn-lg" to="/admin/events">ניהול האירועים</router-link>
        <router-link class="btn btn-outline-primary btn-lg" to="/admin/articles">ניהול המאמרים</router-link>
        <router-view>
        </router-view>
    </div>
</template>


<script>
    export default {

    }
</script>