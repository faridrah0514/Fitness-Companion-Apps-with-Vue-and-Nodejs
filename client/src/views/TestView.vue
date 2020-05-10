<template>
    <div id="testview">
        <v-container>
            <h1>This is test-view</h1>
            <p>{{ status }}</p>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: undefined
        }
    },
    mounted() {
        fetch("http://localhost:8081/heroesworkout")
        .then(res => res.json())
        .then(res => {
            this.status = res
        })
    },
}
</script>