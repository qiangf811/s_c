<template>
  <div class="link-wrapper">
    <router-link class="item" to="/">牡丹</router-link>
    <router-link class="item" to="/phalaenopsis">蝴蝶兰</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  setup() {
    const route = useRoute()
    const currentPath = computed(() => route.path)
  },
}
</script>
