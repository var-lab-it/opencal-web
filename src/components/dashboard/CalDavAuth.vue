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
          <button class="btn btn-danger btn-sm ms-2">
            <font-awesome-icon icon="trash" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CalDavAuth} from "../../types/CalDavAuth";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps({
  auth: {type: Object as () => CalDavAuth, required: true},
});
</script>
