import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)
export default {
  name: 'pie-chart',
  components: { Pie },
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
