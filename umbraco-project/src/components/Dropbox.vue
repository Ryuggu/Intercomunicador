<template>
  <div class="dropbox" v-click-outside="hide">
    <button
      class="dropbox__button"
      v-on:click="toggle"
      v-bind:class="{ 'dropbox__button--open': isOpen }"
    >{{ label }}</button>
    <ul class="dropbox__items" v-bind:class="{ open: isOpen }">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropbox",
  data() {
    return {
      isOpen: false
    };
  },
  props: {
    label: String
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
    },
    hide: function() {
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
.dropbox {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #152235;
  color: #fff;
  margin: 1rem;
}

.dropbox__button {
  background-color: #152235;
  color: #fff;
  padding: 1rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &::after {
    content: " ▼";
  }
  &--open::after {
    content: " ▲";
  }
}

.dropbox__items {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  position: absolute;
  width: 100%;
  top: 100%;

  li {
    padding: 0.5rem;

    &:nth-child(even) {
      background-color: #101f3b;
    }

    &:nth-child(odd) {
      background-color: #1b254f;
    }
  }
}

.open {
  display: block;
}
</style>
