---
title: "使用广度优先搜索和深度优先搜索解决全排列问题💯"
description: "本文将介绍如何利用广度优先搜索（BFS）和深度优先搜索（DFS）算法来解决全排列问题。我们将详细探讨这两种方法如何生成一个集合的所有排列，包括代码示例和步骤解析。"
publishDate: "2024/09/17"
updatedDate: "2024/09/17"
tags: ["algorithm", "TypeScript"]
---

## 1. 概念介绍🤓
### 1.1 什么是全排列问题

全排列问题是计算机科学中经典的组合问题之一。即给定一个集合（如数组或列表），要求找到该集合的所有可能的排列方式。

### 1.2 什么是广度优先搜索

深度优先搜索（Depth-First Search, DFS）是一种用于遍历或搜索树或图的算法。它从根节点开始，沿着树的每一条分支尽可能深地搜索，直到遇到终点或叶子节点，然后回溯到最近的分支点继续搜索。

### 1.3 什么是广度优先搜索

广度优先搜索（Breadth-First Search, BFS）是一种用于遍历或搜索树或图的算法。它从根节点开始，首先访问根节点，然后逐层访问每个节点的子节点，直到遍历完整个图或树。

## 2. 实践⌨️

我将使用 TypeScript 作为示例语言。

> Talk is cheap. Show me the code.

### 2.1 广度优先搜索
```typescript
const permute = <T>(arr: T[]): T[][] => {
    const result: T[][] = []
    const queue: { temp: T[], visited: boolean[] }[] = [{ temp: [], visited: new Array(arr.length).fill(false) }]
    do {
        const { temp, visited } = queue.shift()!
        if (temp.length === arr.length) {
            result.push(temp)
            continue
        }
        for (let i = 0; i < arr.length; i++) {
            if (visited[i]) {
                continue
            }
            const newVisited = [...visited]
            newVisited[i] = true
            queue.push({ temp: [...temp, arr[i]], visited: newVisited })
        }
    } while (queue.length > 0)
    return result
}
```

### 2.2 深度优先搜索
```typescript
const dfs = <T>({ arr, temp, visited, result }: { arr: T[], temp: T[], visited: boolean[], result: T[][] }) => {
    if (temp.length === arr.length) {
        result.push([...temp])
        return
    }
    for (let i = 0; i < arr.length; i++) {
        if (visited[i]) {
            continue
        }
        temp.push(arr[i])
        visited[i] = true
        dfs({ arr, temp, visited, result })
        temp.pop()
        visited[i] = false
    }
}

const permute = <T>(...arr: T[]): T[][] => {
    const result: T[][] = []
    dfs<T>({ arr, temp: [], visited: new Array(arr.length).fill(false), result })
    return result
}
```

如果你不想使用递归，也可以使用循环来代替递归。

```typescript
const permute = <T>(...arr: T[]): T[][] => {
    const result: T[][] = []
    const stack: { temp: T[], visited: boolean[] }[] = [{ temp: [], visited: new Array(arr.length).fill(false) }]
    do {
        const { temp, visited } = stack.shift()!
        if (temp.length === arr.length) {
            result.push(temp)
            continue
        }
        for (let i = 0; i < arr.length; i++) {
            if (visited[i]) {
                continue
            }
            const newVisited = [...visited]
            newVisited[i] = true
            stack.push({ temp: [...temp, arr[i]], visited: newVisited })
        }
    } while (stack.length > 0)
    return result
}
```

## 4. 总结✨

在本文中，我们探讨了如何使用广度优先搜索（BFS）和深度优先搜索（DFS）两种算法来解决全排列问题，并提供了相应的 TypeScript 示例代码。这两种算法各有特点和应用场景：

- 广度优先搜索（BFS）：

    - 工作原理：BFS 通过逐层扩展的方式生成排列。算法从初始状态开始，逐步探索所有可能的排列，确保每次扩展都在当前层级内完成。
    - 优势：适合在状态空间较大的问题中逐层展开解决，能够保证找到所有可能的排列，适用于需要逐步构建解的场景。
    - 实现：代码中使用了队列（queue）来管理当前的排列状态和访问标记，逐步生成全排列。

- 深度优先搜索（DFS）：

    - 工作原理：DFS 通过递归的方式深度遍历所有可能的排列。算法从当前节点出发，尽可能深入探索每条路径，直到遇到完整的排列，然后回溯到上一层继续探索。
    - 优势：适合递归解法和深度问题，能够高效地生成所有排列，尤其是在需要在递归中处理复杂逻辑时表现良好。
    - 实现：代码中通过递归函数管理排列生成过程，使用数组（temp）和访问标记（visited）来跟踪当前状态。

在选择使用 BFS 还是 DFS 时，主要考虑以下因素：

- 问题规模：对于大规模的排列问题，DFS 的递归方式可能更具效率。
- 资源消耗：BFS 需要更多的内存来存储队列中的状态，而 DFS 主要依赖递归调用栈的深度。

希望本文能帮助你在未来的算法问题中做出更合理的选择！
