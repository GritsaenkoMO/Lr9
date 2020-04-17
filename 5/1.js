for (i = 0; i < document.links.length; i++) {
    // Создание i-элемента списка и запись в него ссылки
    document.Sel.ListOfLinks.options[i] = new Option(
      document.links[i],
      i,
      false,
      false
    );
  }
  // Выделение первого элемента в списке
  document.Sel.ListOfLinks.selectedIndex = 0;
