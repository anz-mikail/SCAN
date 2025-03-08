import React, { useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { observer } from "mobx-react-lite";

import "./Result.css"
import ResultSlider from "./ResultSlider/ResultSlider";
import ResultDocument from "./ResultDocument/ResultDocument";
import { Context } from "../../../index";
import { Counter } from "./Counter";
import AxiosService from "./Axios";
import picture from '../../../styles/images/picture1.png'
import Home from "../../home/Home";
import ResultImage from "../../../styles/images/ResultImage.svg"


function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

function cleanHtmlContent(htmlContent) {
    const decodedHtml = decodeHtml(htmlContent);
    const cleanedContent = decodedHtml.replace(/(<([^>]+)>)/gi, "");
    return cleanedContent;
}


function Result() {

    const {store} = useContext(Context);
    const location = useLocation();
    const searchDict = location.state?.searchDict;

    const [total, setTotal] = useState([]);
    const [risk, setRisk] = useState([]);
    const [error, setError] = useState(false);
    const [DocumentsList, setDocumentsList] = useState([]);

    const handleRequestCounter = () => {
        store.setRequestCounter(2)
    }

    useEffect(() => {
        const HistogramResponse = async () => {
            try {
                const Response = await AxiosService.Histogram(searchDict);
                setTotal(Response.data.data[0].data);
                setRisk(Response.data.data[1].data);
                store.setStartFetch(false);
                setError(false)
            } catch (error) {
                setError(true)
                store.setStartFetch(false);
                console.error(error.response?.data?.message);
            }
        }
        const ObjectSearch = async () => {
            try {
                const ResponseObject = await AxiosService.ObjectSearch(searchDict);
                const IdDict = ResponseObject.data.items.map(item => item.encodedId)

                const documentsResponse = await fetch('https://gateway.scan-interfax.ru/api/v1/documents', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    body: JSON.stringify({ids: IdDict}),
                    credentials: 'omit',
                });
                const Response = await documentsResponse.json()

                const ResponseData = Response.map(item => ({
                    date: item.ok.issueDate,
                    url: item.ok.url ? item.ok.url : "",
                    sourceName: item.ok.source.name,
                    isTechNews: item.ok.attributes.isTechNews,
                    isAnnouncement: item.ok.attributes.isAnnouncement,
                    isDigest: item.ok.attributes.isDigest,
                    title: item.ok.title.text,
                    content: cleanHtmlContent(item.ok.content.markup),
                    wordCount: item.ok.attributes.wordCount,
                    picture: picture,
                }));
                setDocumentsList(ResponseData);
            } catch (error) {
                console.error(error.response?.data?.message);
            }
        }
        HistogramResponse();
        ObjectSearch()
    }, [store.startFetch]);

    const counter = Counter(total, risk)
    if (!store.isAuth) {
        return (
            <>
                <Home/>
            </>
        );
    } else {
        return (
            <>
                <div className='ResultTitleContainer'>
                    <div className='ResultTitleContainer1'>
                        <div className="ResultBlock1">
                            <h1>ИЩЕМ. СКОРО БУДУТ РЕЗУЛЬТАТЫ</h1>
                        </div>
                        <div className="ResultBlock2">
                            <p>Поиск может занять некоторое время, просим сохранять терпение</p>
                        </div>
                    </div>
                    <div className='ResultTitleContainer2'>
                        <img
                            className='ResultImage'
                            src={ResultImage}
                        />
                    </div>
                </div>
                <div className="ResultBlock3">
                    <h1>ОБЩАЯ СВОДКА</h1>
                    <p>Найдено {counter} вариантов</p>
                </div>
                <div className="ResultBlock4">
                <div className="ResultBlock4-0">
                        <div className="ResultBlock4-1">
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                        <div className="ResultBlock4-2">
                            <ResultSlider error = {error} total = {total} risk = {risk} />
                        </div>
                    </div>
                </div>
                <div className="ResultBlock3">
                    <h1>СПИСОК ДОКУМЕНТОВ</h1>
                </div>
                <ResultDocument
                    DocumentsList = {DocumentsList}
                />
                <div className={DocumentsList.length >= store.RequestCounter?
                    "ResultBlock5" : "ResultBlock5 active"}>
                    <button onClick={handleRequestCounter}
                            className='ResultBtn'>
                        Показать больше
                    </button>
                </div>
            </>
        )
    }
}


export default observer(Result);