<template>
  <b-row>
    <b-col
        cols="12"
        class="mt-2"
    >
      <quill-editor
          v-model="content"
          output="html"
          :options="{
            placeholder: 'Content'
          }"
      />
    </b-col>
    <b-col cols="12">
      <b-btn
          class="mt-2"
          @click="submitBlog(content)"
          variant="dark"
      >
        Submit
      </b-btn>
    </b-col>
  </b-row>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import {quillEditor} from 'vue-quill-editor'
  import blogPostService from "../services/blogPostService";

    export default {
        name: 'CreateBlog',
        props: {

        },
        components: {
          quillEditor
        },
        data() {
          return {
              content: '',
          }
        },
        methods: {
          submitBlog(html) {
            const blogPost = {
              userId: this.$store.state.auth.user.id,
              content: html
            }
            const resp = blogPostService.postBlog(blogPost)
            console.log(resp)
          }
        }
    }
</script>

<style>
  .ql-toolbar .ql-stroke {
    fill: none!important;
    stroke: #fff!important;
}

  .ql-toolbar .ql-fill {
      fill: #fff!important;
      stroke: none!important;
  }

  .ql-toolbar .ql-picker {
      color: #fff!important;
  }
</style>
