<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head md-numeric>#</md-table-head>
        <md-table-head>랭킹</md-table-head>
        <md-table-head>핸들</md-table-head>
        <md-table-head>클래스</md-table-head>
        <md-table-head>경험치</md-table-head>
        <md-table-head>해결한 문제</md-table-head>
      </md-table-row>

      <md-table-row v-for="(member, i) of members">
        <md-table-cell md-numeric>{{ i + 1 }}</md-table-cell>
        <md-table-cell>{{ member.rank }}</md-table-cell>
        <md-table-cell>
          <a style="display: flex;" :href="`https://solved.ac/profile/${member.name}`">
            <img :src="`https://static.solved.ac/tier_small/${member.level}.svg`" style="width: 13px; margin-right: 5px;">
            {{ member.name }}
          </a>
        </md-table-cell>
        <md-table-cell>{{ member.class }}</md-table-cell>
        <md-table-cell>{{ member.exp }}</md-table-cell>
        <md-table-cell>{{ member.solved }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: 'Rank',
  computed: {
    members() {
      return this.$store.getters.members;
    }
  }
};
</script>
