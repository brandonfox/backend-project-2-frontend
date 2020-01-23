<template>
    <div>
        <NewPasteBox/>
        <PasteList/>
    </div>
</template>

<script>
    import NewPasteBox from "@/components/NewPasteBox";
    import PasteList from "@/components/PasteList";
    export default {
        name: "Home",
        components: {PasteList, NewPasteBox}
    }
</script>

<style scoped>

</style>
