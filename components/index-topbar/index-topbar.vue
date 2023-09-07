<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="http://47.98.128.255:3001/png/default-avatar.png"></image>
			</view>
			<view class="top-bar-center">
				<image src="http://47.98.128.255:3001/png/logo.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="search">
					<image src="http://47.98.128.255:3001/svg/search.svg"></image>
				</view>
				<view class="add">
					<image src="http://47.98.128.255:3001/svg/add.svg"></image>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	name:"index-topbar",
	props: {
	},
	emits: ['in-focus', 'submit'],
	data() {
		return {
			textvalue: '123',
			buttontype: 'primary'
		};
	},
	onLoad() {
		this.textvalue = '456'; //这里修改textvalue的值，其实123都来不及显示就变成了456
	},
	methods: {
		changetextvalue() {
			this.textvalue = '789'; //这里修改textvalue的值，页面自动刷新为789
			uni.showToast({
				title: 'Hello ' + this.textvalue + '!'
			});
			this.$emit('submit', { value: this.textvalue });
		}
	}
};
</script>

<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.top-bar {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 88rpx;
	background: $uni-bg-color;
	box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
	.top-bar-left {
		float: left;
		image {
			width: 62rpx;
			height: 62rpx;
			border-radius: 16rpx;
			margin:15rpx;
		}
	}
	.top-bar-center {
		position: absolute;
		text-align: center;
		left: 0;
		right: 0;
		top:12rpx;
		margin: auto;
		image {
			width: 68rpx;
			height: 68rpx;
		}
	}
	.top-bar-right {
		float: right;
		height:100%;

		.search {
			display: inline-block;
			margin-right: $uni-spacing-row-base;
		}

		.add {
			display: inline-block;
		}
		image {
			width: 56rpx;
			height:56rpx;
			margin-top: 18rpx;
		}
	}
}
</style>