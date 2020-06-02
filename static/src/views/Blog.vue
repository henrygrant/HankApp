<template>
  <b-container class="blog">
    <CreateBlog v-if="$store.state.auth.status.loggedIn" />
    <div v-if="blogPosts.length">
      <div v-for="blogPost in blogPosts" :key="blogPost.id" class="mt-3">
        <BlogPost v-bind="blogPost" />
      </div>
    </div>
    <h1 v-if="!blogPosts.length">No blog posts yet!</h1>
  </b-container>
</template>

<script>
import BlogPost from "@/components/BlogPost.vue";
import CreateBlog from "@/components/CreateBlog.vue";
import blogPostService from "../services/blogPostService";

export default {
  name: "Blog",
  components: {
    BlogPost,
    CreateBlog
  },
  data() {
    return {
      blogPosts: []
    };
  },
  async mounted() {
    blogPostService.getBlogs().then(res => {
      this.blogPosts = res.data;
    });
  }
};
</script>

<style scoped>
</style>
