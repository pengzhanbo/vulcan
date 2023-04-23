const title = ref('')

export const setupNavbar = () => {
  return { title }
}

export const useNavbar = (_title?: string) => {
  if (_title) {
    title.value = _title
  }
  return { title }
}
