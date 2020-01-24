<template>
    <div>
        {{pasteData.title}}
        <br>
        {{pasteData.content}}
    </div>
</template>

<script>
    export default {
        name: "PastePage",
        data: function() {
            return {
                pasteData: {}
            }
        },
        created() {
            const pasteId = this.$route.params.id;
            global.axios.get(global.backend + "/" + pasteId).then(data => this.pasteData = data.data)
        }
    }
</script>

<style scoped>

</style>
