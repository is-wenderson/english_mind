import './Feedbacks.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Feedbacks() {
  return (
    <section className="feedbacks-container" id="feedbacks">
      <h2 className="feedbacks-title">Resultados Reais</h2>
      
      <div className="carousel-wrapper">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1} 
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true} 
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 40 }, // Mostra 2 em desktop
            1024: { slidesPerView: 3, spaceBetween: 50 }, // Mostra 3 em telas grandes
          }}
        >
          <SwiperSlide>
            <img src="/images/imagem1_feedback.avif" alt="Feedback 1" className="feedback-print" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/imagem2_feedback.avif" alt="Feedback 2" className="feedback-print" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/imagem3_feedback.avif" alt="Feedback 3" className="feedback-print" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/imagem4_feedback.avif" alt="Feedback 4" className="feedback-print" />
          </SwiperSlide>
        </Swiper>
      </div>
      
      {/* Botão para o Instagram */}
      <div style={{ marginTop: '40px' }}>
        <a 
          href="https://www.instagram.com/stories/highlights/18006576025894552/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-instagram"
        >
          Ver mais destaques no Instagram
        </a>
      </div>
    </section>
  );
}

export default Feedbacks;