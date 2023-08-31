<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title1 }}</text>
			 <div>Current Count: {{ counter.count }}</div>
			  <button @click="onClick" data-eventsync="true">OK</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue'
import { onReady,onLoad,onShow } from '@dcloudio/uni-app'
import { useCounterStore } from '@/stores/counter'


const props = defineProps({
    id: String,
  });
  
const title = import.meta.env.VITE_GLOB_APP_TITLE;
const counter = useCounterStore()
counter.count++
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()

const title1 = ref('Hello');
emits: ["click"],
 
onReady(() => {
  console.log('onReady')
})
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
