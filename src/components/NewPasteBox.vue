<template>
    <div>
        <form
                id="pasteForm"
                @submit="checkForm"
        >
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
            <input type="submit" value="Submit">
            <div id="errormsg">{{error}}</div>
        </form>
    </div>

</template>

<script>
    export default {
        name: "NewPasteBox",
        data: function() {
            return {
                pasteContent: '',
                pasteTitle: '',
                error: ''
            };
        },
        methods: {
            checkForm: function(e) {
                if(this.pasteTitle.length < 1){
                    this.error = "Paste title cannot be empty";
                    e.preventDefault()
                }else if(this.pasteContent.length < 1){
                    this.error = "Paste content cannot be empty";
                    e.preventDefault()
                }
                else if(this.toUtf(this.pasteContent).length > 1024 * 1024 * 64){
                    this.error = "Content is too long"
                    e.preventDefault()
                }
                else{
                    this.sendPaste(this.pasteContent,this.pasteTitle)
                }
            },
            sendPaste: function(pasteData, pasteTitle) {
                global.axios.post(global.backend + "/paste",{content:pasteData, title:pasteTitle}).then(response => window.console.log(response))
            },
            toUtf: function(str) { //Taken from https://gist.github.com/joni/3760795/8f0c1a608b7f0c8b3978db68105c5b1d741d0446
                let utf8 = [];
                for (let i=0; i < str.length; i++) {
                    let charcode = str.charCodeAt(i);
                    if (charcode < 0x80) utf8.push(charcode);
                    else if (charcode < 0x800) {
                        utf8.push(0xc0 | (charcode >> 6),
                            0x80 | (charcode & 0x3f));
                    }
                    else if (charcode < 0xd800 || charcode >= 0xe000) {
                        utf8.push(0xe0 | (charcode >> 12),
                            0x80 | ((charcode>>6) & 0x3f),
                            0x80 | (charcode & 0x3f));
                    }
                    // surrogate pair
                    else {
                        i++;
                        charcode = ((charcode&0x3ff)<<10)|(str.charCodeAt(i)&0x3ff)
                        utf8.push(0xf0 | (charcode >>18),
                            0x80 | ((charcode>>12) & 0x3f),
                            0x80 | ((charcode>>6) & 0x3f),
                            0x80 | (charcode & 0x3f));
                    }
                }
                return utf8;
            }
        }
    }
</script>

<style scoped>

</style>
