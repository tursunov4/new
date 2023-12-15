import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {useQuery} from "react-query";
import UserServices from "../../../services/UserServices.jsx";
import SettingsServices from "../../../services/SettingsServices.jsx";

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Diagram() {

    const {data, isLoading, isError, refetch, isRefetching, isFetching} =
        useQuery("orderscount", () =>
            SettingsServices.getOrdersCount(), {refetchOnMount: true}
        );
    let chartNumbers = [1, 1, 1, 1]
    let allCount = 0
    if (data) {

        chartNumbers = [data.data.cons, data.data.booked, data.data.sold, data.data.canceled]
        allCount = data.data.all
        console.log(allCount)
    }

    const chartData = {
        labels: ["На рассмотрении", "Забронировано", "Куплено", "Отменено"],
        datasets: [
            {
                label: "# of orders",
                data: chartNumbers,
                color: ["white"],
                backgroundColor: ["rgb(255, 207, 1)", "aqua", "green", "gray"],
                borderColor: ["#1F2A40"],
                borderWidth: 3,
            },
        ],
        options: {
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 18,
                },
            },
        },
    };
    const textCenter = {
        id: "textCenter",
        beforeDatasetsDraw(chart, args, pluginOption) {
            const {ctx, data} = chart;
            ctx.save();
            ctx.font = "bolder 20px sans-serif";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseAlign = "center";
            ctx.fillText(
                allCount,
                chart.getDatasetMeta(0).data[0].x,
                chart.getDatasetMeta(0).data[0].y,
            );
        },
    };

    return <>{data && <Doughnut data={chartData} plugins={[textCenter]}/>}</>
}
