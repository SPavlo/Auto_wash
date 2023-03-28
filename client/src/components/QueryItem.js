import React, {useState} from 'react';
import {washListMock} from "../mockData";

const QueryItem = ({queryItem}) => {
    const [wash,setWash] = useState(washListMock)
    return (
        <div
            className={queryItem.checked?"list-item checked ":"list-item "}

        >
            <div>
                Дата:
                {queryItem.date}
            </div>
            <div>
                {wash.find((w) => w.id === queryItem.washId).location}
            </div>
            <div>
                {queryItem.body}
            </div>

        </div>
    );
};

export default QueryItem;