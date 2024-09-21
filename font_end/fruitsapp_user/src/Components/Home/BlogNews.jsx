import React from 'react';

const BlogNews=()=> {
  return (
    <div className="blog-news bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Tin tức & Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">Cách bảo quản trái cây tươi lâu</h3>
            <p className="text-lg">Tìm hiểu cách bảo quản trái cây để giữ được độ tươi ngon lâu hơn.</p>
          </div>
          <div className="bg-white p-4 shadow-lg">
            <h3 className="text-2xl font-semibold">Lợi ích sức khỏe của trái cây</h3>
            <p className="text-lg">Khám phá các lợi ích của việc ăn trái cây đối với sức khỏe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogNews;
