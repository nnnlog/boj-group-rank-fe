<template>
  <div
      style="display: flex; flex-direction: column; justify-content: center; align-content: center; margin: 0 auto; width: 100%; text-align: center; min-height: 70vh;">
    <h1>404 Not Found</h1>
    <a @click="$router.push({name: 'Home'}), $event.preventDefault();" href="/">홈으로 가기</a>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>