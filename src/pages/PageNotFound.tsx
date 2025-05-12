import { useNavigate } from "react-router-dom";
export default function PageNotFound() {

    const navigate = useNavigate()
    return (
        <div className="text-center p-10">
            <h1 className="text-3xl font-bold mb-4">404 - Página non trovata</h1>
            <p>Ci dispiace questo sito non esiste, vuoi tornare nella Home 😀 ?.</p>
            <button onClick={() => navigate("/")} className="bg-pink-600 text-white px-4 py-2 mt-4 rounded hover:bg-pink-700 transition">Home</button>
        </div>
    )
}