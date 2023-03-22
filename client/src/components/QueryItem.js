import React from 'react';

const QueryItem = ({queryItem}) => {
    return (
        <div className="list-item">
            <div>
                {queryItem.date}
            </div>
            <div>
                {queryItem.body}
            </div>
            <div>
                {queryItem.status === "unchecked"
                ?"Непрочитано"
                :"Прочитано"
                }
            </div>
        </div>
    );
};

export default QueryItem;