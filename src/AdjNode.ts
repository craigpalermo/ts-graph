export class AdjNode<D> {
  vertex: D;
  next?: AdjNode<D>;

  constructor(vertex: D) {
    this.vertex = vertex;
    this.next = null;
  }
}
