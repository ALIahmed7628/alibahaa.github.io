function handleSocialClick(platform) {
    addRippleEffect();
    
    switch (platform) {
        case 'instagram':
            const instagramUrl = 'instagram://user?username=3li._bahaa';
            const instagramWeb = 'https://instagram.com/3li._bahaa';
            
            window.location.href = instagramUrl;
            setTimeout(() => {
                window.open(instagramWeb, '_blank');
            }, 500);
            break;
            
        case 'tiktok':
            const tiktokUrl = 'tiktok://user/@a._li_.q';
            const tiktokWeb = 'https://tiktok.com/@a._li_.q';
            
            window.location.href = tiktokUrl;
            setTimeout(() => {
                window.open(tiktokWeb, '_blank');
            }, 500);
            break;
            
        case 'discord':
            const discordUrl = 'discord://users/_od._in';
            const discordWeb = 'https://discord.com/users/_od._in';
            
            window.location.href = discordUrl;
            setTimeout(() => {
                window.open(discordWeb, '_blank');
            }, 500);
            break;
    }
}

function addRippleEffect() {
    const body = document.body;
    body.style.transform = 'scale(0.98)';
    setTimeout(() => {
        body.style.transform = 'scale(1)';
    }, 100);
    
    createSparkles();
}

function createSparkles() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.background = '#60a5fa';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '9999';
            sparkle.style.left = Math.random() * window.innerWidth + 'px';
            sparkle.style.top = Math.random() * window.innerHeight + 'px';
            sparkle.style.animation = 'sparkle 1s ease-out forwards';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        }, i * 100);
    }
}

const style = document.createElement('style');
style.textContent = `
    body {
        transition: transform 0.1s ease;
    }
    
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', function() {
    const mainCard = document.querySelector('.card');
    if (mainCard) {
        mainCard.style.opacity = '0';
        mainCard.style.transform = 'translateY(20px)';
        mainCard.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            mainCard.style.opacity = '1';
            mainCard.style.transform = 'translateY(0)';
        }, 100);
    }
    
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'translateY(10px)';
        badge.style.transition = 'all 0.4s ease';
        
        setTimeout(() => {
            badge.style.opacity = '1';
            badge.style.transform = 'translateY(0)';
        }, 800 + (index * 100));
    });
    
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    console.log('Ali Bahaa\'s website loaded successfully! 🌟');
});
