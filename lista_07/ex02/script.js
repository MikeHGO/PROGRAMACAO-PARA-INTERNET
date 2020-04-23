const POSTS = document.querySelector(".container_posts");
const PREVIEWS = document.querySelector(".container_previews");
let id = 0;

var videos = [{
    "youtubeId": "ZtMzB5CoekE",
    "title": "3 Técnicas Que Eu Uso Para Aprender a Programar Qualquer Coisa (mesmo sem ter o dom da programação)",
    "author": "Filipe Deschamps"
    },
    {
    "youtubeId": "MV3dxDwRgnQ",
    "title": "Trabalho Remoto: Vagas Disponíveis HOJE para Ganhar em Dólar e Real (+9 dicas para ser contratado)",
     "author": "Filipe Deschamps"
    },
    {
    "youtubeId": "n3tMEOw9KGY",
    "title": "3 projetos de nível iniciante que geram até $3000 por Mês.",
    "author": "​Programador BR​"
    },
    {
    "youtubeId": "nZun1Y_CMJY",
    "title": "5 maneiras de ganhar dinheiro como programador sem ter um chefe",
    "author": "​Programador BR​"
    },
    {
    "youtubeId": "KUX7fRsXyeY",
    "title": "A Garota Burra que Amava Banana | JogabiliBEST",
    "author": "Jogabilidade TV"
    }
];

for (let index = 0; index < videos.length; index++) {
    let title = videos[index].title;
    let youtube_id = videos[index].youtubeId;
    let author = videos[index].author;

    const new_post = `<div class="post">
    <p class="post__title"><a href="#preview_${id}" class="post__link">${title}</a></p>
    <p class="post__author">${author}</p>
    <img src="https://img.youtube.com/vi/${youtube_id}/sddefault.jpg" alt="thumbnail" class="thumbnail">
    </div>`;

    POSTS.insertAdjacentHTML("beforeend", new_post);

    const new_preview = `<div class="preview__box" id="preview_${id}">
    <div class="preview__content">
    <a href="#!" class="preview__close"></a>
    <iframe class="preview__youtube"
    src="https://www.youtube.com/embed/${youtube_id}?controls=0">
    </iframe>
    </div>
    </div>`;

    PREVIEWS.insertAdjacentHTML("beforeend", new_preview);

    id++;
}

// https://img.youtube.com/vi/ ${video_ID} /hqdefault.jpg

// <div class="post">
//     <p class="post__title"><a href="#preview_1" class="post__link">Video Title</a></p>
//     <p class="post__author">by Video autor</p>
//     <img src="https://img.youtube.com/vi/QNTeq4QdOsQ/sddefault.jpg" alt="thumbnail" class="thumbnail">
// </div>

// <div class="preview__box" id="preview_1">
//     <div class="preview__content">
//         <a href="#!" class="preview__close"></a>
//         <iframe class="preview__youtube"
//         src="https://www.youtube.com/embed/xnaTcS0xc_E?controls=0">
//         </iframe>
//     </div>
// </div>