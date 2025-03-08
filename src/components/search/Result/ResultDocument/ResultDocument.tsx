import React, {useContext} from 'react'
import { observer } from "mobx-react-lite"

import "./ResultDocument.css"
import {Context} from "../../../../index";


function ResultDocument ({DocumentsList}) {

    const {store} = useContext(Context);

    return (
        <div className="Document-Container">
            {DocumentsList.slice(0, store.RequestCounter)?.map((item, index) =>
                <div className="Document-Container1" key={index}>
                    <div className="Document-ContainerDate">
                        <p>
                            {item.date.slice(8, 10)}.
                            {item.date.slice(5, 7)}.
                            {item.date.slice(0, 4)}
                        </p>
                        <a href={item.url}>{item.url}</a>
                    </div>
                    <div className="Document-ContainerTitle">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="Document-ContainerCategory">
                        <p className={item.isTechNews ?
                            'TechNews' : 'TechNews active'}>
                            Технические новости
                        </p>
                        <p className={item.isAnnouncement ?
                            'Announcement' : 'Announcement active'}>
                            Анонсы и события
                        </p>
                        <p className={item.isDigest ?
                            'Digest' : 'Digest active'}>
                            Сводки новостей
                        </p>
                    </div>
                    <div className="Document-ContainerImage">
                        <img src={item.picture}
                             defaultValue="IMAGE">
                        </img>
                    </div>
                    <div className="Document-ContainerText">
                        <p>{item.content}</p>
                    </div>
                    <div className="Document-ContainerBtn">
                        <a href={item.url ? item.url : ""}
                           className="Document-ContainerLink">
                            Читать в источнике
                        </a>
                        <p>{item.wordCount} слова</p>
                    </div>
                </div>
            )}
        </div>
    )
}


export default observer(ResultDocument)