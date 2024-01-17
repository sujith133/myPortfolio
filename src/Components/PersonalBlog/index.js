import Slider from 'react-slick'
import './index.css'

const PersonalBlog = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }

  return (
    <div className="personalBLog" id="blog">
      <h1>
        <span className="red">P</span>ersonal <span className="red">B</span>log
      </h1>
      <p>
        I am a passionate and skilled photographer with a keen eye for capturing
        moments that tell compelling stories. My photography style is
        characterized by a blend of creativity, technical proficiency, and a
        deep appreciation for the beauty found in everyday life.
      </p>

      <div className="photoContainer">
        <Slider {...settings}>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/34H2N1G/DSC-0562-min.jpg"
              alt="DSC-0562-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/Xy2gxm0/DSC-2490-min.jpg"
              alt="DSC-2490-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/KKZ70sS/DSC-2513-min.jpg"
              alt="DSC-2513-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/JvSvq8T/DSC-2586-min.jpg"
              alt="DSC-2586-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/G9Q7kTC/DSC-2587-min.jpg"
              alt="DSC-2587-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/xYgbfmN/DSC-2589-min.jpg"
              alt="DSC-2589-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/KrSZ06B/IMG-6168-min.jpg"
              alt="IMG-6168-min"
              border="0"
            />
          </div>
          <div className="photoBlog">
            <img
              className="CarouselImages"
              src="https://i.ibb.co/ZMP3zPs/IMG-6178-min.jpg"
              alt="IMG-6178-min"
              border="0"
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}
export default PersonalBlog
