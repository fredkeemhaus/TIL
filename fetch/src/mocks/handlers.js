import { rest } from "msw";

const todos = [
  { id: 1, title: "fred1" },
  { id: 2, title: "fred2" },
  { id: 3, title: "fred3" },
  { id: 4, title: "fred4" },
  { id: 5, title: "fred5" },
];

export const handlers = [
  rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
    const { todo } = req.body;

    console.log(todo);
    todos.push(todo);
    return res(ctx.json(true));
  }),

  rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
    return res(
      ctx.json({
        todos,
      })
    );
  }),

  rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.url.searchParams.get("id");

    return res(
      ctx.json({
        name: id === "1" ? "The one" : "The others",
      })
    );
    // return res(ctx.status(400));
  }),
  rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body;

    return res(
      ctx.json({
        value: value + 2,
      })
    );
  }),

  rest.get("http://localhost:3000/todo", async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: "Todo From server",
        },
      })
    );
  }),
];
