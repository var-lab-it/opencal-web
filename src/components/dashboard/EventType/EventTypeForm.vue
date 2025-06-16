<template>
  <form
    ref="formRef"
    @submit.prevent="handleSubmit"
  >
    <FormControl
      id="name"
      v-model="name"
      class="mb-3"
      type="text"
      :label="$t('account.event_types.form.fields.name')"
    />
    <FormControl
      id="slug"
      v-model="slug"
      class="mb-3"
      type="text"
      :label="$t('account.event_types.form.fields.slug')"
    />
    <FormControl
      id="description"
      v-model="description"
      class="mb-3"
      type="textarea"
      :label="$t('account.event_types.form.fields.description')"
    />
    <FormControl
      id="duration"
      v-model="duration"
      class="mb-3"
      type="number"
      :label="$t('account.event_types.form.fields.duration')"
    />

    <div class="d-grid mb-3">
      <button
        type="submit"
        class="btn btn-success"
        data-testid="save-btn"
      >
        <span
          v-if="loadSubmit"
          class="spinner-grow text-light spinner-grow-sm"
          role="status"
        ></span>
        {{ $t('account.caldav_auths.form.buttons.save') }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {toast} from "vue3-toastify";
import {useI18n} from "vue-i18n";
import FormControl from "../../core/form-control.vue";
import {createEventType, updateEventType} from "../../../services/event_types";

const {t} = useI18n()

const props = defineProps({
  id: {type: Number, required: false, default: null},
  name: {type: String, required: false, default: ''},
  description: {type: String, required: false, default: ''},
  duration: {type: Number, required: false, default: 30},
  slug: {type: String, required: false, default: '-'},
});

const emit = defineEmits(['submitted']);

const formRef = ref<HTMLFormElement | null>(null);
const loadSubmit = ref(false);
const name = ref<string>(props.name);
const description = ref<string>(props.description);
const duration = ref<number>(props.duration);
const slug = ref<string>(props.slug);

async function handleSubmit() {
  loadSubmit.value = true;

  try {
    if (props.id === null) {
      createEventType(
          name.value,
          description.value,
          duration.value,
          slug.value,
      ).finally(() => {
        handleSubmitSucceeded();
      });
    } else if (props.id > 0) {
      updateEventType(
          props.id,
          name.value,
          description.value,
          duration.value,
          slug.value,
      ).finally(() => {
        handleSubmitSucceeded();
      });
    }
  } catch (err) {
    console.error("Submit failed:", err);
  } finally {
    loadSubmit.value = false;
  }
}

function handleSubmitSucceeded() {
  loadSubmit.value = false;
  emit('submitted');

  toast(t('account.caldav_auths.form.success_message'), {autoClose: 2000, type: 'success'})
}
</script>
