<template>
  <div class="home">
  <Jumbotron title="Kaitlyn's Babysitting" image1="Kaitlyn_fun.png" image2="Kaitlyn_Cover.png" image3="Portrait_filter.png"/>
		<Segment image='Kaitlyn_fun.png' title='test' ids="philo" info=" Its hard leaving your kids at home. You don't know if they are safe or if you will come home to a messy home. It can be hard for kids to be home alone with someone they don't know well either. I want to create a healthy home for both the kids and the parents. I want the kids to have fun but feel safe and the parents can return home to a clean stressed-free home." highlight="I want to create a healthy home for both the kids and the parents"/>
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
		Services
  }
}
</script>
