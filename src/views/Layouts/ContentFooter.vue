<template>
  <footer class="footer px-4 mx-2">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-left text-muted">
          © {{ year }} Créateurs : <a
            href="https://arthurdufour.com/"
            rel="noreferrer noopener"
            class="font-weight-bold ml-1"
            target="_blank"
          >Arthur Dufour</a> &
          <a
            href="https://alexandretuet.com/"
            rel="noreferrer noopener"
            class="font-weight-bold ml-1"
            target="_blank"
          >Alexandre Tuet</a>
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a
              class="nav-link"
              href="https://github.com/calendz"
              rel="noreferrer noopener"
              target="_blank"
            >Github</a>
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
