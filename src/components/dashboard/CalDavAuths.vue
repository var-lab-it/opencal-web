<template>
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
      <CalDavAuth :auth="auth" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {CalDavAuths} from "../../types/CalDavAuth";
import CalDavAuth from './CalDavAuth.vue'
import {getCalDavAuths} from "../../services/caldav";
import Appointment from "./Appointment.vue";

const loading = ref(true)
const auths = ref<CalDavAuths>([]);

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
