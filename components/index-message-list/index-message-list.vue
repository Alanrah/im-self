<template>
	<view class="main">
		<view class="messages">
			<view class="messages-list" >
				<!-- 好友申请 -->
				<view class="messages-list-item">
					<view class="left">
						<text class="unread" v-if="newFriends.unread">{{ newFriends.unread  > 99 ? '99+' : newFriends.unread }}</text>
						<image :src="newFriends.avatar"></image>
					</view>
					<view class="right">
						<text class="name text-overflow ">{{ newFriends.name }}</text>
						<text class="desc text-overflow">{{ newFriends.news }}</text>
					</view>
				</view>
				<!-- 消息列表 -->
				<view class="messages-list-item" v-for="message in messageList">
					<view class="left">
						<text class="unread" v-if="message.unread">{{ message.unread >99 ? '99+' : message.unread }}</text>
						<image :src="message.avatar"></image>
					</view>
					<view class="right">
						<text class="name text-overflow ">{{ message.name }}</text>
						<text class="desc text-overflow">{{ message.news }}</text>
						<text class="time">{{ message.time }}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {getIndexMessages} from '../../common/js/index-messages.js'
export default {
	name: 'index-message-list',
	data() {
		return {
			newFriends: {},
			messageList: []
		};
	},
	methods: {
		getMessages: function() {
			const res = getIndexMessages();
			this.newFriends = res.newFriends;
			this.messageList = res.messageList;
		}
	},
	onLoad() {
		this.getMessages();
	}
};
</script>

<style lang="scss">
.main {
	width:100%;
	margin-top: 100rpx;
	padding: 0 $uni-spacing-row-base;
}
.messages-list {
	width: 100%;
	.messages-list-item {
		width:100%;
		height:128rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		position: relative;
		.left{
			margin-right:$uni-spacing-row-base;
			position: relative;
			height: 96rpx;
			image {
				width: 96rpx;
				height:96rpx;
				border-radius: 10rpx;
				// background-color: $uni-color-primary;
			}
			.unread{
				background-color: $uni-color-warning;
				border-radius: 18rpx;
				position: absolute;
				left:68rpx;
				top:-10rpx;
				z-index: 2;
				font-size: $uni-font-size-sm;
				color:$uni-text-color-inverse;
				padding: 0rpx 8rpx;
				min-width: 36rpx;
				text-align: center;
				height: 36rpx;
				line-height: 36rpx;
				box-sizing: border-box;
			}
		}
		.right{
			flex:1;
			margin-right:20rpx;
			.name {
				font-size: $uni-font-size-lg;
				padding-right:30rpx;
				box-sizing: border-box;
				font-weight: 400;
				color: $uni-text-color;
				line-height: 50rpx;
				
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
			.desc {
				font-size: $uni-font-size-base;
				line-height:40rpx;
				height:40rpx;
				color:$uni-text-color-grey;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
			.time{
				width: 100rpx;
				font-size: $uni-font-size-sm;
				position: absolute;
				right: 40rpx;
				bottom:70rpx;
				color: $uni-text-color-disable;
			}
		}
		
	}
}
</style>
