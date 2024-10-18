document.getElementById('search-btn').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const recipeBlocks = document.querySelectorAll('.recipe-block');

    recipeBlocks.forEach(block => {
        const title = block.querySelector('h2').textContent.toLowerCase();
        const ingredients = block.querySelector('ul').textContent.toLowerCase(); // Busca nos ingredientes

        // Verifica se o termo está no título ou nos ingredientes
        if (title.includes(searchTerm) || ingredients.includes(searchTerm)) {
            block.style.display = 'block';  // Exibe o bloco se encontrar correspondência
        } else {
            block.style.display = 'none';   // Oculta o bloco se não houver correspondência
        }
    });
});

// Ação de clique no botão de busca
document.getElementById('search-btn').addEventListener('click', searchRecipes);

// Ação de pressionar a tecla Enter no campo de entrada
document.getElementById('search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {  // Verifica se a tecla pressionada foi Enter
        searchRecipes();  // Executa a função de busca
    }
});

function toggleRecipe(recipeId) {
    const recipeDetails = document.getElementById(recipeId);
    if (recipeDetails.style.display === "none") {
        recipeDetails.style.display = "block"; // Mostra a receita
    } else {
        recipeDetails.style.display = "none"; // Esconde a receita
    }
}

