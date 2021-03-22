import { AxiosResponse } from 'axios';
import { format, parseISO } from 'date-fns';
import FormData from 'form-data';
import json2xml from 'json2xml';
import { inject, injectable } from 'tsyringe';

import { IHttpProvider } from '~shared/container/providers/HttpProvider/models/IHttpProvider';

import { blingConfig } from '~config/bling';
import { IDealData } from '~modules/pipedrive/dtos/IGetDealsResponseDTO';

import { IOrdersRepository } from '../repositories/IOrdersRepository';

@injectable()
class CreateOrderService {
  constructor(
    @inject('HttpProvider')
    private readonly httpProvider: IHttpProvider,
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
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
      const date = format(parseISO(deal.won_time), 'dd-MM-yyyy');

      const pedido = {
        data: date,
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

      await this.ordersRepository.create({
        date,
        value: deal.value,
      });

      promises.push(
        this.httpProvider.post('/pedido/json/', formData, {
          headers: formData.getHeaders(),
        }),
      );
    });

    await Promise.all(promises);
  }
}

export { CreateOrderService };
