<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
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
          <br>
          Développeurs actuels :
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
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a
              :href="`https://github.com/calendz/calendz-front/releases/tag/v${version}`"
              rel="noreferrer noopener"
              class="nav-link"
              target="_blank">v{{ version }}</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://changelog.calendz.app"
              rel="noreferrer noopener"
              target="_blank">Changelog</a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/calendz"
              rel="noreferrer noopener"
              target="_blank">Github</a>
          </li>
          <li class="nav-item">
            <a
              href="https://status.calendz.app/"
              rel="noreferrer noopener"
              class="nav-link"
              target="_blank">Status</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script>
import packageJson from '../../../package.json'

export default {
  data () {
    return {
      year: new Date().getFullYear(),
      version: packageJson.version
    }
  }
}
</script>
<style></style>
