import { Link } from "react-router-dom"
import React from "react"
import Helmet from "react-helmet"

const Thankyou = () => {
    return (
        <section className="km-3">
            <div>
                <Helmet>
                    <title>Pluto | Thank you!</title>
                </Helmet>
            </div>
            <div className="container">
                <div className="km-3__image">
                    <img src="/image/carousel-delivery.webp" alt="" />
                </div>
                <div className="container ps-5 pe-5 mt-5 text-center">
                    <h2 className="extra-large-text orange-text">CẢM ƠN BẠN ĐÃ ĐẶT HÀNG</h2>

                    <p>Đơn hàng sẽ được giao tới bạn sớm thôi!</p>
                    <p>Hãy chuẩn bị một vài bản nhạc thật chill để thưởng thức món gà rán Pluto ngon tuyệt nhé!!!</p>
                    <Link to="/"><div className="btn btn--red btn--order bold-text mb-5">Quay lại trang chủ</div></Link>

                </div>

            </div>

        </section>
    )
}

export default Thankyou