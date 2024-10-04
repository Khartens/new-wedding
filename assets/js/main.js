if (document.documentElement.clientWidth > 1270) {
  const imagesOne = ['assets/img/main-1.jpg', 'assets/img/main-2.jpg', 'assets/img/main-3.jpg','assets/img/main-1.jpg', 'assets/img/main-2.jpg', 'assets/img/main-3.jpg'];
  const imagesTwo = ['assets/img/main-4.jpg', 'assets/img/main-5.jpg', 'assets/img/main-6.jpg','assets/img/main-4.jpg', 'assets/img/main-5.jpg', 'assets/img/main-6.jpg'];
  
  const boxOne = document.querySelector('.ag_main-right_one');
  const boxTwo = document.querySelector('.ag_main-right_two');
  
  function fAddImages(arrImgSrc, targetBox) {
    let imgTags = '';
    arrImgSrc.forEach(src => { imgTags += `<img class="ag_main-right_img" src="${src}" alt="main">` });
    targetBox.insertAdjacentHTML('beforeend', imgTags.repeat(2));
  }
  
  fAddImages(imagesOne, boxOne);
  fAddImages(imagesTwo, boxTwo);

}

const photoElements = document.querySelectorAll('.ag_video');
let isVideoPlaying = false;
let currentVideo = null;

// Функция для паузы видео
function pauseVideo(video) {
    video.pause();
    isVideoPlaying = false;
}

// Обработчик клика для документа
document.addEventListener('click', (e) => {
    // Проверяем, есть ли текущее воспроизводимое видео
    if (isVideoPlaying && currentVideo) {
        // Проверяем, кликаем ли мы на элементе видео или его родителе
        if (!currentVideo.contains(e.target) && !currentVideo.closest('.ag_video').contains(e.target)) {
            pauseVideo(currentVideo);
        }
    }
});

photoElements.forEach(photoElement => {
    const videos = photoElement.querySelectorAll('.ag_video__inner');

    videos.forEach((video) => {
        // Обработчик клика на фото
        photoElement.addEventListener('click', () => {
            // Если текущее видео воспроизводится, останавливаем его
            if (isVideoPlaying && currentVideo) {
                pauseVideo(currentVideo);
            }
            // Добавляем класс photo-none
            photoElement.classList.add('photo-none');
            video.play();
            isVideoPlaying = true;
            currentVideo = video; // Запоминаем текущее видео
        });

        video.addEventListener('click', (e) => {
            e.stopPropagation();  // Останавливаем всплытие события
            if (!isVideoPlaying || currentVideo !== video) {
                // Если текущее видео не воспроизводится или это другое видео
                if (isVideoPlaying) {
                    pauseVideo(currentVideo);
                }
                video.play();
                isVideoPlaying = true;
                currentVideo = video; // Запоминаем текущее видео
            } 
        });
    });
});

const accordions = document.querySelectorAll(".ag_accordion");

if (accordions) {
    document.addEventListener("DOMContentLoaded", () => {
        const openAccordion = (accordion) => {
            const content = accordion.querySelector(".ag_accordion__content");
            accordion.classList.add("ag_open");
            content.style.maxHeight = content.scrollHeight + "px"; // Установка максимальной высоты
        };

        const closeAccordion = (accordion) => {
            const content = accordion.querySelector(".ag_accordion__content");
            accordion.classList.remove("ag_open");
            content.style.maxHeight = null; // Сброс максимальной высоты
        };

        // Открываем первый элемент при загрузке
        openAccordion(accordions[0]);

        accordions.forEach((accordion) => {
            // Добавляем обработчик клика на весь аккордеон
            accordion.onclick = () => {
                const content = accordion.querySelector(".ag_accordion__content");
                if (content.style.maxHeight) {
                    closeAccordion(accordion);
                } else {
                    accordions.forEach(acc => closeAccordion(acc)); // Закрытие остальных аккордеонов
                    openAccordion(accordion);
                }
            };
        });
    });
}