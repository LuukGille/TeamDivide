<template>
	<div class="slider">
		<v-carousel interval="10000" hide-controls hide-delimiters style="height: 100%">
			<v-carousel-item v-for="(item,i) in items" :key="i" :src="item.url">
				<v-responsive dark>
					<v-container class="textbox" fill-height>
					<v-layout align-center>
						<v-flex class="text">
						<h3 class="display-3">{{ item.title }}</h3>
						<span class="subheading">{{ item.text }}</span>
						</v-flex>
					</v-layout>
					</v-container>
				</v-responsive>
			</v-carousel-item>
		</v-carousel>
	</div>
</template>

<script>
export default {
	data () {
		return {
			items: [
				{
				title: 'Welcome to Team Divide',
				text: 'created by Luuk Gille',
				url: '../src/images/picture1.jpg'
				},
				{
				title: 'View members',
				text: 'visit /members for all your developers',
				url: '../src/images/picture2.jpg'
				}
			]
		}
	}
}
</script>

<style>
.v-carousel {
	height: 294px!important;
}

.textbox {
	display: flex;
	text-align: center;
	margin-top: 0%;
	height: 300px!important;
}

.text {
	color: #FFF;
}

.display-3 {
	font-size: 40px!important;
	font-weight: 900;
	font-family: monospace!important;
}
</style>