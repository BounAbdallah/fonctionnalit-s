function openTab(tabId) {
    // Masquer tous les contenus d'onglets
    const tabContents = document.getElementsByClassName('tab-content');
    for (const content of tabContents) {
      content.classList.remove('active');
    }

    // Afficher le contenu de l'onglet sélectionné
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
  }