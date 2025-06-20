document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const emptyImg = document.getElementById("empty-img");
  const todosContainer = document.getElementById("todos-container"); // Assuming you have this in HTML
  const progressBar = document.getElementById("progress");
  const progressTextNumbers = document.getElementById("numbers");
  const toggleEmptyImage = () => {
    const tasks = taskList.querySelectorAll("li");
    emptyImg.style.display = tasks.length === 0 ? "block" : "none";
    todosContainer.style.width = taskList.children.length > 0 ? "100%" : "50%";
  };

  const updateProgress = (checkCompletion = true) => {
    const totalTasks = taskList.querySelectorAll("li").length;
    const completedTasks = taskList.querySelectorAll("li.completed").length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    progressBar.style.width = `${progress}%`;
    progressTextNumbers.textContent = `${completedTasks} / ${totalTasks}`;
    if (checkCompletion && completedTasks === totalTasks && totalTasks > 0) {
      Confetti();
    }
  };

  const addTask = (text, completed = false) => {
    const taskText = text || taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement("li");
    li.innerHTML = `
      <label class="custom-checkbox">
        <input type="checkbox" class="checkbox" ${completed ? "checked" : ""}/>
        <span class="checkmark"></span>
        <span>${taskText}</span>
      </label>
      <div class="task-buttons">
        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;

    const checkbox = li.querySelector(".checkbox");
    const editBtn = li.querySelector(".edit-btn");

    if (completed) {
      li.classList.add("completed");
      editBtn.disabled = true;
      checkbox.checked = true;
      editBtn.style.opacity = "0.5";
      editBtn.style.pointerEvents = "none";
    }

    checkbox.addEventListener("change", () => {
      const isChecked = checkbox.checked;
      li.classList.toggle("completed", isChecked);
      editBtn.style.opacity = isChecked ? "0.5" : "1";
      editBtn.style.pointerEvents = isChecked ? "none" : "auto";
      updateProgress();
    });

    editBtn.addEventListener("click", () => {
      if (!checkbox.checked) {
        taskInput.value = li.querySelector("span").textContent;
        li.remove();
        toggleEmptyImage();
        updateProgress(false);
      }
    });

    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
      toggleEmptyImage();
      updateProgress();
    });

    taskList.appendChild(li);
    taskInput.value = "";
    toggleEmptyImage();
    updateProgress(checkCompletion);
  };

  addTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addTask();
  });

  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });

  toggleEmptyImage(); // Initial check
});
const Confetti = () => {
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};
