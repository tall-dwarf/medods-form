<template>
    <div class="radio-item">
        <input @change="$emit('change', value)" :checked="checked" type="radio" :id="'radio-' + value" :name="name" :value="value" />
        <label :for="'radio-' + value">{{label}}</label>
    </div>
</template>

<script>

export default {
    props: {
        label: String,
        name: String,
        value: String,
        checked: Boolean
    },
    emits: ['change'],
}

</script>