

export default class Dropdown {
  constructor(containerId, options, onSelect,filterManager) {
    this.wrapper = document.querySelector(`[data-dropdown="${containerId}"]`);
    this.container = this.wrapper.querySelector('.content');
    this.options = options;
    this.onSelect = onSelect;
    this.filteredOptions = options; // Initialize filtered options
    this.filterManager = filterManager;
  }

  createAndAppendBadge(option) {
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.textContent = option;
    const selection =  badge.textContent;

    const closeIcon = document.createElement('span');
    closeIcon.className = 'material-icons';
    closeIcon.textContent = 'clear';

    badge.appendChild(closeIcon);

    const filterBadgesContainer = document.getElementById('filterBadges');
    filterBadgesContainer.appendChild(badge);

    this.filterManager.addToCombinedOptions(selection); // Add option to combined options
    //this.filterManager.updateRecipeCards(); // Update recipe cards based on combined options
}

  attachBadgeCloseButtonListener() {
    const filterBadgesContainer = document.getElementById('filterBadges');
    filterBadgesContainer.addEventListener('click', event => {
        if (event.target.classList.contains('material-icons')) {
            const badge = event.target.closest('.badge');
            const option =   badge.firstChild.textContent;
           this.filterManager.removeFromCombinedOptions(option); // Remove option from combined options
            badge.remove(); // Remove badge from the DOM after removing from combined options
        }
    });
}

  initDropdown() {
    const optionList = document.createElement('ul');
    optionList.className = 'options';

    this.options.forEach(option => {
      const optionElement = document.createElement('li');
      optionElement.className = 'option';
      optionElement.textContent = option;

      optionElement.addEventListener('click', () => {
        this.onSelect(option); // Call the provided callback
        // Create and append the badge
        this.createAndAppendBadge(option); // Create and append the badge
        this.wrapper.classList.remove('active'); // Remove the active class from the wrapper
        // Add selected class to change background and font weight
        optionElement.classList.add('selected');
        // Add close icon to the option
        const closeIcon = document.createElement('span');
        closeIcon.className = 'material-icons';
        closeIcon.textContent ='highlight_off';
        optionElement.appendChild(closeIcon);


          // Add click event listener to the close icon
          closeIcon.addEventListener('click', event => {
            event.stopPropagation(); // Prevent option click event from triggering
            this.onCloseIconClick(optionElement, option);
        });

     
      });

          // Add event listeners for the close buttons of badges
          this.attachBadgeCloseButtonListener(); // Attach the badge close button listener

      optionList.appendChild(optionElement);
    });

    this.container.appendChild(optionList); // Append the ul element with li elements

    const searchInput = this.container.querySelector('.search input');
    searchInput.addEventListener('input', this.handleSearchInput.bind(this));
  }

  onCloseIconClick(optionElement, option) {
    // Remove the option from the DOM
    //optionElement.remove();

    // Remove the option from combined options
    this.filterManager.removeFromCombinedOptions(option);

    // Reset the background and remove close-icon
    optionElement.classList.remove('selected');
    const closeIcon = optionElement.querySelector('.material-icons');
    if (closeIcon) {
        closeIcon.remove();
    }

      // Find and remove the corresponding badge
      const filterBadgesContainer = document.getElementById('filterBadges');
      const badges = filterBadgesContainer.querySelectorAll('.badge');
      badges.forEach(badge => {
          const badgeText = badge.firstChild.textContent.trim().toLowerCase();
          const optionText = option.trim().toLowerCase();
          console.log('Badge Text:', badgeText);
          console.log('Option Text:', optionText);
          if (badgeText === optionText) {
              console.log('Badge matched:', badgeText);
              badge.remove();
          }
      });
}

  handleSearchInput(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm.length >= 3) {
      this.filteredOptions = this.options.filter(option =>
        option.toLowerCase().includes(searchTerm)
      );
    } else {
      this.filteredOptions = this.options;
    }

    // Update the options list
    this.updateOptions(this.filteredOptions);

    
  }

  updateOptions(options) {
    const optionList = this.container.querySelector('.options');
    optionList.innerHTML = ''; // Clear the options

    options.forEach(option => {
      const optionElement = document.createElement('li');
      optionElement.className = 'option';
      optionElement.textContent = option;

      optionElement.addEventListener('click', () => {
        this.onSelect(option); // Call the provided callback
        this.createAndAppendBadge(option); // Create and append the badge
        this.attachBadgeCloseButtonListener(); // Attach the badge close button listener
        this.wrapper.classList.remove('active'); // Remove the active class from the wrapper
      });

      optionList.appendChild(optionElement);
    });
  }
}
