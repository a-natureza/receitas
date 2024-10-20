// Função de busca
function searchRecipes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const recipeBlocks = document.querySelectorAll('.recipe-block');
    let found = false; // Variável para acompanhar se alguma correspondência foi encontrada

    recipeBlocks.forEach(block => {
        const title = block.querySelector('h2').textContent.toLowerCase();
        const ingredients = block.querySelector('ul').textContent.toLowerCase(); // Busca nos ingredientes

        // Verifica se o termo está no título ou nos ingredientes
        if (title.includes(searchTerm) || ingredients.includes(searchTerm)) {
            block.style.display = 'block';  // Exibe o bloco se encontrar correspondência
            found = true; // Marca que encontrou uma correspondência
        } else {
            block.style.display = 'none';   // Oculta o bloco se não houver correspondência
        }
    });

    // Exibe uma mensagem se nenhuma correspondência for encontrada
    const noResultMessage = document.getElementById('no-result-message');
    if (!found) {
        noResultMessage.style.display = 'block';  // Exibe a mensagem
    } else {
        noResultMessage.style.display = 'none';   // Oculta a mensagem se encontrar algo
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