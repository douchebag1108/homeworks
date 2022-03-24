import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import App from "./App";



function Score(props) {
    const history = useHistory();
    const params = useParams();
    console.log(params)
    const [point, setPoint] = useState(0);

    return (
        <>
            <MyStyled>
                <h2 style={{
                margin: "0 auto",
                width: "50%",
                backgroundColor: "white",
                fontWeight: "bold",
                textAlign: "center",
                color: "black" }}>{params.DetailDay}오늘의 점수</h2>
                <Center>
                    {Array.from({ length: 5 }, (item, idx) => {
                        return (
                            <Circle key={idx} onClick={() => { setPoint(idx + 1); }}
                                style={{ backgroundColor: point < idx + 1 ? "lightgray" : "white" }} />
                        )
                    })}
                </Center>
                <Btn onClick={() => {
                    history.push("/");
                }}>평점 남기기</Btn>
            </MyStyled>

        </>

    )
}


const MyStyled = styled.div`
    max-width: 400px;
    width: 40%;
    height: 400px;
    margin: 0 auto;
    margin-top: 200px;
    padding-top: 80px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: skyblue;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    font-weight: bold;
`

const Circle = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: gray;
    `
const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 16px;
    margin-top: 15px;
    border-radius: 20px;   
    max-width: 180px;
    width: 40%;
    background-color: lightyellow;
    border: transparent;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
`


export default Score;