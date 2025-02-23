import React, {useContext, useState} from "react";
import {observer} from "mobx-react-lite";

import "/src/styles/Search.css"
import {Context} from "../../index";
import Home from "../home/Home";
import SelectDate from "./SelectDate";
import CheckBox from "./Checkbox";
import SelectINN from "./SelectINN";


function Search() {
    const {store} = useContext(Context);

    const [inn, setInn] = useState(7710137066);
    const [tonality, setTonality] = useState("any");
    const [limit, setLimit] = useState(5);

    const [maxFullness, setMaxFullness] = useState(false);
    const [onlyMainRole, setOnlyMainRole] = useState(false);
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false);
    const [excludeTechNews, setExcludeTechNews] = useState(false);
    const [excludeAnnouncements, setExcludeAnnouncements] = useState(false);
    const [excludeDigests, setExcludeDigests] = useState(false);
    const [inBusinessNews, setBusinessNews] = useState(null);

    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);


    let startDate = "2019-01-01T00:00:00+03:00"
    let endDate = "2022-08-31T23:59:59+03:00"

    const intervalType = 'month'
    const histogramTypes = ['totalDocuments']
    const issueDateInterval = {
        startDate,
        endDate,
    }
    const searchContext = {
        "targetSearchEntitiesContext": {
            "targetSearchEntities": [
                {
                    "type": "company",
                    "sparkId": null,
                    "entityId": null,
                    inn,
                    maxFullness,
                    inBusinessNews
                }
            ],
            onlyMainRole,
            tonality,
            onlyWithRiskFactors,
            "riskFactors": {
                "and": [],
                "or": [],
                "not": []
            },
            "themes": {
                "and": [],
                "or": [],
                "not": []
            }
        }
    }
    const similarMode ="duplicates"
    const sortType = "sourceInfluence"
    const sortDirectionType =  "desc"
    const attributeFilters = {
        "excludeTechNews": true,
            "excludeAnnouncements": true,
            "excludeDigests": true
    }

    const Click = () => {store.search(
        intervalType,
        histogramTypes,
        issueDateInterval,
        searchContext,
        similarMode,
        limit,
        sortType,
        sortDirectionType,
        attributeFilters,
        )}
    if (!store.isAuth) {
        return (
            <>
                <Home/>
            </>
        );}
    else {
        return (
                <div className='Search'>
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
                            <p>Диапазон поиска*</p>
                            <div className="Search-block2-1">
                                <SelectDate
                                    dateStart = {dateStart}
                                    setDateStart = {setDateStart}
                                    dateEnd = {dateEnd}
                                    setDateEnd = {setDateEnd}
                                />
                                <div className="SearchButton">
                                    <button
                                        onClick={Click}
                                    >Поиск</button>
                                    <p>*Обязательные к заполнению поля</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


export default observer(Search);