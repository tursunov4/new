import {HeadTitle} from "../styles/global.jsx";
import {Table, TableWrapper} from "../styles/Tables.jsx";
import {useEffect, useState} from "react";
import {Search} from "../components/SearchPanel.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import {Preloader, PreloaderWrapper} from "../styles/Preloader.jsx";
import OrderTr from "../components/orders/OrdersTr.jsx";
import http from "../axios.js";
import { useDebounce } from "../hooks/useDebance.jsx";
export default function OrdersPage() {
    const headers = [
        "Order ID",
        "Title",
        "Price",
        "Currency",
        "Application date",
        "Status",
        "Expired time"
    ];
    const [data ,setData] = useState([])
    const [search ,setSearch] = useState("")
    const [isLoding , setIsLoading] = useState(false)
    const searchDebounce = useDebounce(search, 500)
    const getOrders =()=>{  
        setIsLoading(true)
        http.get(`/api/v1/order/list/?status=${searchDebounce}`).then((res)=>{
            console.log(res.data)
            setData(res.data)
            setIsLoading(false)
        }).catch((err)=>{
            console.log(err)
            setIsLoading(false)
        })
    }
    useEffect(()=>{
     getOrders()
    } ,[searchDebounce])
   

    return (
        <>
             {isLoding && (
                <PreloaderWrapper>
                    <Preloader/>
                </PreloaderWrapper>
            )}
            
            <HeadTitle>Orders</HeadTitle>
            <Search>
                <input
                    onChange={(e)=>setSearch(e.target.value)}
                    type="text"
                    placeholder="Search..."
                />
                <button                   
                >
                 <AiOutlineSearch/>
                </button>
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
                    {/* {data && data.data.map((order, index) => (<OrderTr key={index} order={order}/>))} */}
                        {
                            data?.map((item , index) =>(
                                <OrderTr key={index} order={item}/>
                            ))
                        }
                    </tbody>
                </Table>
            </TableWrapper>
        </>
    );
}
