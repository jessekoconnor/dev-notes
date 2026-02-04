const { test, assertEquals } = require('../../test-framework');

/*
 * ============================================================================
 * PROBLEM: Design Twitter (Medium)
 * ============================================================================
 * 
 * Design a simplified version of Twitter where users can post tweets, 
 * follow/unfollow another user, and is able to see the 10 most recent tweets 
 * in the user's news feed.
 * 
 * Implement the Twitter class:
 *   - Twitter() Initializes your twitter object.
 *   - void postTweet(int userId, int tweetId) Composes a new tweet with ID 
 *     tweetId by the user userId. Each call to this function will be made 
 *     with a unique tweetId.
 *   - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent 
 *     tweet IDs in the user's news feed. Each item in the news feed must be 
 *     posted by users who the user followed or by the user themself. Tweets 
 *     must be ordered from most recent to least recent.
 *   - void follow(int followerId, int followeeId) The user with ID followerId 
 *     started following the user with ID followeeId.
 *   - void unfollow(int followerId, int followeeId) The user with ID 
 *     followerId started unfollowing the user with ID followeeId.
 * 
 * Example 1:
 *   Input:
 *     ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed",
 *      "unfollow","getNewsFeed"]
 *     [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]
 *   Output: [null,null,[5],null,null,[6,5],null,[5]]
 *   Explanation:
 *     Twitter twitter = new Twitter();
 *     twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
 *     twitter.getNewsFeed(1);  // return [5]
 *     twitter.follow(1, 2);    // User 1 follows user 2.
 *     twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
 *     twitter.getNewsFeed(1);  // return [6, 5]
 *     twitter.unfollow(1, 2);  // User 1 unfollows user 2.
 *     twitter.getNewsFeed(1);  // return [5]
 * 
 * Constraints:
 *   - 1 <= userId, followerId, followeeId <= 500
 *   - 0 <= tweetId <= 10^4
 *   - All the tweets have unique IDs.
 *   - At most 3 * 10^4 calls will be made to postTweet, getNewsFeed, follow, 
 *     and unfollow.
 * 
 * ============================================================================
 */

class Twitter {
    constructor() {
        // TODO: Implement constructor
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        // TODO: Implement postTweet
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        // TODO: Implement getNewsFeed
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        // TODO: Implement follow
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        // TODO: Implement unfollow
    }
}

// ============================================================================
// TESTS
// ============================================================================

test('example 1', () => {
    const twitter = new Twitter();
    twitter.postTweet(1, 5);
    assertEquals(twitter.getNewsFeed(1), [5]);
    twitter.follow(1, 2);
    twitter.postTweet(2, 6);
    assertEquals(twitter.getNewsFeed(1), [6, 5]);
    twitter.unfollow(1, 2);
    assertEquals(twitter.getNewsFeed(1), [5]);
});

module.exports = { Twitter };
