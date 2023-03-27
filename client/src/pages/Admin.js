import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import QueryList from "../components/QueryList";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReportsList from "../components/ReportsList";
import ReportsItem from "../components/ReportsItem";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Admin = () => {
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('')
    const [amount, setAmount] = useState('')

    const [wash,setWash] = useState([
        {id:334, location:'м.Київ, вул. Січових Стрільців 12', workStatus:true},
        {id:335, location:'м.Черкаси, вул. Шевченка 11', workStatus:true},
        {id:324, location:'м.Полтава, вул. Мазепи 23', workStatus:false},
        {id:134, location:'м.Київ, вул. Петра Сагайдачного 29', workStatus:true},
    ])

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
    const addNewWash = () =>{
        const newWash = {
            id:Date.now(),
            location,
            amount
        }
        setWash([...wash, newWash])
        setAmount('')
        setLocation('')
        handleClose()
    }

    const handleClose = () => {
        setShow(false)
        setAmount('')
        setLocation('')
    };
    const handleShow = () => setShow(true);
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
                    <div className="list">
                        {wash.map(w =>
                            <div className="list-item" key={w.id}>
                                <div>
                                    {w.location}
                                </div>
                                <div>
                                    {w.workStatus
                                        ?"Працює"
                                        :"Непрацює"
                                    }
                                </div>
                            </div>
                        )}
                    </div>
                    <Button variant="primary" onClick={handleShow}>
                        Додати автомийку
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Додати автомийку</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Вулиця"
                                    className="modal-input"
                                    value={location}
                                    onChange={event => setLocation(event.target.value )}
                                />
                                <input
                                    type="text"
                                    placeholder="Кількість персоналу"
                                    className="modal-input"
                                    value={amount}
                                    onChange={event => setAmount(event.target.value )}
                                />

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрити
                            </Button>
                            <Button variant="primary" onClick={addNewWash}>
                                Додати
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Admin;