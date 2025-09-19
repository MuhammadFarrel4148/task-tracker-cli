const { 
    addTaskService,
    updateTaskService,
    deleteTaskService,
    markInProgressService
} = require('../../service/tasksService');

const addTaskHandler = (descriptionPayload) => {
    try {
        const id = addTaskService(descriptionPayload);
        console.log(`Task added successfully (ID: ${id})`);

    } catch(error) {
        console.error(error);
    };
};

const updateTaskHandler = (taskId, taskDescription) => {
    try {
        const id = parseInt(taskId);

        updateTaskService(id, taskDescription);

    } catch(error) {
        console.error(error);
    };
};

const deleteTaskHandler = (taskId) => {
    try {
        const id = parseInt(taskId);

        deleteTaskService(id);

    } catch(error) {
        console.error(error);
    };
};

const markInProgressTaskHandler = (taskId) => {
    try {
        const id = parseInt(taskId);

        markInProgressService(id);

    } catch(error) {
        console.error(error);
    }
};

module.exports = {
    addTaskHandler,
    updateTaskHandler,
    deleteTaskHandler,
    markInProgressTaskHandler
};