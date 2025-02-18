import React from "react";

import "../../styles/Result.css"
import ResultSlider from "./ResultSlider";


function Result() {
    return (
        <>
            <div className="ResultBlock1">
                <h1>ИЩЕМ. СКОРО БУДУТ РЕЗУЛЬТАТЫ</h1>
            </div>
            <div className="ResultBlock2">
                <p>Поиск может занять некоторое время, просим сохранять терпение</p>
            </div>
            <div className="ResultBlock3">
                <h1>ОБЩАЯ СВОДКА</h1>
            </div>
            <div className="ResultBlock4">
                <div className="ResultBlock4-0">
                    <div className="ResultBlock4-1">
                        <p>Период</p>
                        <p>Всего</p>
                        <p>Риски</p>
                    </div>
                    <div className="ResultBlock4-2">
                        <ResultSlider/>
                    </div>
                </div>
            </div>
            <div>
                <div className="ResultBlock3">
                    <h1>СПИСОК ДОКУМЕНТОВ</h1>
                </div>
                <div className="ResultBlock5">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className="ResultBlock6">
                    <button className='ResultBtn'>Показать больше</button>
                </div>
            </div>
        </>
    )
}


export default Result;