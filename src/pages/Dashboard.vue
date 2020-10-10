<template>
  <div>
    <PageHeader :title="'Dashboard'" :hasNewButton="false" />

    <!-- Statics for games and users -->
    <div class="card-deck">
      <!-- Total Game -->
      <div class="card">
        <div
          class="card-body d-flex justify-content-center flex-column align-items-center flex-wrap"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <div>12</div>
          <div>Total Game</div>
        </div>
      </div>

      <!-- Total User -->
      <div class="card">
        <div class="card-body">
          <div
            class="card-body d-flex justify-content-center flex-column align-items-center flex-wrap"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-home"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <div>12</div>
            <div>Total User</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  components: {
    PageHeader,
  },
};
</script>
