import { Component } from "react";
export class Banner extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg-light text-start px-4 py-5 ">
          <h1>A Warm Welcome !</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quae illum amet delectus omnis consequatur optio voluptates pariatur. Illum maiores suscipit illo reiciendis nobis unde blanditiis doloremque amet alias itaque.
          </p>
          <button className="btn btn-primary">Call to action!</button>
        </div>
      </div>
    );
  }
}
