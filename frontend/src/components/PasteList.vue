<template>
    <div>
        <h4>100 Most Recent Pastes:</h4>
        <div v-for="paste in pastes" v-bind:key="paste.id">
            <div>
                ------------------------------------------------------------
            </div>
            <router-link :to="'/'+paste.id">
                {{paste.title}}
            </router-link>
            <div>
                {{paste.content}}
            </div>
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
        created() {
            global.axios.post(global.backend + "/recents").then(data => {
                this.pastes = data.data;
            })
        }

    }
</script>

<style scoped>

</style>
