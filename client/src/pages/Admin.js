import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import QueryList from "../components/QueryList";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReportsList from "../components/ReportsList";


const Admin = () => {
    const [queryList, setQueryList] = useState([
        {id:1, date:'02.13.2023', body:"Потрібно оновити запаси", checked:true, washId:334 },
        {id:2, date:'03.03.2023', body:"Потрібно Зробити техогляд ", checked:false,washId:335 },
        {id:3, date:'12.26.2023', body:"Потрібно оновити термінал", checked:true,washId:324 },
        {id:4, date:'11.22.2023', body:"Закінчилось у запаси", checked:false,washId:134 },
    ])
    const [reportList, setReportList] = useState([
        {id:1, date:'02.13.2023', body:"Тижневий звіт", checked:true, },
        {id:2, date:'03.03.2023', body:"Тижневий звіт ", checked:true, },
        {id:3, date:'12.26.2023', body:"Тижневий звіт", checked:true, },
        {id:4, date:'11.22.2023', body:"Тижневий звіт", checked:false, },
    ])

    useEffect(()=>{
        sortList(queryList)
    },[reportList,queryList])

    const sortList = (list) =>{
        const sortedList = list.sort((a, b) => (a.checked === b.checked) ? 0 : a.checked ? -1 : 1);
        setQueryList(sortedList)
    }
    return (
        <div>
            <Header/>
            <Tabs
                defaultActiveKey="query"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="query" title="Запити та потреби">
                    <QueryList queryList={queryList}/>
                </Tab>
                <Tab eventKey="report" title="Звіти">
                    <ReportsList reportList={reportList}/>
                </Tab>
                <Tab eventKey="statistic" title="Статистика">
                   <div>Статистика</div>
                </Tab>
                <Tab eventKey="status" title="Статус автомийок">
                    <div>Статус автомийок</div>
                </Tab>

            </Tabs>
            {/*<h1>Запити та потреби</h1>*/}
            {/*<QueryList queryList={queryList} />*/}
            {/*<QueryList queryList={reportList} />*/}
        </div>
    );
};

export default Admin;