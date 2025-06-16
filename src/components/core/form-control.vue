<template>
  <div :class="`form-group ${cssClass}`">
    <label for="baseUri">
      {{ label }}:
    </label>
    <input
      v-if="type !== 'textarea'"
      :id="id"
      v-model="model"
      :type="type"
      class="form-control"
      required
      data-testid="name-input"
    />
    <textarea
      v-else
      :id="id"
      v-model="model"
      class="form-control"
      rows="3"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
const model = defineModel<string|number>();

defineProps({
  id: {type: String, required: true},
  cssClass: {type: String, required: false, default: ''},
  label: {type: String, required: true},
  type: {type: String as () => 'text' | 'url' | 'password' | 'textarea' | 'number', required: true},
});
</script>
