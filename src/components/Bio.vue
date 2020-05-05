<template>
  <div>
    <img 
      id="portrait"
      alt="Henry's Face" 
      src="../assets/henryhat.jpg"
    >
    <h1>Hello</h1>
    <p>
      I'm Henry, and I make webapps.<br> 
      Here is some garbage text that I will replace later.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Bio',
  props: {}
}
</script>

<style scoped>
  #portrait {
    border-radius: 20rem;
    height: 15rem;
  }
</style>
