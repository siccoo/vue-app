<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Chilaka Michael Obinna alias <small> LakaJS </small> is learning VUE.js Framework</h1>

    <div class="field">
        <label class="label">Name</label>
        <input v-model="name" class="input" type="text" placeholder="Text Input" />
    </div>

    <div class="field">
        <label class="label">Subject</label>
        <div class="select">
            <select v-model="subject">
                <option enabled value="">
                    Select dropdown
                </option>
                <option>Engineering</option>
                <option>Biology</option>
                <option>Computer Science</option>
                <option>Others</option>
            </select>
        </div>
    </div>

    <div class="field">
        <label class="checkbox">
            <input v-model="termsAndConditions" type="checkbox" />
            I agree to the terms and conditions
        </label>
    </div>

    <div class="field">
        <label class="radio">
            <input v-model="yesOrNo" type="radio" value="Yes" />
            Yes
        </label>
        <label class="radio">
            <input v-model="yesOrNo" type="radio" value="No" />
            No
        </label>
    </div>

    <div class="field">
        <button class="button is-info" @click="submit">
            Submit
        </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
        subject: '',
        termsAndConditions: 'false',
        yesOrNo: ''
    }
  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4a4a4a;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
  height: 100%;
  max-width: 400px;
  padding-left: 20px;
  padding-top: 0px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
