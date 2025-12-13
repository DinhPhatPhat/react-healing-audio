export default function AudioList({ audios, onPlay }) {
    return (
        <ul>
            {audios.map(a => (
                <li
                    key={a.id}
                    onClick={() => onPlay(a)}
                    style={{ cursor: "pointer", marginBottom: "8px" }}
                >
                    {a.title}
                </li>
            ))}
        </ul>
    );
}
