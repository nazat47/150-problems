// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi 
// first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.


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
