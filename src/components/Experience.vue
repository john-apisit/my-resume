<template>
  <div class="experience">
    <h4>{{ position }}</h4>
    <div class="company">{{ company }} | {{ period }}</div>
    <ul>
      <li v-for="(r, i) in responsibilities" :key="i">
        <div v-if="r.title">
          <span>{{ r.title }}</span>
          <ul>
            <li v-for="(s, j) in r.subTasks" :key="j">
              <span>{{ s }}</span>
            </li>
          </ul>
        </div>

        <span v-else>{{ r }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

export default class Experience extends Vue {
  @Prop() position: string | undefined = undefined
  @Prop() company: string | undefined = undefined
  @Prop() period: string | undefined = undefined
  @Prop() responsibilities = ['GPA 3.12']
}
</script>

<style lang="scss" scoped>
.experience {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  h4 {
    line-height: 26px;
  }

  ul {
    list-style-type: disc;
    font-size: 12pt;
    color: #2196f3;
    padding-left: 18px;

    li {
      span {
        color: black;
        font-size: 10pt;
      }
    }
  }
}
</style>
