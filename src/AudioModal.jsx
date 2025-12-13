import "./AudioModal.css";
import AudioList from "./AudioList";

export default function AudioModal({ audios, isOpen, onClose, onPlay }) {
    if (!isOpen) return null;

    const handlePlay = (audio) => {
        onPlay(audio);   // setCurrentAudio
        onClose();       // đóng modal
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2>Danh sách audio</h2>
                    <button className="close-btn" onClick={onClose}>✖</button>
                </div>

                <div className="modal-body">
                    {/* QUAN TRỌNG: truyền handlePlay */}
                    <AudioList audios={audios} onPlay={handlePlay} />
                </div>
            </div>
        </div>
    );
}
