import { useState, useEffect, useRef } from "react";
import { categories, audios } from "./data";
import CategoryList from "./CategoryList";
import AudioModal from "./AudioModal"
import './index.css'

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentAudio, setCurrentAudio] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const audioRef = useRef(null);

  const handleSelectCategory = (id) => {
    setSelectedCategory(id);
    setModalOpen(true);
  };


  const filteredAudios = selectedCategory
    ? audios.filter(a => a.categoryId === selectedCategory)
    : [];

  const currentCategory = currentAudio
    ? categories.find(c => c.id === currentAudio.categoryId)
    : null;

  //useEffect 1: save playing audio
  useEffect(() => {
    if (currentAudio) {
      localStorage.setItem("currentAudio", JSON.stringify(currentAudio));
    }
  }, [currentAudio]);

  //useEffect 2: title by playing audio 
  useEffect(() => {
    document.title = currentAudio ? currentAudio.title : "My way to heal";
  }, [currentAudio]);

  //useEffect 3: load saved audio 
  useEffect(() => {
    const savedAudio = localStorage.getItem("currentAudio");
    if (savedAudio) setCurrentAudio(JSON.parse(savedAudio));
  }, []);


  return (
    <div className="container">

      {/* GIỚI THIỆU */}
      <section>
        <h1>Thư viện chữa lành của Phát Phát</h1>
        <p>
          Đây là nơi mình lưu lại các audio/podcast đã đồng hành cùng mình trong quá trình mình tìm lại bản thân.
        </p>
      </section>

      {/* AUDIO PLAYER */}
      <section style={{ marginTop: "20px" }}>

        {currentAudio ? (
          <div id="audio-player">
            {/* Category image */}
            <img
              src={currentCategory?.image || "/placeholder.png"}
              alt={currentCategory?.name}
            />

            {/* Audio name */}
            <div id="audio-name">
              {currentAudio.title}
            </div>

            {/* Category name */}
            <div id="category-name">
              {currentCategory?.name}
            </div>

            {/* Audio player */}
            <audio controls src={currentAudio.src} />
          </div>
        ) : (
          <p>— Chưa có bài nào được chọn —</p>
        )}

      </section>

      {/* DANH MỤC */}
      <section style={{ marginTop: "30px" }}>
        <h2>Danh mục</h2>
        <CategoryList
          categories={categories}
          onSelect={handleSelectCategory}
        />
      </section>
      <AudioModal
        isOpen={modalOpen}
        audios={filteredAudios}
        onClose={() => setModalOpen(false)}
        onPlay={setCurrentAudio}
      />
    </div>
  );
}
