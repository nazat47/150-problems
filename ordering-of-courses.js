// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an 
// array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if
//  you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any 
// of them. If it is impossible to finish all courses, return an empty array.

 

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the
//  correct course order is [0,1].


class OrderingOfCourses {
  WHITE = 0;
  GRAY = 1;
  BLACK = 2;

  constructor(numOfCourses, prerequisites) {
    this.adjList = new Map();
    this.colors = new Map();
    this.isPossible = true;
    this.stack = [];
    this.prerequisites = prerequisites;
    this.numOfCourses = numOfCourses;

    for (let i = 0; i < numOfCourses; i++) {
      if (!this.colors.has(i)) {
        this.colors.set(i, this.WHITE);
      }
    }
  }

  dfs(course) {
    if (!this.isPossible) return;

    this.colors.set(course, this.GRAY);
    for (let neighbore of this.adjList.get(course) || []) {
      if (this.colors.get(neighbore) === this.WHITE) {
        this.dfs(neighbore);
      } else if (this.colors.get(neighbore) === this.GRAY) {
        this.isPossible = false;
      }
    }

    this.colors.set(course, this.BLACK);
    this.stack.push(course);
  }

  findOrder() {
    for (const pre of this.prerequisites) {
      let requisite = pre[1];
      let dependent = pre[0];
      if (!this.adjList.has(requisite)) {
        this.adjList.set(requisite, []);
      }
      this.adjList.get(requisite).push(dependent);
    }

    for (let i = 0; i < this.numOfCourses; i++) {
      if (this.colors.get(i) === this.WHITE) {
        this.dfs(i);
      }
    }

    let order = [];

    if (this.isPossible) {
      for (let i = 0; i < this.numOfCourses; i++) {
        order[i] = this.stack.pop();
      }
    }
    return order;
  }
}

const prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

const order = new OrderingOfCourses(4, prerequisites);
console.log(order.findOrder());
