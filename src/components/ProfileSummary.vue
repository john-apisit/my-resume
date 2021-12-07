<template>
  <div class="summary">
    <div class="info">
      <div class="info-item">
        <i class="bi bi-geo-alt" />
        <span>Bang Yai, Nonthaburi 11140 Thailand</span>
      </div>
      <div class="info-item">
        <i class="bi bi-phone-vibrate" />
        <span>0814362332</span>
      </div>
      <div class="info-item">
        <i class="bi bi-envelope" />
        <span>johnnycpe@gmail.com</span>
      </div>
    </div>
    <div class="summary-title">
      <h3>Profile</h3>
      <div class="skill">
        <div class="title">
          Hi, my name is John. Currently I am working in the IT department of
          Lotus company as a software development lead. I have 10 years
          experience in Javascript development. 7 years for C# .NET MVC. 5 years
          for Angular and Typescript. 3 years for NodeJs. 2 years for VueJs. and
          3 years for leading the team. Now, I am looking for a challenging
          business unit especially financial, blockchain and ecommerce.
        </div>
      </div>
    </div>
    <div class="summary-title">
      <h3>Skill Summary</h3>
      <div class="skill" v-for="skill in skills" :key="skill.name">
        <div class="title">{{ skill.name }}</div>
        <div class="score-bar-container">
          <div class="score-bar" :class="`score-bar-${skill.score}`"></div>
        </div>
      </div>
    </div>
    <div class="summary-title">
      <h3>Languages</h3>
      <div class="skill" v-for="l in languages" :key="l.name">
        <div class="title">{{ l.name }}</div>
        <div class="score-bar-container">
          <div class="score-bar" :class="`score-bar-${l.score}`"></div>
        </div>
      </div>
    </div>
    <div class="summary-title">
      <h3>Education</h3>
      <Experience
        position="Bachelor Degree of Engineer (Computer Engineering)"
        company="Rajamangala University of Technology Thanyaburi"
        period="May 2008 - May 2012"
        :responsibilities="['GPA 3.12']"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Experience from '@/components/Experience.vue'

@Options({
  components: {
    Experience
  }
})
export default class Summary extends Vue {
  skills = [
    { name: 'Angular', score: 80 },
    { name: 'VueJs', score: 80 },
    { name: 'React', score: 60 },
    { name: 'TypeScript', score: 100 },
    { name: 'NodeJS', score: 100 },
    { name: 'LESS/SASS', score: 80 },
    { name: 'Bootstrap', score: 80 },
    { name: 'MongoDB', score: 80 },
    { name: 'Docker', score: 100 },
    { name: 'Jenkins', score: 80 },
    { name: 'Kubernetes', score: 80 }
  ]
  languages = [
    { name: 'Thai', score: 100 },
    { name: 'English', score: 60 }
  ]
}
</script>

<style lang="scss" scoped>
.summary {
  flex: 1;
  background-color: #f3f3f3;
  padding: 200px 20px 10px 20px;

  .info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 10pt;

    .info-item {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
  }

  .skill {
    display: flex;
    flex-direction: row;
    font-size: 10pt;

    .title {
      flex: 1;
    }

    .score-bar-container {
      flex: 1;
      background-color: #bfbfbf;
      border-radius: 6px;

      .score-bar {
        height: 100%;
        background-color: #2196f3;
        border-radius: 6px;

        &:hover {
          transform: scale(1, 1.2);
          transition-duration: 0.01s;
          transition-timing-function: ease;
        }

        &.score-bar-50 {
          width: 50%;
        }
        &.score-bar-60 {
          width: 60%;
        }
        &.score-bar-70 {
          width: 70%;
        }
        &.score-bar-80 {
          width: 80%;
        }
        &.score-bar-90 {
          width: 90%;
        }
        &.score-bar-100 {
          width: 100%;
        }
      }
    }
  }
}
</style>
