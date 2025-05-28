document.addEventListener('DOMContentLoaded', function() {
    // Инициализация AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Получаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const category = urlParams.get('category');
    const title = urlParams.get('title');

    // Данные о статьях
    const blogPosts = {
        1: {
            title: 'История граффити: от древних времен до наших дней',
            author: 'Admin',
            date: '15 июня 2025',
            category: 'history',
            image: 'img/blog1.jpg',
            content: `
                <img src="img/blog1.jpg" class="img-fluid mb-4" alt="История граффити">
                <div class="post-meta mb-4">
                    <span class="me-3"><i class="fas fa-user me-2"></i>Admin</span>
                    <span class="me-3"><i class="fas fa-calendar me-2"></i>15 июня 2025</span>
                    <span><i class="fas fa-tag me-2"></i>История</span>
                </div>
                <h1 class="mb-4">История граффити: от древних времен до наших дней</h1>
                <p>Граффити как форма самовыражения существует уже тысячи лет. От наскальных рисунков до современного стрит-арта, люди всегда стремились оставить свой след на стенах и других поверхностях.</p>
                <h2>Древние истоки</h2>
                <p>Первые примеры граффити можно найти в пещерных рисунках, датируемых более 30,000 лет назад. Эти древние художники использовали природные пигменты для создания изображений животных, сцен охоты и повседневной жизни.</p>
                <h2>Современная эра</h2>
                <p>Современное граффити начало формироваться в 1960-х годах в Филадельфии, когда подростки начали писать свои имена на стенах. К 1970-м годам эта практика распространилась в Нью-Йорке, где она эволюционировала в более сложные стили.</p>
                <h2>Развитие стилей</h2>
                <p>С течением времени граффити превратилось из простых тегов в сложное искусство, включающее различные стили: от bubble letters до wildstyle, от throw-ups до масштабных муралов.</p>
                <h2>Современность</h2>
                <p>Сегодня граффити признано законной формой искусства, и многие художники получают заказы на оформление общественных пространств. Появились новые техники и материалы, а цифровые технологии открыли новые возможности для творчества.</p>
            `
        },
        // Добавьте другие статьи здесь
    };

    // Отображаем содержимое статьи
    function displayPost(postId) {
        const post = blogPosts[postId];
        if (post) {
            document.getElementById('postContent').innerHTML = post.content;
            document.title = `${post.title} — GraffZone`;
        } else {
            document.getElementById('postContent').innerHTML = '<div class="alert alert-danger">Статья не найдена</div>';
        }
    }

    // Если есть ID статьи, отображаем её
    if (postId) {
        displayPost(postId);
    }

    // Обработка навигации между статьями
    const prevPost = document.querySelector('.prev-post');
    const nextPost = document.querySelector('.next-post');

    if (postId) {
        const currentId = parseInt(postId);
        
        // Предыдущая статья
        if (currentId > 1) {
            prevPost.href = `blog-post.html?id=${currentId - 1}`;
        } else {
            prevPost.style.display = 'none';
        }
        
        // Следующая статья
        if (blogPosts[currentId + 1]) {
            nextPost.href = `blog-post.html?id=${currentId + 1}`;
        } else {
            nextPost.style.display = 'none';
        }
    }

    // Обработка отправки комментария
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('commentName').value;
            const email = document.getElementById('commentEmail').value;
            const text = document.getElementById('commentText').value;

            // Здесь можно добавить логику отправки комментария на сервер
            
            // Временно: добавляем комментарий на страницу
            const commentsList = document.querySelector('.comments-list');
            const newComment = document.createElement('div');
            newComment.className = 'comment mb-4';
            newComment.innerHTML = `
                <div class="comment-header">
                    <strong>${name}</strong>
                    <small class="text-muted ms-2">Только что</small>
                </div>
                <div class="comment-body mt-2">
                    ${text}
                </div>
            `;
            commentsList.appendChild(newComment);

            // Очищаем форму
            commentForm.reset();
        });
    }
}); 