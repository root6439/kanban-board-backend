import { CardController } from "../controllers/card.controller";
import { BaseRouter } from "../shared/interfaces/BaseRouter";

export class CardRouter extends BaseRouter {
  private cardController = new CardController();

  constructor() {
    super();
    this.setRouter();
  }

  setRouter() {
    this.router.get("/", this.cardController.gelAll.bind(this.cardController));
    this.router.post("/", this.cardController.post.bind(this.cardController));
    this.router.put("/:id", this.cardController.put.bind(this.cardController));
    this.router.delete(
      "/:id",
      this.cardController.delete.bind(this.cardController)
    );
  }
}
