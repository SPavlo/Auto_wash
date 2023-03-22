import React from 'react';
import QueryItem from "./QueryItem";

const QueryList = ({queryList}) => {
    console.log("queryList")
    console.log(queryList)
    return (
        <div>
            {queryList.map(q =>
              <QueryItem queryItem={q} key={q.id}/>
            )}
        </div>
    );
};

export default QueryList;