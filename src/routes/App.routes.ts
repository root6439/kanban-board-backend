import { BaseRouter } from "../shared/interfaces/BaseRouter";
import { CardRouter } from "./Card.routes";

export class AppRouter extends BaseRouter {
  private cardRouter = new CardRouter();

  constructor() {
    super();
    this.setRouter();
  }

  setRouter() {
    this.router.use("/card", this.cardRouter.getRouter());
  }
}
