<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>
      <div class="pokemon-links has-text-centered">
        <router-link to="/charizard">
          /charizard
        </router-link>
        <router-link to="/blastoise">
          /blastoise
        </router-link>
        <router-link to="/vensaur">
          /vensaur
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import CharizrdCard from '../component/CharizardCard';

export default {
  name: "App"
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


