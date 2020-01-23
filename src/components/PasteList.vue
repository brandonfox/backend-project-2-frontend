<template>
    <div>
        <div v-for="paste in pastes" v-bind:key="paste.id">
            {{paste.title}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "PasteList",
        data: function() {
            return {
                pastes: []
            }
        },
        methods: {

        },
        beforeCreate() {
            global.axios.get(global.backend + "/recents").then(this.data().pastes)
        }

    }
</script>

<style scoped>

</style>
