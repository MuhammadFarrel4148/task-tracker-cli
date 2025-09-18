const fs = require('fs');
const path = require('path');

const TASKS_FILE = path.join(__dirname, '..', 'model', 'tasks.json');

const loadTasks = () => {
    try {
        if(!fs.existsSync(TASKS_FILE)) {
            return [];
        }
        const dataBuffer = fs.readFileSync(TASKS_FILE);
        const dataJSON = dataBuffer.toString();

        if(dataJSON === '') {
            return [];
        };

        return JSON.parse(dataJSON);

    } catch(error) {
        console.error(error);
        return [];
    };
};

const savedTasks = (tasks) => {
    try {
        const dataJSON = JSON.stringify(tasks, null, 2);
        fs.writeFileSync(TASKS_FILE, dataJSON);

    } catch(error) {
        console.error(error);
    }
};

module.exports = {
    loadTasks,
    savedTasks
};