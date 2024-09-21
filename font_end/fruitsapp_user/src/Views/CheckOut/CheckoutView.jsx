
import CartItems from 'Components/Carts/CartItems';
import PaymentInfo from 'Components/Checkout/PaymentInfo';
import ShippingInfo from 'Components/Checkout/ShippingInfo';
import React, { useState } from 'react';
const CheckoutView = () => {
    const [cartItem, setCartItem] = useState([
        { id: 1, name: 'Cây cảnh nhỏ', price: 150000, quantity: 2, image: 'link-to-image' },
        { id: 2, name: 'Cây cảnh lớn', price: 250000, quantity: 1, image: 'link-to-image' }
    ]);

    const [shippingInfo, setShippingInfo] = useState({
        name: '',
        address: '',
        city: '',
        phone: '',
        note: '',
        shippingMethod: 'standard'
    });

    const [paymentMethod, setPaymentMethod] = useState('COD');
    const [agreeTerms, setAgreeTerms] = useState(false);

    const shippingFee = shippingInfo.shippingMethod === 'express' ? 50000 : 30000;
    const taxRate = 0.1;

    // Tính tổng giá trị đơn hàng chưa có thuế và phí vận chuyển
    const calculateSubtotal = () => {
        return cartItem.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    // Tính thuế
    const calculateTax = () => {
        return calculateSubtotal() * taxRate;
    };

    // Tính tổng tiền thanh toán (bao gồm thuế và phí vận chuyển)
    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax() + shippingFee;
    };

    const handleQuantityChange = (id, delta) => {
        setCartItem(cartItem.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + delta > 0 ? item.quantity + delta : 1 } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItem(cartItem.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Thanh toán</h1>
            <div className="flex flex-col lg:flex-row gap-6">

                 {/* Thông tin giao hàng */}
                 <ShippingInfo
                    shippingInfo={shippingInfo}
                    setShippingInfo={setShippingInfo}
                />
                {/* Thông tin giỏ hàng */}
                <CartItems
                    cartItems={cartItem}
                    handleQuantityChange={handleQuantityChange}
                    handleRemoveItem={handleRemoveItem}
                    calculateSubtotal={calculateSubtotal}
                />

               
            </div>

            {/* Thông tin thanh toán */}
            <PaymentInfo
                calculateSubtotal={calculateSubtotal}
                calculateTotal={calculateTotal}
                shippingFee={shippingFee}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                agreeTerms={agreeTerms}
                setAgreeTerms={setAgreeTerms}
            />
        </div>
    );
};

export default CheckoutView;



