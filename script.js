// Função para carregar as receitas de um arquivo JSON
async function loadRecipes() {
    try {
        const response = await fetch('recipes.json');
        const recipes = await response.json();
        return recipes;
    } catch (error) {
        console.error('Erro ao carregar as receitas:', error);
        return [];
    }
}

// Função de busca
async function searchRecipes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const recipes = await loadRecipes(); // Carregar todas as receitas
    const resultsContainer = document.getElementById('search-results'); // Usar 'search-results'
    resultsContainer.innerHTML = ''; // Limpar resultados anteriores

    let found = false;

    // Percorrer as receitas e buscar por termo no título ou ingredientes
    recipes.forEach(recipe => {
        const title = recipe.title.toLowerCase();
        const ingredients = recipe.ingredients.toLowerCase();

        if (title.includes(searchTerm) || ingredients.includes(searchTerm)) {
            const recipeBlock = document.createElement('div');
            recipeBlock.className = 'recipe-block';
            recipeBlock.innerHTML = `
                <h2>${recipe.title}</h2>
                <p><strong>Categoria:</strong> ${recipe.category}</p>
                <p><strong>Ingredientes:</strong> ${recipe.ingredients}</p>
            `;
            resultsContainer.appendChild(recipeBlock);
            found = true;
        }
    });

    // Exibe uma mensagem se nenhuma correspondência for encontrada
    const noResultMessage = document.getElementById('no-result-message');
    if (!found) {
        noResultMessage.style.display = 'block'; // Exibe a mensagem
    } else {
        noResultMessage.style.display = 'none'; // Oculta a mensagem
    }
}

// Ação de clique no botão de busca
document.getElementById('search-btn').addEventListener('click', searchRecipes);

// Ação de pressionar a tecla Enter no campo de entrada
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {  // Verifica se a tecla pressionada foi Enter
        searchRecipes();  // Executa a função de busca
    }
});
