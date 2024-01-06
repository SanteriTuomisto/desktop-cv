<template>
  <div class="page">
    <div class="logo">
      bacefook
    </div>
    <div style="display: flex; gap: 20px; justify-content: center;">
      <div class="box">
        <div>Login</div>
        <div>
          Name
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          Password
          <div>
            <select name="passwords" id="passwords">
              <option value="password123">password123</option>
              <option value="topsecret">topsecret</option>
              <option value="hotdog">hotdog</option>
              <option value="32u4hu23h4u234">32u4hu23h4u234</option>
            </select>
          </div>
        </div>
        <button>Login</button>
      </div>
      <div class="box">
        <div style="font-size: 20px;">
          Create account
        </div>
        <div>
          Name
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          Password
          <div>
            <select name="passwords" id="passwords">
              <option value="password123">password123</option>
              <option value="topsecret">topsecret</option>
              <option value="hotdog">hotdog</option>
              <option value="32u4hu23h4u234">32u4hu23h4u234</option>
            </select>
          </div>
        </div>
        <div>
          Birthday
        </div>
        <div>
          Gender
          <div>
            f<input type="range" />m
          </div>
        </div>
        <button>Create account</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  color: #373737;
}
.logo {
  color: blue;
  text-align: center;
  font-weight: bold;
  letter-spacing: -1px;
  font-size: 25px;
}

.box {
  padding: 20px 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 200px;
  width: 40%;
}
</style>