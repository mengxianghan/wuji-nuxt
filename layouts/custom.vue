<template>
    <div>
        <h2>Custom Layout</h2>
        <div>
            <NuxtLink to="/">home</NuxtLink>
            /
            <NuxtLink to="/about">about</NuxtLink>
            /
            <NuxtLink to="/test1">test1</NuxtLink>
            /
            <NuxtLink to="/test2">test2</NuxtLink>
        </div>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup></script>

<style></style>
