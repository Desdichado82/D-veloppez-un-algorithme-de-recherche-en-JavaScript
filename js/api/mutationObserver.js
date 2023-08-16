// Create a function to update the total count
const updateTotalCount = () => {
    const totalSpan = document.getElementById('totalSpan');
  
    // Calculate the current number of recipe cards on the page
    const recipeCardCount = document.querySelectorAll('.card').length;
  
    // Update the total count in the span
    totalSpan.textContent = recipeCardCount;
  };
  
  // Initialize the MutationObserver
  const observer = new MutationObserver(() => {
    // Call the updateTotalCount function when changes occur in the DOM
    updateTotalCount();
  });
  
  // Configure the observer to listen for changes in the target container
  const targetContainer = document.getElementById('recetteContainer');
  const observerConfig = { childList: true, subtree: true };
  observer.observe(targetContainer, observerConfig);
  