<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <div class="flex-fill">
          <h5 class="mb-1 pb-0">
            <div class="d-inline text-muted">
              #{{ appointment.id }}
            </div>
            {{ appointment.eventType.name }}
          </h5>

          <div class="small text-muted">
            <font-awesome-icon icon="user" />
            {{ appointment.participantName }}
            &middot;
            <font-awesome-icon icon="at" />
            {{ appointment.participantEmail }}
            &middot;
            <font-awesome-icon icon="clock" />
            {{ formatDateStringToDay(appointment.day) }}
            -
            {{ formatDateStringToTime(appointment.startTime) }}
            -
            {{ appointment.eventType.duration }}min
          </div>
        </div>

        <div class="flex-column">
          <button
            class="btn btn-outline-secondary btn-sm"
            @click="openModal"
          >
            details
          </button>
          <button
            class="btn btn-danger btn-sm ms-1"
            @click="$emit('delete')"
          >
            <font-awesome-icon icon="trash" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    id="detailsModal"
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="detailsModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="editModalLabel"
            class="modal-title"
          >
            {{ $t('dashboard.appointments.details.headline') }}
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row mb-2">
            <div class="col-md-4 col-12">
              <strong>
                {{ $t('dashboard.appointments.details.fields.event_type') }}:
              </strong>
            </div>
            <div class="col">
              {{ appointment.eventType.name }}

              <div class="small">
                {{ appointment.eventType.description }}
              </div>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-md-4 col-12">
              <strong>
                {{ $t('dashboard.appointments.details.fields.date_time') }}:
              </strong>
            </div>
            <div class="col">
              {{ formatDateStringToDay(appointment.day) }} {{ formatDateStringToTime(appointment.startTime) }}
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-md-4 col-12">
              <strong>
                {{ $t('dashboard.appointments.details.fields.participant_name') }}:
              </strong>
            </div>
            <div class="col">
              {{ appointment.participantName }}
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-md-4 col-12">
              <strong>
                {{ $t('dashboard.appointments.details.fields.participant_email') }}:
              </strong>
            </div>
            <div class="col">
              {{ appointment.participantEmail }}
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-md-4 col-12">
              <strong>
                {{ $t('dashboard.appointments.details.fields.participant_email') }}:
              </strong>
            </div>
            <div class="col">
              {{ appointment.participantEmail }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Event} from "../../types/Event";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {formatDateStringToDay, formatDateStringToTime} from "../../helper/dateTime";
import * as bootstrap from "bootstrap";
import {ref} from "vue";

defineProps({
  appointment: {type: Object as () => Event, required: true},
});

defineEmits(['delete']);

const modalRef = ref<HTMLDivElement | null>(null);

function openModal() {
  const modal = new bootstrap.Modal(modalRef.value!)
  modal.show()
}

function closeModal() {
  const modal = bootstrap.Modal.getInstance(modalRef.value!)
  modal?.hide()
}
</script>
