<template>
  <h1 class="h3 mb-3">
    {{ $t('dashboard.appointments.index.headline') }}
  </h1>

  <div class="content">
    <div v-if="loading">
      <div class="text-center p-5 m-5">
        <div class="spinner-border text-dark"></div>
      </div>
    </div>

    <div
      v-else
    >
      <div
        v-for="appointment in appointments"
        :key="appointment.id"
      >
        <Appointment
          :appointment="appointment"
          @delete="cancelAppointment(appointment.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {Events} from "../../types/Event";
import {cancelAppointment as cancelAppointmentApiMethod, getAppointments} from "../../services/appointments";
import Appointment from "./Appointment.vue";

const loading = ref(true);
const appointments = ref<Events>([]);

onMounted(async () => {
  loadData(true);
});

function loadData(showLoader: boolean = false) {
  try {
    if (showLoader) {
      loading.value = true;
    }

    getAppointments()
        .then((events) => {
          appointments.value = events
        })
        .finally(() => {
          if (showLoader) {
            loading.value = false
          }
        });
  } catch (error) {
    console.error("Loading appointments failed:", error);
  }
}

function cancelAppointment(appointmentId: number) {
  try {
    cancelAppointmentApiMethod(appointmentId)
        .finally(() => {
          loadData(false);
        });
  } catch (error) {
    console.error("Delete appointment failed:", error);
  }
}
</script>
