import { Injectable } from "@nestjs/common";
import { RunParams } from "./dispatcher.service.interfaces";
import { HttpService } from "@nestjs/axios";
import { HeaderPresenter, PayloadTemplatePresenter } from "@app/validation";
import { HTTP_METHOD, PayloadTemplateTarget } from "@app/types";
import { firstValueFrom } from "rxjs";

@Injectable()
export class DispatcherService {
  constructor(
    private readonly httpService: HttpService,
  ) { }

  private convertHeaders = (headerPresenters: HeaderPresenter[]) => {
    const headers: Record<string, string> = {};

    headerPresenters.forEach((header) => {
      headers[header?.key] = header?.value;
    })

    return headers;
  }

  private createPayload = (payloadTemplatePresenter: PayloadTemplatePresenter, target: string) => {
    const { template, valueTarget } = payloadTemplatePresenter || {};

    const parsedTemplate = JSON.parse(template);

    const templateKeys = Object.keys(parsedTemplate);

    const isIncludeValueTargetKey = templateKeys.includes(valueTarget);

    if (!isIncludeValueTargetKey) throw Error(`Value target key ${valueTarget} is not found in the template, templateId: ${payloadTemplatePresenter?.id}`);

    const nextTemplate: Record<string, string> = {
      ...parsedTemplate,
      [valueTarget]: target,
    }

    return nextTemplate;
  }

  private sendRequest = (url: string, method: HTTP_METHOD, headers: Record<string, string>, payload: Record<string, string>, payloadTarget: PayloadTemplateTarget) => {
    if (payloadTarget === PayloadTemplateTarget.BODY) {
      return this.httpService.request({
        method,
        url,
        headers,
        data: payload,
      })
    }

    return this.httpService.request({
      method,
      url,
      headers,
      params: payload,
    })
  }

  run(params: RunParams) {
    const { endpoint, payloadTemplate, headers, target } = params;

    const { target: templateTarget } = payloadTemplate;

    const { method, url } = endpoint;

    const normalizedHeaders = this.convertHeaders(headers);

    const normalizedPayload = this.createPayload(payloadTemplate, target);

    const observer = this.sendRequest(url, method, normalizedHeaders, normalizedPayload, templateTarget)

    return firstValueFrom(observer);
  }
}
