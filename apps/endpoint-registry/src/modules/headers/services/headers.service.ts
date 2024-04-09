import { Injectable } from "@nestjs/common";
import { HeadersRepository } from "../repository/headers.repository";
import { CreateParams, FindParams } from "./headers.service.interfaces";

@Injectable()
export class HeadersService {
  constructor(private readonly headersRepository: HeadersRepository) { }

  delete(id: number) {
    return this.headersRepository.deleteById(id);
  }

  create(params: CreateParams) {
    return this.headersRepository.insertOne(params);
  }

  findById(id: number) {
    return this.headersRepository.findById(id);
  }

  find(params: FindParams) {
    return this.headersRepository.find(params);
  }
}
