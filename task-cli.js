const {
    addTaskHandler,
    updateTaskHandler,
    deleteTaskHandler,
    markInProgressTaskHandler,
    markDoneTaskHandler,
    listAllTasksHandler,
    listAllTasksByStatusHandler
} = require('./api/tasks/tasksHandler');

const [ ,, command, ...args ] = process.argv;

switch(command) {
    case 'add':
        if(args.length !== 1) {
            console.error('argumen add membutuhkan satu argumen deskripsi');
        } else {
            addTaskHandler(args[0]);
        };

        break;
    
    case 'update': 
        if(args.length !== 2) {
            console.error('argumen update membutuhkan dua argumen id dan deskripsi');
        } else {
            updateTaskHandler(args[0], args[1]);
        };
        
        break;

    case 'delete': 
        if(args.length !== 1) {
            console.error('argumen delete membutuhkan satu argumen id');
        } else {
            deleteTaskHandler(args[0]);
        };

        break;

    case 'mark-in-progress':
        if(args.length !== 1) {
            console.error('argumen mark-in-progress membutuhkan satu argumen id');
        } else {
            markInProgressTaskHandler(args[0]);
        };

        break;

    case 'mark-done': 
        if(args.length !== 1) {
            console.error('argumen mark-done membutuhkan satu argumen id');
        } else {
            markDoneTaskHandler(args[0]);
        };

        break;
    
    case 'list': 
        if(args.length !== 1) {
            listAllTasksHandler();
        } else {
            listAllTasksByStatusHandler(args[0]);
        };
        
        break;

    default: 
        console.error(`perintah ${command} tidak dikenal`);
        // showHelp();
        break;
}