import React from "react";
import "./App.css";
import { MyForm } from "./MyForm";
import { MyBuggyForm } from "./MyBuggyForm";
import { MyAnotherForm } from "./MyAnotherForm";
import { MyRadio } from "./MyRadio";
import { MyAnotherRadio } from "./MyAnotherRadio";
import { MyBuggyRadio } from "./MyBuggyRadio";

function App() {
  return (
    <div className="App">
      <hr />
      normal code below
      <hr />
      <div>
        <MyForm name="test">
          {new Array(10)
            .fill(1)
            .map((_, idx) => idx)
            .map((v) => (
              <MyRadio value={`${v}`} name="test" id={`test${v}`} key={v}>
                {v}
              </MyRadio>
            ))}
        </MyForm>
      </div>
      <hr />
      <div>
        <MyForm name="test1">
          {new Array(10)
            .fill(1)
            .map((_, idx) => idx)
            .map((v) => (
              <MyAnotherRadio
                value={`${v}`}
                name="test"
                id={`test1${v}`}
                key={v}
              >
                {v}
              </MyAnotherRadio>
            ))}
        </MyForm>
      </div>
      <hr />
      <MyAnotherForm name="test3" />
      <hr />
      <strong>Bug reproduce</strong>: using div as form without name and radio without onchange and defaultChecked
      <hr />
      <MyBuggyForm>
        {new Array(10)
          .fill(1)
          .map((_, idx) => idx)
          .map((v) => (
            // @ts-ignore
            <MyBuggyRadio value={`${v}`} name="test4" key={v}>
              {v}
            </MyBuggyRadio>
          ))}
      </MyBuggyForm>
      <hr />
      <MyBuggyForm>
        {new Array(10)
          .fill(1)
          .map((_, idx) => idx)
          .map((v) => (
            // @ts-ignore
            <MyBuggyRadio value={`${v}`} name="test4" key={v}>
              {v}
            </MyBuggyRadio>
          ))}
      </MyBuggyForm>
      <hr />
      buggy code below: using div as form with name
      <hr />
      <MyBuggyForm name="test5">
        {new Array(10)
          .fill(1)
          .map((_, idx) => idx)
          .map((v) => (
            // @ts-ignore
            <MyRadio value={`${v}`} name="test5" key={v}>
              {v}
            </MyRadio>
          ))}
      </MyBuggyForm>
      <hr />
      <MyBuggyForm name="test5">
        {new Array(10)
          .fill(1)
          .map((_, idx) => idx)
          .map((v) => (
            // @ts-ignore
            <MyRadio value={`${v}`} name="test5" key={v}>
              {v}
            </MyRadio>
          ))}
      </MyBuggyForm>
      <hr />
      buggy code below: duplicate form
      <hr />
      <div>
        <MyForm name="test6">
          {new Array(10)
            .fill(1)
            .map((_, idx) => idx)
            .map((v) => (
              <MyRadio value={`${v}`} name="test6" id={`test6${v}`} key={v}>
                {v}
              </MyRadio>
            ))}
        </MyForm>
      </div>
      <div>
        <MyForm name="test6">
          {new Array(10)
            .fill(1)
            .map((_, idx) => idx)
            .map((v) => (
              <MyRadio value={`${v}`} name="test6" id={`test6${v}`} key={v}>
                {v}
              </MyRadio>
            ))}
        </MyForm>
      </div>
    </div>
  );
}

export default App;
