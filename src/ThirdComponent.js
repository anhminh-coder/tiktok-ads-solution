import './ThirdComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CreateButton from './CreateButton';

function ThirdComponent() {
    return (
        <div className="third_component">
            <h2 className="third_component_heading">
                Thế mạnh để chúng tôi giúp bạn đạt mục tiêu quảng cáo
            </h2>
            <div className="third_component_flex">
                <div className="third_component_list">
                    <h1 className="third_component_list_heading adventages">
                        TikTok Ads Manager
                    </h1>
                    <ul className='third_component_list_menu'>
                        <li className='third_component_list_item'>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                            Tiếp cận đông đảo người dùng</li>
                        <li className='third_component_list_item'>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                            Nhằm đối tượng chuẩn xác</li>
                        <li className='third_component_list_item'>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                            Kết quả đi kèm hiệu quả</li>
                        <li className='third_component_list_item'>
                            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                            Phân phối quảng cáo tự động</li>
                    </ul>
                </div>
                <div className='third_component_center'>
                    <span className='third_component_center_text'>vs</span>
                    <div className='third_component_center_line'></div>
                </div>
                <div className="third_component_list">
                    <h1 className="third_component_list_heading">
                        Nền tảng quảng cáo khác
                    </h1>
                    <ul className='third_component_list_menu'>
                        <li className='third_component_list_item'><FontAwesomeIcon icon={faCircleXmark} style={{ color: "#4f4f4f", paddingRight: "10px" }} />Phạm vi tiếp cận hạn chế</li>
                        <li className='third_component_list_item'><FontAwesomeIcon icon={faCircleXmark} style={{ color: "#4f4f4f", paddingRight: "10px" }} />Nhắm đối tượng ngẫu nhiên</li>
                        <li className='third_component_list_item'><FontAwesomeIcon icon={faCircleXmark} style={{ color: "#4f4f4f", paddingRight: "10px" }} />Hiệu quả bấp bênh</li>
                        <li className='third_component_list_item'><FontAwesomeIcon icon={faCircleXmark} style={{ color: "#4f4f4f", paddingRight: "10px" }} />Tốn nhiều thời gian</li>
                    </ul>
                </div>
            </div>
            <div className='third_component_button'>
                <CreateButton />
            </div>
        </div>
    )
}

export default ThirdComponent;