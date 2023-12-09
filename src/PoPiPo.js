import './PoPiPo.css';

function PoPiPo({ srcImage, heading, content, stats }) {
    return (
        <div className="popipo_wrapper">
            <img className="popipo_image" src={srcImage} />
            <h3 className="popipo_heading">{heading}</h3>
            <p className="popipo_content">{content}</p>
            <p className="popipo_stats">{stats}</p>
        </div>
    );
}

export default PoPiPo