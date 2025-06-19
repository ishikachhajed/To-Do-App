const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipes-container");

// Show default message on load
window.addEventListener("DOMContentLoaded", () => {
  recipeContainer.innerHTML = `<h2 class="message">Search Your Favorite Recipes</h2>`;
});

// Fetch and display recipes
const fetchRecipes = async (searchQuery) => {
  recipeContainer.innerHTML = `<h2 class="message">Fetching Recipes...</h2>`;

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
    );
    const data = await res.json();

    if (!data.meals) {
      recipeContainer.innerHTML = `<p class="message">No recipes found for "${searchQuery}".</p>`;
      return;
    }

    recipeContainer.innerHTML = "";

    data.meals.forEach((meal) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.classList.add("recipe");

      recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
        <p><strong>${meal.strArea}</strong> Dish</p>
        <p>Belongs to <strong>${meal.strCategory}</strong> Category</p>
        <button class="view-btn" data-id="${meal.idMeal}">View Recipe</button>
      `;

      recipeContainer.appendChild(recipeDiv);
    });

    // Attach modal events to all view buttons
    document.querySelectorAll(".view-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        const mealId = e.target.dataset.id;
        const mealData = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        ).then((res) => res.json());

        if (mealData.meals && mealData.meals.length > 0) {
          showModal(mealData.meals[0]);
        }
      });
    });
  } catch (error) {
    console.error("Error fetching recipes:", error);
    recipeContainer.innerHTML = `<p class="message">Something went wrong. Please try again later.</p>`;
  }
};

// Modal creation function
function showModal(meal) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`<li>${measure} ${ingredient}</li>`);
    }
  }

  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h2>${meal.strMeal.toUpperCase()}</h2>
      <p><strong>Ingredients:</strong></p>
      <ul>${ingredients.join("")}</ul>
      <p><strong>Instructions:</strong></p>
      <div class="instructions">${meal.strInstructions}</div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.style.display = "flex";

  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.remove();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}

// Search button event
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchInput = searchBox.value.trim();
  if (searchInput) {
    fetchRecipes(searchInput);
  }
});
