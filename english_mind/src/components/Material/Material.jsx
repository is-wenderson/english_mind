import './Material.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// 1. IMPORTANTE: Adicione 'Autoplay' aqui
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Material() {
  const videoEmbedUrl = 'https://www.youtube.com/embed/cq0mxIThLm0';

  return (
    <section className="material-container" id="material">

      <div className="material-grid">
        {/* ... (Código da coluna 1 mantém igual) ... */}
        <div className="material-bloco-texto">
            <h2 className="material-title">Certificação Internacional</h2>
            <p className="material-description">
              Nosso curso cobre todos os níveis do Quadro Comum Europeu de
              Referência para Línguas (CEFR). Preparamos você para prestar exames
              internacionais e conquistar sua certificação!
            </p>
            <img src="/images/certificados.avif" alt="Certificação Internacional" className="material-imagem-certificado" />
        </div>

        {/* Coluna 2: Material com Autoplay */}
        <div className="material-bloco-slider">
          <h2 className="material-title">Material Didático de Oxford</h2>
          <p className="material-description">
            Usamos o renomado <strong>American English File</strong> da Universidade de Oxford.
          </p>
          
          <Swiper
            // 2. ADICIONE 'Autoplay' NA LISTA DE MÓDULOS
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            // 3. CONFIGURE O TEMPORIZADOR (3000ms = 3 segundos)
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="livro-slider"
          >
            <SwiperSlide><img src="/images/livro_capa.avif" alt="Capa" /></SwiperSlide>
            <SwiperSlide><img src="/images/livro_workbook.avif" alt="Workbook" /></SwiperSlide>
            <SwiperSlide><img src="/images/livro_exemplo1.avif" alt="Exemplo 1" /></SwiperSlide>
            <SwiperSlide><img src="/images/livro_exemplo2.avif" alt="Exemplo 2" /></SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* ... (Bloco do vídeo mantém igual) ... */}
      <div className="video-wrapper">
        <h2 className="material-title video-title">Quer entender com mais detalhes?</h2>
        <div className="player-container">
          <iframe 
            className="iframe-player"
            src={videoEmbedUrl}
            title="Vídeo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Material;