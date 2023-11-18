<template>
    <form class="form client-form" @submit.prevent="onSubmit">

        <FormItem 
        label="Фамилия*" 
        :error="$v.form.surname.$dirty && !$v.form.surname.required" 
        v-model.trim="form.surname" />

        <FormItem 
        label="Имя*" 
        :error="$v.form.name.$dirty && !$v.form.name.required" 
        v-model.trim="form.name" />

        <FormItem 
        label="Отчество" 
        :error="false" 
        v-model.trim="form.patronymic" />

        <FormItem 
        type="date" 
        label="Дата рождения*" 
        :error="$v.form.birthdate.$dirty && !$v.form.birthdate.required"
        v-model.trim="form.birthdate" />

        <FormItem 
        label="Номер телефона (начиная с 7)*" 
        error-text="Введите номер в указанном формате"
        :error="$v.form.phone.$dirty && !$v.form.phone.phoneValidator"
        v-model.trim="form.phone" />

        <RadioGroup 
        @change="(value) => form.gender = value" :value="form.gender" 
        name="gender" 
        :data="genderData" />

        <CustomSelect 
        :multiple="true" 
        :error="$v.form.clientsGroup.$dirty && !$v.form.clientsGroup.required"
        v-model.trim="form.clientsGroup" 
        :data="clientsGroupData" />

        <CustomSelect 
        v-model="form.doctor" 
        :data="doctorData" />

        <CustopCheckbox 
        label="Не отправлять СМС" 
        v-model="form.sms" />

        <button class="form__btn client-form__btn">Отправить</button>
    </form>
</template>




<script>
import { required } from 'vuelidate/lib/validators'
import FormItem from '@/shared/ui/FormItem.vue'
import RadioGroup from "@/shared/ui/RadioGroup.vue"
import { phoneValidator } from "@/shared/lib/validators"
import CustomSelect from "@/shared/ui/CustomSelect.vue"
import CustopCheckbox from "@/shared/ui/CustomCheckbox.vue"

export default {
    name: 'ClientForm',
    components: { FormItem, RadioGroup, CustomSelect, CustopCheckbox },
    emits: ['submit'],
    data() {
        return {
            form: {
                surname: '',
                name: '',
                patronymic: '',
                birthdate: '',
                phone: '',
                gender: 'male',
                doctor: 'Иванов',
                clientsGroup: [],
                sms: true,
            },

            genderData: [{ id: 1, label: "Мужчина", value: 'male' }, { id: 2, label: "Женщина", value: 'female' }],
            doctorData: [{ id: 1, label: "Иванов", value: 'Иванов' }, { id: 2, label: "Захаров", value: 'Захаров' }, { id: 3, label: "Чернышева", value: 'Чернышева' }],
            clientsGroupData: [{ id: 1, label: "VIP", value: 'VIP' }, { id: 2, label: "Проблемные", value: 'Проблемные' }, { id: 3, label: "ОМС", value: 'ОМС' },],
        }
    },
    
    validations: {
        form: {
            surname: { required, },
            name: { required, },
            birthdate: { required, },
            clientsGroup: {required},
            phone: {
                phoneValidator: phoneValidator
            },
        },
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