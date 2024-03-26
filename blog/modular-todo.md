# Modular Todo

Mar 22, 2024

I've been wanting to do an example project like this for a while. What I'd like
to do here is demonstrate a modular project. By that I mean a project with good
separation of concerns -- one where you actually can swap out the database or swap
out the front-end framework seamlessly, without code changes.

I'm keeping this as a simple todo project in order to keep the domain complexity
down. After all, we want to focus on modularity here, so we will be making a
small, straightforward domain.

Speaking of the domain, let's kick that out now.

## The Todo Class

We'll write this in TypeScript because I think the strong typing will better
illustrate the domain concept.

First, we'll need a `Todo` class.

```typescript
// Todo.ts

export class Todo {
    private _id: string;
    private _title: string;
    private _isComplete: boolean;

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get isComplete() {
        return this._isComplete;
    }

    constructor(title: string) {
        this._id = crypto.randomUUID();
        this._title = title;
        this._isComplete = false;
    }

    complete = () => {
        this._isComplete = true;
    };
}
```

Done. A simple `Todo` class that holds a `title` and an `isComplete` boolean.

Our directory structure now looks like this:

```sh
.
└── todo
    ├── README.md
    ├── Todo.test.ts
    ├── Todo.ts
    ├── bun.lockb
    ├── index.ts
    ├── package.json
    └── tsconfig.json
```

## Let's Create a Todo

Now that we have our `Todo` class, we probably want to do something with it.
Creating a todo seems like a good place to start, so let's add a use case for
creating todos.

```typescript
// CreateTodoUseCase.ts

import { Todo } from './Todo';

export type CreateTodoInput = {
    title: string;
};

export type CreateTodoOutput = {
    id: string;
    title: string;
};

export class CreateTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}

    execute = async (input: CreateTodoInput): Promise<CreateTodoOutput> => {
        const todo = new Todo(input.title);
        await this.todoRepository.save(todo);
        return {
            id: todo.id,
            title: todo.title,
        };
    };
}
```
