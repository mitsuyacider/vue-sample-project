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
          <BaseIcon :width="80" :height="80">
            <path
              fill-rule="evenodd"
              d="M8 .5c-.662 0-1.77.249-2.813.525a61.11 61.11 0 0 0-2.772.815 1.454 1.454 0 0 0-1.003 1.184c-.573 4.197.756 7.307 2.368 9.365a11.192 11.192 0 0 0 2.417 2.3c.371.256.715.451 1.007.586.27.124.558.225.796.225s.527-.101.796-.225c.292-.135.636-.33 1.007-.586a11.191 11.191 0 0 0 2.418-2.3c1.611-2.058 2.94-5.168 2.367-9.365a1.454 1.454 0 0 0-1.003-1.184 61.09 61.09 0 0 0-2.772-.815C9.77.749 8.663.5 8 .5zM8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"
            />
          </BaseIcon>
          <div>{{ this["game/gameList"].length }}</div>
          <div>Total Games</div>
        </div>
      </div>

      <!-- Total Users -->
      <div class="card">
        <div class="card-body">
          <div
            class="card-body d-flex justify-content-center flex-column align-items-center flex-wrap"
          >
            <BaseIcon :width="80" :height="80">
              <path
                fill-rule="evenodd"
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
              />
            </BaseIcon>
            <div>{{ this["user/userList"].length }}</div>
            <div>Total Users</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import BaseIcon from "@/components/BaseIcon";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["game/gameList", "user/userList"]),
  },
  components: {
    PageHeader,
    BaseIcon,
  },
};
</script>
