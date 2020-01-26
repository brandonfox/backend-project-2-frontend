<template>
    <div>
        <h2>Paste Title:</h2>
        <p>
        {{pasteData.title}}
        </p>
        <h4>Paste Content:</h4>
        <p>
        {{pasteData.content}}
        </p>
        <h4>Time Created:</h4>
        <p>
            {{pasteData.createdAt}}
        </p>
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
