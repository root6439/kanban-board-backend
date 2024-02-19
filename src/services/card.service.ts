import { AppDataSource } from "../typeorm/DataSource";
import { Card } from "../typeorm/entities/card.entity";

export class CardService {
  private cardRepo = AppDataSource.getRepository(Card);

  async get(): Promise<Card[]> {
    const data = await this.cardRepo.find();
    return data;
  }

  async getById(id: string): Promise<Card> {
    const card = await this.cardRepo.findOne({ where: { id } });

    if (!card) {
      throw new Error("Card não encontrado");
    }

    return card;
  }

  async post(data: Card): Promise<Card> {
    const newData = await this.cardRepo.save(data);
    return newData;
  }

  async put(id: string, data: Card): Promise<Card> {
    const card = await this.cardRepo.findOne({ where: { id } });

    if (!card) {
      throw new Error("Card não encontrado");
    }

    const newCard = await this.cardRepo.update({ id }, data);

    return data;
  }

  async delete(id: string): Promise<boolean> {
    const card = await this.getById(id);

    await this.cardRepo.delete(card.id);

    return true;
  }
}
