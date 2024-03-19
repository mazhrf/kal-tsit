function showNotification() {
    const notification = document.querySelector('.notification');
    notification.style.display = 'block';

    const animatedVideo = document.getElementById('animatedVideo');
    animatedVideo.play();

    notification.addEventListener('mouseenter', function() {
        notification.style.display = 'block';
        animatedVideo.play();
        });

        notification.addEventListener('mouseleave', function() {
            animatedVideo.pause();
            notification.style.display = 'none';
        });

    setTimeout(function() {
        animatedVideo.pause();
        notification.style.display = 'none';
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    showNotification();
});


function checkObjectBehind() {
    var h2 = true;

    var nav = document.getElementById('navbar');


    nav.style.opacity = h2 ? '0.5' : '1';
  }


  window.onload = function() {
    checkObjectBehind();

    window.onscroll = function() {
      checkObjectBehind();
    };
  };