<template>
    <div>
        <span>Create new paste:</span>
        <br>
        <label>
            <textarea maxlength="512" style="width:70%; height:16px" v-model="pasteTitle" placeholder="Put paste title here"/>
        </label>
        <br>
        <label>
            <textarea style="width: 70%; height:60%" v-model="pasteContent" placeholder="Put paste here"/>
        </label>
        <br>
        <button v-on:click="sendPaste(pasteContent,pasteTitle)">Submit</button>
    </div>

</template>

<script>
    export default {
        name: "NewPasteBox",
        data: function() {
            return {
                pasteContent: '',
                pasteTitle: ''
            };
        },
        methods: {
            sendPaste: function(pasteData, pasteTitle) {
                global.axios.post(global.backend + "/paste",{data:pasteData, title:pasteTitle}).then(response => window.console.log(response))
            }
        }
    }
</script>

<style scoped>

</style>
