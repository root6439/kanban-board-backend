import { Request, Response } from "express";
import { CardService } from "../services/card.service";

export class CardController {
  service = new CardService();

  async gelAll(req: Request, res: Response) {
    const data = await this.service.get();
    return res.json(data);
  }

  async post(req: Request, res: Response) {
    const body = req.body;
    const data = await this.service.post(body);
    return res.status(201).json(data);
  }

  async put(req: Request, res: Response) {
    const id = req.params.id;
    const body = req.body;

    const data = await this.service.put(id, body);

    return res.json(data);
  }

  async delete(req: Request, res: Response) {
    const id = req.params.id;
    const result = await this.service.delete(id);
    return res.json(result);
  }
}
