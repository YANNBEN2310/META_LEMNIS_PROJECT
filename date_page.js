const swipeCanvas = document.getElementById('swipeCanvas');
const userProfiles = document.querySelectorAll('.userProfile');
const reactionButtons = document.querySelectorAll('.reactionButton');

let startX, startY, currentX, currentY;

swipeCanvas.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

swipeCanvas.addEventListener('touchmove', (e) => {
    currentX = e.touches[0].clientX;
    currentY = e.touches[0].clientY;

    userProfiles.forEach((profile) => {
        profile.style.transform = `translate3d(${currentX - startX}px, ${currentY - startY}px, 0)`;
    });
});

swipeCanvas.addEventListener('touchend', (e) => {
    const distanceX = currentX - startX;
    const distanceY = currentY - startY;
    const threshold = 100;

    if (Math.abs(distanceX) > threshold || Math.abs(distanceY) > threshold) {
        const direction = distanceX > 0 ? 'right' : (distanceX < 0 ? 'left' : (distanceY < 0 ? 'top' : null));
        userProfiles.forEach((profile) => {
            profile.classList.add(`swipe-${direction}`);
            setTimeout(() => {
                profile.style.transform = 'translate3d(0, 0, 0)';
                profile.classList.remove(`swipe-${direction}`);
            }, 400);
        });
    }
});

reactionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const direction = e.target.dataset.direction;
        userProfiles.forEach((profile) => {
            profile.classList.add(`swipe-${direction}`);
            setTimeout(() => {
                profile.style.transform = 'translate3d(0, 0, 0)';
                profile.classList.remove(`swipe-${direction}`);
            }, 400);
        });
    });
});

let currentProfileIndex = 0;
const userProfileCount = userProfiles.length;

function showProfile(index) {
  userProfiles.forEach((profile, i) => {
    profile.style.display = i === index ? 'flex' : 'none';
  });
}

document.querySelectorAll('.reactionButton[data-direction="right"]').forEach((button) => {
  button.addEventListener('click', () => {
    currentProfileIndex = (currentProfileIndex + 1) % userProfileCount;
    showProfile(currentProfileIndex);
  });
});

// Show the initial profile
showProfile(currentProfileIndex);
