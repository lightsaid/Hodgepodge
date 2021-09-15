// import Vue from 'vue'
import { reactive } from "vue";
import { createObserver } from "@/helpers";

export const menuObserver = createObserver();

const initialState = {
  selectedExamplePath: "",
  isMobileNavOpen: false,
};

const state = reactive(initialState);

export const selectedExamplePathComputed = {
  selectedExamplePath: {
    get() {
      return state.selectedExamplePath;
    },
  },
};

export const isMobileNavOpenComputed = {
  isMobileNavOpen: {
    get() {
      return state.isMobileNavOpen;
    },
    set(value) {
      state.isMobileNavOpen = value;
    },
  },
};

export const selectExamplePath = (path) => (state.selectedExamplePath = path);

export const showSideMenu = () => (state.isMobileNavOpen = true);
export const hideSideMenu = () => (state.isMobileNavOpen = false);
