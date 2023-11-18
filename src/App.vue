<template>
  <div class="wrapper">
    <CreateSlider />
  </div>
</template>

<script>
import CreateSlider from "./entities/client/ui/CreateSlider.vue";
export default {
  name: 'App',
  components: { CreateSlider },

  methods: {
  }
}
</script>

<style lang="scss">
@import url("./assets/fonts/montserrat.css");
*{
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}
::-webkit-scrollbar {
    display: none;
}
.wrapper{
  padding: 5% 0px;
}
.error {
  color: red;
}

.form {
  max-width: 300px;
  margin: 0 auto;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px, rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 10px;

  &__btn {
    background-color: rgb(84, 105, 212);
    padding: 10px;
    border: 0px;
    cursor: pointer;
    color: #fff;
  }
}
</style>
