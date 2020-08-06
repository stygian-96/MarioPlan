const initState = {
    projects: [
        {id: '1', title: 'Help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'Reinforcement learning', content: 'blah blah blah'},
        {id: '3', title: 'Computer automation', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState,action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log("Created Project", action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("Create project error", action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;