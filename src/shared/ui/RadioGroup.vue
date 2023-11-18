<template>
    <div class="radio-group">
        <RadioItem 
        v-for="dataItem in data" 
        :key="dataItem.id" 
        :value="dataItem.value" 
        :label="dataItem.label"
        :name="name"
        :checked="value === dataItem.value"
        @change="(value) => $emit('change', value)"
        />
    </div>
</template>


<script>
import RadioItem from './RadioItem.vue';

export default {
    components: { RadioItem },
    props: ['data', 'name', 'value'],
    emits: ['change'],
}

</script>

<style lang="scss">
.radio-group {
    display: flex;
    gap: 10px;
    align-items: center;
}
</style>