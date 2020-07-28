const initState = {
    projects: [
        {id: '1', title: 'Help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'Reinforcement learning', content: 'blah blah blah'},
        {id: '3', title: 'Computer automation', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState,action) => {
    return state
}

export default projectReducer;