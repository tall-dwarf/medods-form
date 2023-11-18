<template>
    <form @submit.prevent="onSubmit" class="adress-form form">
        <FormItem label="Индекс" v-model="form.index" />

        <FormItem label="Страна" v-model="form.country" />

        <FormItem label="Область" v-model="form.region" />

        <FormItem label="Город*" :error="$v.form.city.$dirty && !$v.form.city.required" v-model="form.city" />

        <FormItem label="Улица" v-model="form.street" />

        <FormItem label="Дом" v-model="form.house" />

        <button class="form__btn adress-form__btn">Отправить</button>
    </form>
</template>

<script>
import FormItem from '@/shared/ui/FormItem.vue'
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'AddressFrom',
    components: { FormItem },
    emits: ['submit'],
    data() {
        return {
            form: {
                index: '',
                country: '',
                region: '',
                city: '',
                street: '',
                house: '',
            }
        }
    },

    validations: {
        form: {
            city: { required },
        }
    },

    methods: {
        onSubmit() {
            this.$v.form.$touch()
            if(!this.$v.form.$error){
                this.$emit("submit", this.form);
            }
        },
    }
}

</script>