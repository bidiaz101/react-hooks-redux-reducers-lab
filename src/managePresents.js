export function managePresents(state={ numberOfPresents: 0 }, action) {
  if(action.type === 'presents/increase'){
      return { numberOfPresents: state.numberOfPresents + 1 }
  }
  return state
}
