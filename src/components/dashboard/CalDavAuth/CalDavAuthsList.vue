<template>
  <div class="float-end">
    <router-link
      to="/dashboard/account"
      class="btn btn-outline-secondary me-2"
    >
      <font-awesome-icon icon="angle-left" />
      {{ $t('account.caldav_auths.buttons.back') }}
    </router-link>
    <button
      class="btn btn-outline-success"
      @click="createModalRef?.openModal()"
    >
      <font-awesome-icon icon="plus-circle" />
      {{ $t('account.caldav_auths.buttons.add') }}
    </button>
    <CalDavAuthModal
      ref="createModalRef"
      @refreshed="loadData(true)"
    />
  </div>
  <h2 class="mb-3">
    <router-link
      to="/dashboard/account"
      class="text-decoration-none text-dark"
    >
      {{ $t('account.headline') }}
    </router-link>
    <font-awesome-icon
      icon="angle-right"
      class="small"
    />
    {{ $t('account.caldav_auths.headline') }}
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
      v-for="auth in auths"
      :key="auth.id"
    >
      <CalDavAuthItem
        :auth="auth"
        @item-deleted="loadData(false)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {CalDavAuths} from "../../../types/CalDavAuth";
import {getCalDavAuths} from "../../../services/caldav";
import CalDavAuthModal from "./CalDavAuthModal.vue";
import CalDavAuthItem from "./CalDavAuthItem.vue";

const loading = ref(true);
const auths = ref<CalDavAuths>([]);
const createModalRef = ref<InstanceType<typeof CalDavAuthModal> | null>(null)

onMounted(async () => {
  loadData(true);
});

function loadData(showLoader: boolean = false) {
  try {
    if (showLoader) {
      loading.value = true;
    }

    getCalDavAuths()
        .then((data) => {
          auths.value = data
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
