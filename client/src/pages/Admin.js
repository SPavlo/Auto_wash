import React, {useEffect, useRef, useState} from 'react';
import Header from "../components/Header";
import QueryList from "../components/QueryList";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {queryListMock, reportListMock, washListMock} from "../mockData";
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Statistics from "../components/Statistics";
import {DateRangePicker} from "rsuite";

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Button
            variant="info"
            onClick={decoratedOnClick}
        >
            {children}
        </Button>
    );
}


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
                    <Accordion defaultActiveKey="0">
                        {reportList.map((reportItem)=>
                            <Card>
                                <Card.Header>
                                    <div className="report-item">
                                        <div>
                                            Дата:
                                            {reportItem.date}
                                        </div>
                                        <div>
                                            {reportItem.body}
                                        </div>
                                        <div>
                                            {wash.find((w) => w.id === reportItem.washId).location}
                                        </div>
                                        <CustomToggle eventKey={reportItem.id}>Деталі</CustomToggle>
                                    </div>
                                </Card.Header>
                                <Accordion.Collapse eventKey={reportItem.id}>
                                    <Card.Body>
                                        <div>
                                            <div>
                                                <span>
                                                    Витрати:{' '}
                                                </span>
                                                <span>
                                                    {reportItem.costs} грн
                                                </span>

                                            </div>
                                            <div>
                                                <span>
                                                    Дохід:{' '}
                                                </span>
                                                <span>
                                                  {reportItem.income} грн
                                                </span>

                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )}

                    </Accordion>
                </Tab>
                <Tab eventKey="statistic" title="Статистика">
                   <Statistics/>
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
                    <Button variant="primary" className="add-btn" onClick={handleShow}>
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