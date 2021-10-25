<template>
  <div class="header">
    <div class="profile-picture">
      <div class="img-boder">
        <img
          src="@/assets/profile.jpg"
          class="animate__animated animate__flip"
        />
      </div>
    </div>
    <div class="profile-title">
      <h2 class="animate__animated animate__bounceInRight">Apisit Sianglert</h2>
      <h3 class="animate__animated animate__bounceInLeft">
        Software Development Lead
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  max-width: 918px;
  align-items: center;
  z-index: 1;

  .profile-picture {
    flex: 1;
    padding: 0px 20px;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(3) translate(15%, 25%);
      transition-duration: 0.4s;
      transition-timing-function: ease;
    }

    .img-boder {
      margin-left: 54px;
      margin-top: 26px;
      z-index: 1;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background-color: transparent;
      padding: 6px;
      border: 2px solid #fff;

      img {
        border-radius: 50%;
        width: 100%;
        cursor: pointer;
      }
    }
  }

  .profile-title {
    margin-left: auto;
    padding: 0px 20px;
    flex: 2;
    color: white;
    text-align: end;

    h2 {
      font-weight: 400;
    }
    h3 {
      font-weight: 100;
      margin-top: 6px;
    }
  }
}
</style>
