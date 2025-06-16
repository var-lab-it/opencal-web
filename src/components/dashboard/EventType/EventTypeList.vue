<template>
  <div class="float-end">
    <button
      class="btn btn-outline-success"
      @click="eventTypeModalRef?.openModal(null)"
    >
      <font-awesome-icon icon="plus-circle" />
      {{ $t('account.caldav_auths.buttons.add') }}
    </button>

    <EventTypeModal
      ref="eventTypeModalRef"
      @refreshed="loadData(true)"
    />
  </div>

  <h2 class="mb-3">
    {{ $t('account.event_types.headline') }}
  </h2>
  <div
    v-if="loading"
    class="spinner-border text-dark"
    role="status"
  ></div>

  <div
    v-else
  >
    <div
      v-for="eventType in eventTypes"
      :key="eventType.id"
    >
      <EventTypeItem
        :event-type="eventType"
        @item-deleted="loadData(false)"
        @item-refreshed="loadData(false)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import EventTypeItem from "./EventTypeItem.vue";
import {onMounted, ref} from "vue";
import {EventTypes} from "../../../types/EventType";
import {getEventTypesByUser} from "../../../services/event_types";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import EventTypeModal from "./EventTypeModal.vue";

const eventTypeModalRef = ref<InstanceType<typeof EventTypeModal> | null>(null)
const loading = ref(true);
const eventTypes = ref<EventTypes>([]);

onMounted(async () => {
  loadData(true);
});

function loadData(showLoader: boolean = false) {
  try {
    if (showLoader) {
      loading.value = true;
    }

    const userEmail = sessionStorage.getItem('userEmail');

    getEventTypesByUser(userEmail ?? '')
        .then((data) => {
          eventTypes.value = data
        })
        .finally(() => {
          if (showLoader) {
            loading.value = false
          }
        });
  } catch (error) {
    console.error("Loading CalDAVAuths failed:", error);
  }
}
</script>
