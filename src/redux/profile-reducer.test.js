import React from "react";
import {addPost, profileReducer} from "./profile-reducer";


let State = {
  posts: [
    { id: 1, post: "Привет, отличный сайт" },
    { id: 2, post: "Круто, добавь меня в друзья!" },
  ],
  newTextPost: "",
  profile: null,
  status: "",
};

test("test add post", () => {
  let action = addPost('саламалейкум');
  let newState = profileReducer(State, action);
  expect(newState.posts.length).toBe(3);
  expect(newState.posts[2].post).toBe('саламалейкум');
} )