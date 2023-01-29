<template>
  <form class="form" @submit="onSubmit" style="padding: 12px">
	  注册
      <view class="title">用户名</view>
      <input
        v-model="username"
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请填写用户名"
      />
    </view>
    <view class="uni-form-item uni-column">
      <view class="title">设置密码</view>
      <input
        v-model="password"
        password
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请设置密码"
      />
    </view>
    <view class="uni-form-item uni-column">
      <view class="title">确认密码</view>
      <input
        v-model="confirmPassword"
        password
        class="uni-input"
        name="input"
        maxlength="20"
        placeholder="请再次输入密码确认"
      />
    </view>
    <div style="margin: 16px">
      <button type="primary">提交</button>
    </div> -->
  </form>
</template>

<script>

export default({
  name: 'Signup'
})
</script>

<style lang="scss" scoped>

</style>
