const { 
    addTaskService,
    updateTaskService,
    deleteTaskService,
    markInProgressService,
    markDoneService,
    listAllTasksService,
    listAllTasksByStatusService
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
    };
};

const markDoneTaskHandler = (taskId) => {
    try {
        const id = parseInt(taskId);

        markDoneService(id);

    } catch(error) {
        console.error(error);
    };
};

const listAllTasksHandler = () => {
    try {
        const tasks = listAllTasksService();

        for(const item of tasks) {
            console.log(item);
        };

    } catch(error) {
        console.error(error);
    };
};

const listAllTasksByStatusHandler = (status) => {
    try {
        const tasks = listAllTasksByStatusService(status);

        for(const item of tasks) {
            console.log(item);
        };

    } catch(error) {
        console.error(error);
    };
};

module.exports = {
    addTaskHandler,
    updateTaskHandler,
    deleteTaskHandler,
    markInProgressTaskHandler,
    markDoneTaskHandler,
    listAllTasksHandler,
    listAllTasksByStatusHandler
};