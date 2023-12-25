let objects = [];
// Fonction pour créer un nouvel objet avec les données du formulaire
function createObject() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  // Correction ici: "Auteur" -> "auteur"
  const auteur = document.getElementById('auteur').value;

  // Vérifier que tous les champs sont remplis
  if (title.trim() === '' || description.trim() === '' || auteur.trim() === '') {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Obtenir la date actuelle
  const currentDate = new Date();
  
  // Créer un objet avec les données du formulaire
  const object = {
    id: generateId(),
    title: title,
    description: description,
    creationDate: currentDate,
    modificationDate: currentDate,
    auteur: auteur,
    authorModification: ''
  };

  // Ajouter l'objet à la liste
  objects.push(object);
  
  // Mettre à jour l'affichage
  displayObjects();
  
  // Effacer le formulaire
  clearForm();
}

// Fonction pour mettre à jour un objet existant
function updateObject() {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  // Vérifier que tous les champs sont remplis
  if (title.trim() === '' || description.trim() === '') {
    alert('Veuillez remplir tous les champs.');
    return;
  }

  // Demander l'ID de l'objet à modifier
  const selectedObjectId = prompt('Entrez l\'ID de l\'objet à modifier :');

  // Trouver l'index de l'objet dans la liste
  const selectedObjectIndex = objects.findIndex(obj => obj.id === selectedObjectId);

  // Si l'objet est trouvé
  if (selectedObjectIndex !== -1) {
    // Obtenir la date actuelle
    const currentDate = new Date();

    // Demander le nom de l'auteur de modification uniquement lors de la modification
    const authorModification = prompt('Entrez le nom de l\'auteur de modification :');

    // Créer un objet mis à jour avec les nouvelles données
    const updatedObject = {
      title: title,
      description: description,
      modificationDate: currentDate,
      authorModification: authorModification
    };

    // Remplacer l'objet existant avec l'objet mis à jour
    objects[selectedObjectIndex] = Object.assign({}, objects[selectedObjectIndex], updatedObject);

    // Mettre à jour l'affichage
    displayObjects();
    
    // Effacer le formulaire
    clearForm();
  } else {
    alert('Aucun objet trouvé avec cet ID.');
  }
}

// Fonction pour supprimer un objet de la liste
function deleteObject() {
  // Demander l'ID de l'objet à supprimer
  const selectedObjectId = prompt('Entrez l\'ID de l\'objet à supprimer :');

  // Trouver l'index de l'objet dans la liste
  const selectedObjectIndex = objects.findIndex(obj => obj.id === selectedObjectId);

  // Si l'objet est trouvé
  if (selectedObjectIndex !== -1) {
    // Supprimer l'objet de la liste
    objects.splice(selectedObjectIndex, 1);

    // Mettre à jour l'affichage
    displayObjects();
    
    // Effacer le formulaire
    clearForm();
  } else {
    alert('Aucun objet trouvé avec cet ID.');
  }
}

// Fonction pour afficher les objets dans la zone d'affichage
function displayObjects() {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = '';

  // Pour chaque objet, créer un élément d'information et l'ajouter à la zone d'affichage
  objects.forEach(object => {
    const objectInfo = document.createElement('div');
    objectInfo.innerHTML = `
      <p><strong>ID:</strong> ${object.id}</p>
      <p><strong>Titre:</strong> ${object.title}</p>
      <p><strong>Description:</strong> ${object.description}</p>
      <p><strong>Date de création:</strong> ${object.creationDate}</p>
      <p><strong>Date de modification:</strong> ${object.modificationDate}</p>
      <p><strong>Auteur de création:</strong> ${object.auteur}</p>
      <p><strong>Auteur de modification:</strong> ${object.authorModification}</p>
      <hr>
    `;
    outputElement.appendChild(objectInfo);
  });
}

// Fonction pour effacer le formulaire
function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';
  // Correction ici: "Auteur" -> "auteur"
  document.getElementById('auteur').value = '';
  document.getElementById('authorModification').value = '';
}

// Fonction pour générer un identifiant unique
function generateId() {
  // Générer un identifiant unique (simple implémentation)
  return '_' + Math.random().toString(36).substr(2, 9);
}