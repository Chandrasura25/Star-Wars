import React, { useState, useEffect } from 'react'
import '../style/Home.css';
import axios from 'axios'
import svg from '../assets/Star_Wars_Logo.svg'
import Dropdown from './Dropdown';
import Marquee from './Marquee';
import Table from './Table';

function Home({ movies }) {
    const url = "https://swapi.dev/api/films/";
    // const url1 = "http://anyorigin.com/go?url=https://swapi.dev/api/films/";

    const [allMovies, setallMovies] = useState([]);
    const [characters, setcharacters] = useState([])
    const [crawl, setcrawl] = useState("");
    const [errMessage, seterrMessage] = useState('')
    const [isLoading, setisLoading] = useState(true);
    const [spin, setspin] = useState(false)
    const [loading, setloading] = useState(false);
    useEffect(() => {
        axios.get(url).then((result) => {
            let results = (result.data.results);
            let sortedInfo = results.sort(function (a, b) { return a.release_date - b.release_date });
            setallMovies(sortedInfo);
            setisLoading(false);
        }).catch((err) => {
            console.log(err.message)
            seterrMessage(err.message)
        });
    }, [])
    const getId = (id) => {
        setloading(true);
        axios.get(url + id).then((result) => {
            setcrawl(result.data.opening_crawl)
            setloading(false)
            setspin(true);
            let charact = result.data.characters
            let charat = [];
            charact.map((val) => {
                axios.get(val).then((res) => {
                 charat.push({...res.data})
                 setspin(false);
                }).catch((err)=>{
                  seterrMessage(err.message)
                })
            })
            setcharacters(charat)
        }).catch((err) => {
            seterrMessage(err.message)
        })
    }
    return (
        <>
            <div class="bgPulse">
                <div className="contain">
                    <div className="bg">
                        <span className="span"></span><span className="span"></span><span className="span"></span><span className="span"></span><span className="span"></span><span className="span"></span><span className="span"></span><span className="span"></span><span className="span"></span><span className="span"></span>
                    </div>
                    <img src={svg} alt="" />
                    <Dropdown movies={allMovies} loader={isLoading} getId={getId} error={errMessage} />
                    <hr />
                    <Marquee crawl={crawl} loader={loading} error={errMessage} />
                    <Table characters={characters} spin={spin}/>
                </div>
            </div>
        </>
    )
}

export default Home