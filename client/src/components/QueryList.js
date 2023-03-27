import React from 'react';
import QueryItem from "./QueryItem";

const QueryList = ({queryList}) => {
    return (
        <div className="list">

            {queryList.map(q =>
              <QueryItem queryItem={q} key={q.id}/>
            )}
        </div>
    );
};

export default QueryList;