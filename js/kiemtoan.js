
function showContent(contentId) {
    // Ẩn tất cả các phần tử nội dung
    const contents = document.querySelectorAll('.content-item');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Bỏ lớp "active" khỏi tất cả các mục sidebar
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    // Hiển thị nội dung được chọn và thêm lớp "active" vào mục sidebar
    document.getElementById(contentId).style.display = 'block';
    document.querySelector(`.sidebar-item[onclick="showContent('${contentId}')"]`).classList.add('active');
}

// Mặc định hiển thị phần giới thiệu khi trang tải
document.addEventListener('DOMContentLoaded', () => {
    showContent('gioi-thieu');
});