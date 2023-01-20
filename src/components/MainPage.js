import Header from './Header';
import { Route } from 'react-router-dom';
import Search from './Search';
import AddAnswer from './AddAnswer';
import { useContext } from 'react';

import React, { useEffect, useState } from 'react';

const MainPage = () => {
    const [questions, setQuestions] = useState([]);
    // const [result, setResult] = useState([]);

    useEffect(() => {
        setQuestions(JSON.parse(localStorage.getItem("questions")) || []);
    }, []);


    return (
        <div className='mainPage'>

            <div className='questionAnswerCard'>

                {questions.map(q => (

                    <div key={q.id} className="card">
                        <ul>
                            <li>{q.text}</li>
                        </ul>
                        <ul>
                            {q.answers && q.answers.map((a, index) => (
                                <p key={index}>{a}</p>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='questionPage'>
                {questions.map((question) => (
                    <div key={question.id}>
                        <ul>
                            <li>{question.text}</li>
                        </ul>
                    </div>
                ))}

            </div>
            {/* {result.length !== 0 &&
                result.map((item, index) => (
                    <div key={index}>
                        <h3>{item.question}</h3>
                        <ul>
                            {item.answers.map((a, index) => (
                                <li key={index}>{a}</li>
                            ))}
                        </ul>
                    </div>
                ))} */}


        </div>
    )
}

export default MainPage;