<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css');

* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Roboto';
}

.summary-title {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 4px;

  h3 {
    font-weight: 400;
    margin-bottom: 10px;
    color: #2196f3;
  }
}
</style>
