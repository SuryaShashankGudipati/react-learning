import React, { useState, useEffect } from "react";
import axios from "axios";

export default function () {
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((json) => {
  //         return console.log(json);
  //       });
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos")
  //       .get("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((result) => {
  //         console.log(result.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }, []);

  //   useEffect(async () => {
  //     try {
  //       const result = await axios.get(
  //         "https://jsonplaceholder.typicode.com/todos"
  //       );
  //       console.log(result);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => {
  //         console.log("1", response);
  //         axios
  //           .get("https://jsonplaceholder.typicode.com/todos/2")
  //           .then((response) => {
  //             console.log("2", response);
  //           });
  //       });
  //   }, []);

  //   useEffect(async () => {
  //     try {
  //       let todo1 = await axios.get(
  //         "https://jsonplaceholder.typicode.com/todos/1"
  //       );
  //       let todo2 = await axios.get(
  //         `https://jsonplaceholder.typicode.com/todos/2`
  //       );
  //       console.log("todo1", todo1);
  //       console.log("todo1", todo2);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  //   useEffect(async () => {
  //     try {
  //       let todo1 = await axios.get(
  //         "https://jsonplaceholder.typicode.com/todos/1"
  //       );
  //       let todo2 = await axios.get(
  //         `https://jsonplaceholder.typicode.com/todos/2`
  //       );
  //       console.log("todo1", todo1);
  //       console.log("todo1", todo2);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     const promise1 = axios
  //       .get("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((r) => r.data);
  //     const promise2 = axios
  //       .get("https://jsonplaceholder.typicode.com/todos")
  //       .then((r) => r.data);
  //     const promise3 = axios
  //       .get("https://jsonplaceholder.typicode.com/todos/10")
  //       .then((r) => r.data);

  //     Promise.all([promise1, promise2, promise3]).then((values) => {
  //       console.log("abc");
  //       console.log(values);
  //     });
  //   }, []);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     title: "foo",
    //     body: "bar",
    //     userId: 1,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "dinesh",
          body: "dinesh body",
          userId: 99,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((response) => {
        console.log(response);
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${response.data.id}`)
          .then((r) => {
            return r.data;
          });
      });
  }, []);

  return <div>Api</div>;
}
