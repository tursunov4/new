import {AiOutlineSearch} from "react-icons/ai";
import {Search} from "../SearchPanel";
import {useRef} from "react";
import {HeadTitle} from "../../styles/global";
import {Table, TableWrapper} from "../../styles/Tables";
import UserTr from "./UserTr";
import {useQuery} from "react-query";
import ProductServices from "../../../services/ProductServices.jsx";
import UserServices from "../../../services/UserServices.jsx";
import {Preloader, PreloaderWrapper} from "../../styles/Preloader.jsx";

export default function UsersTable() {
    const page = useRef(1);
    const title = useRef("");

    const {data, isLoading, isError, refetch, isRefetching, isFetching} =
        useQuery("users", () =>
            UserServices.getAllUsers(title.current), {refetchOnMount: true}
        );

    if(data){
        console.log(data)
    }

    const headers = ["User Id", "Username", "Limit"];
    return (
        <>
            {/* {isLoading && (
                <PreloaderWrapper>
                    <Preloader/>
                </PreloaderWrapper>
            )} */}
            <HeadTitle>Users List</HeadTitle>
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
                    {data && data.data.map((user, index) =>
                        (<UserTr key={index} user={user}/>)
                    )}
                    </tbody>
                </Table>
            </TableWrapper>
        </>
    );
}
