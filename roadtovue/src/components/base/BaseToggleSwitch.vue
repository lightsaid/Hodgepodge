<template>
  <label :class="$style.switch">
    <input
      :class="$style.input"
      type="checkbox"
      :checked="modelValue"
      @input="onToggle"
    />
    <span :class="[$style.slider, $style.round]"></span>
  </label>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onToggle(e) {
      this.$emit('update:modelValue', e.target.checked)
    },
  },
}
</script>

<style module>
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
}
.input {
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + .slider {
    background-color: #2196f3;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider::before {
    transform: translateX(21px);
  }
}

.slider {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  &::before {
    position: absolute;
    bottom: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    content: '';
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
}
.round {
  border-radius: 34px;
  &::before {
    border-radius: 50%;
  }
}
</style>
