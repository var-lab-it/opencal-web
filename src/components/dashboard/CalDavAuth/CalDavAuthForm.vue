<template>
  <form
    ref="formRef"
    @submit.prevent="handleSubmit"
  >
    <div class="form-group mb-3">
      <label for="baseUri">
        {{ $t('account.caldav_auths.form.fields.base_uri') }}:
      </label>
      <input
        id="baseUri"
        v-model="baseUri"
        type="url"
        class="form-control"
        required
        data-testid="baseUri-input"
      />
    </div>

    <div class="form-group mb-3">
      <label for="username">
        {{ $t('account.caldav_auths.form.fields.username') }}:
      </label>
      <input
        id="username"
        v-model="username"
        type="text"
        class="form-control"
        required
        data-testid="username-input"
      />
    </div>

    <div class="form-group mb-3">
      <label for="password">
        {{ $t('account.caldav_auths.form.fields.password') }}:
      </label>
      <input
        id="password"
        v-model="password"
        type="text"
        class="form-control"
        required
        data-testid="password-input"
      />
    </div>

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
import {createCalDavAuth} from "../../../services/caldav";

const props = defineProps({
  id: {type: Number, required: false, default: null},
  baseUri: {type: String, required: false, default: ''},
  username: {type: String, required: false, default: ''},
  password: {type: String, required: false, default: ''},
});

const emit = defineEmits(['submitted']);

const formRef = ref<HTMLFormElement | null>(null);
const loadSubmit = ref(false);
const baseUri = ref<string>(props.baseUri ?? '');
const username = ref<string>(props.username ?? '');
const password = ref<string>(props.password ?? '');

async function handleSubmit() {
  loadSubmit.value = true;

  try {
    createCalDavAuth(
        baseUri.value,
        username.value,
        password.value
    ).finally(() => {
      loadSubmit.value = false;
      emit('submitted');

      baseUri.value = '';
      username.value = '';
      password.value = '';
    });
  } catch (err) {
    console.error("Submit failed:", err);
  } finally {
    loadSubmit.value = false;
  }
}
</script>
