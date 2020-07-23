<template>
	<v-container grid-list-md>
		<v-layout wrap>
		<v-flex
			v-for="n in 10"
			:key="n"
			xs12
			sm6
			md4
			lg3
		>
		<v-item-group>
			<v-item>
			<v-card 
				slot-scope="{ active, toggle }"
				:color="active ? 'primary' : ''"
				class="d-flex round align-center"
				dark
				height="200"
				width="200"
				@click="toggle"
			>
				<v-scroll-y-transition>
				<v-img :src="`https://unsplash.it/200/200?image=${Math.floor(Math.random() * 80) + 1}`" height="200px" width="200px"></v-img>
				</v-scroll-y-transition>
			</v-card>
			</v-item>
		</v-item-group>
		</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	// data: {
	// 	friends: ["jogn", "bwett"]
	// }
	// mounted() {
	// 	fetch("../data/members.json")
	// 	.then(response => response.json())
	// 	.then((data) => {
	// 		this.friends = data;
	// 	})
	// }
}
</script>

<style>
.round{
	border-radius: 100px;
}
.image {
	height: 200px
}
</style>
