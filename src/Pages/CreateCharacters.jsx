import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import app from "../api/firebase";
import '../index.css'

function CreateCharacters() {
    const [name, setName] = useState("");
    const [intro, setIntor] = useState("");
    const db = getFirestore(app);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "characters"), { name, intro });
        alert("캐릭터 등록 완료");
        navigate("/"); //
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                value={name}
                onChange={(e) => { setName(e.target.value) }}
                placeholder="이름을 입력하세요 (예: 수아, 허준)"
                className="w-full px-4 py-3 border-gray300 rounded-1g focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
            />
            <input
                value={intro} onChange={(e) => { setIntor(e.target.value) }}
                placeholder="한줄 소개 (예, 상큼발랑 대학생)"
                className="w-full px-4 py-3 border border-gray-300 rounded-1g focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
                required
            />
            <button type="submit" className="w-full py-3 bg-blue-500 text-white font-semibold rounded-1g hover:bg-blue-600 transition">
                캐릭터등록하기
            </button>
        </form>
    )
}
export default CreateCharacters


