/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import FormData from 'form-data';
import json2xml from 'json2xml';
import { inject, injectable } from 'tsyringe';

import { IHttpProvider } from '~shared/container/providers/HttpProvider/models/IHttpProvider';

import { blingConfig } from '~config/bling';
import { IDealData } from '~modules/pipedrive/dtos/IGetDealsResponseDTO';

@injectable()
export class CreateOrderService {
  constructor(
    @inject('HttpProvider')
    private readonly httpProvider: IHttpProvider,
  ) {
    httpProvider.setup({
      baseURL: blingConfig.baseURL,
      params: {
        apikey: blingConfig.apikey,
      },
    });
  }

  public async execute(deals: IDealData[]): Promise<void> {
    const promises: Promise<AxiosResponse>[] = [];

    deals.forEach(async deal => {
      const formData = new FormData();

      const pedido = {
        cliente: {
          nome: deal.person_id.name,
        },
        itens: {
          item: {
            codigo: deal.id,
            descricao: deal.title,
            qtde: '1',
            vlr_unit: deal.value,
          },
        },
      };

      const xml = json2xml({ pedido });

      formData.append('xml', xml);

      promises.push(
        this.httpProvider.post('/pedido/json/', formData, {
          headers: formData.getHeaders(),
        }),
      );
    });

    Promise.all(promises).then(response => {
      console.log(response);
    });
  }
}
