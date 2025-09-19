const { loadTasks, savedTasks } = require('./fileService');

const GetNewID = (tasks) => {
    if(tasks.length === 0) {
        return 1;
    };

    const maxId = Math.max(...tasks.map((task) => task.id));
    return maxId + 1;
};

const addTaskService = (descriptionPayload) => {
    try {
        const tasks = loadTasks();

        const id = GetNewID(tasks);
        const description = descriptionPayload;
        const status = 'todo';
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const newTask = {
            id, 
            description,
            status,
            createdAt,
            updatedAt
        };

        tasks.push(newTask);

        if(tasks.filter((task) => task.id === id)) {
            savedTasks(tasks);
            return id;
        };

    } catch(error) {
        console.error(error);
    };
};

const updateTaskService = (taskId, taskDescription) => {
    try {
        const tasks = loadTasks();

        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const updatedAt = new Date().toISOString();

        tasks[taskIndex] = {
            ...tasks[taskIndex],
            description: taskDescription,
            updatedAt
        };

        savedTasks(tasks);

    } catch(error) {
        console.error(error);
    };
};

const deleteTaskService = (taskId) => {
    try {
        const tasks = loadTasks();

        const taskIndex = tasks.findIndex((task) => task.id === taskId);

        if(taskIndex === -1) {
            throw new Error('id tidak ditemukan');
        }

        tasks.splice(taskIndex, 1);

        const foundTask = tasks.findIndex((task) => task.id === taskId);

        if(foundTask === -1) {
            savedTasks(tasks);
        };

    } catch(error) {
        console.error(error);
    };
};

const markInProgressService = (taskId) => {
    try {
        const tasks = loadTasks();

        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const updatedAt = new Date().toISOString();

        if(taskIndex !== -1) {
            tasks[taskIndex] = {
                ...tasks[taskIndex],
                status: 'in-progress',
                updatedAt
            };

            savedTasks(tasks);

        } else {
            throw new Error('task tidak ditemukan, coba lagi');    
        };

    } catch(error) {
        console.error(error);
    };
};

const markDoneService = (taskId) => {
    try {
        const tasks = loadTasks();

        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        const updatedAt = new Date().toISOString();

        if(taskIndex !== -1) {
            tasks[taskIndex] = {
                ...tasks[taskIndex],
                status: 'done',
                updatedAt
            };

            savedTasks(tasks);

        } else {
            throw new Error('task tidak ditemukan, coba lagi');    
        };

    } catch(error) {
        console.error(error);
    };
};

const listAllTasksService = () => {
    try {
        const tasks = loadTasks();

        return tasks;

    } catch(error) {
        throw new Error('gagal mengambil tasks')
    };
};

const listAllTasksByStatusService = (status) => {
    try {
        const tasks = loadTasks();

        const filteredTask = tasks.filter((task) => task.status === status);

        return filteredTask;

    } catch(error) {
        throw new Error('gagal mengambil tasks');
    };
};

module.exports = {
    addTaskService,
    updateTaskService,
    deleteTaskService,
    markInProgressService,
    markDoneService,
    listAllTasksService,
    listAllTasksByStatusService
};