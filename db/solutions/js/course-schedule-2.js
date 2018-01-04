/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(numCourses, prerequisites) {
    let graphVertices = toGraph(numCourses, prerequisites);
    let visited = new Set();
    let visiting = new Set();
    let stack = [];
    let isCycle = false;

    function explore(key) {
        visiting.add(key);

        graphVertices.get(key).forEach(val => {
            if (visiting.has(val)) {
                isCycle = true;
            }

            if (!visited.has(val)
                && !visiting.has(val)) {
                explore(val);
            }
        });

        visiting.delete(key);
        visited.add(key);
        stack.push(key);
    }

    graphVertices.forEach((value, key) => {
        if (!visited.has(key)) {
            explore(key);
        }
    });

    return isCycle ? [] : stack;
}

function toGraph(numCourses, prerequisites) {
    let graphVertices = new Map();

    prerequisites.forEach(p => {
        const [course, dep] = p;
        const deps = graphVertices.get(course) || [];
        deps.push(dep);
        graphVertices.set(course, deps);
    });

    for (let i = 0; i < numCourses; i++) {
        if (!graphVertices.has(i)) {
            graphVertices.set(i, []);
        }
    }

    return graphVertices;
}