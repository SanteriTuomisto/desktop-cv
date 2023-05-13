<template>
  <div class="container">
    <div class="page">
      <div class="logo">
        <span style="color: blue;">B</span>
        <span style="color: red;">o</span>
        <span style="color: rgb(255, 187, 18);">o</span>
        <span style="color: blue;">g</span>
        <span style="color: green;">l</span>
        <span style="color: red;">e</span>
      </div>
      <div>
        <input type="text" placeholder="Search Boogle or type a URL" class="search" />
      </div>
      <div>
        <button>Search</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  font-size: 40px;
  letter-spacing: -1px;
}

.search {
  margin-top: 20px;
  min-width: 250px;
  width: 70%;
  font-size: 17px;
}
</style>