<template>
  <div class="apiContainer">
    <h2>1. 텍스트 보간법 / v-html</h2>
    <div class="composition">
      <span v-html="escape"></span> 사용
      <p>중괄호 안에 사용 되는 부분은 텍스트로만 반환 됨</p>
      {{ htmlTest }}
      <p v-html="htmlTest"></p>
      <hr />
      <h2>v-bind</h2>
      <span v-html="escape"></span>는 html속성 내부에서 사용할 수 없음
      <br />
      <input type="text" value="{{vbindTest}}" />
      <br />
      <input v-bind:value="vbindTest" />
    </div>
    <div class="optionAPI"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      escape: "{{ }}",
      htmlTest: "<h1>h1 test</h1>",
      vbindTest: "렌더링",
    };
  },
};
</script>

<style>
.apiContainer {
  width: 100%;
}
.apiContainer .composition {
  width: 50%;
  float: left;
  box-sizing: border-box;
  border: 1px solid orange;
  padding-left: 15px;
}
.apiContainer .optionAPI {
  width: 50%;
  float: left;
  box-sizing: border-box;
  border: 1px solid orange;
  padding-left: 15px;
}
</style>
