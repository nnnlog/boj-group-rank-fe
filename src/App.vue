<template>
  <md-content md-theme="primary">
    <md-app md-waterfall md-mode="fixed-last" style="min-height: 100vh;">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">알고리즘 폐관수련방</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="홈" @click="$router.push({name: 'Home'}).finally(() => {});"></md-tab>
            <md-tab id="tab-rank" md-label="랭킹" @click="$router.push({name: 'Rank'}).finally(() => {});"></md-tab>
            <md-tab id="tab-chat" md-label="채팅방" @click="open('https://open.kakao.com/o/gPS4w1xc', $event);"></md-tab>
            <md-tab id="tab-boj" md-label="백준 그룹" @click="open('https://www.acmicpc.net/group/9190', $event);"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <span style="cursor: pointer;" class="md-list-item-text" @click="$router.push({name: 'Home'}).finally(() => {});">홈</span>
          </md-list-item>

          <md-list-item>
            <md-icon>people_alt</md-icon>
            <span style="cursor: pointer;" class="md-list-item-text" @click="$router.push({name: 'Rank'}).finally(() => {});">랭킹</span>
          </md-list-item>

          <md-list-item>
            <md-icon>chat</md-icon>
            <span style="cursor: pointer;" class="md-list-item-text" @click="open('https://open.kakao.com/o/gPS4w1xc', $event);">채팅방</span>
          </md-list-item>

          <md-list-item>
            <md-icon>north_east</md-icon>
            <span style="cursor: pointer;" class="md-list-item-text" @click="open('https://www.acmicpc.net/group/9190', $event);">백준 그룹</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view v-if="$store.getters.members.length > 0"></router-view>
      </md-app-content>
    </md-app>
  </md-content>
</template>

<script>
export default {
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    open(url, $event) {
      window.open(url, '_blank');
      $event.preventDefault();
    }
  },
  created() {
    this.$store.dispatch('syncMembers');
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";

@include md-register-theme("primary", (
    primary: #ff5722,
    accent: #ff5722
));

@import "~vue-material/dist/theme/all";
</style>

<style lang="scss">
/*@import url('https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css');*/
@import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css);


* {
  font-family: 'NanumSquare', sans-serif;
}
</style>
