import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'bar-chart',
  components: { Bar },
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
