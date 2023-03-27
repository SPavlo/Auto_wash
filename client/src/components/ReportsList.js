import React from 'react';
import QueryItem from "./QueryItem";
import ReportsItem from "./ReportsItem";

const ReportsList = ({reportList}) => {
    return (
        <div className="list">

            {reportList.map(r =>
                <ReportsItem reportItem={r} key={r.id}/>
            )}
        </div>
    );
};

export default ReportsList;