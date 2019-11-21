<template>
  <div class="about">
    <Jumbotron2 title="About Me" lead="Kaitlyn Christensen"/>
			<Segment header="" image='Portrait.png' info='My name is Kaitlyn Christensen, and I’m 12 years old. I like art; I draw, paint, and make sculptures. I’ve also held an art class for younger kids. I like to swim and play tennis with my dad, and I also sing at a studio and perform in certain places. I like to act and hope that when I’m older I can act and be a movie makeup artist. I have a 4.0 gpa, and I enjoy most of the subjects at my school. I have lots of friends and like to make all of them laugh. '/>
			<Testimony/>
			<ContactForm/>

  </div>
</template>

<script>

import Jumbotron2 from "@/components/Jumbotron2.vue"
import Segment from '@/components/Segment.vue'
import Testimony from '@/components/Testimony.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
name: 'about',
components: {
	Jumbotron2,
	Segment,
	Testimony, 
	ContactForm
}
}

</script>

<style>
	html,body
	{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
	}
</style>
