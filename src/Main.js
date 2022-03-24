import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function Main(props) {
    const navi = useHistory();
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];   
   
    return (
        <div style={{
           margintop: "40px;"
        }}>
            <h1 style={{
                margin: "20px auto",
                color:"gray",
                textAlign: "center",
            }}>This week</h1>
            <MainPage>
                {Array.from({ length: 7 }, (item, idx) => {
                    const random = Math.floor(Math.random() * 5);
                    return (
                        <Rings key={idx}>
                            {weekdays[idx]}
                            {Array.from({ length: 5 }, (item, idx) => {
                                return (
                                    <Circle key={idx} style={{ background: idx <= random ? "black" : "white" }} />
                                );
                            })}
                            <Tri onClick={() => {
                                navi.push(`/score/${weekdays[idx]}`);
                            }}></Tri>
                        </Rings>
                    )
                            })}
            </MainPage>
        </div>
    )
}

const MainPage = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width: 320px;
    height : 680px;
    margin : auto;
    backgroundcolor: gray;
    border : 1px solid black;
`

const Rings = styled.div`
    width: 250px;
    height: 40px;    
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-weight: bold;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
 `
const Tri = styled.div`
    appearance: none;
    background-color: transparent;
    border-color: blue;	
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1.6rem solid blue;
    color: 	blue;
    cursor: pointer;
`


export default Main;