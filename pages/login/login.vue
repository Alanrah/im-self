<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @click="backTo">
				<image src="http://47.98.128.255:3001/svg/close.svg"></image>
			</view>
			<view class="top-bar-right" @click="register">
				<text>注册</text>
				<!-- <image src="http://47.98.128.255:3001/png/logo.png"></image> -->
			</view>
		</view>
		<view class="main">
			<view class="login-text">登录</view>
			<view class="login-slogan">欢迎登录慢煮！</view>
			<input class="login-input" maxlength="10" placeholder="用户名/邮箱" />
			<input class="login-input" password type="text" placeholder="密码" />
			<button class="login-button" type="primary" @click="login" loading="true">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			backTo: function() {
				uni.navigateBack({
					delta: 1
				});
			},
			register: function(){},
			login: function(){},
		}
	}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height:fit-content;
}

.top-bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 88rpx;
	background: $uni-bg-color;
	box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
	z-index: 99;
	padding-top: var(--status-bar-height);
	display:flex;
	justify-content: space-between;
	align-items: center;

	.top-bar-left {
		image {
			width: 62rpx;
			height: 62rpx;
			border-radius: 16rpx;
			margin: 15rpx 20rpx;
		}
	}
	.top-bar-right {
		text {
			width: 56rpx;
			height: 56rpx;
			border-radius: 16rpx;
			margin: 15rpx 20rpx;
		}
	}
}
.main {
	width: 100%;
	box-sizing: border-box;
	padding: 150rpx 32rpx;
	.login-text {
		font-size: 40rpx;
		font-weight: 600;
		width: 100%;
		text-align: center;
	}
	.login-slogan {
		color: $uni-text-color-grey;
		margin: 20rpx 20rpx 80rpx 20rpx;
	}
	.login-input {
		border-bottom: 1px solid $uni-border-color;
		line-height: 80rpx;
		height: 80rpx;
		padding-left: 20rpx;
	}
	.login-button{
		margin: 50rpx 0;
	}
}
</style>
