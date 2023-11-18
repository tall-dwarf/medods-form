<template>
    <div class="slider" id="app">
        <Transition v-for="data in sliderData" :key="data.id" name="bounce">
            <div v-if="activeSlider === data.id" class="slider-item">
                <component @submit="data.submitFunc" v-bind:is="data.component"></component>
            </div>
        </Transition>
    </div>
</template>

<script>
import Clientform from "@/entities/client/ui/ClientForm.vue"
import AddressFrom from "@/entities/client/ui/AddressFrom.vue";
import PasswordForm from "@/entities/client/ui/PassportForm.vue"

export default {
    name: 'CreateSlider',
    components: { Clientform, AddressFrom, PasswordForm },
    data() {
        return {
            activeSlider: 1,
            formData: {},
            sliderData: [
                { id: 1, component: Clientform, submitFunc: this.formSubmit, },
                { id: 2, component: AddressFrom, submitFunc: this.formSubmit, },
                { id: 3, component: PasswordForm, submitFunc: this.formResultSubmit, }],
        }
    },

    methods: {
        formSubmit(data) {
            this.formData = { ...this.formData, ...data }
            this.activeSlider += 1
        },

        async formResultSubmit(data) {
            this.formData = { ...this.formData, ...data }
            console.log(this.formData);
            alert("Пользователь создан")
            // const result = createClient(this.formData)

        }
    }
}

</script>

<style>
.bounce-enter-active {
    animation: bounce-in 0.5s;
    position: absolute;
    top: 0;
    right: 250%;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: rotate(0deg);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(360deg);
    }
}</style>