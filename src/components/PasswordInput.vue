<template>
  <q-input
    filled
    :model-value="password"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="isPasswordHidden ? 'password' : 'text'"
    :label="label"
    class="q-mb-sm"
  >
    <template v-slot:append>
      <q-icon
        :name="isPasswordHidden ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        color="primary"
        @click="isPasswordHidden = !isPasswordHidden"
      />
    </template>
  </q-input>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PasswordInput',
  props: {
    password: String,
    label: { type: String, default: 'Senha' },
  },
  setup() {
    return {
      isPasswordHidden: ref(true),
    };
  },
});
</script>
