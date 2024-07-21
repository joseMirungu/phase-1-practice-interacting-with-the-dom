let counter = 0;
let timerInterval;

document.addEventListener("DOMContentLoaded", () => {
    const counterElement = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const heartButton = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
    const pauseButton = document.getElementById("pause");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("list");
    const buttons = document.querySelectorAll("button");

    timerInterval = setInterval(() => {
        counter++;
        counterElement.innerText = counter;
    }, 1000);

    plusButton.addEventListener("click", () => {
        counter++;
        counterElement.innerText = counter;
    });

    minusButton.addEventListener("click", () => {
        counter--;
        counterElement.innerText = counter;
    });

    heartButton.addEventListener("click", () => {
        const currentNumber = counter;
        let existingLike = document.getElementById(`like-${currentNumber}`);
        
        if (existingLike) {
            let likeCount = parseInt(existingLike.dataset.likes) + 1;
            existingLike.dataset.likes = likeCount;
            existingLike.innerText = `${currentNumber} has been liked ${likeCount} times`;
        } else {
            let likeItem = document.createElement("li");
            likeItem.id = `like-${currentNumber}`;
            likeItem.dataset.likes = 1;
            likeItem.innerText = `${currentNumber} has been liked 1 time`;
            likesList.appendChild(likeItem);
        }
    });

    pauseButton.addEventListener("click", () => {
        if (pauseButton.innerText === "pause") {
            clearInterval(timerInterval);
            buttons.forEach(button => {
                if (button.id !== "pause") {
                    button.disabled = true;
                }
            });
            pauseButton.innerText = "resume";
        } else {
            timerInterval = setInterval(() => {
                counter++;
                counterElement.innerText = counter;
            }, 1000);
            buttons.forEach(button => button.disabled = false);
            pauseButton.innerText = "pause";
        }
    });

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const comment = commentInput.value;
        const commentElement = document.createElement("p");
        commentElement.innerText = comment;
        commentList.appendChild(commentElement);
        commentForm.reset();
    });
});
