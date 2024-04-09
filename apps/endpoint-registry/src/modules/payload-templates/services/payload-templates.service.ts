import { Injectable } from "@nestjs/common";
import { PayloadTemplatesRepository } from "../repositories/payload-templates.repository";
import { CreateParams, FindParams } from "./payload-templates.service.interfaces";

@Injectable()
export class PayloadTemplatesService {
  constructor(private readonly payloadTemplatesRepository: PayloadTemplatesRepository) { }

  delete(id: number) {
    return this.payloadTemplatesRepository.deleteById(id);
  }

  create(params: CreateParams) {
    return this.payloadTemplatesRepository.insertOne(params);
  }

  findById(id: number) {
    return this.payloadTemplatesRepository.findById(id);
  }

  find(params: FindParams) {
    return this.payloadTemplatesRepository.find(params);
  }
}
