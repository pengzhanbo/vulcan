const title = ref('')

export function setupNavbar() {
  return { title }
}

export function useNavbar(_title?: string) {
  if (_title)
    title.value = _title

  return { title }
}
