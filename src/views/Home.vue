<template>
    <div>
      <section class="hero is-primary is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              The simplest IoT dashboard for Raspberry PI
            </h1>

              <img :src="require('@/assets/raspberry-board.png')" width="640" height="360" />

            <h2 class="subtitle">
              Our emotional state of choice is Ecstasy. Our nourishment of choice is Love. Our addiction of choice is technology. Our religion of choice is music.
              Our currency of choice is knowledge. Our politics of choice is none. Our society of choice is utopian though we know it will never be.
              Our emotional state of choice is Ecstasy. Our nourishment of choice is Love. Our addiction of choice is technology. Our religion of choice is music.
              Our currency of choice is knowledge. Our politics of choice is none. Our society of choice is utopian though we know it will never be.
            </h2>
          </div>
        </div>
      </section>


      <!--section class="hero is-dark is-small">
        <div class="hero-body">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Tweets</p>
                <p class="title">3,456</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Following</p>
                <p class="title">123</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Followers</p>
                <p class="title">456K</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Likes</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section class="hero is-info is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Fullheight title
            </h1>
            <h2 class="subtitle">
              Fullheight subtitle
            </h2>
          </div>
        </div>
      </section>


      <section class="hero is-success is-medium">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Fullheight title
            </h1>
            <h2 class="subtitle">
              Fullheight subtitle
            </h2>
          </div>
        </div>
      </section-->

</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name:"Home",

    computed: mapGetters([ 'isAuthenticated']),

}
</script>
