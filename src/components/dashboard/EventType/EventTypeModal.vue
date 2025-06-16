<template>
  <div
    id="eventTypeModal"
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="eventTypeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="editModalLabel"
            class="modal-title"
          >
            {{ $t('account.event_types.modal.headline') }}
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <EventTypeForm
            :id="currentEventType?.id"
            :key="currentEventType?.id"
            :name="currentEventType?.name"
            :description="currentEventType?.description"
            :duration="currentEventType?.duration"
            :slug="currentEventType?.slug"
            @submitted="formSubmitted"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as bootstrap from "bootstrap";
import {onMounted, ref} from "vue";
import {EventType} from "../../../types/EventType";
import EventTypeForm from "./EventTypeForm.vue";

const props = defineProps({
  show: Boolean,
});

const modalRef = ref<HTMLDivElement | null>(null);
const emit = defineEmits(['refreshed']);
const currentEventType = ref<EventType | null>(null);

onMounted(() => {
  if (props.show) {
    openModal(null);
  }
});

function openModal(eventType: EventType | null) {
  currentEventType.value = eventType;

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
