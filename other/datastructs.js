//////// LINKED LIST ////////

const Node =  {
    data: null,
    next: null
}

const LinkedList = {
    length: 0,
    head: null,
    add(value) {
        const node = Object.assign(Object.create(Node), { data: value })
        let currentNode = this.head
        if (!currentNode) {
            this.head = node
            this.length += 1
            return node
        }
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        this.length += 1
        currentNode.next = node
        return node
    },
    search(value) {
        let currentNode = this.head
        if (!currentNode) {
            return null
        }
        while (currentNode.data !== value && currentNode.next) {
            currentNode = currentNode.next
        }
        if (currentNode.data === value) {
            return currentNode
        }
        return null
    },
    getNodeAt(index) {
        let currentNode = this.head
        if (!currentNode) {
            return null
        }
        let count = 0
        while (count < index && currentNode.next) {
            currentNode = currentNode.next
            count += 1
        }
        if (count !== index) {
            return null
        }
        return currentNode
    },
    remove(index) {
        let deletedNode = null
        if (index < 0) {
            return null
        }

        if (index === 0) {
            this.head = currentNode.next
            deletedNode = currentNode
            currentNode = null
            this.length -= 1

            return deletedNode
        }
        let currentNode = this.getNodeAt(index)
        let previousNode = this.getNodeAt(index - 1)
        previousNode.next = currentNode.next
        deletedNode = currentNode
        currentNode = null
        this.length -= 1
        return deletedNode
    }
}

const linkedlist = Object.assign(Object.create(LinkedList))


//////// TREE STUFFS ////////


const TreeNode = {
    value: null,
    left: null,
    right: null
}

const BST = {
    root: null,
    add(value) {
        let currentNode = this.root
        const newNode = Object.assign(Object.create(TreeNode), { value })
        if (!currentNode) {
            this.root = newNode
            return newNode
        }
        while (true) {
            if (newNode.value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode
                    return newNode
                } else {
                    currentNode = currentNode.left
                }
            }
            if (newNode.value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = newNode
                    return newNode
                } else {
                    currentNode = currentNode.right
                }
            }
            if (newNode.value === currentNode.value) {
                return newNode
            }
        }
    },
    contains(value) {
        let currentNode = this.root
        while(true) {
            if (currentNode === null) {
                return false
            } else if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            } else if (value === currentNode.value) {
                return true
            }
        }
    },
    delete(value) {
        if (!this.contains(value)) {
            return null
        }
    }
}

const bst = Object.create(BST)
/*
bst.add(5)
bst.add(6)
bst.add(7)
bst.add(4)
console.log(bst.contains(6))
console.log(bst.delete(8))
console.log(bst)
*/

//////// GRAPH STUFFS ////////

const UnweightedGraph = {
    matrix: {},
    add(node, value) {
        if (this.matrix[node] === undefined) {
            const nodes = [value]
            this.matrix[node] = nodes
            this.matrix[value] = []
            return nodes
        }
        const nodes = this.matrix[node]
        nodes.push(value)
        this.matrix[node] = nodes
        if (!this.matrix[value]) {
            this.matrix[value] = []
        }
        return nodes
    },
    bfs(node) {
        const startNode = this.matrix[node]
        if (!startNode) {
            return 0
        }
        const queue = [node]
        const distances = {}

        while (queue.length > 0) {
            const currentNode = queue.shift() // gets the first in variable
            console.log(currentNode)
            this.matrix[currentNode].forEach(v => {
                distances[v] = distances[currentNode] + 1 || 1
                queue.push(v)
            })
        }
        return distances
    },

    dfs(node) {
        const startNode = this.matrix[node]
        const visited = {}
        if (!startNode) {
            return 0
        }
        const stack = [node]

        while (stack.length > 0) {
            const currentNode = stack.pop() // gets the first out variable
            visited[currentNode] = true
            console.log(currentNode)
            this.matrix[currentNode].forEach(v => {
                if (!visited[v]) {
                    stack.push(v)
                }
                    
            })
        }
    },
    dfsRecurse(node) {
        const startNode = this.matrix[node]
        if (!startNode) {
            return 0
        }        
        console.log(node)
        startNode.forEach(neighbor => {
            this.dfsRecurse(neighbor)
        })
    },
}

