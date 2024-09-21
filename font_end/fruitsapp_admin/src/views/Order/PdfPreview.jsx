import React, { useEffect } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import robotoFont from './Roboto-Regular-normal'; 

import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation và useNavigate

const PdfPreview = () => {
    const location = useLocation(); // Sử dụng useLocation để lấy state
    const navigate = useNavigate();
    
    const { orders } = location.state || {}; // Lấy orders từ state

    useEffect(() => {
        if (orders && orders.length > 0) {
            const doc = new jsPDF();
            
            // Thêm font Roboto
            doc.addFileToVFS('Roboto-Regular.ttf', robotoFont);
            doc.addFont('Roboto-Regular.ttf', 'Roboto', 'normal');
            doc.setFont('Roboto'); // Sử dụng font Roboto cho toàn bộ văn bản

            // Cấu hình cột và nội dung bảng
            const tableColumn = [
                { header: "Mã Đơn Hàng", dataKey: "id" },
                { header: "Tên Khách Hàng", dataKey: "customerName" },
                { header: "Ngày Đặt Hàng", dataKey: "orderDate" },
                { header: "Số Lượng Sản Phẩm", dataKey: "totalItems" },
                { header: "Tổng Giá Trị", dataKey: "totalPrice" },
                { header: "Trạng Thái", dataKey: "status" }
            ];

            const tableRows = orders.map(order => ({
                id: order.id,
                customerName: order.customerName,
                orderDate: order.orderDate,
                totalItems: order.totalItems,
                totalPrice: order.totalPrice,
                status: order.status
            }));

            // Render bảng với font tùy chỉnh và căn chỉnh lại cột
            doc.autoTable({
                head: [tableColumn.map(col => col.header)],
                body: tableRows.map(row => tableColumn.map(col => row[col.dataKey])),
                startY: 30, // Đặt vị trí bắt đầu của bảng
                styles: { font: 'Roboto', fontSize: 10 }, // Áp dụng font Roboto cho bảng
                columnStyles: {
                    0: { cellWidth: 20 },  // Mã Đơn Hàng
                    1: { cellWidth: 40 },  // Tên Khách Hàng
                    2: { cellWidth: 30 },  // Ngày Đặt Hàng
                    3: { cellWidth: 25 },  // Số Lượng Sản Phẩm
                    4: { cellWidth: 30 },  // Tổng Giá Trị
                    5: { cellWidth: 30 }   // Trạng Thái
                }
            });

            // Thêm tiêu đề PDF
            doc.text("Báo cáo đơn hàng", 14, 15);

            // Chuyển PDF thành URL để xem trước
            const pdfUrl = doc.output('bloburl');
            const iframe = document.querySelector('#pdfFrame');
            iframe.src = pdfUrl;
        } else {
            console.error("Không có dữ liệu đơn hàng.");
        }
    }, [orders]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Xem trước PDF</h1>
            <iframe id="pdfFrame" width="100%" height="600px" title="PDF Preview"></iframe>
            <button
                onClick={() => navigate(-1)} // Quay lại trang trước đó
                className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
                Quay lại
            </button>
        </div>
    );
};

export default PdfPreview;
