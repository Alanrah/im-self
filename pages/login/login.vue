<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="http://47.98.128.255:3001/svg/close.svg"></image>
			</view>
			<view class="top-bar-right">
				<text>注册</text>
				<!-- <image src="http://47.98.128.255:3001/png/logo.png"></image> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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

	
}</style>
