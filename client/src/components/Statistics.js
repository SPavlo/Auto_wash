import React, {useState} from 'react';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.min.css"

const Statistics = () => {
    const [show,setShow] = useState(false)
    const [dateRangeShow,setDateRangeShow] = useState(true)
    const [dateRange,setDateRange] = useState([])

    const showStatistics = () =>{
        setShow(true)
        setDateRangeShow(false)
    }
    return (
        <div>
            {dateRangeShow
                ?<div className="daterange-box">
                    <h2>Статистика</h2>
                    <div className="daterange-plot">

                        <DateRangePicker
                            size="lg"
                            appearance="subtle"
                            placeholder="Оберіть період"
                            style={{ width: 200, backgroundColor:"white", borderRadius:5 }}
                            value={dateRange}
                            onChange={(e) => {
                                setDateRange(e)
                            }}
                        />
                        <button
                            onClick={()=> showStatistics()}
                        >
                            Показати
                        </button>

                    </div>
                </div>:<div></div>
            }
        </div>
    );
};

export default Statistics;