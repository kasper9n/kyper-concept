<template lang='pug'>
.sidebar
  .sidebar-item Releases
  .sidebar-item Tracks
</template>

<style lang='sass' scoped>
.sidebar
  // @media (max-width: 900px)
  //   min-width: calc(220px + 100vw - 900px)
  // @media (max-width: 850px)
  //   min-width: calc(220px - 50px)
  display: flex
  flex-direction: column
  min-width: 220px
  background-color: var(--background-color-3)
  .sidebar-item
    padding: 15px 25px
    cursor: pointer
    &:hover
      background-color: var(--background-color-4)
</style>
