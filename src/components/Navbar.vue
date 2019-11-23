<template>

<div class="mynavbar">
  <b-navbar toggleable="lg" type="light" variant="faded" fixed="top">
    <b-navbar-brand><b-link to="/">KBS</b-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item ><b-link to="/about">About</b-link></b-nav-item>
				<b-nav-item ><b-link to="/contact">Contact</b-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>


</template>

<script>
export default {
	name:"Navbar",
	method: {
		scrollToTop(){
			window.scrollTo(0,0)
		}
	}
}
</script>

<style scoped>


.mynavbar {
	background: transparent !important;
}
a {
	color: black !important;
	text-decoration: none !important;
}

@media (max-width: 575px){
	.fixed-top {
    position: absolute !important;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
}
}

</style>