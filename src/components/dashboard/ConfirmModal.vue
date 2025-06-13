<template>
  <div
    id="confirmModal"
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="confirmModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="editModalLabel"
            class="modal-title"
          >
            {{ title }}
          </h5>
        </div>
        <div class="modal-body">
          <p>
            {{ question }}
          </p>

          <p v-if="item !== null">
            {{ item }}
          </p>
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-outline-success"
            @click="closeCancelled"
          >
            {{ cancelBtnLabel ?? $t('confirm_modal.buttons.cancel') }}
          </button>
          <button
            class="btn btn-danger"
            @click="closeConfirmed"
          >
            {{ confirmBtnLabel ?? $t('confirm_modal.buttons.confirm') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import * as bootstrap from "bootstrap";

defineProps({
  title: {type: String, required: true},
  question: {type: String, required: true},
  item: {type: String, required: false, default: null},
  cancelBtnLabel: {type: String, required: false, default: null},
  confirmBtnLabel: {type: String, required: false, default: null},
});

const modalRef = ref<HTMLDivElement | null>(null);

const emit = defineEmits(['confirmed', 'cancelled']);

function openModal() {
  const modal = new bootstrap.Modal(modalRef.value!)
  modal.show()
}

function closeModal() {
  const modal = bootstrap.Modal.getInstance(modalRef.value!)
  modal?.hide()
}

function closeConfirmed() {
  closeModal();

  emit('confirmed');
}

function closeCancelled() {
  closeModal();

  emit('cancelled');
}

defineExpose({
  openModal,
  closeModal
});
</script>
