<template>
  <div class="form-item">
    <label class="form-item__label">{{ label }}</label>
    <input class="form-item__input" @input="$emit('input', $event.target.value)" :value="value" :type="type">
    <span v-if="error" class="error">{{ errorText }}</span>
  </div>
</template>

<script>

export default {
  name: 'FormItem',
  props: {
    value: String,
    error: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      default: "Обязательное поле"
    },
    label: String,
    type: {
      default: "text"
    },
  },
  
  emits: ['input'],
}
</script>

<style lang="scss">
.form-item {
  display: flex;
  flex-direction: column;
  gap: 3px;

  &__input {
    font-size: 16px;
    padding: 8px 16px;
    border: unset;
    border-radius: 4px;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    border: 1px solid #e3e3e3;
    transition: all 0.2s;
  }

  &__error {
    color: red;
  }
}
</style>