<template>
    <div>
        <div v-for="paste in pastes" v-bind:key="paste.id">
            <div>
                ------------------------------------------------------------
            </div>
            <div v-on:click="goto(paste.id)">
                {{paste.title}}
            </div>
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
            goto: function(id) {
                window.console.log(id)
            }
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
