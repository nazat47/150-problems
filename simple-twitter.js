class MaxHeap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0] ?? null; // max element
  }

  push(value) {
    this.heap.push(value);
    this._heapifyUp(this.size - 1);
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown(0);

    return max;
  }

  _heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[parentIndex]
    ) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  _heapifyDown(index) {
    let largest = index;
    const left = index * 2 + 1;
    const right = index * 2 + 2;

    if (left < this.size && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    if (right < this.size && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    if (largest !== index) {
      this._swap(index, largest);
      this._heapifyDown(largest);
    }
  }

  _swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

class User {
  constructor(id) {
    this.userId = id;
    this.followings = new Set();
    this.follow(id);
    this.tweetHead = new Tweet();
  }

  follow(userId) {
    this.followings.add(userId);
  }

  unfollow(userId) {
    if (this.userId !== userId) {
      this.followings.delete(userId);
    }
  }

  post(tweetId) {
    let newTweet = new Tweet(tweetId);
    newTweet.next = this.tweetHead;
    this.tweetHead = newTweet;
  }
}

class Tweet {
  constructor(id) {
    this.tweetId = id;
    this.next = null;
    this.timestamp = Date.now();
  }
}

class Twitter {
  constructor() {
    this.users = new Map();
  }

  post(userId, tweetId) {
    if (!this.users.has(userId)) {
      this.users.set(userId, new User(userId));
    }
    this.users.get(userId).post(tweetId);
  }

  getNewsFeed(userId) {
    let feed = [];
    if (!this.users.has(userId)) return feed;

    let followings = this.users.get(userId).followings;
    let tweetHeap = new MaxHeap();

    for (let userId of followings) {
      let user = this.users.get(userId);
      if (user.tweetHead) {
        tweetHeap.push(user.tweetHead);
      }
    }

    let count = 0;
    while (count > 0 && tweetHeap.size > 0) {
      let tweet = tweetHeap.pop();
      feed.push(tweet.tweetId);
      count++;
      if (tweet.next) {
        tweetHeap.push(tweet.next);
      }
    }
    return feed;
  }

  follow(followerId, followeeId) {
    if (!this.users.has(followeeId)) {
      this.users.set(followeeId, new User(followeeId));
    }
    if (!this.users.has(followerId)) {
      this.users.set(followerId, new User(followerId));
    }
    this.users.get(followerId).follow(followeeId);
  }
  unfollow(followerId, followeeId) {
    if (this.users.get(followerId) && followeeId !== followerId) {
      this.users.get(followerId).unfollow(followeeId);
    }
  }
}
