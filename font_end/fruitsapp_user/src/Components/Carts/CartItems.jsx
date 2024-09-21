import React from 'react';

const CartItems = ({ cartItems, handleQuantityChange, handleRemoveItem, calculateSubtotal }) => {
    return (
        <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Thông tin giỏ hàng</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="text-left">
                        <th className="px-4 py-2">Sản phẩm</th>
                        <th className="px-4 py-2">Giá</th>
                        <th className="px-4 py-2">Số lượng</th>
                        <th className="px-4 py-2">Tổng</th>
                        <th className="px-4 py-2">Sửa</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id} className="border-b">
                            <td className="px-4 py-2 flex items-center">
                                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg mr-4" />
                                <span>{item.name}</span>
                            </td>
                            <td className="px-4 py-2">{item.price.toLocaleString()}₫</td>
                            <td className="px-4 py-2 flex items-center">
                                <button onClick={() => handleQuantityChange(item.id, -1)} className="px-2 border">-</button>
                                <input type="text" value={item.quantity} readOnly className="w-12 text-center border mx-2" />
                                <button onClick={() => handleQuantityChange(item.id, 1)} className="px-2 border">+</button>
                            </td>
                            <td className="px-4 py-2">{(item.price * item.quantity).toLocaleString()}₫</td>
                            <td className="px-4 py-2">
                                <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4">
                <p className="text-lg font-semibold">Tổng cộng: {calculateSubtotal().toLocaleString()}₫</p>
            </div>
        </div>
    );
};

export default CartItems;
