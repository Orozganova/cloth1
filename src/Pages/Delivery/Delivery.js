import './Delivery.css';
import Title from '../../Components/Title/Title';
import video from '../../img/video.mp4'

function Delivery() {
  return (
    <section className="Delivery">
      <div className="container">
        <Title>Delivery</Title>
        <div className="Delivery_video">
        <video width="100%" height="auto" controls autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
        </div>
        <div className="Delivery_txt">
          <p></p>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default Delivery;