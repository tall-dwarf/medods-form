<template>
    <div class="custom-checkbox">
        <input @change="$emit('input', Boolean($event.target.checked))" :checked="value" class="custom-checkbox__input" type="checkbox" :id="'checkbox' + id" />
        <label class="custom-checkbox__label" :for="'checkbox' + id">{{label}}</label>
    </div>
</template>

<script >

export default {
    name: 'FormItem',
    props: {
        value: Boolean,
        label: String,
    },
    emits: ['input'],

    created(){
        this.id = new Date().getTime()
    },

    data(){
        return{
            id: 0
        }
    }
}

</script>