// Добавляем интерактивность к кнопкам
const buttons = document.querySelectorAll('.custom-btn');
const messageElement = document.getElementById('message');

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const buttonText = button.querySelector('span').textContent;
        messageElement.textContent = `Ты нажал на кнопку "${buttonText}"!`;
        
        // Добавляем эффект пульса
        button.style.animation = 'pulse 0.6s ease-out';
        
        setTimeout(() => {
            button.style.animation = '';
        }, 600);
    });
});

// Анимация пульса
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
        50% {
            box-shadow: 0 15px 50px rgba(102, 126, 234, 0.8);
        }
        100% {
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }
    }
`;
document.head.appendChild(style);
