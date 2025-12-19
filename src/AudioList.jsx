
import "./AudioList.css";

export default function AudioList({ audios, onPlay }) {
    return (
        <ul className="audio-list">
            {audios.map(a => (
                <li
                    key={a.id}
                    className="audio-item"
                    onClick={() => onPlay(a)}
                >
                    {a.title}
                </li>
            ))}
        </ul>
    );
}
