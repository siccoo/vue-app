<template>
  <div class="container">
    <div class="pokemon">
      <PokemonCard />
    </div>
  </div>
</template>

<script>
import CharizrdCard from '../component/CharizardCard';

export default {
  name: "App",
  components: {
    PokemonCard: CharizrdCard
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>


