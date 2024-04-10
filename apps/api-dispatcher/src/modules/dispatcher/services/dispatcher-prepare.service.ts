import { ApiEndpointsListQuery, HeaderQueryCommand, PayloadTemplateQueryCommand } from "@app/contracts";
import { ApiEndpointPresenter } from "@app/validation";
import { Injectable } from "@nestjs/common";
import { RMQService } from "nestjs-rmq";
import { RunParams } from "./dispatcher.service.interfaces";


@Injectable()
export class DispatcherPrepareService {
  constructor(
    private readonly rmqService: RMQService,
  ) { }

  async prepareParams(target: string) {
    const endpoints = await this.prepareEndpoints();

    const runParamsPromises = endpoints.map((endpoint) => this.prepareEndpointParams(endpoint, target));

    const runParams = await Promise.all(runParamsPromises);

    return runParams;
  }

  private prepareEndpoints = async () => {
    const offset = 0;
    const limit = 10000;

    const endpoints = await this.rmqService.send<ApiEndpointsListQuery.Request, ApiEndpointsListQuery.Response>(ApiEndpointsListQuery.topic, {
      offset,
      limit,
    })

    return endpoints;
  }

  private prepareEndpointParams = async (apiEndpoint: ApiEndpointPresenter, target: string) => {
    const { id } = apiEndpoint;

    const headers = await this.prepareHeaders(id);

    const payload = await this.preparePayload(id);

    const runParams: RunParams = {
      endpoint: apiEndpoint,
      target,
      headers,
      payloadTemplate: payload,
    }

    return runParams;
  }

  private async prepareHeaders(endpointId: number) {
    const offset = 0;
    const limit = 100;

    const headers = await this.rmqService.send<HeaderQueryCommand.Request, HeaderQueryCommand.Response>(HeaderQueryCommand.topic, {
      offset,
      limit,
      endpointId,
    })

    return headers;
  }

  private async preparePayload(endpointId: number) {
    const offset = 0;
    const limit = 1;

    const payload = await this.rmqService.send<PayloadTemplateQueryCommand.Request, PayloadTemplateQueryCommand.Response>(PayloadTemplateQueryCommand.topic, {
      offset,
      limit,
      endpointId,
    })

    const [template] = payload

    return template;
  }
}
