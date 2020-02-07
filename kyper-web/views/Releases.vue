<template lang='pug'>
.releases
  Sidebar.sidebar
  .list.page
    .header
      h1 Releases
      Button New Release
    //- .new-release
    //-   p New Release
    ReleaseListItem.release-item(
      title='Down'
      releaseDate='Feb 14, 2020'
      upc='477157477157'
      coverUrl='https://i1.sndcdn.com/artworks-000678216040-2fo7u8-t500x500.jpg'
      :tracks='[ ["Down", "USS1Z9900001"] ]'
    )
    ReleaseListItem.release-item(
      title='Oizys'
      releaseDate='Jan 31, 2020'
      upc='505311505311'
      coverUrl='https://i1.sndcdn.com/artworks-XGeBECeBT2NMHjnu-jdrawQ-t500x500.jpg'
      :tracks='[ ["Down", "USS1Z9900001"], ["Oizys", "USS1Z9900002"] ]'
    )
    ReleaseListItem.release-item(
      title='Leaving You Behind'
      releaseDate='Jan 31, 2020'
      upc='505311505311'
      coverUrl='https://i1.sndcdn.com/artworks-XGeBECeBT2NMHjnu-jdrawQ-t500x500.jpg'
      :tracks='[ ["Leaving You Behind", "USS1Z9900003"] ]'
    )
    ReleaseListItem.release-item(
      title='Oizys'
      releaseDate='Jan 31, 2020'
      upc='505311505311'
      coverUrl='https://i1.sndcdn.com/artworks-XGeBECeBT2NMHjnu-jdrawQ-t500x500.jpg'
      :tracks='[ ["Down", "USS1Z9900001"], ["Oizys", "USS1Z9900002"] ]'
    )
    ReleaseListItem.release-item(
      title='Oizys'
      releaseDate='Jan 31, 2020'
      upc='505311505311'
      coverUrl='https://i1.sndcdn.com/artworks-XGeBECeBT2NMHjnu-jdrawQ-t500x500.jpg'
      :tracks='[ ["Down", "USS1Z9900001"], ["Oizys", "USS1Z9900002"] ]'
    )
</template>

<script>
import ReleaseListItem from '@/components/ReleaseListItem.vue'
import Sidebar from '@/components/Sidebar.vue'
import Button from '@/components/Button.vue'

export default {
  components: {
    Sidebar,
    ReleaseListItem,
    Button,
  },
}
</script>

<style lang='sass' scoped>
.releases
  display: flex
  @media (max-width: 900px)
    flex-direction: column
    .sidebar
      flex-direction: row
  .list
    width: 100%
    padding: 30px
    @media (max-width: 500px)
      padding: 20px
    .header
      margin-bottom: 20px
      display: flex
      justify-content: space-between
      align-items: center
      *
        margin: 0px
    .release-item
      margin-bottom: 20px
</style>
