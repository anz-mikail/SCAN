import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite";

import "./Search.css"
import {Context} from "../../index";
import Home from "../home/Home";
import SelectDate from "./Selected/SelectDate";
import CheckBox from "./Selected/Checkbox";
import SelectINN from "./Selected/SelectINN";
import SearchImage1 from "../../styles/images/SearchImage1.svg"
import SearchImage2 from "../../styles/images/SearchImage2.svg"
import SearchImage3 from "../../styles/images/SearchImage3.svg"


function Search() {

    const navigate = useNavigate();
    const {store} = useContext(Context);

    const [inn, setInn] = useState("");
    const [tonality, setTonality] = useState("any");
    const [limit, setLimit] = useState(0);

    const [maxFullness, setMaxFullness] = useState(false);
    const [onlyMainRole, setOnlyMainRole] = useState(false);
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false);
    const [excludeTechNews, setExcludeTechNews] = useState(false);
    const [excludeAnnouncements, setExcludeAnnouncements] = useState(false);
    const [excludeDigests, setExcludeDigests] = useState(false);
    const [inBusinessNews, setBusinessNews] = useState(false);

    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    const [error, setError] = useState('');
    const [SearchError, setSearchError] = useState(false);
    const [limitError, setLimitError] = useState("");


    const searchDict = {
        issueDateInterval: {
            startDate: dateStart,
            endDate: dateEnd
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: "company",
                        inn: inn,
                        maxFullness: maxFullness,
                        inBusinessNews: inBusinessNews
                    }
                ],
                onlyMainRole: onlyMainRole,
                tonality: tonality,
                onlyWithRiskFactors: onlyWithRiskFactors,
            }
        },
        attributeFilters: {
            excludeTechNews: excludeTechNews,
            excludeAnnouncements: excludeAnnouncements,
            excludeDigests: excludeDigests,
        },
        limit: Number(limit),
        sortType: "sourceInfluence",
        sortDirectionType: "desc",
        intervalType: "month",
        histogramTypes: ["totalDocuments", "riskFactors"]
    };

    const ClickAxios = () => {
        if (!error && dateStart && dateEnd && !limitError) {
            setSearchError(false)
            store.setStartFetch(true);
            store.setRequestCounterClean(2);
            navigate('/result', { state: { searchDict: searchDict } });
            console.log("tonality", searchDict);
        }
        else {
            setSearchError(true)
        }

    }

    if (!store.isAuth) {
        return (
            <>
                <Home/>
            </>
        );}
    else {
        return (
                <div className='Search'>
                    <div className='Search-conteiner1'>
                        <div className="Search-title">
                            <h1>НАЙДИТЕ НЕОБХОДИМЫЕ ДАННЫЕ В ПАРУ КЛИКОВ</h1>
                            <p>Задайте параметры поиска.</p>
                            <p>Чем больше заполните, тем точнее поиск </p>
                        </div>
                        <div className="Search-block">
                            <div className="Search-block1">
                                <SelectINN
                                    inn={inn}
                                    setInn={setInn}
                                    setTonality={setTonality}
                                    limit={limit}
                                    setLimit={setLimit}
                                    setError={setError}
                                    error={error}
                                    SearchError={SearchError}
                                    limitError={limitError}
                                    setLimitError={setLimitError}
                                />
                                <CheckBox
                                    maxFullness={maxFullness}
                                    setMaxFullness={setMaxFullness}
                                    onlyMainRole={onlyMainRole}
                                    setOnlyMainRole={setOnlyMainRole}
                                    onlyWithRiskFactors={onlyWithRiskFactors}
                                    setOnlyWithRiskFactors={setOnlyWithRiskFactors}
                                    excludeTechNews={excludeTechNews}
                                    setExcludeTechNews={setExcludeTechNews}
                                    excludeAnnouncements={excludeAnnouncements}
                                    setExcludeAnnouncements={setExcludeAnnouncements}
                                    excludeDigests={excludeDigests}
                                    setExcludeDigests={setExcludeDigests}
                                    inBusinessNews={inBusinessNews}
                                    setBusinessNews={setBusinessNews}
                                />
                            </div>
                            <div className="Search-block2">
                                <div className='Search-block2-0'>
                                    <p>Диапазон поиска</p>
                                    <p className={SearchError && (!dateStart || !dateEnd)?'snowflake active' : 'snowflake'}>*</p>
                                </div>
                                <div className="Search-block2-1">
                                    <div className="Search-blockDate">
                                        <SelectDate
                                            dateStart={dateStart}
                                            setDateStart={setDateStart}
                                            dateEnd={dateEnd}
                                            setDateEnd={setDateEnd}
                                            SearchError={SearchError}
                                        />
                                        <div className="Search-blockDateError">
                                            <p className={SearchError && (!dateStart || !dateEnd) ? 'DateText active' : 'DateText'}>
                                                Обязательное поле</p>
                                        </div>
                                    </div>
                                    <div className="SearchButton">
                                        <button
                                            onClick={ClickAxios}
                                        >Поиск
                                        </button>
                                        <p>*Обязательные к заполнению поля</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Search-conteiner2'>
                        <div className='Search-conteiner2-1'>
                            <img className="SearchImage2" src={SearchImage2}/>
                            <img className="SearchImage3" src={SearchImage3}/>
                        </div>
                        <div className='Search-conteiner2-2'>
                            <img  className="SearchImage1" src={SearchImage1}/>
                        </div>
                    </div>
                </div>
        )
    }
}


export default observer(Search);