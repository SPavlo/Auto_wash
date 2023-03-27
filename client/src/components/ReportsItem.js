import React from 'react';

const ReportsItem = ({reportItem}) => {
    return (
        <div className="list-item">
            <div>
                Дата:
                {reportItem.date}
            </div>
            <div>
                {reportItem.body}
            </div>
            <div>
                {reportItem.status === "unchecked"
                    ?"Непрочитано"
                    :"Прочитано"
                }
            </div>
        </div>
    );
};

export default ReportsItem;