<template>
	<div class="services" id="services">
		<b-container>

			<h1 class="pt-4"> Prices & Services</h1>
			<b-row class="pt-4">
				
				<b-col lg="3">
					<b-card class="pt-4" title="Standard" sub-title="$6/hr">
						<b-card-text>
							1-2 kids, will feed, play, read, discipline, and put kids to sleep. 
						</b-card-text>

					</b-card>
				</b-col>

				<b-col lg="3">
					<b-card class="pt-4" title="Standard Plus" sub-title="$8/hr">
						<b-card-text>
							1-2 kids, will feed, play, read, discipline, give bath, and put kids to sleep.
						</b-card-text>

						<b-card-text> Provide cleaning services to kitchen, living room, and toy room. 
						</b-card-text>
					</b-card>
				</b-col>
				
				<b-col lg="3">
					<b-card class="pt-4" title="Family" sub-title="$10/hr">
						<b-card-text>
							3+ kids, will feed, play, read, discipline, and put kids to sleep. 
						</b-card-text>
					</b-card>
				</b-col>

				<b-col lg="3">
					<b-card class="pt-4" title="Family Plus" sub-title="$12/hr">
						<b-card-text>
							3+ kids, will feed, play, read, discipline, and put kids to sleep. 
						</b-card-text>

						<b-card-text>Provide cleaning services to kitchen, living room, and toy room. 
						</b-card-text>
					</b-card>
				</b-col>

			</b-row>
		</b-container>

	</div>
</template>

<script>
export default {
	name:"Services"
}
</script>

<style scoped>
.services {
	background-image:linear-gradient(to bottom right,#E2DBC5,#4C8478); 
}

	.card {
		height: 350px;
		border: 7px solid #4C8478
	}
	.container {
		padding-top: 5vh;
		padding-bottom: 25vh;
	}

	h1 {
		padding-bottom: 10vh;
	}

	@media (max-width: 575px){
		.card {
			height: 250px
		}
		.container {
			padding-top: 15vh;
		}
	}

	@media (min-width: 767px) and (max-width: 1024px) {
		.card {
			height:225px;
		}
	}
	
</style>