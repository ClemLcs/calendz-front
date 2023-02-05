import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'doughnut-chart',
  components: { Doughnut },
  props: {
    extraOptions: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      ctx: null
    }
  },
  computed: {
    chartData () {
      return this.data
    },
    extraOptions () {
      return this.extraOptions
    }
  }
}
