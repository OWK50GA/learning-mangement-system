import { Line } from "react-chartjs-2"
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
    plugins,
    scales
} from "chart.js"
import { gpaData, lineChartData } from '../fakeData'
import { Link } from "react-router-dom"
import { color } from "chart.js/helpers"

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineGraph = () => {

    const options = {
        responsive: true,
        resize: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "CGPA Progression Over the Years",
            },
        },
        scales: {
            yAxes: [{
                gridLines: {
                    color: 'white',
                    zeroLineColor: 'white',
                    zeroLineWidth: 1,
                    lineWidth: 1,
                },
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }

    const data = {

    }

    return (
        <div className="graph">
            <div className="line-graph w-5/6 m-auto">
                <Line className="line dark:bg-white" options={options} data={gpaData} 
                    style={{width: '500px', height: 'fit', margin: 'auto', padding: '15px', border: '2px'}}
                />
                <div className="flex justify-center">
                    <button className="bg-sky-400 p-4 see-more-cgpa mt-6 mx-auto dark:bg-slate-800">
                        <Link to={"grade-analytics"}>
                            Grade Analytics
                        </Link>
                    </button>
                </div>
            </div> 
        </div>
        
     );
}
 
export default LineGraph;