import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useInputValue } from './Custom'
import './App.css';

const HooksExample = () => {
    const [data, setData] = useState();
    const username = useInputValue("");

    useEffect(() => {
        const fetchGithubData = async (name) => {
            const result = await axios(`https://api.github.com/users/${name}/events`)
            setData(result.data)
        }
        fetchGithubData('lsurasani')
    }, [data])

    

    return (
        <div className="App">
            <header className="App-header">
                {data && (
                    data.map(item => <p>{item.repo.name}</p>)
                )}
                {username.value}
                <div>
                    <input type="text" placeholder="username" {...username} />
                </div>
            </header>
        </div>
    )
}

export default HooksExample;
