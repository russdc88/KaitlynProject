<template>
<div>
  <b-jumbotron  :header="title" :lead="lead">
		<b-container class="bv-example-row">
		<b-row align-h="center" class="text-center">

			<b-col data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" data-aos-anchor-placement="top-center">
				<div class="image1" @mouseover="hover = true" @mouseleave="hover = false"><h3 v-if="hover"><a href="#philo">Philosophy</a></h3></div>
			</b-col>

			<b-col data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" 
			data-aos-delay="250" data-aos-anchor-placement="top-center">
				<div class="image2" @mouseover="hover2 = true" @mouseleave="hover2 = false"><h3 v-if="hover2"><b-link href="#services">Prices & Services</b-link></h3></div>
			</b-col>

			<b-col data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500" 
			data-aos-delay="500" data-aos-anchor-placement="top-center">
				<div class="image3" @mouseover="hover3 = true" @mouseleave="hover3 = false"><h3 v-if="hover3"><a href="#contact">Contact Me</a></h3></div>
			</b-col>

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

h1 {
	border-style: solid;
	border-color: #7E95A0;
	border-width: 3px;
	color: #F7BDBF;
	word-spacing: 10px;
	
	
}

.jumbotron {
	height: 100vh;
	background-image: linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.5)), url('../assets/background.jpg');
	background-size: cover;
	margin-bottom: 0px;
	
}

.display-3 {
	margin-top: 10vh;
	opacity: 1 !important;
	margin-left:-35px;
	margin-right: -35px;
	background-color: #7E95A0;
	padding-bottom: 1vh;
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
		margin-top: 15vh;
		font-size: 40px;
	}
 }


</style>
