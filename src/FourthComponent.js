import PoPiPo from "./PoPiPo";
import './FourthComponent.css';
import CreateButton from "./CreateButton";

function FourthComponent({ onClick }) {
    return (
        <div id="form" className="fourth_component_wrapper">
            <h2 className="fourth_component_heading">
                Câu chuyện thành công
            </h2>
            <div className="fourth_component_flex">
                <PoPiPo 
                    srcImage="/anh1.jpg" 
                    heading="Slate and Tell"
                    content="Thương hiệu trang sức mang đến cho khách hàng cơ hội thể hiện chất riêng qua từng món phụ kiện tiếp cận được hơn 4 TRIỆU người dùng TikTok."
                    stats={<>ROAS* tăng <span className="cyan">x2</span><br></br>Đạt <span className="cyan">1.000</span> lượt thêm vào giỏ hàng</>}
                />
                <PoPiPo
                    srcImage="/anh2.jpg"
                    heading="Princess Polly"
                    content="Nhà bán lẻ thời trang trực tuyến được ưa chuộng ở Úc đã thu về thắng lợi rực rỡ sau một chiến dịch và đạt được hơn 9 TRIỆU lần hiển thị."
                    stats={<>ROAS* tăng <span className="cyan">x15</span><br></br>Tỷ lệ nhấp chuột tăng <span className="cyan">1.05%</span></>} 
                />
                <PoPiPo
                    srcImage="/anh3.jpg"
                    heading="Playrix"
                    content="Nhà phát triển quốc tế về các ứng dụng game di động miễn phí có số lượng người chơi tăng 87% chỉ trong vòng 3 ngày."
                    stats={<>ROAS* tăng <span className="cyan">133%</span> <br></br> Chi phí trên mỗi lần mua đồ trong game giảm <span className="cyan">27%</span></>}
                />
            </div>
            <CreateButton onClick={onClick} />
        </div>
    )
}

export default FourthComponent;