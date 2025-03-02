const date = new Date()
document.getElementById("current-date").innerText = date.toDateString()

const cards = document.getElementsByClassName("card");
for (let card of cards) {
    card.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            e.target.disabled = true

            alert("Board updated successfully")

            let taskCount = parseInt(document.getElementById('task-count').innerText);
            document.getElementById('task-count').innerText = taskCount - 1;

            if (taskCount === 1){
                alert("Congrats!!! You have completed all the current tasks")
                console.log(1000)
            }

            const history = document.getElementById("history-section");
            const time = new Date().toLocaleTimeString();
            const title = e.target.parentNode.parentNode.children[1].innerText;

            const p = document.createElement('p');

            p.innerHTML = `
                    <p class="bg-gray-100 px-4 py-2 rounded-xl">You have completed the task ${title} at ${time}
                `
            history.appendChild(p);

            const completedTasks = parseInt(document.getElementById("completed-task").innerText);
            document.getElementById("completed-task").innerText = completedTasks + 1;
        }
    })
}

document.getElementById("clear-btn").addEventListener("click", function(e){
    const history = document.getElementById("history-section");
    history.innerText = ''
})

document.getElementById("rainbow-btn").addEventListener("click", function(e){
    const rgb1 = parseInt(Math.random() * 255);
    const rgb2 = parseInt(Math.random() * 255);
    const rgb3 = parseInt(Math.random() * 255);

    const rgb = `rgba(${rgb1}, ${rgb2}, ${rgb3})`

    document.getElementById("body").style.backgroundColor = rgb
})

document.getElementById("discover-stat").addEventListener("click", function(e){
    window.location.href = '../blog.html'
})

