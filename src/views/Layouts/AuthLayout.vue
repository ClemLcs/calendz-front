<template>
  <div>
    <notifications/>
    <base-nav
      v-model="showMenu"
      :transparent="true"
      type="light"
      menu-classes="justify-content-end"
      class="navbar-horizontal navbar-main mt-2"
      expand="lg"
    >
      <div
        slot="brand"
        class="navbar-wrapper">
        <router-link
          class="navbar-brand"
          to="/">
          <img
            src="img/icons/android-chrome-256x256.png"
            alt="Logo"
            style="height: 50px; width: 50px">
        </router-link>
      </div>

      <template>
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img
                  src="img/icons/android-chrome-256x256.png"
                  alt="Logo">
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                class="navbar-toggler"
                @click="showMenu = false">
                <span/>
                <span/>
              </button>
            </div>
          </div>
        </div>

        <!-- Left side -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link
              to="/home"
              class="nav-link">
              <span class="nav-link-inner--text">Accueil</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="https://docs.calendz.app"
              target="_blank"
              rel="noopenner noreferrer"
              class="nav-link">
              <span class="nav-link-inner--text">Documentation</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link
              to="/contact"
              class="nav-link">
              <span class="nav-link-inner--text">Contact</span>
            </router-link>
          </li>
        </ul>

        <hr class="d-lg-none">

        <!-- Right side -->
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item  d-lg-block ml-lg-4">
            <router-link
              to="/login"
              class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon">
                <i class="fas fa-sign-in-alt mr-2"/>
              </span>
              <span class="nav-link-inner--text">Connexion</span>
            </router-link>
            <router-link
              to="/register"
              class="btn btn-default btn-icon">
              <span class="btn-inner--icon">
                <i class="fas fa-sign-in-alt mr-2"/>
              </span>
              <span class="nav-link-inner--text">Inscription</span>
            </router-link>
          </li>
        </ul>
      </template>
    </base-nav>

    <div class="main-content">
      <zoom-center-transition
        :duration="pageTransitionDuration"
        mode="out-in"
      >
        <router-view/>
      </zoom-center-transition>
    </div>

    <footer
      id="footer-main"
      class="py-5">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              © {{ year }} Créateurs : <a
              href="https://arthurdufour.com/"
              rel="noreferrer noopener"
              class="font-weight-bold ml-1"
              target="_blank">Arthur Dufour</a> &
              <a
                href="https://alexandretuet.com/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Alexandre Tuet</a>
              <br> Développeurs actuels :
              <a
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Maxime Lemaire</a> &
              <a
                href="https://doryanchaigneau.fr/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Doryan Chaigneau</a>
              <a
                href="https://www.linkedin.com/in/cl%C3%A9ment-pierre-xavier-l-4b0646141/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Clément Lo-Cascio</a>
              <a
                href="https://www.linkedin.com/in/clement-lafon"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Clément Lafon</a>
              <a
                href="https://www.linkedin.com/in/nathan-moussiron-134b2b223/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Nathan Moussiron</a>
              <a
                href="https://www.linkedin.com/in/ali-saleh-483076236/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Ali Saleh</a>
              <a
                href="https://www.linkedin.com/in/aissatou-adab/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Diallo Aissatou</a>
              <a
                href="https://www.linkedin.com/in/hugo-ferry-471984207/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Hugo Ferry</a>
              <a
                href="https://www.linkedin.com/in/thomas-lebas-3a0129209/"
                rel="noreferrer noopener"
                class="font-weight-bold ml-1"
                target="_blank">Thomas Lebas</a>
            </div>
          </div>
          <div class="col-xl-6">
            <ul class="nav nav-footer justify-content-center justify-content-xl-end">
              <li class="nav-item">
                <a
                  :href="`https://github.com/calendz/calendz-front/releases/tag/v${version}`"
                  rel="noreferrer noopener"
                  class="nav-link"
                  target="_blank">v{{ version }}</a>
              </li>
              <li class="nav-item">
                <a
                  href="https://changelog.calendz.app"
                  rel="noreferrer noopener"
                  class="nav-link"
                  target="_blank">Changelog</a>
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/calendz"
                  rel="noreferrer noopener"
                  class="nav-link"
                  target="_blank">Github</a>
              </li>
              <li class="nav-item">
                <a
                  href="https://status.calendz.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="nav-link">Status</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { BaseNav } from '@/components'
import { ZoomCenterTransition } from 'vue2-transitions'
import packageJson from '../../../package.json'

export default {
  components: {
    BaseNav,
    ZoomCenterTransition
  },
  props: {
    backgroundColor: {
      type: String,
      default: 'black'
    }
  },
  data () {
    return {
      showMenu: false,
      menuTransitionDuration: 250,
      pageTransitionDuration: 200,
      year: new Date().getFullYear(),
      version: packageJson.version,
      pageClass: 'login-page'
    }
  },
  computed: {
    title () {
      return `${this.$route.name} Page`
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler: function () {
        this.updateBackground()
      }
    }
  },
  beforeDestroy () {
    this.removeBackgroundColor()
  },
  methods: {
    toggleNavbar () {
      document.body.classList.toggle('nav-open')
      this.showMenu = !this.showMenu
    },
    closeMenu () {
      document.body.classList.remove('nav-open')
      this.showMenu = false
    },
    setBackgroundColor () {
      document.body.classList.add('bg-default')
    },
    removeBackgroundColor () {
      document.body.classList.remove('bg-default')
    },
    updateBackground () {
      if (!this.$route.meta.noBodyBackground) {
        this.setBackgroundColor()
      } else {
        this.removeBackgroundColor()
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu()
      setTimeout(() => {
        next()
      }, this.menuTransitionDuration)
    } else {
      next()
    }
  }
}
</script>
<style lang="scss">
$scaleSize: 0.8;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}

.main-content .zoomIn {
  animation-name: zoomIn8;
}

@keyframes zoomOut8 {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
}

.main-content .zoomOut {
  animation-name: zoomOut8;
}
</style>
