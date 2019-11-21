<template>
<div>
  <b-jumbotron  :header="title" :lead="lead">
		<b-container class="bv-example-row">
		<b-row align-h="center" class="text-center">
			<b-col>
				<div class="image1" @mouseover="hover = true" @mouseleave="hover = false"><h3 v-if="hover"><a href="#philo">Philosophy</a></h3></div>
			</b-col>
			<b-col>
				<div class="image2" @mouseover="hover2 = true" @mouseleave="hover2 = false"><h3 v-if="hover2"><a href="#services">Services and Prices</a></h3></div>
			</b-col>
			<b-col>
				<div class="image3" @mouseover="hover3 = true" @mouseleave="hover3 = false"><h3 v-if="hover3"><a href="#contact">Contact Me</a></h3></div></b-col>
		</b-row>
		</b-container>
  </b-jumbotron>
</div>
</template>

<script>

export default {
  name: 'Jumbotron',
  props: {
		title: String,
		lead: String,
		image1: String,
		image2: String,
		image3: String
  },
	data () {
		return {
			hover: false,
			hover2: false,
			hover3: false,
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.jumbotron {
	height: 100vh;
	background-image: linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.5)), url('../assets/Scenic.jpg');
	background-size: cover;
	margin-bottom: -8px;
	
}

.display-3 {
	padding-top: 10vh;
	opacity: 1 !important;
}


h3 {
	line-height: 300px;
}

a {
	text-decoration: none !important;
	color: black;
}



.row {
	padding-top: 50px;
}

div.image1, div.image2, div.image3 {
	height: 300px;
	width: 300px;
	border-radius: 50%;
	background-size: cover;
	margin-left: auto;
	margin-right:auto
}



div.image1 {
	background-image: url('../assets/Kaitlyn_fun.png');
	
}

div.image1:hover {
	background-image:linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.5)), url('../assets/Kaitlyn_fun.png'); 
}

div.image2 {
	background-image: url('../assets/Kaitlyn_Cover.png');
	background-position-x: -100px;
	
}

div.image2:hover {
	background-image:linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.5)), url('../assets/Kaitlyn_Cover.png'); 
}

div.image3 {
	background-image: url('../assets/Portrait_filter.png');
	
}

div.image3:hover {
	background-image:linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.5)), url('../assets/Portrait_filter.png'); 
}




@media (max-width: 575px) { 

	div.image1, div.image2, div.image3 {
	height: 100px;
	width: 100px;
	display: none;
	}

	h1.display-3 {

		margin-top: 50px;
		font-size: 40px;
	}
 }


</style>
