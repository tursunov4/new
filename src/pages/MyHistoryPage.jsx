import {HeadTitle} from "../styles/global.jsx";
import {Table, TableWrapper} from "../styles/Tables.jsx";
import {useQuery} from "react-query";
import ProductServices from "../../services/ProductServices.jsx";
import OrderServices from "../../services/OrderServices.jsx";
import {Preloader, PreloaderWrapper} from "../styles/Preloader.jsx";

export default function MyHistoryPage() {

    const {data, isLoading, isError, refetch, isRefetching, isFetching} =
        useQuery("myOrders", () =>
            OrderServices.getMyOrders());


    const headers = [
        "Id заказа",
        "Наименование",
        "Цена",
        "Дата покупки",
        "Статус",
    ];

    if (data) {
        console.log(data)
    }

    return (
        <>
            <HeadTitle>My orders</HeadTitle>
            {isLoading && (
                <PreloaderWrapper>
                    <Preloader/>
                </PreloaderWrapper>
            )}
            <TableWrapper>
                <Table>
                    <thead>
                    <tr>
                        {headers.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.data.map((order, index) =>
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.product_id_title}</td>
                            <td>{order.price}$</td>
                            <td>{order.created_at}</td>
                            <td>{order.order_status_title}</td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </TableWrapper>
        </>
    );
}
