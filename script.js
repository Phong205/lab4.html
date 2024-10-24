// Thêm sự kiện click cho các liên kết trong thanh điều hướng
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        const linkText = link.textContent;
        alert(`You clicked on: ${linkText}`); // Hiển thị thông báo cho người dùng
    });
});

// Thêm sự kiện click cho các liên kết hoạt động
const activityLink = document.querySelector('.activity-link');

if (activityLink) {
    activityLink.addEventListener('click', (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        alert("Here you can see all your activities!"); // Hiển thị thông báo cho người dùng
    });
};

// Thêm sự kiện click cho các mục khóa học
const courseItems = document.querySelectorAll('.course-item');

courseItems.forEach(item => {
    item.addEventListener('click', () => {
        const courseTitle = item.querySelector('h3').textContent;
        alert(`You selected the course: ${courseTitle}`); // Hiển thị thông báo cho người dùng
    });
});

// Thêm sự kiện click cho các mục gợi ý
const recommendationItems = document.querySelectorAll('.recommendation-item');

recommendationItems.forEach(item => {
    item.addEventListener('click', () => {
        const recommendationTitle = item.querySelector('h3').textContent;
        alert(`You recommended course: ${recommendationTitle}`); // Hiển thị thông báo cho người dùng
    });
});
