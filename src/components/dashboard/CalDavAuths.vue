<template>
  <h2 class="mb-3">
    {{ $t('account.headline') }}
    <font-awesome-icon icon="angle-right" class="small" />
    {{ $t('account.caldav_auths.headline') }}
  </h2>

  <div v-if="loading">
    <div class="text-center p-5 m-5">
      <div class="spinner-border text-dark"></div>
    </div>
  </div>

  <div
      v-else
  >

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const loading = ref(true)
</script>
