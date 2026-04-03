document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    const heartsContainer = document.querySelector('.hearts-container');
    const heartColors = ['#ff6b9d', '#c779d0', '#ff9a9e', '#fad0c4', '#a18cd1'];
    
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        
        heartsContainer.appendChild(heart);
        
        // Animate heart
        animateHeart(heart);
    }
    
    function animateHeart(heart) {
        let posX = parseFloat(heart.style.left);
        let posY = parseFloat(heart.style.top);
        let speedX = (Math.random() - 0.5) * 0.5;
        let speedY = -Math.random() * 0.5 - 0.2;
        
        function moveHeart() {
            posX += speedX;
            posY += speedY;
            
            // Reset if heart goes out of screen
            if (posY < -50) {
                posY = 100;
                posX = Math.random() * 100;
            }
            
            heart.style.left = posX + 'vw';
            heart.style.top = posY + 'vh';
            
            requestAnimationFrame(moveHeart);
        }
        
        moveHeart();
    }
    
    // Add click effect for hearts
    document.addEventListener('click', function(e) {
        for (let i = 0; i < 5; i++) {
            createClickHeart(e.clientX, e.clientY);
        }
    });
    
    function createClickHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = '25px';
        heart.style.color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transform = 'translateY(-100px) scale(0.5)';
            heart.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});