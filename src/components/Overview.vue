<template> 
	<div id="app">
	<v-app id="inspire">
		<v-container fluid grid-list-md>
		<v-layout row wrap>
			<v-flex d-flex xs12 sm6 md8>
			<v-card>
				<slider></slider>
			</v-card>
			</v-flex>
			<v-flex d-flex xs12 sm6 md4>
			<v-layout class="section" row wrap>
				<v-flex d-flex>
				<v-layout  class="wrap" row wrap>
					<v-flex class="devImage"
					d-flex
					xs12
					>
					<v-card
						color="red"
						dark
					>
					<v-img class="image" src="../src/images/picture5.jpg" aspect-ratio="2">
						<v-card-text class="employee">{{ person1.slice(0, 40) }}</v-card-text>
					</v-img>
					</v-card>
					</v-flex>
					<v-flex class="devImage"
					d-flex
					xs12
					>
					<v-card
						color="red"
						dark
					>
						<v-img class="image" src="../src/images/picture5.jpg" aspect-ratio="2">
							<v-card-text class="employee">{{ person2.slice(0, 40) }}</v-card-text>
						</v-img>
					</v-card>
					</v-flex>
				</v-layout>
				</v-flex>
			</v-layout>
			</v-flex>
			<v-flex class="section projectTitle" d-flex xs12 sm12 md6 child-flex>
			<v-card color="gray lighten-2" dark>
				<v-img class="image" src="../src/images/picture3.jpg" aspect-ratio="2">
					<v-card-text class="projectText">{{ project1.slice(0, 100) }}</v-card-text>
				</v-img>
			</v-card>
			</v-flex>
			<v-flex class="section projectTitle" d-flex xs12 sm12 md6>
			<v-card color="gray lighten-2" dark>
				<v-img class="image" src="../src/images/picture4.jpg" aspect-ratio="2">
					<v-card-text class="projectText">{{ project2.slice(0, 100) }}</v-card-text>
				</v-img>
			</v-card>
			</v-flex>
		</v-layout>
		</v-container>
	</v-app>
	</div>
</template>

<script>
import slider from '../components/slider.vue'
export default {
	data: () => ({
		lorem: `Welcome to Team Divide`,
		project1: `Workpamoja`,
		project2: `FTSF Webshop`,
		person1: `Developers`,
		person2: `Interns`,
	}),
	components: {
		slider
	}
}
</script>

<style>

.devImage {
height: 151px;
}

.projectTitle {
	font-size: 40px;
	font-weight: 900;
}

.wrap {
	height: 302px!important;
}

.projectText {
	display: flex;
	justify-content: center;
	margin-top: 17%;
}

.section {
	height: 40vh;
}

.employee {
	font-size: 25px;
	font-weight: 900;
}

.container {
	margin-top: 5%;
}

.section {
	box-shadow: none;
}

.image {
	height: 100% !important;
}

.card_text {
	margin-top: 25%;
}
</style>
