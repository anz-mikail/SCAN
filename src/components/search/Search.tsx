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

    const [inn, setInn] = useState(0);
    const [tonality, setTonality] = useState("");
    const [limit, setLimit] = useState(0);

    const [maxFullness, setMaxFullness] = useState(false);
    const [onlyMainRole, setOnlyMainRole] = useState(false);
    const [onlyWithRiskFactors, setOnlyWithRiskFactors] = useState(false);
    const [excludeTechNews, setExcludeTechNews] = useState(false);
    const [excludeAnnouncements, setExcludeAnnouncements] = useState(false);
    const [excludeDigests, setExcludeDigests] = useState(false);
    const [inBusinessNews, setBusinessNews] = useState(null);

    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);

    const test = [{
        "issueDateInterval": {
            "startDate": "2019-01-01T00:00:00+03:00",
            "endDate": "2022-08-31T23:59:59+03:00"
        },
        "searchContext": {
            "targetSearchEntitiesContext": {
                "targetSearchEntities": [
                    {
                        "type": "company",
                        "sparkId": null,
                        "entityId": null,
                        "inn": 7710137066,
                        "maxFullness": true,
                        "inBusinessNews": null
                    }
                ],
                "onlyMainRole": true,
                "tonality": "any",
                "onlyWithRiskFactors": false,
                "riskFactors": {
                    "and": [true],
                    "or": [],
                    "not": []
                },
                "themes": {
                    "and": [],
                    "or": [],
                    "not": [true]
                }
            },
            "themesFilter": {
                "and": [],
                "or": [],
                "not": [true]
            }
        },
        "searchArea": {
            "includedSources": [],
            "excludedSources": [],
            "includedSourceGroups": [],
            "excludedSourceGroups": []
        },
        "attributeFilters": {
            "excludeTechNews": true,
            "excludeAnnouncements": true,
            "excludeDigests": true
        },
        "similarMode": "duplicates",
        "limit": 1000,
        "sortType": "sourceInfluence",
        "sortDirectionType": "desc",
        "intervalType": "month",
        "histogramTypes": [
            "totalDocuments",
            "riskFactors"
        ]
    }
    ]

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
                        {`${maxFullness}`}
                        {`${onlyMainRole}`}
                        {`${onlyWithRiskFactors}`}
                        {`${excludeTechNews}`}
                        {`${excludeAnnouncements}`}
                        {`${excludeDigests}`}
                        {`${inBusinessNews}`}
                        {`${dateStart}`}
                        {`${dateEnd}`}
                        {`${inn}`}
                        {`${tonality}`}
                        {`${limit}`}
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
                                        onClick={() => store.search(test)}
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