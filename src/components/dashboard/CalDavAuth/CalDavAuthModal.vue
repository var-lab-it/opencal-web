<template>
  <div
    id="calDavAuthModal"
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="calDavAuthModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="editModalLabel"
            class="modal-title"
          >
            {{ $t('account.caldav_auths.create_modal.headline') }}
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <CalDavAuthForm @submitted="formSubmitted" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as bootstrap from "bootstrap";
import {onMounted, ref} from "vue";
import CalDavAuthForm from "./CalDavAuthForm.vue";

const props = defineProps({
  show: Boolean,
});

const modalRef = ref<HTMLDivElement | null>(null);
const emit = defineEmits(['refreshed']);

onMounted(() => {
  if (props.show) {
    openModal();
  }
});

function openModal() {
  const modal = new bootstrap.Modal(modalRef.value!)
  modal.show()
}

function closeModal() {
  const modal = bootstrap.Modal.getInstance(modalRef.value!)
  modal?.hide()
}

function formSubmitted() {
   closeModal();
   emit('refreshed');
}

defineExpose({
  openModal,
  closeModal
});
</script>
