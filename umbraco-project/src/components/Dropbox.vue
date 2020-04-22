<template>
  <div class="dropbox" v-click-outside="hide">
    <button
      class="dropbox__button"
      v-on:click="toggle"
      v-bind:class="{ 'dropbox__button--open': isOpen }"
    >{{ label }}</button>
    <ul class="dropbox__items" v-bind:class="{ open: isOpen }">
      <!-- <input class="dropbox__search" type="text" name="" id=""> -->
      <slot></slot>
      <!-- <li v-for="item in items" :key="item">{{ item }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropbox",
  data() {
    return {
      isOpen: false,
      items: ["1", "2", "3", "4", "5"]
    };
  },
  props: {
    label: String,
    value: Array
  },
  methods: {
    toggle: function() {
      this.isOpen = !this.isOpen;
      this.$emit("input", this.items);
    },
    hide: function() {
      this.isOpen = false;
    },
    updateValue: function(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped lang="scss">
.dropbox {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: inherit;
  color: #fff;
}

.dropbox__button {
  background-color: inherit;
  border: none;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  height: 100%;

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
  text-align: left;
  position: absolute;
  width: 100%;
  top: 100%;

  li {
    padding: 0.5rem;
    font-weight: normal;
    transition: 250ms;

    &:nth-child(even) {
      background-color: #101f3b;
      &:hover {
        background-color: lighten(#101f3b, 10%);
      }
    }

    &:nth-child(odd) {
      background-color: #1b254f;
      &:hover {
        background-color: lighten(#1b254f, 10%);
      }
    }
  }
}

.dropbox__search {
  color: #000;
  border: none;
    padding: 0.5rem;
}

.open {
  display: block;
}
</style>
