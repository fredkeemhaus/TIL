import { rest } from "msw";

export const handlers = [
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
