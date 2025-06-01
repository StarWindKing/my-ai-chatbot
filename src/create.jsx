import React, { useEffect, useState } from 'react';
import { getChatResponse } from "./api/openai"
import './index.css'

function App() {
    const [response, setResponse] = useState("");
    useEffect(() => {
        async function fetchData() {
            const result = await getChatResponse(["안녕!"], "안녕 자기소개해줘, MBTI로 표현해줘");
            setResponse(result);  // 화면에 표시할 응답을 상태로 저장
        }
        fetchData();

    }, [])

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold underline text-blue-600">
                Hello, Tailwind!
            </h1>
            <p className="mt_4 text-1g text-gray-700">
                {response ? response : "응답을 불러오는 중..."}
            </p>
        </div>
    );
}
export default App;