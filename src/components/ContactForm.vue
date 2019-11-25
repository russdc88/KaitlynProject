<template>
<div class="contact-me">
	<div class="contact-form pt-3 my-form">
		<h1 class="text-center" :id="ids">Contact Me</h1>
			<b-row class="pt-2 pb-3"> 
				<b-col></b-col>
				<b-col cols="6">
					<div class="mb-2">First Name</div>
					<b-form-input placeholder="First Name here" v-model="first_name"></b-form-input>
				</b-col>
				<b-col></b-col>
			</b-row>
			<b-row class="pt-3 pb-3">
				<b-col></b-col>
				<b-col cols="6">
					<div class="mb-2">Last Name</div>
					<b-form-input v-model="last_name" placeholder="Last Name here"></b-form-input>
				</b-col>
				<b-col></b-col>
			</b-row>
			<b-row class="pt-3 pb-3">
				<b-col></b-col>
				<b-col cols="6">
					<div class="mb-2">Email</div>
					<b-form-input v-model="email" placeholder="Email here"></b-form-input>
				</b-col>
				<b-col></b-col>
			</b-row>
			<b-row class="pt-3 pb-3">
				<b-col></b-col>
				<b-col cols="6">
					<div class="mb-2">Phone Number</div>
					<b-form-input v-model="tel" placeholder="Phone Number Here"></b-form-input>
				</b-col>
				<b-col></b-col>
			</b-row>
			<b-row class="pt-3 pb-3">
				<b-col></b-col>
				<b-col cols="6">
					<div class="mb-2">Message</div>
					<b-form-textarea
					id="textarea"
					v-model="message"
					placeholder="Enter message..."
					rows="3"
					max-rows="6"></b-form-textarea>
				</b-col>
				<b-col></b-col>
			</b-row>
			<b-row class="pt-3 pb-3">
				<b-col></b-col>
				<b-col cols="4">
					<b-button v-b-modal.modal-1 block variant="primary" @click.prevent="SubmitData">Send</b-button>

					<b-modal id="modal-1" title="Submitted successfully!">
						<p class="my-4">Thank you for the submission, you will be contacted soon!</p>
					</b-modal>

				</b-col>
				<b-col></b-col>
			</b-row>
	</div>
</div>
</template>

<script>
require ('dotenv').config()
import axios from 'axios'
export default {
	name:"ContactForm",
	props: {
		ids: String
	},
	data () {
		return {
			first_name: null,
			last_name: null,
			email: null,
			tel: null,
			message: null,
		}
	},
	methods: {
		SubmitData () {
			axios.post(process.env.VUE_APP_API,{
				first_name: this.first_name,last_name: this.last_name,
				email: this.email,
				telephone: this.tel,
				message: this.message

			}).then(
				(response) => {
					console.log("success", response.config.data)
					this.first_name = "";
					this.last_name = "";
					this.email = "";
					this.tel = "";
					this.message = "";

				}
			).catch((error)=> {
				console.log("Error:", error)
			})
		}
	}
	
}
</script>

<style scoped>
	.contact-me {
	height: 100vh;
	background-image: linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.7)), url('../assets/Kaitlyn_Cover.png');
	background-size: cover;

	
	}

	.btn-primary {
    background-color: #4C8478;
    border-color: #4C8478;
	}	

	.btn {
		color: white;
	}

.btn-primary:hover {
	background-color: #4C8478;
	border-color: #4C8478;
}

	




	@media (max-width: 575px) {
		.contact-me {
			height: 110vh;
			background-image: linear-gradient(rgba(250, 250, 250, 0.5), rgba(250,250,250,0.7)), url('../assets/background.jpg')
		}

		h2 {
		padding-top: 4em;;
	}

	h1 {
		padding-top: 13vh;
	}
	
	}

	@media (min-width: 767px) and (max-width: 1024px) {
		h1 {
			padding-top: 10vh;
		}
	}
</style>