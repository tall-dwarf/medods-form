<template>
    <form @submit.prevent="onSubmit" class="passport-form form">
        <CustomSelect v-model.trim="form.documentType" :data="documentTypeData" />

        <FormItem label="Серия" :error="false" v-model.trim="form.series" />

        <FormItem label="Номер" :error="false" v-model.trim="form.number" />

        <FormItem label="Кем выдан" :error="false" v-model.trim="form.organization" />

        <FormItem label="Дата выдачи*" type="date" :error="$v.form.dateIssue.$dirty && !$v.form.dateIssue.required"
            v-model.trim="form.dateIssue" />

        <button class="form__btn adress-form__btn">Отправить</button>
    </form>
</template>

<script>
import FormItem from '@/shared/ui/FormItem.vue';
import CustomSelect from "@/shared/ui/CustomSelect.vue"
import { required } from 'vuelidate/lib/validators'

export default {
    name: 'PassportForm',
    components: { FormItem, CustomSelect },
    emits: ['submit'],
    data() {
        return {
            form: {
                series: '',
                number: '',
                organization: '',
                dateIssue: '',
                documentType: 'passport',
            },
            documentTypeData: [
                { id: 1, label: "Паспорт", value: 'passport' },
                { id: 2, label: "Свидетельство о рождении", value: 'birth certificate' },
                { id: 3, label: "Вод. удостоверение", value: 'driving license' }]
        }
    },

    validations: {
        form: {
            dateIssue: { required },
        }
    },

    methods: {
        onSubmit() {
            this.$v.form.$touch()
            if (!this.$v.form.$error) {
                this.$emit("submit", this.form);
            }
        },
    }
}

</script>