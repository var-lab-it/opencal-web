<template>
  <div class="card mb-3">
    <div class="card-body">
      <div class="d-flex align-items-center">
        <div class="flex-fill">
          <h5 class="mb-0 pb-0">
            {{ auth.baseUri }}
          </h5>
        </div>
        <div class="flex-column me-5">
          <font-awesome-icon icon="user" />
          {{ auth.username }}
          &middot;
          <font-awesome-icon icon="lock" />
          *********
        </div>
        <div class="flex-column ms-2">
          <button class="btn btn-outline-success btn-sm">
            <font-awesome-icon icon="pencil" />
            {{ $t('account.caldav_auths.buttons.edit') }}
          </button>
          <button
            class="btn btn-danger btn-sm ms-2"
            @click="confirmModal?.openModal()"
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
            ref="confirmModal"
            :title="$t('account.caldav_auths.delete.confirm_headline')"
            :question="$t('account.caldav_auths.delete.confirm_message')"
            :item="`URL: ${auth.baseUri}`"
            @confirmed="deleteItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CalDavAuth} from "../../../types/CalDavAuth";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import ConfirmModal from "../ConfirmModal.vue";
import {ref} from "vue";
import {deleteCalDavAuth} from "../../../services/caldav";
import {toast} from "vue3-toastify";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const props = defineProps({
  auth: {type: Object as () => CalDavAuth, required: true},
});

const emit = defineEmits(['itemDeleted']);

const confirmModal = ref<InstanceType<typeof ConfirmModal> | null>(null);
const loadingDelete = ref(false);

function deleteItem() {
  try {
    loadingDelete.value = true;

    deleteCalDavAuth(props.auth.id)
        .finally(() => {
          loadingDelete.value = false;
          emit('itemDeleted');

          toast(t('account.caldav_auths.delete.success_message'), {autoClose: 2000, type: 'success'})
        });
  } catch (error) {
    console.error("Delete appointment failed:", error);
  }
}
</script>
