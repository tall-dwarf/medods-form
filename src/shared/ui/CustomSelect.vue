<template>
    <div class="select-wrapper">
        <select :multiple="multiple" :value="multiple ? ' ' : value" @input="input" class="custom-select">
            <option v-for="dataItem in data" :key="dataItem.id" :value="dataItem.value">{{ dataItem.label }}</option>
        </select>
        <span v-if="error" class="error">Обязательное поле</span>
    </div>
</template>


<script>
import { getselectedValues } from "@/shared/lib/form"
export default {
    props: {
        data: Array,
        value: {
            type: String || Array,
        },
        multiple: {
            default: false,
        },
        error: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['input'],

    methods: {
        input(event) {
            if (this.$props.multiple) {
                return this.$emit('input', getselectedValues(event.currentTarget))
            }
            this.$emit('input', event.target.value)
        }
    }
}

</script>


<style lang="scss">
.custom-select {
    padding: 10px 0px;
    border: unset;
    border-radius: 4px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #e3e3e3;
    outline: none;
    width: 100%;

    &:focus-visible {
        border-color: rgba(84, 105, 212, 0.5);
    }
}
</style>@/shared/lib/form