import React, { Component } from 'react';


class TodoList extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Enter here',
        completed: false
      },
        {
          id: 2,
          title: 'Enter here',
          completed: false
        },
          {
            id: 3,
            title: 'Enter here',
            completed: false
          },
    ]
  }
}
