import React, {useState} from 'react';
import Header from "../components/Header";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import QueryList from "../components/QueryList";
import ReportsList from "../components/ReportsList";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {queryListMock, reportListMock} from "../mockData";

const Worker = () => {
    const currentWashId = 334

    const [show, setShow] = useState(false);
    const [queryList, setQueryList] = useState(queryListMock.filter(q => q.washId === currentWashId)
)
    const [reportList, setReportList] = useState(reportListMock)
    const [body, setBody] = useState('')

    const handleClose = () => {
        setShow(false)
        setBody('')
    };
    const handleShow = () => setShow(true);

    const addNewQuery = () =>{
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        const currentDateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        const newQuery = {
            id:Date.now(),
            date:currentDateStr,
            body:body,
            checked:false,
            washId:currentWashId,
        }
        setQueryList([...queryList,newQuery])
        handleClose()


    }
    return (
        <div>
            <Header/>
            <Tabs
                defaultActiveKey="query"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="query" title="Мої запити">
                    <QueryList queryList={queryList}/>
                    <Button variant="primary" onClick={handleShow}>
                        Створити запит
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Створити запит</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Вулиця"
                                    className="modal-input"
                                    value={body}
                                    onChange={event => setBody(event.target.value )}
                                />


                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Закрити
                            </Button>
                            <Button variant="primary" onClick={addNewQuery}>
                                Додати
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Tab>
                <Tab eventKey="report" title="Мої звіти">
                    <ReportsList reportList={reportList}/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Worker;