const unweightedGraph = Object.assign(Object.create(UnweightedGraph))
unweightedGraph.add(5, 6)
unweightedGraph.add(5, 7)
unweightedGraph.add(5, 0)
unweightedGraph.add(0, 8)
unweightedGraph.add(6, 2)
unweightedGraph.add(6, 3)
unweightedGraph.add(3, 4)
unweightedGraph.add(8, 1)
//unweightedGraph.add(8, 0)

/*
console.log('bfs traversal:')
unweightedGraph.bfs(5)
*/
console.log('dfs traversal:')
unweightedGraph.dfsRecurse(5)


const extractMin = function(obj) {
    const keys = Object.keys(obj)
    let smallest = Number.MAX_SAFE_INTEGER
    let key = Number.MAX_SAFE_INTEGER
    keys.forEach(k => {
        if (obj[k] < smallest) {
            smallest = obj[k]
            key = k
        }
    })
    delete obj[key]
    return key
}
const decreaseKey = function(obj, key, value) {
    obj[key] = value
}

const WeightedGraph = {
    matrix: {},
    add(node, value, edgeWeight) {
        if (this.matrix[node] === undefined) {
            const nodes = [[value, edgeWeight]]
            this.matrix[node] = nodes
            this.matrix[value] = []
            return nodes
        }
        const nodes = this.matrix[node]
        nodes.push([value, edgeWeight])
        this.matrix[node] = nodes
        if (this.matrix[value] === undefined) {
            this.matrix[value] = []
        }
        return nodes
    },
    dijkstras(node) {
        const startNode = this.matrix[node]
        if (!startNode) {
            return 0
        }
        const queue = [node]
        const distances = {}

        while (queue.length > 0) {
            const parent = queue.shift()
            this.matrix[parent].forEach(v => {
                distances[v[0]] = distances[parent] + v[1] || v[1] // minimum
                queue.push(v[0])
            })
        }
        return distances
    },
    // need to filter nodes
    prims(node) {
        const startNode = this.matrix[node]
        if (!startNode) {
            return 0
        }
        const cost = {}
        const tree = {}
        const vertices = Object.keys(this.matrix)

        vertices.forEach(v => {
            cost[v] = Number.MAX_SAFE_INTEGER
            tree[v] = []
        })
        const queue = Object.assign({}, cost)
        queue[node] = 0
        
        while (Object.keys(queue).length > 0) {
            const v = extractMin(queue)
            this.matrix[v].forEach(w => {
                if (cost[w[0]] > w[1]) {
                    cost[w[0]] = w[1]
                    decreaseKey(queue, w[0], w[1])
                    tree[v].push(w[0])
                }
            })
        }
        return tree
    },
    kruskals() {
        const vertices = Object.keys(this.matrix)
        console.log(this.matrix)
        // need to sort the array
        console.log(sortedEdges)
    },
    floydwarshall() {
        const graph = Object.assign({}, this.matrix)
        const vertices = Object.keys(this.matrix)
        const matrix = []
        for (let i = 0; i <= vertices.length; i++) {
            const array = []
            for (let j = 0; j <= vertices.length; j++) {
                if (i == j) {
                    array.push(0)
                } else if (graph[i] && getProperVertex(graph[i], j)) {
                    array.push(getProperVertex(graph[i], j))
                } else {
                    array.push(10)
                }
            }
            matrix.push(array)
        }
        for (let i = 1; i < vertices.length; i++) { // the go around
            for (let j = 1; j < vertices.length; j++) { // start index
                for (let k = 1; k < vertices.length; k++) { // end index
                    if (getProperVertex(graph[j], k) > getProperVertex(graph[j], i) + getProperVertex(graph[i], k)) {
                        matrix[j][k] = getProperVertex(graph[j], i) + getProperVertex(graph[i], k)
                    }
                }
            }
        }
        return matrix
    }

}
const getProperVertex = function(array, vertex) {
    const arr =  array.filter(a => a[0] === vertex)[0]
    const arg = arr ? arr[1] : 0
    return arg
}

const weightedGraph = Object.assign(Object.create(WeightedGraph))

weightedGraph.add(1, 2, 1)
weightedGraph.add(2, 3, 1)
weightedGraph.add(3, 4, 1)
weightedGraph.add(4, 1, 3)
weightedGraph.add(4, 5, 3)
weightedGraph.add(3, 5, 4)
weightedGraph.add(3, 2, 3)

//console.log(weightedGraph.matrix)
//console.log(weightedGraph.floydwarshall())
