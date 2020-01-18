<template>


    <div id="app">
        <header>
            <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
        </header>
        <NavbarComponent/>

        <RouterView />

        <footer class="footer hero is-primary mt-12 is-medium">
          <div class="content has-text-centered">

            <h2 class="subtitle">
            <strong>IoT</strong> with <b-icon icon="heart" size="is-medium" type="is-danger"/> by <a href="https://github.com/nethings ">Nethings</a>.
            </h2>

          </div>
        </footer>

    </div>
</template>


<script>
import {USER_REQUEST} from '@/store/actions/user'
import { mapGetters/*, mapActions, mapState*/ } from 'vuex'
import NavbarComponent from "@/components/Navbar.vue";



export default {
    name: "App",
    components: {
      NavbarComponent
    },
    computed: {
        ...mapGetters(['authStatus'])
    },
    created() {
      document.title="nethings"
      if (this.$store.getters.isAuthenticated) {
        this.$store.dispatch(USER_REQUEST)
      }
    }
};
</script>


<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #222a68;
$primary-invert: findColorInvert($primary);

$success: #1eed5c;
$success-invert: findColorInvert($success);

$danger: #c6394c;
$danger-invert: findColorInvert($danger);

$warning: #fcf321;
$warning-invert: findColorInvert($warning);

$info: #1e7bed;
$info-invert: findColorInvert($info);

$dark: #0f2b3d;
$dark-invert: findColorInvert($dark);



$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

//$sizes: (2,4,6,8,10,);
$positions: (
    ('t', 'top'),
    ('r', 'right'),
    ('b', 'bottom'),
    ('l', 'left')
);

@function sizeValue($key, $value) {
    @return if($key == 'none', 0, $value + px);
}

@for $size from 1 through 1000 {
    .m-#{$size} {
        margin: sizeValue($size, $size);
    }
    .p-#{$size} {
        padding: sizeValue($size, $size);
    }
    @each $position in $positions {
        $posKey: nth($position, 1);
        $posValue: nth($position, 2);
        .m#{$posKey}-#{$size} {
            margin-#{$posValue}: sizeValue($size, $size);
        }
        .p#{$posKey}-#{$size} {
            padding-#{$posValue}: sizeValue($size, $size);
        }

    }
}


</style>

<!--

/*
$sizes: (2,3,4,5,6,7,8,9,10,15,20,25,30,50);
$positions: ('top','left','bottom','right');

@each $size in $sizes {
  .u-m#{$size} {
    margin: $size + px;
  }
  .u-p#{$size} {
    padding: $size + px;
  }
}*


<style lang="scss">
$sizes: (2,4,6,8,10);
$positions: (
    ('t', 'top'),
    ('r', 'right'),
    ('b', 'bottom'),
    ('l', 'left')
);

@function sizeValue($key, $value) {
    @return if($key == 'none', 0, $value + px);
}

@each $size in $sizes {
    @each $position in $positions {
        $posKey: nth($position, 1);
        $posValue: nth($position, 2);
        .m#{$posKey}-#{$size} {
            margin-#{$posValue}: sizeValue($size, $size);
        }
    }
}

</style->

<style lang="css">

    .mx-2 {
        margin: 2px;
    }
    .mt-2 {
        margin-top: 2px;
    }
    .mr-2 {
        margin-right: 2px;
    }
    .mb-2 {
        margin-bottom: 2px;
    }

    .ml-2 {
        margin-left: 2px;
    }
    .ml-3 {
        margin-left: 3px;
    }
    .mx-4 {
        margin: 4px;
    }
    .mt-3 {
        margin-top: 3px;
    }
    .mt-4 {
        margin-top: 4px;
    }

    .mr-4 {
        margin-right: 4px;
    }

    .mb-4 {
        margin-bottom: 4px;
    }

    .ml-4 {
        margin-left: 4px;
    }



</style>

<!-

$sizes: (2,4,6,8,10);
$positions: (
    ('t', 'top'),
    ('r', 'right'),
    ('b', 'bottom'),
    ('l', 'left')
);

@function sizeValue($key, $value) {
    @return if($key == 'none', 0, $value + px);
}

@each $size in $sizes {
    .m-#{$size} {
        margin: sizeValue($size, $size);
    }
    @each $position in $positions {
        $posKey: nth($position, 1);
        $posValue: nth($position, 2);
        .m#{$posKey}-#{$size} {
            margin-#{$posValue}: sizeValue($size, $size);
        }
    }
}/

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
-->
