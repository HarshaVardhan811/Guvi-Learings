
const startCountdown = () => {
    countdown(10, function () {
      countdown(9, function () {
        countdown(8, function () {
          countdown(7, function () {
            countdown(6, function () {
              countdown(5, function () {
                countdown(4, function () {
                  countdown(3, function () {
                    countdown(2, function () {
                      countdown(1, function () {
                        displayMessage("Happy Independence Day");
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  };
  
  const countdown = (num, callback) => {
    setTimeout(function () {
      displayMessage(num);
      callback();
    }, 1000);
  };
  
  const displayMessage = (message) => {
    const display = document.getElementById("display");
    display.innerHTML = message;
  };
  
  startCountdown();