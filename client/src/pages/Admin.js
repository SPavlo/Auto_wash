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
import {queryListMock, reportListMock, washListMock} from "../mockData";

const Admin = () => {

    const [show, setShow] = useState(false);
    const [location, setLocation] = useState('')
    const [amount, setAmount] = useState('')

    const [wash,setWash] = useState(washListMock)
    const [queryList, setQueryList] = useState(queryListMock.sort((a, b) => (a.checked === b.checked) ? 0 : a.checked ? -1 : 1).reverse())
    const [reportList, setReportList] = useState(reportListMock)

    useEffect(()=>{
        sortList(queryList)
        console.log("useEfect")
    },[reportList,queryList])

    const sortList = (list) =>{
        const sortedList = list.sort((a, b) => (a.checked === b.checked) ? 0 : a.checked ? -1 : 1);
        console.log(sortedList)
        setQueryList(sortedList)
        console.log(queryList)
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