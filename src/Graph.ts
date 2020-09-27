import { AdjNode } from "./AdjNode";

/**
 * Class representing a generic, undirected graph
 */
export class Graph<D> {
  private graph = new Map<D, AdjNode<D>>();

  public addEdge(src: D, dest: D) {
    let node = new AdjNode<D>(dest);
    node.next = this.graph.get(src) || new AdjNode<D>(src);
    this.graph.set(src, node);

    // Add a relation from dest back to src since the graph is undirected
    node = new AdjNode<D>(src);
    node.next = this.graph.get(dest) || new AdjNode<D>(dest);
    this.graph.set(dest, node);
  }

  printGraph() {
    const keys = [...this.graph.keys()];

    keys.map((key) => {
      const adjList = [];
      let node = this.graph.get(key);
      while (node) {
        adjList.push(node.vertex);
        node = node.next;
      }
      console.log(adjList.reverse());
    });
  }
}
