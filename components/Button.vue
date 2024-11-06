<template>
  <button class="button">
    <slot>H</slot>
  </button>

</template>

<script setup lang="ts">

</script>

<style scoped>
.button {
  outline: none;
  font-weight: 500;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  gap: 0.375rem;
  padding: 0.375rem 0.625rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: white;
  background-color: #2B90B6;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}

.button:hover {
  background-color: #146b8c;
}

.button:focus-visible {
  outline: 2px solid #2B90B6;
  outline-offset: 2px;
}

.button:disabled,
.button[aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.75;
  background-color: #2B90B6;
}

/* @media (prefers-color-scheme: dark) {
  .button {
    color: #111827;
    background-color: #60a5fa;
  }

  .button:hover {
    background-color: #3b82f6;
  }

  .button:focus-visible {
    outline-color: #60a5fa;
  }

  .button:disabled,
  .button[aria-disabled="true"] {
    background-color: #60a5fa;
  }
} */
</style>
