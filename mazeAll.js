function mazeRunnerAll(originMaze, x = 0, y = 0, path = '') {
    const maze = [...originMaze]

    maze.forEach(row => console.log(row));
    console.log(' ');

    // Set up the base case
    if (maze[y][x] === 'e') {
        let result = `Path to the exit: ${path}`
        console.log(result)
        return result
    };

    // Void our current location so we don't backtrack
    maze[y][x] = 'A';

    const availableMoves = {
            up: {
                char: 'U',
                location: [x, y - 1],
                contains: maze[y - 1] ? maze[y - 1][x] : '*',
            },
            down: {
                char: 'D',
                location: [x, y + 1],
                contains: maze[y + 1] ? maze[y + 1][x] : '*',
            },
            left: {
                char: 'L',
                location: [x - 1, y],
                contains: maze[y][x - 1] ? maze[y][x - 1] : '*',
            },
            right: {
                char: 'R',
                location: [x + 1, y],
                contains: maze[y][x + 1] ? maze[y][x + 1] : '*',
            },
        }
        // console.log(availableMoves)


    for (let prop in availableMoves) {
        let direction = availableMoves[prop]
        if (direction.contains !== '*' && direction.contains !== 'A') {
            let newPath = path + direction.char;
            console.log('Starting from ' + 'x:' + x + ' y:' + y)
            mazeRunnerAll(
                maze,
                direction.location[0],
                direction.location[1],
                newPath
            )
        }
    }

    return;
};