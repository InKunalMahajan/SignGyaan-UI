<script setup>
defineOptions({inheritAttrs:false})
const props=defineProps({variant:{type:String,default:'primary'},size:{type:String,default:'md'}})
const variants={primary:'sg-button-primary',secondary:'sg-button-secondary',outline:'sg-button-outline'}
const sizes={sm:'sg-button-sm',md:'',lg:'sg-button-lg'}
</script>
<template><button type="button" v-bind="$attrs" :class="['sg-button',variants[props.variant]??variants.primary,sizes[props.size]??'']"><slot /></button></template>
