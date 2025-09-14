function courseSchedule(numOfCourses, prerequisites) {
  let visited = new Set();
  let courseGraph = new Map();
  for (let pre of prerequisites) {
    if (!courseGraph.has(pre[1])) {
      courseGraph.set(pre[1], []);
    }
    courseGraph.get(pre[1]).push(pre[0]);
  }

  for (let i = 0; i < numOfCourses; i++) {
    if (canSchedule(i, courseGraph, visited) === false) {
      return false;
    }
  }
  return true;
}

function canSchedule(course, courseGraph, visited) {
  if (visited.has(course)) {
    return false;
  }

  if (!courseGraph.get(course) || courseGraph.get(course) === null) {
    return true;
  }

  visited.add(course);
  for (let pre of courseGraph.get(course)) {
    if (!canSchedule(pre, courseGraph, visited)) {
      return false;
    }
  }
  visited.delete(course);
  courseGraph.set(course, null);
  return true;
}

let prerequisites = [
  [0, 1],
  [1, 2],
  [2, 3],
  [0, 3],
];

console.log(courseSchedule(4, prerequisites));
