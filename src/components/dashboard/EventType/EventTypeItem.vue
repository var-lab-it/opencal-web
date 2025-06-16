<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <div class="flex-fill">
          <h5 class="mb-0 pb-0">
            {{ eventType.name }}
          </h5>
          <div class="small">
            {{ eventType.description }}
          </div>
        </div>
        <div class="flex-column me-5">
          <font-awesome-icon icon="clock" />
          {{ eventType.duration }}min
        </div>
        <div class="flex-column ms-2">
          <button
            class="btn btn-outline-success btn-sm"
            @click="eventTypeModalRef?.openModal(eventType)"
          >
            <font-awesome-icon icon="pencil" />
            {{ $t('account.caldav_auths.buttons.edit') }}
          </button>
          <button
            class="btn btn-danger btn-sm ms-2"
            @click="confirmModalRef?.openModal()"
          >
            <font-awesome-icon
              v-if="!loadingDelete"
              icon="trash"
              class="fa-fw"
            />
            <span
              v-if="loadingDelete"
              class="spinner-border spinner-border-sm text-white"
              role="status"
            ></span>
          </button>

          <ConfirmModal
            ref="confirmModalRef"
            :title="$t('account.caldav_auths.delete.confirm_headline')"
            :question="$t('account.caldav_auths.delete.confirm_message')"
            :item="`${eventType.name}`"
            @confirmed="deleteItem"
          />
        </div>
      </div>
    </div>
  </div>

  <EventTypeModal
    ref="eventTypeModalRef"
    :key="eventType.id"
    @refreshed="handleItemRefreshed()"
  />
</template>

<script setup lang="ts">
import {EventType} from "../../../types/EventType";
import ConfirmModal from "../ConfirmModal.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref} from "vue";
import {toast} from "vue3-toastify";
import {deleteEventType} from "../../../services/event_types";
import {useI18n} from "vue-i18n";
import EventTypeModal from "./EventTypeModal.vue";

const {t} = useI18n()

const props = defineProps({
  eventType: {type: Object as () =>  EventType, required: true}
});

const emit = defineEmits(['itemDeleted', 'itemRefreshed']);

const eventTypeModalRef = ref<InstanceType<typeof EventTypeModal> | null>(null)
const confirmModalRef = ref<InstanceType<typeof ConfirmModal> | null>(null);
const loadingDelete = ref(false);

function deleteItem() {
  try {
    loadingDelete.value = true;

    deleteEventType(props.eventType.id)
        .finally(() => {
          loadingDelete.value = false;
          emit('itemDeleted');

          toast(t('account.event_types.delete.messages.success'), {autoClose: 2000, type: 'success'})
        });
  } catch (error) {
    console.error("Delete appointment failed:", error);
  }
}

function handleItemRefreshed() {
  emit('itemRefreshed')
}
</script>
