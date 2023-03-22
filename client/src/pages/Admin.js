import React, {useState} from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import QueryList from "../components/QueryList";

const Admin = () => {
    const [queryList, setQueryList] = useState([
        {id:1, date:'02.13.2023', body:"Потрібно оновити запаси", status:"checked", },
        {id:2, date:'03.03.2023', body:"Потрібно Зробити техогляд ", status:"unchecked", },
        {id:3, date:'12.26.2023', body:"Потрібно оновити термінал", status:"unchecked", },
        {id:4, date:'11.22.2023', body:"Закінчилось у запаси", status:"unchecked", },
    ])
    const [reportList, setReportList] = useState([
        {id:1, date:'02.13.2023', body:"Тижневий звіт", status:"checked", },
        {id:2, date:'03.03.2023', body:"Тижневий звіт ", status:"unchecked", },
        {id:3, date:'12.26.2023', body:"Тижневий звіт", status:"unchecked", },
        {id:4, date:'11.22.2023', body:"Тижневий звіт", status:"unchecked", },
    ])
    return (
        <div>
            <Header/>
            <Navigation/>
            <h1>Запити та потреби</h1>
            <QueryList queryList={queryList} />
            <QueryList queryList={reportList} />
        </div>
    );
};

export default Admin;