const itemsSelect = document.querySelectorAll(".flex h3")

for (const item of itemsSelect) {
  item.addEventListener("click", handleSelectedItem)
}

function handleSelectedItem(event) {
  const itemA = event.target

  itemA.classList.toggle("selected")

  const itemId = itema.target.dataset.id
}

