<template>
	<view class="content">
		<image class="logo" src="http://47.98.128.255:3001/png/logo.png"></image>
		<view class="text-area" @click="changetextvalue()">
			<text class="title">{{ textvalue }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		// 检测类型 + 其他验证
		age: {
			type: Number,
			default: 0,
			required: true,
			validator: function (value) {
				return value >= 0;
			}
		}
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
			this.$emit('submit', { value:this.textvalue });
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
