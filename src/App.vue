<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <img alt="Vue logo" :class="classes.logo" :src="logo" />
    <HelloWorld ref="children" msg="Hello Vue 3 + Vite" />
    <a>sddf</a>
    <label>{{ t("language") }}</label>
    <select v-model="locale">
      <option value="en">en</option>
      <option value="zh">zh</option>
    </select>
    <p>{{ t("hello") }}</p>
  </div>
</template>
<script setup>
import HelloWorld from "comps/HelloWorld.vue";
import logo from "@/assets/logo.png";
import classes from "./App.module.css";
import { getCurrentInstance, ref, computed } from "vue";
const ins = getCurrentInstance();
function useI18n() {
  const locale = ref("zh");
  const i18n = ins.type.i18n;
  const t = (msg) => {
    return computed(() => i18n[locale.value][msg]).value;
  };
  return { locale, t };
}
const { locale, t } = useI18n();
</script>

<i18n>
{
"en": {
  "language": "lanage",
  "hello":"hello"
},
"zh": {
  "language": "22323",
  "hello":"32333"
}
}
</i18n>
<style lang="scss" scope>
$link-color: red;
a {
  color: $link-color;
}
</style>
