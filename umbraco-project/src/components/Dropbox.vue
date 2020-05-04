<template>
  <div class="dropbox" v-on:keyup.esc="hide" v-click-outside="hide">
    <button
      class="dropbox__button"
      v-on:click="toggle"
      v-bind:class="{ 'dropbox__button--open': isOpen }"
    >{{ value === null ? label : value.name }}</button>
    <!-- Vue.js transition fades the items in and out when dropbox is opened -->
    <transition name="fade">
      <ul class="dropbox__list" v-if="isOpen">
        <!-- Render deselect option is dropbox is nullable and there's a selected item -->
        <div
          v-if="nullable && value"
          class="dropbox__selection"
          v-on:click="deselect"
        >{{ value.name }}</div>
        <!-- Search input renders only if searchable prop is true -->
        <input
          v-if="searchable"
          v-model="searchQuery"
          ref="search"
          class="dropbox__search"
          type="text"
          placeholder="Type to search…"
        />
        <!-- Render dropbox items -->
        <li
          class="dropbox__item"
          v-for="item in searchResults"
          :key="item.id"
          v-on:click="select(item)"
        >{{ item.name }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Dropbox",
  data() {
    return {
      isOpen: false,
      searchQuery: "",
      employee: this.value
    };
  },
  props: {
    searchable: Boolean, // true: Display search input
    label: String, // Text to display if value is null
    options: Array, // Array of available options
    value: Object, // Currently/default selected option
    nullable: Boolean // true: Dropbox can have a null value
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      if (this.isOpen && this.searchable) {
        // Auto focus search input when box opens
        this.$nextTick(() => this.$refs.search.focus());
      }
      this.emitValue();
    },
    hide() {
      this.isOpen = false;
      this.searchQuery = "";
      this.emitValue();
    },
    select(item) {
      this.isOpen = false;
      this.employee = item;
      this.emitValue();
    },
    deselect() {
      this.isOpen = false;
      this.employee = null;
      this.emitValue();
    },
    emitValue() {
      this.$emit("input", this.employee);
    }
  },
  computed: {
    searchResults() {
      //Filter available options based on search query
      return this.options.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
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

  &__button {
    background-color: inherit;
    border: none;
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    height: 100%;
    user-select: none !important;

    &::after {
      content: " ▼";
    }
    &--open::after {
      content: " ▲";
    }
  }

  &__list {
    list-style: none;
    text-align: left;
    position: absolute;
    width: 100%;
    top: 100%;
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  &__search {
    color: #000;
    border: none;
    padding: 0.5rem;
  }

  &__selection {
    background-color: #1b254f;
    padding: 0.5rem;
    font-weight: normal;
    transition: 250ms;

    &:hover {
      background-color: lighten(#1b254f, 10%);
    }

    &::after {
      content: " ❌";
    }
  }

  &__item {
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

// Fading in and out, these are applied internally by Vue.
// More details: https://vuejs.org/v2/guide/transitions.html
.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
