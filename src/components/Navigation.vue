<template>
	<div id="app">
		<v-app  id="inspire">
			<v-navigation-drawer
			v-model="drawer"
			:mini-variant.sync="mini"
			hide-overlay
			stateless
			>
			<v-toolbar flat class="transparent">
				<v-list class="pa-0">
				<v-list-tile avatar>
					<v-list-tile-avatar>
					<img src="https://randomuser.me/api/portraits/men/1.jpg">
					</v-list-tile-avatar>
		
					<v-list-tile-content>
					<v-list-tile-title class="title">Luuk Gille</v-list-tile-title>
					</v-list-tile-content>
		
					<v-list-tile-action>
					<v-btn
						icon
						@click.stop="mini = !mini"
					>
						<v-icon>chevron_left</v-icon>
					</v-btn>
					</v-list-tile-action>
				</v-list-tile>
				</v-list>
			</v-toolbar>
		
			<v-list class="pt-0" dense>
				<v-divider></v-divider>
		
				<v-list-tile v-for="item in items"
				:key="item.title"
				@click="" router :to="item.link"
				>
				<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-tile-action>
		
				<v-list-tile-content>
					<v-list-tile-title class="nav">{{ item.title }}</v-list-tile-title>
				</v-list-tile-content>
				</v-list-tile>
			</v-list>
			</v-navigation-drawer>
			<main class="main">
				<router-view></router-view>
			</main>
		</v-app>
	</div>
</template>


<script>
export default {
	data () {
		return {
			drawer: true,
			items: [
				{ title: 'Home', icon: 'dashboard', link: '/' },
				{ title: 'Members', icon: 'supervised_user_circle', link: '/members' }
			],
			mini: false,
			right: null
		}
	}
}
</script>

<style>
.main {
	width: 100%;
}

.title {
	font-size: 20px;
}

.nav {
	font-size: 25px;
}
</style>