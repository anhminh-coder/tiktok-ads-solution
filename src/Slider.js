import CreateButton from './CreateButton';
import './Slider.css';

function Slider({ onClick, hasIcon, heading, content, img }) {
    return (
        <div className="slider">
            <div className="slider_content">
                {hasIcon ? <img src="https://p16-tt4b-cms-va.ibyteimg.com/tos-maliva-i-wnrj55q040-us/tt4b_logo_white.svg~tplv-wnrj55q040-image.image"
                    data-src="https://p16-tt4b-cms-va.ibyteimg.com/tos-maliva-i-wnrj55q040-us/tt4b_logo_white.svg~tplv-wnrj55q040-image.image"
                    muted="muted"
                    autoPlay="autoplay"
                    title=""
                    width="200"
                    class="h-auto block align-middle max-w-full h-[1.3rem] mb-[5.4rem] md:mb-[1.9rem] lozad tt4b-start-heading__logo-mobile-opt"
                    data-loaded="true">
                </img> : <></>}
                <h2 className="slider_heading_text">
                    {heading}
                </h2>
                <p className="slider_slogan_text">
                    {content}
                </p>
                <CreateButton onClick={onClick} />
            </div>
            <div className="slider_image">
                {img}
            </div>
        </div>
    )
}       

export default Slider;