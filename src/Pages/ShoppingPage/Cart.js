import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CartItem from "../../components/Global/CartItem";

const Cart = () => {
    
    return (
        <>
            <Header title="장바구니" showHamburger={true} />
            <div className="flex flex-col items-center justify-center w-full px-3 py-5">
                <h1 className="w-full text-2xl font-semibold">My Cart</h1>
                <div className="flex flex-col items-center justify-center w-full">
                    {/* Product */}
                    {
                        [1, 2, 3, 4].map(()=> (
                            <CartItem />
                        ))
                    }
                </div>

                <h6 className="w-full mt-5 text-[14px] font-[400]">4 개의 상품</h6>

                {/* Checkout Details */}
                <div className="w-full mt-4">
                    <div className="flex flex-col items-center justify-center mb-6 w-full gap-2">
                        <div className="flex justify-between w-full items-start">
                            <p className="text-[#afaeac]">상품 가격</p>
                            <p>199,600 원</p>
                        </div>
                        <div className="flex justify-between w-full items-end">
                            <p className="text-[#afaeac]">할인금액</p>
                            <p>3,000 원</p>
                        </div>
                        <div className="flex justify-between w-full items-end border-b pb-3">
                            <p className="text-[#afaeac]">배송비</p>
                            <p>0 원</p>
                        </div>
                        <div className="flex justify-between w-full items-end pt-3">
                            <p className="text-[16px] font-[400]">Total</p>
                            <p className="text-[20px] font-[600]">196,600원</p>
                        </div>
                    </div>

                    <Link to="/shopping/confirm-payment">
                        <button className="w-full bg-[#FED52A] py-3 px-3 bottom-1 rounded-[50px] font-[600] text-[18px]">
                            결 제
                        </button>
                    </Link>
                </div>
            </div>
            <Footer address="shopping" />
        </>
    );
};

export default Cart;
