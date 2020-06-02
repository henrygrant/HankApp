import axios from 'axios';

export default {
  postBlog: (blogPost) => {
    return axios.post('http://localhost:3000/blogPosts', blogPost)
      .then(resp => {
        return resp.data
      })
  },
  getBlogs: () => {
    return axios.get('http://localhost:3000/blogPosts')
  }
}