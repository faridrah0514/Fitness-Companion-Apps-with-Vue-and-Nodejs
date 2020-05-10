<template>
  <div class="about">
    <v-container>
        <div class="headline">Your Daily Personal Workout</div>
        <v-checkbox v-model="Selected" v-for="workout in Personals.slice().reverse()" v-bind:key="workout.personalId" v-bind:label="workout.name" v-bind:value="workout.name"></v-checkbox>
    </v-container>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            Personals: undefined,
            Selected: []
        }
    },
    mounted() {
        fetch("http://localhost:8081/personals")
        .then(res => res.json())
        .then(res => {
            this.Personals = res
        })
    },
}
</script>
