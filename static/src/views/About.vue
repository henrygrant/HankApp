<template>
  <div class="about">
    <Bio/>
  </div>
</template>

<script>
    import Bio from '@/components/Bio.vue'

    export default {
        name: 'About',
        components: {
            Bio
        }
    }
</script>

<style scoped>
  .about {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
