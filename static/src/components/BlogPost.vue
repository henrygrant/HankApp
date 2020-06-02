<template>
  <div class="blogPost">
    <div class="card bg-dark mb-3">
      <div class="card-body">
        <div 
          v-html="content" 
          class="content"
        />
      </div>
      <div class="card-footer d-flex justify-content-between">
        <div>{{user.username}}</div>
        <div>{{dateFormat(dttmCreated)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'BlogPost',
        props: {
          id: Number,
          userId: Number,
          user: Object,
          content: String,
          dttmCreated: String
        },
        methods: {
          dateFormat(dateStr) {
            const thisDate = new Date(dateStr);
            return [thisDate.getMonth()+1,
                    thisDate.getDate(),
                    thisDate.getFullYear()].join('/')+' '+
                   [thisDate.getHours(),
                    thisDate.getMinutes()].join(':');
          }
        }
    }
</script>

<style scoped>
.content {
  text-align: left;
}

</style>
