<template>
  <div class="page">
    <label class="checkbox-form">
      <input type="checkbox" />
      <span><i></i></span>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  label.checkbox-form {
    position: relative;
    width: 130px;
    height: 48px;

    input[type='checkbox'] {
      position: absolute;
      appearance: none;

      &:checked ~ span {
        background-color: #00d900;
        box-shadow: 0 15px 25px #009700a6;

        i {
          left: 84px;

          &::before {
            background-color: #00d900;
            box-shadow: 20px 0 0 #00d900;
          }

          &::after {
            background-color: #00d900;
            height: 10px;
            border-radius: 0 0 50px 50px;
            top: 24px;
          }
        }
      }
    }

    span {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: red;
      box-shadow: 0 15px 25px #d80000a6;
      border-radius: 80px;
      transition: 0.5s;

      i {
        position: absolute;
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        top: 4px;
        left: 4px;
        transition: 0.5s;

        &::before {
          content: '';
          position: absolute;
          background-color: red;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          top: 12px;
          left: 6px;
          box-shadow: 20px 0 0 red;
          transition: 0.5s;
          
        }

        &::after {
          content: '';
          position: absolute;
          background-color: red;
          width: 18px;
          height: 6px;
          border-radius: 80px;
          top: 26px;
          left: 11px;
          transition: 0.5s;
        }
      }
    }
  }
}
</style>
