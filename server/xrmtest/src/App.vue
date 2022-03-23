<template>
  <div id="app">
    <HelloWorld msg="XRM TEST APP :)" />
    Huidige omgeving: {{ currentDomain }}<br />
    Huidige Auth token: {{ currentAuthCode }}
    <ul>
      <li v-for="user in testData" v-bind:key="user.systemuserid">
        {{ user.fullname }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Xrm from "../../../src/xrm";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted: function () {
    this.loadTestUsers();
  },
  data: function () {
    return {
      testData: [],
      currentDomain: null,
      currentAuthCode: null,
    };
  },
  methods: {
    loadTestUsers: async function () {
      const result = await Xrm.WebApi.retrieveMultipleRecords(
        "systemuser",
        "",
        10
      );
      this.testData = result.value;

      this.currentAuthCode = Xrm.getAuth();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
