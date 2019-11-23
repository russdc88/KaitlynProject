<template>
	<b-jumbotron :header="title" :lead="lead">

	</b-jumbotron>
</template>

<script>
export default {
	name: 'Jumbotron2',
	props: {
		title: String,
		lead: String
	}
}
</script>

<style scoped>

.jumbotron {
	height: 100vh;
	background-image: linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.5)), url('../assets/background.jpg');
	background-size: cover;
	margin-bottom: -8px;
}

.display-3 {
	padding-top: 10vh;
}

@media (max-width:575px){
	h1.display-3 {
		padding-top:15vh
	}
}

</style>