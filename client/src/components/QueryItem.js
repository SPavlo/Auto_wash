import React from 'react';

const QueryItem = ({queryItem}) => {
    return (
        <div className={queryItem.checked?"list-item checked ":"list-item "}>
            <div>
                Дата:
                {queryItem.date}
            </div>
            <div>
                {queryItem.body}
            </div>

        </div>
    );
};

export default QueryItem;