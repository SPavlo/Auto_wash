import React from 'react';

const QueryItem = ({queryItem}) => {
    return (
        <div className={queryItem.checked?"list-item ":"list-item checked"}>
            <div>
                Дата:
                {queryItem.date}
            </div>
            <div>
                {queryItem.body}
            </div>
            <div>
                {queryItem.checked
                ?"Непрочитано"
                :"Прочитано"
                }
            </div>
        </div>
    );
};

export default QueryItem;