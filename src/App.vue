<template>
  <div id="app">
    <h1>Monty Hall problem</h1>
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">How many doors?</label>
        <input
          type="text"
          id="portsAmount"
          size="3"
          v-model.number="portsAmount"
          @change="maxPorts"
        />
      </div>
      <div v-if="!started">
        <label for="selectedPort">Which door will win?</label>
        <input
          type="text"
          id="selectedPort"
          size="3"
          v-model.number="selectedPort"
        />
      </div>
      <button v-if="!started" @click="started = true">Start</button>
      <button v-if="started" @click="started = false">Restart</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i == selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from "./components/Door";
export default {
  name: "App",
  components: {
    Door,
  },
  data: function() {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: null,
    };
  },
  methods: {
    maxPorts() {
      if (this.portsAmount > 100) this.portsAmount = 100;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  background: linear-gradient(to right, #11998e, #38ef7d);
  color: #fff;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app h1 {
  background-color: #0004;
  border: #000 solid 2px;
  padding: 20px;
  margin-bottom: 60px;
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 60px;
}
.form input,
.form button {
  margin-bottom: 10px;
  font-size: 2rem;
}
.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
