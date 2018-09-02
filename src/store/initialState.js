let exampleState = {
    tasks:  [
        {
            title: "Task 1",
            projectName: "Project One",
            priority: 1,
            key: 4654651684528651865,
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis accusamus culpa totam exercitationem officiis nam error harum quasi quas molestiae repudiandae aperiam ipsa, beatae enim a iusto quaerat reiciendis esse.",
            showDescription: false
        }
    ],
    projectNamesSelect: ["Все", "Project One"]
}


let getSavedState = function(){
    return JSON.parse(localStorage.getItem('savedState'));
}

let initialState = getSavedState() || exampleState;

export { initialState };