/* eslint-disable @typescript-eslint/no-explicit-any */
import FormData from 'form-data';
import json2xml from 'json2xml';
import { inject, injectable } from 'tsyringe';

import { IHttpProvider } from '~shared/container/providers/HttpProvider/models/IHttpProvider';

import { blingConfig } from '~config/bling';

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

  public async execute(): Promise<void> {
    const formData = new FormData();

    const pedido = {
      cliente: {
        nome: 'Deusimar',
      },
      itens: {
        item: {
          codigo: '007',
          descricao: '[Sample] Brighton Circle',
          qtde: '1',
          vlr_unit: '300',
        },
      },
    };

    const xml = json2xml({ pedido });

    formData.append('xml', xml);

    try {
      const response = await this.httpProvider.post('/pedido/json/', formData, {
        headers: formData.getHeaders(),
      });

      console.log(response.data.retorno.pedidos);
    } catch (error) {
      console.log(error.response.data.retorno.erros.erro);
    }
  }
}
