import { Injectable } from "@nestjs/common";
import { ApiEndpointsRepository } from "../repositories/api-endpoints.repository";
import { CreateParams, FindParams } from "./api-endpoints.service.interfaces";

@Injectable()
export class ApiEndpointsService {
  constructor(private readonly apiEndpointsRepository: ApiEndpointsRepository) { }

  delete(id: number) {
    return this.apiEndpointsRepository.deleteById(id);
  }

  create(params: CreateParams) {
    return this.apiEndpointsRepository.insertOne(params);
  }

  findById(id: number) {
    return this.apiEndpointsRepository.findById(id);
  }

  find(params: FindParams) {
    return this.apiEndpointsRepository.find(params);
  }
}
