<template>
  <div class="blog">
    Blog
    <BlogPost/>
  </div>
</template>

<script>
    import BlogPost from '@/components/BlogPost.vue'

    export default {
        name: 'Blog',
        components: {
            BlogPost
        }
    }
</script>

<style scoped>

</style>
