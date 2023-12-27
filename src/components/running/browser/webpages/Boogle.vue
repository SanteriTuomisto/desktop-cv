<template>
  <div class="container">
    <div class="page" v-if="!searchOpen">
      <div class="logo">
        <span style="color: blue;">B</span>
        <span style="color: red;">o</span>
        <span style="color: rgb(255, 187, 18);">o</span>
        <span style="color: blue;">g</span>
        <span style="color: green;">l</span>
        <span style="color: red;">e</span>
      </div>
      <div>
        <input type="text" v-model="value" placeholder="Search Boogle or type a URL" class="search" style="margin-top: 20px;" />
      </div>
      <div>
        <button @click="() => search(value)">Search</button>
      </div>
    </div>
    <div v-else class="search-page">
      <div class="search-bar">
        <div class="logo">
          <span style="color: blue;">B</span>
          <span style="color: red;">o</span>
          <span style="color: rgb(255, 187, 18);">o</span>
          <span style="color: blue;">g</span>
          <span style="color: green;">l</span>
          <span style="color: red;">e</span>
        </div>
        <div>
          <input type="text" v-model="value" placeholder="Search Boogle or type a URL" class="search" />
          <button @click="() => search(value)">Search</button>
        </div>
      </div>
      <div class="results">
        <div>
          Did you mean: asdasd
        </div>
        <div>No results containing all your search terms were found.</div>
        <div>Your search - {{ searchedWord }} - did not match any documents.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      searchOpen: false,
      searchedWord: '',
    };
  },
  methods: {
    search(searchValue) {
      if (searchValue !== '') {
        this.searchOpen = true;
        this.searchedWord = searchValue;
      } else {
        this.searchOpen = false;
        this.searchWord = '';
      }
    },
  },
};
</script>

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
  min-width: 250px;
  width: 70%;
  font-size: 17px;
}

.search-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.search-bar {
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 10px;
}

.results {
  color: black;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
}
</style>