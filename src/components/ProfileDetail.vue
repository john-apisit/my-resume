<template>
  <div class="detail">
    <div class="summary-title">
      <h3>Work Experiences</h3>
      <Experience
        v-for="(e, i) in experiences"
        :key="i"
        :position="e.position"
        :company="e.company"
        :period="e.period"
        :responsibilities="e.responsibilities"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Experience from '@/components/Experience.vue'
import dayjs from 'dayjs'

const diffMonth = (from: string | Date, to: string | Date): string => {
  const diffMonth = dayjs(to).diff(from, 'months')
  const years = diffMonth / 12
  const months = diffMonth % 12
  if (years > 0) {
    if (months > 0) {
      return `${years} yrs ${months} mos`
    } else {
      return `${years} yrs`
    }
  } else {
    return `${months} mos`
  }
}

@Options({
  components: {
    Experience
  }
})
export default class Detail extends Vue {
  experiences = [
    {
      company: 'Lotus’s',
      position: `Software Development Lead (Permanent ${diffMonth(
        '2020-02-01',
        new Date()
      )})`,
      period: 'Feb 2020 - Feb 2022',
      responsibilities: [
        'Manage team process, guide team about scrum activities. Lead scrum activities. e.g. Sprint Planning. Daily Scrum, Sprint Demo and Retrospective. Encourage the team to complete all sprint backlogs and guide the team how they can achieve their sprint goal.',
        'Delegate tasks to team and improve their working life balance.',
        'Help the team remove any blockers. e.g. need help from others team, stuck on some errors.',
        'Communicate to the product owner about business requirements and give him a solution including pros-cons.',
        'Communicate to the solution architect to design a system diagram.',
        'Define tech stack, API standard, git flow standard and CI/CD process.',
        'Review code',
        'Interview, onboard new joiner developers and 1-1.',
        {
          title: 'Tech stack',
          subTasks: [
            'Front-end: Vuejs by TypeScript, SCSS',
            'Back-end: NodeJS by TypeScript, Kafka, Redis, Keycloak, Postgres, AWS Cognito, API Gateway, Lambda',
            'DevOps: Github, Docker, Jenkins, Kubernetes on EKS, Kibana, Serverless and SAM CloudFormation, AWS CodeBuild',
            'Communication tools: MS Team and Jira.'
          ]
        },
        {
          title: 'Self-learning',
          subTasks: ['React', 'Next.js']
        }
      ]
    },
    {
      company: 'Refinitiv ',
      position: 'Senior Frontend Developer (Contract 9 mos)',
      period: 'May 2019 - Jan 2020',
      responsibilities: [
        'Work on a scrum team.',
        'Lead some projects and a few members to deliver all tasks of the project in the sprint.',
        'Encourage the team to achieve the goal of the sprint.',
        'Develop boilerplate for Angular projects.',
        'Improve web application performance. e.g. caching HTTP response data into IndexedDB.',
        'Help the team to provide code standards and standard tools for coding.',
        {
          title: 'Tech stack',
          subTasks: ['Angular 8', 'TypeScript', 'LESS style']
        }
      ]
    },
    {
      company: 'Brand New Day',
      position: '.NET Programmer (Permanent 10 mos)',
      period: 'July 2018 - April 2018',
      responsibilities: [
        'Work on a scrum team.',
        'Maintain and develop web application for Retirement project.',
        'Work on CI/CD process using TeamCity and Bitbucket git source control and SourceTree.',
        'Work on the Jira tool for tracking sprint backlog progress and see the velocity of the team.',
        'Try a Scrum Master role on some sprints.'
      ]
    },
    {
      company: 'Thai Beverage Plc',
      position: '.NET Programmer (Contract 6 mos)',
      period: 'Jan 2018 – June 2018',
      responsibilities: [
        'Work on a Scrum team.',
        'Develop web applications for Financial projects.',
        'Design web application infrastructure both front-end and backend.',
        'Introduce Jenkin to the scrum team to perform CI/DI in the DEV environment.',
        'Introduce MongoDB to the scrum team to keep all logs for the web API.',
        'Work with Angular 5 technology and include SCSS and Bootstrap for the front-end part.',
        'Work with .NET MVC 5 and Sql Server and include Entity framework.'
      ]
    },
    {
      company: 'Symphony Communication',
      position: '.NET Programmer (Contract 1 yr 8 mos)',
      period: 'Apr 2016 – Dec 2017',
      responsibilities: [
        'Develop web applications using .NET MVC 5, JQuery and Oracle to support order and billing systems.',
        'Develop web API to support mobile applications using .NET MVC 5.',
        'Develop cross platform mobile applications using IONIC 3 (Angular 4).'
      ]
    },
    {
      company: 'Qi Services',
      position: '.NET Programmer (Contract 1 yr 1 mo)',
      period: 'Apr 2015 – Apr 2016',
      responsibilities: [
        'Develop web applications to support eCommerce systems using .NET MVC 5, Angular 1.x and WCF.',
        'Develop and maintain public websites of the company.'
      ]
    },
    {
      company: 'Home',
      position: 'Freelance Programmer (8 mos)',
      period: 'Sep 2014 - Apr 2015',
      responsibilities: [
        'Develop reports by Reporting Service to support AR and Inventory systems.',
        'Develop web application and web service to support eCommerce system.',
        'using .NET MVC 5, Angular 1.x, SQL Server 2012, Reporting Service and Bootstrap CSS.',
        'Analysis and design application architecture.',
        'Design database.',
        'Develop reports by Reporting Service.'
      ]
    },
    {
      company: 'MoCom Group',
      position: 'Java Programmer (Permanent 1 yr)',
      period: 'Oct 2013 – Sep 2014',
      responsibilities: [
        'Develop web sites, web applications and web API to support SMS systems. The main technologies are Java and MySQL.',
        'Find the appropriate technology to use in the project.',
        'Follow SA to get requirements from users.',
        'Design system architecture.',
        'Design database.'
      ]
    },
    {
      company: 'Cigna Insurance',
      position: '.NET Programmer (Contract 11 mos)',
      period: 'Nov 2012 – Sep 2013',
      responsibilities: [
        'Develop web applications and Windows applications to support insurance systems. The projects were developed by C# and ASP.NET.',
        'Develop billing reports by Reporting Service and Crystal Report.'
      ]
    }
  ]
}
</script>

<style lang="scss" scoped>
.detail {
  flex: 2;
  padding: 160px 20px 10px 20px;
}
</style>
