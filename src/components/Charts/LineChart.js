import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
export default {
  name: 'line-chart',
  components: { Line },
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
