<template>
  <div class="page">
    <Header />
    <div class="container">
      <ProfileSummary />
      <ProfileDetail />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from '@/components/Header.vue'
import ProfileSummary from '@/components/ProfileSummary.vue'
import ProfileDetail from '@/components/ProfileDetail.vue'

@Options({
  components: {
    Header,
    ProfileSummary,
    ProfileDetail
  }
})
export default class Profile extends Vue {}
</script>

<style lang="scss" scoped>
.page {
  background: linear-gradient(90deg, rgb(240, 138, 240), rgb(126, 162, 216));
  max-width: 918px;
  margin: 0px auto;

  .container {
    clip-path: polygon(0 95px, 100% 186px, 100% 100%, 0% 100%);
    background-color: white;

    display: flex;
    flex-direction: row;
    width: 100%;
  }
}
</style>
