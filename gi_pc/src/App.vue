<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  provide() {
    return {
      changeSkin: this.changeSkin
    }
  },
  data() {
    return {
      skin: 0,
    }
  },
  methods: {
    changeSkin() {
      if (this.skin == 0) {
        this.skin = 1
        this.$theme.changeTheme("#000000");
      } else {
        this.skin = 0
        this.$theme.changeTheme("#409eff");
      }
    }
  },
}
</script>