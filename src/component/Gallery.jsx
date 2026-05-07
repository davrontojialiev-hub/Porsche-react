import gallery1 from "../assets/gallery1.png"
import gallery2 from "../assets/gallery2.png"
import gallery3 from "../assets/gallery3.png"
const Gallery = () => {
    return (
        <section className="gallery">
            <div className="container">
                <h2 className="gallery__title">GALLERY</h2>
                <div className="gallery__wrap">
                    <div className="gallery__img">
                        <img src={gallery1} alt="" />
                    </div>
                    <div className="gallery__img">
                        <img src={gallery2} alt="" />
                    </div>
                    <div className="gallery__img">
                        <img src={gallery3} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery