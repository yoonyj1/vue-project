<template>
  <div class="apiContainer">
    <h2>2. reactive</h2>

    <div class="optionAPI">
      <p>객체를 반환하는 함수</p> 
      {{ state }} <span>state를 텍스트 보간법으로 입력하면 나오는 값</span> <br>
      {{ state.count }} &nbsp;<span>state.count를 텍스트 보간법으로 입력하면 나오는 값</span> <br>
      <button @click="increment()">이 버튼을 누르면 count가 1씩 증가함</button>
      <br>
      {{ num }}
      <button @click="increment2()">이 버튼을 누르면 num 1씩 증가함</button>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({ count: 0 })
    const num = reactive(0)

    function increment() {
      state.count++
    }
    function increment2() {
      num++
    }
    return {
      state,
      increment,
      num,
      increment2
    };
  },
};
</script>

<style lang="scss" scoped></style>
