import {useNavigate} from "react-router-dom";

export default function StickyNote({note}){
    const navigate = useNavigate();

    return(
        <div
            onClick={() => navigate(`/note/{note._id}`)}
            className="bg-[#fef3c7] w-60 p-4 rounded shadow-md transform hover:scale-105 cursor-pointer transition-all duration-200 rotate-[-1deg]"
        >
            <h2 className="text-lg font-bold mb-1 text-[#78350f">
                {note.title || "Untitled"}
            </h2>
            {note.tag && (
                <span className="inline-block text-xs mb-1 text-[#b45309] bg-yellow-100 px-2 py-0.5 rounded">
                    #{note.tag}
                </span>
            )}
            <p className="text-sm text-gray-700 line-clamp-3">
                {note.content}
            </p>
        </div>    
    );
}