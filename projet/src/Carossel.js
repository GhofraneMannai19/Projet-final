import './Caro.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
function ControlledCarousel() {
            return (
                <Carousel>
                    
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carossel1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Check out our electronics section</h3>
                        <p className="paragraph">Here you'll find state-of-the-art technology and cool gadgets!</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carossel2.jpg"
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>We have the finest threads!</h3>
                        <p className="paragraph">Don't forget to take a look at our authentic tailored outfit collection.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carossel3.jpg"
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>We even sell school supplies!</h3>
                        <p className="paragraph"> shop for the best variety of school supplies, teaching resources, supplies and more.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="carossel4.jpg"
                        alt="Third slide"
                    />
                
                    <Carousel.Caption>
                        <h3>Save money , Live better.</h3>
                        <p className="paragraph">You won’t find better deals and discounts in any other place! So what are you waiting for? Get shopping!</p>
                    </Carousel.Caption>
                    </Carousel.Item>
              </Carousel>
            );
          }  
export default ControlledCarousel;