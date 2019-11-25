<template>
	<div id="app">
		<Navbar/>
		<main class="app_main">
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</main>
		<Footer/>
	</div>
</template>

// <script>

import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
	components: {
		Navbar,
		Footer
	}
	
}
</script>

<style>
#app {
  font-family: 'Baskervville', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	background-size: cover;
	height:100vh;

}

.fade-enter-active,
.fade-leave-active {
  transition-duration: .7s;
  transition-property: opacity;
  transition-timing-function: ease;

}

.fade-enter,
.fade-leave-active {
  opacity: 0
}


</style>
