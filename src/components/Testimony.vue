<template>
	<div class="pb-4 testimony">
		<b-row>
			<b-col></b-col>
			<b-col cols='8'>
				<h3 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1500"
				data-aos-anchor-placement="top-center" class="text-center pb-4 pt-4">“Kaitlyn is such a life saver. She put my kids to bed before 7:30 and my house was all cleaned when I finished working. I can’t even get my kids to go down for me like she does. I was so grateful for her!” - Christina L. </h3>

				<h3 data-aos='fade-up' data-aos-easing="linear" data-aos-duration="1500"
				data-aos-anchor-placement="bottom-bottom" class="text-center pb-4 pt-4">"My wife and I were looking for a babysitter to watch our little girl. We reached out to Kaitlyn and at moments notice was able to come and babysit for us. She is a lifesaver and I would definitely recommend her!" - Russ C. </h3>

			</b-col>
			<b-col></b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	name:"Testimony"
}
</script>

<style scoped>
.testimony {
	background-image:linear-gradient(to bottom right,#E2DBC5,#4C8478); 
	height: 100vh;
	padding-top: 20vh;
}

@media (max-width: 575px){
	h3 {
		font-size:22px;
	}
	.testimony {
		padding-top:7vh;
	}

}

</style>