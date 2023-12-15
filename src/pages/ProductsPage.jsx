import {HeadTitle} from "../styles/global.jsx";
import {Table, TableWrapper} from "../styles/Tables.jsx";
import ProductPhoto from "../assets/products/mac.png";
import {useRef} from "react";
import {Search} from "../components/SearchPanel.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import OrdersSelect from "../components/orders/OrdersSelect.jsx";
import ProductTr from "../components/products/ProductTr.jsx";
import {useQuery} from "react-query";
import ProductServices from "../../services/ProductServices.jsx";
import {Pages} from "../components/Pagination.jsx";
import ProductCardComponent from "../components/shop/ProductCardComponent.jsx";
import {Preloader, PreloaderWrapper} from "../styles/Preloader.jsx";
import AddProductModal from "../components/products/AddProductModal.jsx";

export default function ProductsPage() {
    const headers = [
        "Id товара",
        "Image",
        "Наименование",
        "Цена",
        "Discount",
        "Дата заявки",
        "Статус",
    ];
    const page = useRef(1);
    const title = useRef("");

    const {data, isLoading, isError, refetch, isRefetching, isFetching} =
        useQuery("products", () =>
            ProductServices.getAdminProducts(title.current, page.current), {refetchOnMount: true}
        );

    return (
        <>
            {/* {isLoading && (
                <PreloaderWrapper>
                    <Preloader/>
                </PreloaderWrapper>
            )}
            {isRefetching && (
                <PreloaderWrapper>
                    <Preloader/>
                </PreloaderWrapper>
            )} */}
            <HeadTitle>Products</HeadTitle>
            <Search>
                <input
                    onChange={(event) => (title.current = event.target.value)}
                    type="text"
                    placeholder="Search..."
                />
                <button
                    onClick={(event) => {
                        page.current = 1;
                        refetch();
                        event.preventDefault();
                    }}
                >
                    <AiOutlineSearch/>
                </button>
                <AddProductModal/>
            </Search>
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
                    {data &&
                        data.data.results.map((product, index) => (
                            <ProductTr key={index} product={product}/>
                        ))}
                    </tbody>
                </Table>

            </TableWrapper>
            {data && (
                <Pages>
                    {data.data.pages.page_previous && (
                        <>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_previous;
                                    refetch();
                                }}
                            >
                                {"<"}
                            </button>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_previous;
                                    refetch();
                                }}
                            >
                                {data.data.pages.page_previous}
                            </button>
                        </>
                    )}
                    <button className="active">{data.data.pages.page_now}</button>
                    {data.data.pages.page_next && (
                        <>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_next;
                                    refetch();
                                }}
                            >
                                {data.data.pages.page_next}
                            </button>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_next;
                                    refetch();
                                }}
                            >
                                {">"}
                            </button>
                        </>
                    )}
                </Pages>
            )}

        </>
    );
}