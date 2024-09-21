import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

const CartDetail = () => {
    const [cartItem, setCartItem] = useState([
        { id: 1, name: 'Táo nhập khẩu', price: 70000, quantity: 1, image: 'link-to-image' }
    ]);

    // Phí giao hàng (ví dụ: 50,000₫)
    const shippingFee = 50000;

    // Tính tổng tiền giỏ hàng (không bao gồm phí ship)
    const calculateSubtotal = () => {
        return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Tính tổng tiền giỏ hàng bao gồm phí ship
    const calculateTotal = () => {
        return calculateSubtotal() + shippingFee;
    };

    // Hàm thay đổi số lượng sản phẩm
    const handleQuantityChange = (id, delta) => {
        setCartItem(cartItem.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + delta > 0 ? item.quantity + delta : 1 } : item
        ));
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const handleRemoveItem = (id) => {
        setCartItem(cartItem.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Chi tiết giỏ hàng</h1>
            {cartItem.length === 0 ? (
                <p className="text-gray-600">Giỏ hàng của bạn đang trống.</p>
            ) : (
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Danh sách sản phẩm */}
                    <div className="flex-1">
                        <CartItems
                            cartItems={cartItem}
                            handleQuantityChange={handleQuantityChange}
                            handleRemoveItem={handleRemoveItem}
                            calculateSubtotal={calculateSubtotal}
                        />
                        {/* Nút tiếp tục mua hàng và cập nhật giỏ hàng */}
                        <div className="flex justify-between mt-4">
                            <Link to="/product-index" className="text-green-500 border border-green-500 px-4 py-2 rounded-lg hover:bg-green-100">
                                ← Tiếp tục xem sản phẩm
                            </Link>
                        </div>
                    </div>

                    {/* Phần tổng tiền */}
                    <div className="w-full lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Tổng số lượng</h2>
                        <div className="flex justify-between mb-2">
                            <p>Tổng phụ:</p>
                            <p>{calculateSubtotal().toLocaleString()}₫</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Phí giao hàng:</p>
                            <p>{shippingFee.toLocaleString()}₫</p>
                        </div>
                        <div className="flex justify-between mb-2">
                            <p>Tổng cộng:</p>
                            <p>{calculateTotal().toLocaleString()}₫</p>
                        </div>
                        <Link to="/check-out">
                            <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
                                Tiến hành thanh toán
                            </button>
                        </Link>
                        <div className="mt-4">
                            <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                                Phiếu ưu đãi
                            </button>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    placeholder="Mã ưu đãi"
                                    className="w-full p-2 border rounded-lg"
                                />
                                <button className="w-full bg-gray-300 text-black py-2 mt-2 rounded-lg hover:bg-gray-400">
                                    Áp dụng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartDetail;
