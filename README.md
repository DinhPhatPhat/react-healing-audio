# Thư viện chữa lành - React + Vite (English below)

## Xin chào, chào mừng đến với thư viện chữa lành của Phát Phát được phát triển bằng React (JS) 👋
+ Đây là một dự án thuần front-end, được phát triển trong quá trình mình học về React.
+ Component: hiện tại mình dùng function component
+ Hook: Hiện tại mình học và áp dụng được 3 loại hook cơ bản là useState, useEffect và useRef
  
## Thông tin dự án
### Đây là thư viện chứa những audio/podcast mà mình nghe trong quá trình chữa lành bản thân mình, cũng là trong thời điểm mình muốn học thêm về React, vậy là dự án này ra đời, chỉ sử dụng front-end, data tĩnh được viết vào file data.js, các bạn có thể nghe audio qua trang mà mình đã deploy bằng github pages : [Thư viện audio chữa lành](https://dinhphatphat.github.io/react-healing-audio/)
### Công nghệ sử dụng
<div align="left">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" height="40" alt="react logo" /> 
    <img width="12" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
    <img width="12" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
    <img width="12" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
    <img width="12" />   
</div>

### Các component
+ App.jsx: component gốc, quản lý state, logic và render.
+ CategoryList.jsx: hiển thị danh sách danh mục audio.
+ AudioModal.jsx: modal hiển thị danh sách audio theo danh mục.
+ AudioList.jsx: danh sách audio, được AudioModal gọi để render dữ liệu.
### Các hook
+ useState: quản lý trạng thái trong component: danh mục đang chọn, audio đang chọn, modal đang mở hay không.
+ useEffect: thực hiện các side-effect khi component render hoặc các dependencies truyền vào bị thay đổi: lưu aduio đang phát vào localStorage, đổi title theo audio được chọn, load audio đã lưu từ localStorage, tự động play audio khi chọn.
+ useRef: tạo tham chiếu đến element hoặc giá trị không kích hoạt re-render, cụ thể ở đây là tham chiếu tới audio trong DOM, cho phép gọi play() để phát audio tự động.


# Healing Audio Library - React + Vite
## Welcome to Phat Phat's Healing Audio Library developed with React (JS) 👋
+ This is a pure front-end project, developed while learning React.
+ Components: currently using function components.
+ Hooks: currently applied and learned 3 basic hooks: useState, useEffect, and useRef.

## Project Info
### This library contains audios/podcasts I listened to during my self-healing journey. It was also created as a practice project while learning React. The project is front-end only, with static data written in data.js. You can listen to the audios through the deployed page on GitHub Pages: [Healing Audio Library](https://dinhphatphat.github.io/react-healing-audio/)

### Components
+ App.jsx: main component, manages state, logic, and renders the app.
+ CategoryList.jsx: displays the list of audio categories.
+ AudioModal.jsx: modal displaying audios for the selected category.
+ AudioList.jsx: renders the list of audios, called by AudioModal.
### Hooks
+ useState: manages component state such as selected category, current audio, and whether the modal is open.
+ useEffect: handles side-effects when components render or dependencies change: saves the current audio to localStorage, updates document title, loads saved audio from localStorage, auto-plays audio when selected.
+ useRef: creates a reference to an element or value that doesn’t trigger re-render. Here it’s used to reference the audio element in the DOM, allowing play() to be called for auto-playing audio.

### Contact
<div align="left">
 <a href="mailto:dinhphatphat.work@gmail.com">
  <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg" height="42" alt="dinhphatphat.work@gmail.com"  />
</a>
  <img width="12" />
 <a href="https://www.facebook.com/phatfioraa/">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" height="42" alt="https://www.facebook.com/phatfioraa/"  />
</a>
</div>
