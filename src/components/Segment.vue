<template>
<div class="segment">

<b-container>
	<h1 :id="ids">{{header}}</h1>
<b-row class="segment2">
	<b-col lg="6">
		<b-img :src="require(`../assets/${image}`)" class='img-center' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"
		data-aos-anchor-placement="top-center"> </b-img>
	</b-col>
	<b-col lg="6" data-aos="fade-up" data-aos-easing="ease-in-quad" data-aos-duration="1500"
		data-aos-anchor-placement="top-center">
		<p class="text-left">{{info}}</p>
		<h3 class="text-left pt-4">"{{highlight}}"</h3>
	</b-col>
</b-row>
</b-container>
</div>
	

</template>





<script>
export default {
	name: 'Segment',
	props: {
		header: String,
		image: String,
		info: String,
		shape: String,
		ids: String,
		highlight: String,
		
	}
}
</script>





<style scoped>

h1 {
	padding-top: 5vh;
	font-size: 45px;
}

.segment2{
	padding-top: 10vh;
	padding-bottom: 25vh;
}

p {
	font-size: 20px;
}


img {
	width: 400px;
	height: 400px;
	border-radius: 50%;
}

.img-center {
	display: block;
	margin: 0 auto;
}
.segment {
	background-image: linear-gradient(rgba(226, 219, 197, 0.43))
}

@media (max-width: 575px){
	img {
		height: 200px;
		width: 200px;
	}

	p {
		font-size:18px;
		padding-top:2em;
	}
	.segment2{
		padding-top: 15vh;
		padding-bottom: 15vh;
	}

	.text-left {
		text-align: center !important;
	}
}
</style>