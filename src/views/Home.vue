<template>
  <div class="home">
  <Jumbotron title="Kaitlyn's Babysitting Services" image1="Kaitlyn_fun.png" image2="Kaitlyn_Cover.png" image3="Portrait_filter.png"/>
		<Segment image='Kaitlyn_fun.png' header='Philosophy' ids="philo" info="When I babysit, I want kids to feel safe and secure with me. That way, kids can focus on having fun and parents can focus on their date! When you walk through the door, you shouldn’t have to worry about a mess or wound-up rugrats. I want you to come home to happy kids, a clean house, and a stress-free environment." highlight="I want you to come home to happy kids, a clean house, and a stress-free environment."/>
		<Services/>
		<ContactForm ids="contact"/>
		
		

  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Segment from '@/components/Segment.vue'
import ContactForm from '@/components/ContactForm.vue'
import Services from '@/components/Services.vue'


export default {
  name: 'home',
  components: {
		Jumbotron,
		Segment,
		ContactForm, 
		Services,
		
  }
}
</script>
