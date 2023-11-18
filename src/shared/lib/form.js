

export const getselectedValues = (select) => {
    return Array.from(select.options)
        .filter(option => option.selected)
        .map(option => option.value)
}