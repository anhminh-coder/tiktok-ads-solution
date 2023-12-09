import FourthComponent from "./FourthComponent";
import PoPiPo from "./PoPiPo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import RegisterForm from "./RegisterForm";
import Slider from "./Slider";
import ThirdComponent from "./ThirdComponent";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="wrapper">
      <Slider
        onClick={handleClick} 
        hasIcon={true} 
        heading="Bạn đã trải nghiệm quảng cáo trên TikTok Ads Solution?" 
        content={<>Tiếp cận khách hàng mới và quảng cáo thành công cùng TikTok Ads Solution. Đăng ký và nâng tầm chiến dịch ngay hôm nay!</>}
        img={<img src="//p16-tt4b-cms-va.ibyteimg.com/tos-maliva-i-wnrj55q040-us/1bcc3777efa8e3b7b897e9ebd05ca130-leadads-gif~tplv-o1lobgzm8y-gif-75:650:650.awebp"
          alt="Hero-Banner-Growth"
          data-src="//p16-tt4b-cms-va.ibyteimg.com/tos-maliva-i-wnrj55q040-us/1bcc3777efa8e3b7b897e9ebd05ca130-leadads-gif~tplv-o1lobgzm8y-gif-75:650:650.awebp"
          url="useImageX//images.ctfassets.net/tipdilz7wysq/1G3jXk0m2KjIkHZYMkIs6F/1bcc3777efa8e3b7b897e9ebd05ca130/leadads-gif.gif"
          muted="muted"
          autoPlay="autoplay"
          title="Hero-Banner-Growth"
          contenttype="image/gif"
          nolazyload="true"
          size="690970"
          description="{ &quot;noLazyLoad&quot;: true } "
          filename="leadads-gif.gif"
          className="h-auto block align-middle max-w-full mt-16 md:mt-0 min-h-[20rem] w-full object-contain tt4b-start-heading__main_image md:max-h-[37rem]"
        >
        </img>}  
      />
      <RegisterForm ref={ref} />
      <ThirdComponent />
      <FourthComponent onClick={handleClick} />
      <Slider 
        onClick={handleClick} 
        hasIcon={false} 
        heading="Tạo quảng cáo chỉ trong vài phút." 
        content={
          <>
            <ul className='third_component_list_menu'>
              <li className='third_component_list_item'>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                Chọn mục tiêu phù hợp</li>
              <li className='third_component_list_item'>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                Thiết lập ngân sách, chọn khách hàng mục tiêu và chiến lược đấu thầu</li>
              <li className='third_component_list_item'>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                Tải lên video hoặc hình ảnh, thêm nội dung thật chất và kêu gọi hành động</li>
              <li className='third_component_list_item'>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#fe2c55", paddingRight: "10px" }} />
                Gửi đi!</li>
            </ul>
          </>
        }
        img={<img src="//p16-tt4b-cms-va.ibyteimg.com/tos-maliva-i-wnrj55q040-us/fef4adccfafe7290e88279d8fec6186e-unnamed~tplv-o1lobgzm8y-webp-75:479:270.webp" alt="unnamed" data-src="//p16-tt4b-cms-va.ibyteimg.com/tos-maliva-i-wnrj55q040-us/fef4adccfafe7290e88279d8fec6186e-unnamed~tplv-o1lobgzm8y-webp-75:479:270.webp" url="useImageX//images.ctfassets.net/tipdilz7wysq/01B5aSiyeQkYNKi5SrXb3W/fef4adccfafe7290e88279d8fec6186e/unnamed.png" muted="muted" autoplay="autoplay" title="unnamed" contenttype="image/png" width="479" height="270" size="25547" description="" filename="unnamed.png" class="h-auto block align-middle max-w-full mt-16 md:mt-0 min-h-[20rem] w-full object-contain lozad tt4b-start-heading__main_image md:max-h-[37rem]" data-loaded="true" style={{width: "100%", maxHeight:"400px", objectFit:"contain"}}></img>} />
    </div>
  )
}

export default App;