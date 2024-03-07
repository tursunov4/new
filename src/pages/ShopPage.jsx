import { useEffect, useState } from "react";
import { ProductsWrapper } from "../styles/Shop.jsx";
import { HeadTitle } from "../styles/global.jsx";
import { Preloader, PreloaderWrapper } from "../styles/Preloader.jsx";
import ProductCardComponent from "../components/shop/ProductCardComponent.jsx";
import { AiOutlineSearch } from "react-icons/ai";
import { Search } from "../components/SearchPanel.jsx";
import axios from "axios";
import { useDebounce } from "../hooks/useDebance.jsx";
import Costumselect from "../components/shop/Coustumselect/Coustumselect.jsx";
import { server_url } from "../services/conf.jsx";
import http from "../axios.js";
import Costumselect2 from "../components/shop/Coustumselect/Coustumslect2.jsx";

export default function ShopPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [information, setInformation] = useState("");
  const [search, setSearch] = useState("");
  const searchDebance = useDebounce(search, 500);
  const [officeOption, setOficeOption] = useState([]);
  const [selectoffice, setSelectoffice] = useState("");
  const [totalPage, setTotalpage] = useState("");
  const [activenum, setActiveNUm] = useState(1);
  const [limit, setLimit] = useState("");
  const [paginate, setPaginate] = useState(true);
  const [selectorga, setSelectorga] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [katalogoptions, setKatalogoptions] = useState("");
  const token = sessionStorage.getItem("token");
  const [checkboxes, setCheckboxes] = useState([]);
  const [offices, setOffices] = useState([]);
  const [chekedoffice, setCheckedoffice] = useState("");
  const [manu, setManu] = useState([]);
  const [checkedmanu, setCheckedmanu] = useState("");

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) => {
      if (prevCheckboxes.includes(id)) {
        return prevCheckboxes.filter((checkboxId) => checkboxId !== id);
      } else {
        return [...prevCheckboxes, id];
      }
    });
  };
  const getOffices = () => {
    http
      .get("/api/v1/office/list/")
      .then((res) => {
        setOffices(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getManu = () => {
    http
      .get("/api/v1/organization/list/")
      .then((res) => {
        setManu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getLimit = () => {
    if (token) {
      http
        .get("/profile/user-me/")
        .then((res) => {
          setLimit(res.data?.limit?.limit);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getCategorylist = () => {
    http
      .get("/api/v1/category/list/")
      .then((res) => {
        setOficeOption(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getInformation = () => {
    http
      .get("/api/v1/information/list/")
      .then((res) => {
        setInformation(res.data[0]?.text);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getData = () => {
    setIsLoading(true);
    let strings = "";
    for (let i = 0; i < checkboxes.length; i++) {
      strings += `&cats=${checkboxes[i]}`;
    }
    axios
      .get(
        server_url +
          `/api/v1/product/list/?title=${searchDebance}&parent_cat=${selectoffice}&limit=10${
            strings !== "" ? strings : "&cats="
          }&offset=${
            (activenum - 1) * 10
          }&organization=${checkedmanu}&office=${chekedoffice}`
      )
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);

        setPaginate(true);
        setTotalpage(Math.ceil(res.data.count / 10));
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };
  const getKatalogOptions = (id) => {
    setSelectoffice(id);
    if (id) {
      http
        .get(`/api/v1/category/list/?parent=${id}`)
        .then((res) => {
          console.log(res.data);
          setKatalogoptions(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setKatalogoptions([]);
    }
  };
  useEffect(() => {
    getLimit();
    getCategorylist();
    getOffices();
    getManu();
  }, []);
  useEffect(() => {
    getData();
    getInformation();
  }, [
    searchDebance,
    selectoffice,
    selectorga,
    refresh,
    checkboxes,
    chekedoffice,
    checkedmanu,
  ]);

  const getPageNumbers = (id) => {
    const pageNumbers = [];
    for (let i = 1; i <= id; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  const changeActiveNum = (id) => {
    setActiveNUm(id);
    setRefresh(!refresh);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isLoading && (
        <PreloaderWrapper>
          <Preloader />
        </PreloaderWrapper>
      )}
      <HeadTitle>Shopping List</HeadTitle>
      {/* <div className="filter__main">
              <Costumselect plecholders={"Choose office"} options={offices} selected={chekedoffice} setSelected={setCheckedoffice}/>
              <Costumselect plecholders={"Choose manufacture"} options={manu} selected={checkedmanu} setSelected={setCheckedmanu}/>
              </div>                   
                <div className="filter__main">
                <Costumselect2 plecholders={"Choose catalog"} options={officeOption} selected={selectoffice} setSelected={getKatalogOptions}/>
                <Search>
                <input  
                    onChange={(e)=>setSearch(e.target.value)}
                    type="text"
                    placeholder="Search..."
                />
                <button   >
                    <AiOutlineSearch/>
                </button>
                </Search>
                </div> */}
      <div className="shopfilter__mainbox">
        <div className="shopfilter">
          <label className="shopfilter__label" htmlFor="">
            <p className="shopfilter__lable__text">lorem</p>
            <select className="shopfiler__lable__select" name="" id="">
              <option value="">hello</option>
            </select>
          </label>
          <label className="shopfilter__label" htmlFor="">
            <p className="shopfilter__lable__text">lorem</p>
            <select className="shopfiler__lable__select" name="" id="">
              <option value="">hello</option>
            </select>
          </label>
          <label className="shopfilter__label" htmlFor="">
            <p className="shopfilter__lable__text">lorem</p>
            <select className="shopfiler__lable__select" name="" id="">
              <option value="">hello</option>
            </select>
          </label>
          <label className="shopfilter__label" htmlFor="">
            <p className="shopfilter__lable__text">Price</p>
            <input className="shopfiler__lable__input" type="text" />
          </label>
        </div>
        <div className="shopfilter__main__information">
          <h3 className="shopfilter__information__title">Information</h3>
          <p className="shopfilter__information__doc">
            {information?.split("\r\n")?.map((item, index) => (
              <p
                style={{ marginBottom: "6px" }}
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
              ></p>
            ))}
          </p>
        </div>
      </div>

      {katalogoptions.length !== 0 && (
        <div className="checkfilter">
          {katalogoptions?.map((item, index) => (
            <div className="checkfitler__wrapper">
              <h3 className="checkfitler__type">{item?.name}</h3>
              <ul className="checkfilter-list">
                {item?.children?.map((item2, index2) => (
                  <li className="checkfilter-list__item" key={index2}>
                    <input
                      type="checkbox"
                      defaultChecked={checkboxes.includes(item2?.id)}
                      className="checkfilter-list__item-input"
                      id={item2?.id}
                      onChange={() => handleCheckboxChange(item2?.id)}
                    />
                    <label
                      className="checkfilter-list__item-label"
                      htmlFor={item2?.id}
                    >
                      {item2?.name}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <ProductsWrapper>
        {data?.map((item) => (
          <>
            <ProductCardComponent product={item} limit={limit} />
          </>
        ))}
      </ProductsWrapper>
      <div>
        {paginate && (
          <div className="paginate__wrap">
            {totalPage !== "" &&
              getPageNumbers(totalPage).map((page, index) => (
                <button
                  key={index}
                  onClick={() => changeActiveNum(page)}
                  className={
                    activenum === page
                      ? "paginate__btn-active paginate__btn"
                      : "paginate__btn"
                  }
                >
                  {page}
                </button>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
