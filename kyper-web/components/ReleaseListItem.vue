<template lang='pug'>
.release-list-item
  img(:src='coverUrl')
  .right
    .release-info
      h3.title {{title}}
      p {{releaseDate}} · {{upc}}
    .track(v-for='track in tracks')
      .index 1
      .name {{track[0]}}
      .isrc {{track[1]}}
    //- .track
    //-   .index 1
    //-   .name Down
    //-   .isrc USS1Z9900001
    //- .track
    //-   .index 2
    //-   .name Oizys
    //-   .isrc USS1Z9900002
</template>

<script>
export default {
  props: {
    title: String,
    releaseDate: String,
    upc: String,
    coverUrl: String,
    tracks: Array,
  },
}
</script>

<style lang='sass' scoped>
.release-list-item
  width: 100%
  display: flex
  padding: 20px
  border-radius: 3px
  border: 1px solid var(--light-line-color)
  background-color: white
  @media (max-width: 500px)
    padding: 0px
    background-color: transparent
    border: none
  transition: all 0.15s
  &:hover
    border-color: var(--line-highlight-color)
    // box-shadow: var(--shadow)
    // box-shadow: 0px 0px 0px 1px var(--line-highlight-color)
  img
    height: 100px
    width: 100px
    flex-shrink: 0
    @media (max-width: 700px)
      height: 75px
      width: 75px
    border-radius: 3px
    margin-right: 20px
  .right
    width: 100%
    .release-info
      margin-bottom: 10px
      .title
        margin: 0px
      p
        color: var(--secondary-text-color)
        font-size: 13px
        margin: 0px
    .track
      color: var(--secondary-text-color)
      font-size: 14px
      border-top: 1px solid var(--light-line-color)
      display: flex
      width: 100%
      white-space: nowrap
      @media (max-width: 700px)
        font-size: 13px
      div
        padding: 10px
        @media (max-width: 700px)
          padding: 6px
      &:last-child
        border-bottom: 1px solid var(--light-line-color)
      .index
        width: 20px
        @media (max-width: 500px)
          font-weight: 700
        @media not all and (max-width: 700px)
          padding-right: 25px
        flex-shrink: 1
      .name
        width: 0px
        flex-grow: 1
        // margin-right: 25px
        min-width: 0px
        text-overflow: ellipsis
        overflow: hidden
      .isrc
        flex-shrink: 0
        // width: 150px
</style>
