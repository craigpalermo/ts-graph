import { Graph } from "./Graph";

const myGraph = new Graph<number>();

myGraph.addEdge(0, 1);
myGraph.addEdge(0, 4);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(1, 4);
myGraph.addEdge(2, 3);
myGraph.addEdge(3, 4);

console.log(myGraph);
myGraph.printGraph();
