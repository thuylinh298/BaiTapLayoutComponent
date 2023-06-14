import { Component } from "react";
export class Item extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="card">
          <figure class="figure">
            <svg className="bd-placeholder-img figure-img img-fluid rounded" width="400" height="300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 400x300" preserveAspectRatio="xMidYMid slice" focusable="false"> </svg>
            <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
          </figure>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quae illum amet delectus omnis consequatur optio voluptates pariatur.
            </p>
          </div>
          <div className="card-footer">
            <a href className="btn btn-primary">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
